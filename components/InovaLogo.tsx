// Reusable INOVA brand logo SVG component
// Faithfully recreates the original: 4 swirling person-figures in blue & orange pinwheel

interface InovaLogoProps {
  size?: number;
  className?: string;
  /** "color" = original blue+orange | "blue" = navy only | "white" = all white */
  variant?: "color" | "blue" | "white";
  spin?: boolean;
}

export function InovaLogo({ size = 40, className = "", variant = "color", spin = false }: InovaLogoProps) {
  const blue = variant === "white" ? "#ffffff" : variant === "blue" ? "#1e3a8a" : "#2b7de9";
  const orange = variant === "white" ? "#ffffff" : variant === "blue" ? "#3b82f6" : "#f47c20";

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${spin ? "animate-spin-slow" : ""} ${className}`.trim()}>
      {/*
        ┌─────────────────────────────────────────────────────────────────┐
        │  INOVA swirl logo — faithful SVG recreation                     │
        │  Original: 4 person-figure "blades" in a clockwise pinwheel.   │
        │  Blue blade pair  (top-left → bottom-right arc)                 │
        │  Orange blade pair (top-right → bottom-left arc)               │
        └─────────────────────────────────────────────────────────────────┘
      */}

      {/* ── BLUE blade 1 — upper-left quadrant (person sweeping right & down) ── */}
      {/* head */}
      <circle cx="58" cy="32" r="14" fill={blue} />
      {/* body / swoosh arm */}
      <path d="M44 44 C20 62 16 88 30 106 C42 122 68 126 88 116 C106 107 112 88 105 70 C98 53 80 46 62 45 Z" fill={blue} />

      {/* ── ORANGE blade 1 — upper-right quadrant (person sweeping down & left) ── */}
      {/* head */}
      <circle cx="168" cy="58" r="14" fill={orange} />
      {/* body / swoosh arm */}
      <path d="M156 44 C138 20 112 16 94 30 C78 42 74 68 84 88 C93 106 112 112 130 105 C147 98 154 80 155 62 Z" fill={orange} />

      {/* ── BLUE blade 2 — lower-right quadrant (person sweeping left & up) ── */}
      {/* head */}
      <circle cx="142" cy="168" r="14" fill={blue} />
      {/* body / swoosh arm */}
      <path d="M156 156 C180 138 184 112 170 94 C158 78 132 74 112 84 C94 93 88 112 95 130 C102 147 120 154 138 155 Z" fill={blue} />

      {/* ── ORANGE blade 2 — lower-left quadrant (person sweeping up & right) ── */}
      {/* head */}
      <circle cx="32" cy="142" r="14" fill={orange} />
      {/* body / swoosh arm */}
      <path d="M44 156 C62 180 88 184 106 170 C122 158 126 132 116 112 C107 94 88 88 70 95 C53 102 46 120 45 138 Z" fill={orange} />

      {/* ── Inner concave curves — give the logo its "swirl gap" look ── */}
      <path d="M100 62 C118 62 135 72 140 88" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
      <path d="M138 100 C138 118 128 135 112 140" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
      <path d="M100 138 C82 138 65 128 60 112" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
      <path d="M62 100 C62 82 72 65 88 60" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}
