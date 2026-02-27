import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting storage (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Security configuration
const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT_WINDOW: 60 * 1000, // 1 minute
  RATE_LIMIT_MAX: 100, // requests per window

  // Blocked paths (common attack vectors)
  BLOCKED_PATHS: [/\/(admin|wp-admin|wp-login|phpmyadmin|administrator)\/?/i, /\/\.(env|git|svn|htaccess|htpasswd)/i, /\/(config|configuration|settings)\.php/i, /\/(api|rest|graphql)\/v[0-9]*\/(internal|debug|test)/i],

  // Suspicious user agents
  BLOCKED_UA: [
    /sqlmap/i,
    /nikto/i,
    /nmap/i,
    /masscan/i,
    /zgrab/i,
    /gobuster/i,
    /dirbuster/i,
    /wfuzz/i,
    /burp/i,
    /metasploit/i,
    /nessus/i,
    /openvas/i,
    /acunetix/i,
    /netsparker/i,
    /appscan/i,
    /w3af/i,
    /arachni/i,
    /skipfish/i,
    /wfetch/i,
    /pycurl/i,
    /python-requests/i,
    /java\/[0-9]/i,
    /libwww-perl/i,
    /wget/i,
    /curl/i,
  ],
};

// Security headers
const securityHeaders = {
  // Prevent clickjacking
  "X-Frame-Options": "DENY",

  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",

  // XSS Protection
  "X-XSS-Protection": "1; mode=block",

  // Referrer policy
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Permissions policy
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",

  // Strict Transport Security (HSTS)
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

  // Content Security Policy
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),

  // Remove server information
  "X-Powered-By": undefined,
  Server: undefined,
};

// Check if path is blocked
function isBlockedPath(path: string): boolean {
  return SECURITY_CONFIG.BLOCKED_PATHS.some((pattern) => pattern.test(path));
}

// Check if user agent is suspicious
function isBlockedUA(ua: string | null): boolean {
  if (!ua) return false;
  return SECURITY_CONFIG.BLOCKED_UA.some((pattern) => pattern.test(ua));
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + SECURITY_CONFIG.RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= SECURITY_CONFIG.RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Clean old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 1000); // Clean every minute

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Get IP from headers (works with proxies and CDNs)
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? request.headers.get("x-real-ip") ?? request.headers.get("cf-connecting-ip") ?? "unknown";
  const userAgent = request.headers.get("user-agent");

  // 1. Block suspicious paths
  if (isBlockedPath(pathname)) {
    return new NextResponse("Access Denied", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  // 2. Block suspicious user agents
  if (isBlockedUA(userAgent)) {
    return new NextResponse("Access Denied", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  // 3. Rate limiting
  if (!checkRateLimit(ip)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Content-Type": "text/plain",
        "Retry-After": "60",
      },
    });
  }

  // 4. Force HTTPS in production
  if (process.env.NODE_ENV === "production" && !request.headers.get("x-forwarded-proto")?.includes("https")) {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 301);
  }

  // 5. Add security headers to all responses
  const response = NextResponse.next();

  Object.entries(securityHeaders).forEach(([key, value]) => {
    if (value !== undefined) {
      response.headers.set(key, value);
    } else {
      response.headers.delete(key);
    }
  });

  // 6. Add custom security headers
  response.headers.set("X-Request-ID", crypto.randomUUID());
  response.headers.set("X-Content-Security-Policy", "default-src 'self'");

  return response;
}

// Configure middleware to run on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
