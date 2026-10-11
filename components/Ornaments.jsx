// Decorative SVG motifs: marigold garland, diya, pillar lamp, banana leaf, divider.

export function Marigold({ cx, cy, r = 11, fill = "#e8920c" }) {
  const petals = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <g>
      {petals.map((a) => (
        <ellipse key={a} cx={cx} cy={cy - r * 0.6} rx={r * 0.38} ry={r * 0.65} fill={fill}
          transform={`rotate(${a} ${cx} ${cy})`} opacity=".95" />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.35} fill="#c25e00" />
    </g>
  );
}

export function Garland({ className = "", flip = false }) {
  const count = 22;
  const flowers = Array.from({ length: count }, (_, i) => {
    const x = 30 + i * 60;
    const y = 34 + Math.sin(i * 0.9) * 8;
    return { x, y, fill: i % 3 === 1 ? "#f0b429" : "#e8920c" };
  });
  return (
    <svg viewBox="0 0 1360 110" preserveAspectRatio="xMidYMin slice"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <path d="M0 34 Q 340 70 680 34 T 1360 34" stroke="#4b6b3a" strokeWidth="3" fill="none" />
      {flowers.map((f, i) => (
        <g key={i}>
          <line x1={f.x} y1={f.y} x2={f.x} y2={f.y + 26 + (i % 2) * 12} stroke="#4b6b3a" strokeWidth="2" />
          <Marigold cx={f.x} cy={f.y + 38 + (i % 2) * 12} r={12} fill={f.fill} />
          <Marigold cx={f.x} cy={f.y} r={13} fill={f.fill} />
        </g>
      ))}
    </svg>
  );
}

export function Diya({ className = "" }) {
  return (
    <svg viewBox="0 0 80 70" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffd45a" stopOpacity=".8" />
          <stop offset="1" stopColor="#ffd45a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="22" r="22" fill="url(#glow)" />
      <path d="M40 4 C 33 14 33 22 40 28 C 47 22 47 14 40 4Z" fill="#f08a1c" className="animate-pulse" />
      <path d="M40 12 C 37 17 37 22 40 25 C 43 22 43 17 40 12Z" fill="#ffe08a" />
      <path d="M10 38 Q 40 70 70 38 Q 40 44 10 38Z" fill="#b8862b" stroke="#7a5a14" strokeWidth="1.5" />
      <ellipse cx="40" cy="38" rx="30" ry="4" fill="#d9a63f" />
    </svg>
  );
}

export function BrassLamp({ className = "" }) {
  // Tall traditional standing lamp (Kuthuvilakku)
  return (
    <svg viewBox="0 0 120 380" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brass" x1="0" x2="1">
          <stop offset="0" stopColor="#8a6212" />
          <stop offset=".5" stopColor="#e6bb55" />
          <stop offset="1" stopColor="#8a6212" />
        </linearGradient>
        <radialGradient id="flameGlow"><stop offset="0" stopColor="#ffd45a" stopOpacity=".9" /><stop offset="1" stopColor="#ffd45a" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="60" cy="38" r="38" fill="url(#flameGlow)" />
      <path d="M60 8 C 51 22 51 32 60 40 C 69 32 69 22 60 8Z" fill="#f08a1c" className="animate-pulse" />
      <path d="M60 18 C 56 25 56 31 60 36 C 64 31 64 25 60 18Z" fill="#ffe08a" />
      <path d="M22 50 Q 60 90 98 50 Q 60 58 22 50Z" fill="url(#brass)" />
      <rect x="55" y="68" width="10" height="40" fill="url(#brass)" />
      <ellipse cx="60" cy="112" rx="22" ry="8" fill="url(#brass)" />
      <rect x="52" y="118" width="16" height="80" rx="4" fill="url(#brass)" />
      <ellipse cx="60" cy="160" rx="14" ry="6" fill="url(#brass)" />
      <path d="M40 200 Q 60 190 80 200 L 92 280 Q 60 296 28 280Z" fill="url(#brass)" />
      <path d="M30 290 Q 60 276 90 290 L 104 340 Q 60 360 16 340Z" fill="url(#brass)" />
      <rect x="10" y="342" width="100" height="14" rx="7" fill="url(#brass)" />
    </svg>
  );
}

export function BananaLeaf({ className = "" }) {
  return (
    <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
      <path d="M100 0 C 190 90 190 300 100 400 C 10 300 10 90 100 0Z" fill="#6f9a4f" opacity=".9" />
      <path d="M100 0 L100 400" stroke="#3d6030" strokeWidth="3" />
      {Array.from({ length: 16 }, (_, i) => (
        <g key={i} stroke="#4b7a38" strokeWidth="1.5" opacity=".7">
          <line x1="100" y1={30 + i * 22} x2="175" y2={50 + i * 22 - 18} />
          <line x1="100" y1={30 + i * 22} x2="25" y2={50 + i * 22 - 18} />
        </g>
      ))}
    </svg>
  );
}

export function Divider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-28" />
      <svg viewBox="0 0 40 40" className="spin-slow h-7 w-7"><Marigold cx={20} cy={20} r={14} fill="#e8920c" /></svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-28" />
    </div>
  );
}
