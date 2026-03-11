import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Analytics from "@vercel/analytics";
import "./globals.css";

Analytics.inject();

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://inova-laundry.id"),
  title: "INOVA - Mitra Bisnis Laundry Terpercaya | Paket Usaha Laundry Yogyakarta",
  description: "Solusi bisnis laundry terpercaya di Yogyakarta. Paket usaha laundry lengkap dengan peralatan profesional, training, dan dukungan bisnis untuk kesuksesan usaha Anda.",
  keywords: ["laundry", "bisnis laundry", "paket usaha laundry", "mesin laundry", "laundry yogyakarta", "usaha laundry yogyakarta", "paket laundry lengkap", "mesin cuci profesional", "laundry shop", "laundry express", "investasi laundry", "uang laundry", "bisnis laundry jogja"],
  generator: "INOVA",
  applicationName: "INOVA",
  creator: "INOVA",
  publisher: "INOVA",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/LOGO_INOVA.png",
    apple: "/LOGO_INOVA.png",
  },
  openGraph: {
    title: "INOVA - Mitra Bisnis Laundry Terpercaya Yogyakarta",
    description: "Solusi bisnis laundry terpercaya dengan paket usaha lengkap di Yogyakarta. Mesin profesional dan dukungan bisnis.",
    url: "https://inova-laundry.id",
    siteName: "INOVA",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "INOVA - Mitra Bisnis Laundry Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INOVA - Mitra Bisnis Laundry Terpercaya Yogyakarta",
    description: "Solusi bisnis laundry terpercaya dengan paket usaha lengkap di Yogyakarta.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://inova-laundry.id",
    languages: {
      "id-ID": "https://inova-laundry.id",
      "en-US": "https://inova-laundry.id?lang=en",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#3b82f6" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
