// Small animated scenes for each wedding event.
const GOLD = "#d99a06";

function Baraat() {
  return (
    <>
      <circle cx="60" cy="60" r="46" fill="#fff3b8" />
      <g className="bounce">
        <ellipse cx="60" cy="64" rx="30" ry="22" fill="#c8281e" stroke="#7a1f2b" strokeWidth="2" />
        <ellipse cx="32" cy="64" rx="6" ry="20" fill="#f7cf5c" stroke={GOLD} strokeWidth="2" />
        <ellipse cx="88" cy="64" rx="6" ry="20" fill="#f7cf5c" stroke={GOLD} strokeWidth="2" />
        <path d="M34 46 L48 84 L62 46 L76 84 L86 48" stroke="#fbbf24" strokeWidth="3" fill="none" />
      </g>
      <rect x="22" y="28" width="30" height="5" rx="2.5" fill="#7a5a34" className="stick-l" />
      <rect x="68" y="28" width="30" height="5" rx="2.5" fill="#7a5a34" className="stick-r" />
      {[0, 1, 2].map((i) => (
        <text key={i} x={30 + i * 28} y="30" fontSize="16" fill={["#38a3d8", "#2e8b57", "#f472b6"][i]} className="note" style={{ animationDelay: `${i * 0.8}s` }}>
          {i % 2 ? "♫" : "♪"}
        </text>
      ))}
    </>
  );
}

function Engagement() {
  return (
    <>
      <circle cx="60" cy="60" r="46" fill="#ffe3ef" />
      <g className="ring-l"><circle cx="48" cy="68" r="19" fill="none" stroke="#f2b630" strokeWidth="6" /></g>
      <g className="ring-r"><circle cx="72" cy="68" r="19" fill="none" stroke="#e8c76a" strokeWidth="6" /></g>
      <path d="M60 20 L68 32 L60 44 L52 32Z" fill="#7fd1f2" stroke="#1e5fa8" strokeWidth="2" className="twinkle" />
      {[[26, 30], [96, 36], [100, 80], [20, 84]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 6} L${x + 2} ${y - 2} L${x + 6} ${y} L${x + 2} ${y + 2} L${x} ${y + 6} L${x - 2} ${y + 2} L${x - 6} ${y} L${x - 2} ${y - 2}Z`}
          fill="#fbbf24" className="twinkle" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
    </>
  );
}

function Vows() {
  return (
    <>
      <circle cx="60" cy="60" r="46" fill="#fde9b0" />
      <rect x="34" y="86" width="52" height="8" rx="2" fill="#a0693a" />
      <rect x="40" y="78" width="40" height="8" rx="2" fill="#8a5a34" />
      <g className="flame"><path d="M60 24 C42 50 44 68 60 78 C76 68 78 50 60 24Z" fill="#f08a1c" /></g>
      <g className="flame" style={{ animationDelay: ".4s" }}><path d="M60 42 C50 58 52 70 60 76 C68 70 70 58 60 42Z" fill="#fbbf24" /></g>
      <g className="flame" style={{ animationDelay: ".8s" }}><path d="M60 56 C55 64 56 71 60 75 C64 71 65 64 60 56Z" fill="#fff3b8" /></g>
      {Array.from({ length: 7 }, (_, i) => {
        const a = Math.PI * (1 + i / 6);
        return (
          <circle key={i} cx={60 + Math.cos(a) * 44} cy={92 + Math.sin(a) * 60} r="4"
            fill={["#38a3d8", "#2e8b57", "#f472b6", "#fbbf24"][i % 4]} className="twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
        );
      })}
    </>
  );
}

function Lunch() {
  return (
    <>
      <circle cx="60" cy="60" r="46" fill="#e4f6e0" />
      <ellipse cx="60" cy="76" rx="44" ry="20" fill="#4a9a3c" stroke="#2f7a2f" strokeWidth="2" />
      <path d="M60 58 V94" stroke="#2f7a2f" strokeWidth="2" />
      <ellipse cx="60" cy="72" rx="15" ry="9" fill="#ffffff" />
      <circle cx="30" cy="76" r="6" fill="#f59e0b" /><circle cx="90" cy="76" r="6" fill="#c8281e" />
      <circle cx="42" cy="88" r="5" fill="#fbbf24" /><circle cx="78" cy="88" r="5" fill="#38a3d8" />
      {[44, 60, 76].map((x, i) => (
        <path key={x} d={`M${x} 58 q-5 -8 0 -14 q5 -8 0 -14`} stroke="#9aa5ad" strokeWidth="2.5" fill="none"
          strokeLinecap="round" className="steam" style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </>
  );
}

const SCENES = { baraat: Baraat, engagement: Engagement, vows: Vows, lunch: Lunch };

export default function EventArt({ name, className = "" }) {
  const Scene = SCENES[name];
  if (!Scene) return null;
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <Scene />
    </svg>
  );
}
