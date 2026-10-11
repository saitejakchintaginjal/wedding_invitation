// Hand-built SVG illustrations (placeholders you can swap for real artwork).

export function FeetIllustration({ className = "" }) {
  // Bride's feet with alta/anklets beside groom's feet, on a petal-strewn mat.
  const foot = (x, skin, toeCol, anklet) => (
    <g transform={`translate(${x} 0)`}>
      <path d="M30 0 C 52 0 56 40 52 90 C 50 120 44 140 30 140 C 14 140 6 120 8 90 C 10 40 14 0 30 0Z" fill={skin} stroke="#8a5a34" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={i} cx={14 + i * 9} cy={-4 + Math.abs(i - 1.5) * 3} rx="4.5" ry="5.5" fill={skin} stroke="#8a5a34" strokeWidth="1" />
      ))}
      <path d="M12 118 Q 30 128 50 118" stroke={toeCol} strokeWidth="5" fill="none" strokeLinecap="round" />
      {anklet && (
        <g>
          <path d="M6 150 Q 30 166 56 150" stroke="#d9a63f" strokeWidth="3" fill="none" />
          {[10, 20, 30, 40, 50].map((cx) => <circle key={cx} cx={cx} cy={158} r="2.6" fill="#f0c653" />)}
        </g>
      )}
      <rect x="6" y="150" width="48" height="40" fill={anklet ? "#b3202f" : "#f6ecd6"} stroke={anklet ? "#7a1f2b" : "#c9b78a"} />
    </g>
  );
  return (
    <svg viewBox="0 0 340 230" className={className} role="img" aria-label="Bride and groom's feet in traditional attire">
      <ellipse cx="170" cy="150" rx="150" ry="70" fill="#e8c986" opacity=".35" />
      {[...Array(14)].map((_, i) => (
        <ellipse key={i} cx={40 + ((i * 53) % 260)} cy={170 + ((i * 29) % 50)} rx="7" ry="4" fill={i % 2 ? "#e8920c" : "#c0392b"} opacity=".85" transform={`rotate(${i * 25} ${40 + ((i * 53) % 260)} ${170 + ((i * 29) % 50)})`} />
      ))}
      {/* groom (cream veshti with gold border) and bride (red silk saree) */}
      {foot(70, "#d9a47a", "#c0392b", false)}
      {foot(120, "#d9a47a", "#c0392b", false)}
      {foot(180, "#cf9a6e", "#b3202f", true)}
      {foot(230, "#cf9a6e", "#b3202f", true)}
    </svg>
  );
}

export function MandapamIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Watercolor illustration of the wedding mandapam">
      <defs>
        <filter id="wc"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" result="t" /><feDisplacementMap in="SourceGraphic" in2="t" scale="6" /></filter>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbd9a0" /><stop offset="1" stopColor="#fdf0d2" /></linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sky)" />
      <g filter="url(#wc)">
        <circle cx="320" cy="60" r="32" fill="#f7b45b" opacity=".7" />
        {/* gopuram tiers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={140 + i * 8} y={40 + i * 30} width={120 - i * 16} height="30" fill={i % 2 ? "#d98a5b" : "#c9694a"} stroke="#8a3b2a" strokeWidth="1.5" />
        ))}
        <path d="M190 40 L200 14 L210 40Z" fill="#b8862b" />
        <rect x="100" y="190" width="200" height="80" fill="#e0a07a" stroke="#8a3b2a" strokeWidth="2" />
        {[120, 160, 200, 240, 270].map((x) => <rect key={x} x={x} y="190" width="12" height="80" fill="#c9694a" />)}
        <path d="M180 270 L180 220 Q 200 200 220 220 L220 270Z" fill="#6b2a1f" />
        {/* garland across the entrance */}
        <path d="M100 196 Q 200 236 300 196" stroke="#e8920c" strokeWidth="6" fill="none" strokeDasharray="2 7" strokeLinecap="round" />
        {/* palms */}
        {[50, 350].map((x) => (
          <g key={x}>
            <rect x={x - 3} y="170" width="6" height="100" fill="#7a5a34" />
            {[-50, -25, 0, 25, 50].map((a) => <ellipse key={a} cx={x} cy="165" rx="6" ry="32" fill="#5e8a45" transform={`rotate(${a} ${x} 170)`} />)}
          </g>
        ))}
        <rect x="0" y="268" width="400" height="32" fill="#c9a96b" opacity=".6" />
      </g>
    </svg>
  );
}

export function CoupleIllustration({ className = "" }) {
  const jewel = (cx, cy) => <circle cx={cx} cy={cy} r="2.6" fill="#f0c653" stroke="#b8862b" />;
  return (
    <svg viewBox="0 0 320 420" className={className} role="img" aria-label="Bride and groom holding hands">
      {/* groom */}
      <g>
        <circle cx="105" cy="70" r="28" fill="#d9a47a" />
        <path d="M80 56 Q 105 28 130 56 L130 46 Q 105 14 80 46Z" fill="#7a1f2b" /> {/* pagri */}
        <path d="M70 110 Q 105 96 140 110 L150 290 L60 290Z" fill="#f4e6c1" stroke="#b8862b" strokeWidth="2" /> {/* kurta */}
        <path d="M105 100 L105 290" stroke="#b8862b" strokeWidth="2" />
        {[135, 165, 195].map((y) => jewel(105, y))}
        <path d="M60 290 L150 290 L156 410 L112 410 L105 330 L98 410 L54 410Z" fill="#fbf5e6" stroke="#b8862b" strokeWidth="2" /> {/* veshti */}
        <path d="M140 118 Q 190 190 200 250" stroke="#d9a47a" strokeWidth="14" fill="none" strokeLinecap="round" />
      </g>
      {/* bride */}
      <g>
        <circle cx="215" cy="76" r="26" fill="#cf9a6e" />
        <path d="M188 70 Q 215 36 242 70 L242 120 Q 215 90 188 120Z" fill="#2b1810" />
        <path d="M196 56 Q 215 62 234 56" stroke="#f0c653" strokeWidth="3" fill="none" />
        <circle cx="215" cy="56" r="3" fill="#c0392b" />
        <path d="M185 110 Q 215 100 245 110 L275 410 L155 410Z" fill="#b3202f" stroke="#7a1f2b" strokeWidth="2" /> {/* saree */}
        <path d="M185 110 L245 160 L245 175 L185 125Z" fill="#f0c653" opacity=".9" />
        <path d="M160 380 L270 380" stroke="#f0c653" strokeWidth="8" />
        <path d="M196 106 Q 215 150 234 106" stroke="#f0c653" strokeWidth="3" fill="none" />
        {[0, 1, 2, 3, 4].map((i) => jewel(200 + i * 8, 120 + Math.sin(i * 0.9 + 0.6) * 12))}
        <path d="M200 160 Q 200 220 200 250" stroke="#cf9a6e" strokeWidth="14" fill="none" strokeLinecap="round" />
        <circle cx="200" cy="254" r="9" fill="#d9a47a" />
      </g>
    </svg>
  );
}

export function EventIcon({ name, className = "h-6 w-6" }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    haldi: <><path d="M5 11h14l-1.5 8a2 2 0 0 1-2 1.6h-7a2 2 0 0 1-2-1.6z" {...p} /><path d="M8 11c0-2 1.5-3 4-3s4 1 4 3" {...p} /><path d="M12 8V4M10 4h4" {...p} /></>,
    vows: <><path d="M12 3c-4 4-5 7-2 10 1 1 3 1 4 0 3-3 1-6-2-10z" {...p} /><path d="M6 20h12M8 17h8" {...p} /></>,
    reception: <><path d="M9 3v12a3 3 0 1 1-2-2.8" {...p} /><path d="M9 3l9 2v10a3 3 0 1 1-2-2.8" {...p} /><path d="M9 8l9 2" {...p} /></>,
    baraat: <><ellipse cx="12" cy="13" rx="7" ry="6" {...p} /><path d="M5 13h14M8 8l8 10M16 8l-8 10" {...p} /><path d="M3 4l4 3M21 4l-4 3" {...p} /></>,
    engagement: <><circle cx="9" cy="15" r="5" {...p} /><circle cx="15" cy="15" r="5" {...p} /><path d="M12 3l2 3-2 3-2-3z" {...p} /></>,
    lunch: <><path d="M4 12h16a8 8 0 0 1-16 0z" {...p} /><path d="M9 8c0-2 2-2 2-4M14 8c0-2 2-2 2-4" {...p} /></>,
    dinner: <><path d="M4 12h16a8 8 0 0 1-16 0z" {...p} /><path d="M9 8c0-2 2-2 2-4M14 8c0-2 2-2 2-4" {...p} /></>,
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{icons[name]}</svg>;
}
