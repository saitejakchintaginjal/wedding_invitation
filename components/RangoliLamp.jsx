// Animated rangoli (kolam) mandala with a glowing brass diya at its heart.
const COLORS = ["#fbbf24", "#38a3d8", "#2e8b57", "#f472b6", "#f59e0b", "#1e5fa8"];

export default function RangoliLamp({ className = "" }) {
  const outer = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45);
  const dots = Array.from({ length: 24 }, (_, i) => i * 15);
  const spin = (s, rev) => ({ transformBox: "fill-box", transformOrigin: "center", animation: `spin ${s}s linear infinite ${rev ? "reverse" : ""}` });
  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-label="Rangoli with a lit brass lamp">
      <defs>
        <radialGradient id="rl-glow"><stop offset="0" stopColor="#ffd45a" stopOpacity=".95" /><stop offset="1" stopColor="#ffd45a" stopOpacity="0" /></radialGradient>
        <linearGradient id="rl-brass" x1="0" x2="1"><stop offset="0" stopColor="#8a6212" /><stop offset=".5" stopColor="#f0cb62" /><stop offset="1" stopColor="#8a6212" /></linearGradient>
      </defs>

      <circle cx="150" cy="150" r="142" fill="#fffbe0" stroke="#f2b630" strokeWidth="3" />
      <g style={spin(40)}>
        {dots.map((a) => (
          <circle key={a} cx="150" cy="14" r="3.4" fill={COLORS[(a / 15) % COLORS.length]} transform={`rotate(${a} 150 150)`} className="twinkle" style={{ animationDelay: `${(a / 15) * 0.1}s` }} />
        ))}
      </g>
      <g style={spin(30, true)}>
        {outer.map((a, i) => (
          <path key={a} d="M150 28 Q166 54 150 80 Q134 54 150 28Z" fill={COLORS[i % COLORS.length]} opacity=".92" transform={`rotate(${a} 150 150)`} />
        ))}
      </g>
      <circle cx="150" cy="150" r="82" fill="#fff" opacity=".7" />
      <g style={spin(24)}>
        {inner.map((a, i) => (
          <path key={a} d="M150 76 Q172 104 150 128 Q128 104 150 76Z" fill={COLORS[(i + 2) % COLORS.length]} stroke="#fff" strokeWidth="2" transform={`rotate(${a} 150 150)`} />
        ))}
      </g>
      <circle cx="150" cy="150" r="46" fill="#fff5c8" stroke="#d99a06" strokeWidth="2" />

      {/* glowing diya */}
      <circle cx="150" cy="140" r="44" fill="url(#rl-glow)" className="glow" />
      <path d="M118 150 Q150 190 182 150 Q150 158 118 150Z" fill="url(#rl-brass)" stroke="#7a5a14" strokeWidth="1.5" />
      <ellipse cx="150" cy="150" rx="32" ry="5" fill="#e6bb55" />
      <g className="flame">
        <path d="M150 112 C140 128 140 142 150 150 C160 142 160 128 150 112Z" fill="#f08a1c" />
        <path d="M150 128 C146 136 146 143 150 148 C154 143 154 136 150 128Z" fill="#ffe08a" />
      </g>
    </svg>
  );
}
