// Procedure visualization — animated cross-section of dermis
// 4 phases: injection → neocolágeno III → conversión a I → persistencia

const PHASES = [
  { id: 0, label: 'Días 0–30', sub: 'Inyección', color: 'particles' },
  { id: 1, label: 'Mes 1–3', sub: 'Colágeno III', color: 'col3' },
  { id: 2, label: 'Mes 3–6', sub: 'Colágeno I', color: 'col1' },
  { id: 3, label: 'Mes 6–18', sub: 'Persistencia', color: 'persist' },
];

// Pre-computed positions for particles (HA microspheres)
const PARTICLES = [
  { x: 28, y: 58, r: 3.2 }, { x: 42, y: 52, r: 2.6 }, { x: 56, y: 55, r: 3.4 },
  { x: 70, y: 48, r: 2.4 }, { x: 84, y: 60, r: 3.0 }, { x: 35, y: 70, r: 2.2 },
  { x: 50, y: 68, r: 2.8 }, { x: 65, y: 72, r: 3.2 }, { x: 78, y: 78, r: 2.4 },
  { x: 22, y: 78, r: 2.6 }, { x: 90, y: 72, r: 2.2 }, { x: 45, y: 84, r: 2.8 },
  { x: 60, y: 88, r: 2.4 }, { x: 75, y: 90, r: 3.0 }, { x: 30, y: 92, r: 2.2 },
  { x: 14, y: 65, r: 2.4 }, { x: 95, y: 85, r: 2.6 }, { x: 38, y: 100, r: 2.8 },
];

// Collagen fibers — pairs of particle indices to connect
const FIBERS_III = [
  [0,1], [1,2], [2,3], [3,4], [0,5], [1,6], [2,6], [3,7], [4,8],
  [5,6], [6,7], [7,8], [5,11], [6,11], [7,12], [8,13], [9,5], [10,8],
  [11,12], [12,13], [13,14], [11,14], [15,0], [16,10], [11,17],
];

const FIBERS_I_EXTRA = [
  [0,2], [2,4], [5,7], [7,13], [6,12], [9,11], [11,13], [13,16],
  [1,7], [3,8], [5,15], [10,4], [17,14],
];

function ProcedureViz() {
  const [phase, setPhase] = React.useState(0);
  const [auto, setAuto] = React.useState(true);

  React.useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setPhase(p => (p + 1) % 4), 4200);
    return () => clearInterval(id);
  }, [auto]);

  const pick = (p) => { setAuto(false); setPhase(p); };

  // Visibility / opacity helpers per phase
  const particleOpacity = phase === 0 ? 1 : phase === 1 ? 0.85 : phase === 2 ? 0.45 : 0.12;
  const col3Opacity = phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 0.55 : 0.35;
  const col1Opacity = phase < 2 ? 0 : phase === 2 ? 1 : 1;
  const col1Width = phase === 2 ? 1.0 : phase === 3 ? 1.4 : 0.6;

  return (
    <div className="proc-viz">
      <div className="proc-viz__copy">
        <Eyebrow>Visualización del procedimiento</Eyebrow>
        <h3 style={{ marginTop: 14 }}>
          Tu propio cuerpo, <em>reescribiéndose</em>.
        </h3>
        <p>
          Una representación visual del proceso biológico que ocurre en la subdermis tras la
          aplicación: deposición de hidroxiapatita, neocolagénesis tipo III, conversión a tipo I,
          y persistencia del colágeno autólogo.
        </p>
        <div className="proc-viz__phases">
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              className={`proc-viz__phase ${phase === i ? 'active' : ''}`}
              onClick={() => pick(i)}
            >
              {p.label} · {p.sub}
            </button>
          ))}
        </div>
      </div>

      <div className="proc-svg-wrap" aria-label="Animación del procedimiento Sveltea">
        <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="dermis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--bone-2)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="var(--bone-2)" stopOpacity="0.0"/>
            </linearGradient>
            <radialGradient id="haGrad">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95"/>
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2"/>
            </radialGradient>
          </defs>

          {/* Background — stratified dermis layers */}
          <rect x="0" y="0" width="120" height="40" fill="url(#dermis)" opacity="0.5"/>
          <line x1="0" y1="40" x2="120" y2="40" stroke="var(--hairline-strong)" strokeWidth="0.15" strokeDasharray="0.6 1.4"/>
          <line x1="0" y1="48" x2="120" y2="48" stroke="var(--hairline)" strokeWidth="0.1" strokeDasharray="0.4 1.6"/>

          {/* Labels */}
          <text x="4" y="10" fontFamily="var(--mono)" fontSize="2.6" fill="var(--stone)" letterSpacing="0.6">EPIDERMIS</text>
          <text x="4" y="35" fontFamily="var(--mono)" fontSize="2.6" fill="var(--stone)" letterSpacing="0.6">DERMIS</text>
          <text x="4" y="115" fontFamily="var(--mono)" fontSize="2.6" fill="var(--stone)" letterSpacing="0.6">SUBDERMIS</text>

          {/* Phase indicator dot */}
          <text x="116" y="10" fontFamily="var(--mono)" fontSize="2.4" fill="var(--ink)" textAnchor="end" letterSpacing="0.6">
            FASE 0{phase + 1}/04
          </text>

          {/* Collagen I — base fibers (thicker, organized) — appears phase 2+ */}
          <g style={{ opacity: col1Opacity, transition: 'opacity 1.4s ease' }}>
            {FIBERS_III.concat(FIBERS_I_EXTRA).map(([a, b], i) => {
              const A = PARTICLES[a], B = PARTICLES[b];
              if (!A || !B) return null;
              return (
                <line
                  key={`c1-${i}`}
                  x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                  stroke="var(--ink)"
                  strokeWidth={col1Width * 0.5}
                  strokeOpacity="0.55"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-width 1.4s ease' }}
                />
              );
            })}
          </g>

          {/* Collagen III — thin, lighter fibers */}
          <g style={{ opacity: col3Opacity, transition: 'opacity 1.4s ease' }}>
            {FIBERS_III.map(([a, b], i) => {
              const A = PARTICLES[a], B = PARTICLES[b];
              if (!A || !B) return null;
              return (
                <line
                  key={`c3-${i}`}
                  x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                  stroke="var(--accent)"
                  strokeWidth="0.35"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeDasharray="1.4 0.8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0" to="-4"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </g>

          {/* HA particles — fade as metabolized */}
          <g style={{ opacity: particleOpacity, transition: 'opacity 1.6s ease' }}>
            {PARTICLES.map((p, i) => (
              <circle
                key={`p-${i}`}
                cx={p.x} cy={p.y} r={p.r}
                fill="url(#haGrad)"
                style={{ transition: 'all 1.4s ease' }}
              >
                {phase === 0 && (
                  <animate
                    attributeName="r"
                    values={`0;${p.r};${p.r}`}
                    keyTimes="0;0.6;1"
                    dur="1.4s"
                    begin={`${i * 0.06}s`}
                    fill="freeze"
                  />
                )}
              </circle>
            ))}
          </g>

          {/* Injection needle — only phase 0 */}
          {phase === 0 && (
            <g>
              <line x1="60" y1="0" x2="60" y2="45" stroke="var(--ink)" strokeWidth="0.6" opacity="0.7">
                <animate attributeName="y2" values="0;45;45" keyTimes="0;0.4;1" dur="1.6s" fill="freeze"/>
              </line>
              <polygon points="59,44 61,44 60,48" fill="var(--ink)" opacity="0.7">
                <animate attributeName="opacity" values="0;0.7;0" keyTimes="0;0.5;1" dur="2.4s" fill="freeze"/>
              </polygon>
            </g>
          )}

          {/* Phase legend at bottom */}
          <text x="60" y="118" fontFamily="var(--serif)" fontSize="3.4" fill="var(--ink)" textAnchor="middle" fontStyle="italic">
            {PHASES[phase].label} — {PHASES[phase].sub}
          </text>
        </svg>
      </div>
    </div>
  );
}

window.ProcedureViz = ProcedureViz;
