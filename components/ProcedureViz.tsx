'use client'
import { useState, useEffect, useCallback } from 'react'

const PARTICLES = [
  { x: 28, y: 58, r: 3.2 }, { x: 42, y: 52, r: 2.6 }, { x: 56, y: 55, r: 3.4 },
  { x: 70, y: 48, r: 2.4 }, { x: 84, y: 60, r: 3.0 }, { x: 35, y: 70, r: 2.2 },
  { x: 50, y: 68, r: 2.8 }, { x: 65, y: 72, r: 3.2 }, { x: 78, y: 78, r: 2.4 },
  { x: 22, y: 78, r: 2.6 }, { x: 90, y: 72, r: 2.2 }, { x: 45, y: 84, r: 2.8 },
  { x: 60, y: 88, r: 2.4 }, { x: 75, y: 90, r: 3.0 }, { x: 30, y: 92, r: 2.2 },
  { x: 14, y: 65, r: 2.4 }, { x: 95, y: 85, r: 2.6 }, { x: 38, y: 100, r: 2.8 },
]

const FIBERS_III: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,6],[3,7],[4,8],[5,6],[6,7],[7,8],
  [5,11],[6,11],[7,12],[8,13],[9,5],[10,8],[11,12],[12,13],[13,14],[11,14],
  [15,0],[16,10],[11,17],
]

const FIBERS_I_EXTRA: [number, number][] = [
  [0,2],[2,4],[5,7],[7,13],[6,12],[9,11],[11,13],[13,16],[1,7],[3,8],[5,15],[10,4],[17,14],
]

const PHASES = [
  { label: 'Días 0–30 · Inyección', short: 'Inyección' },
  { label: 'Mes 1–3 · Colágeno III', short: 'Col. III' },
  { label: 'Mes 3–6 · Colágeno I', short: 'Col. I' },
  { label: 'Mes 6–18 · Persistencia', short: 'Persistencia' },
]

const AUTO_CYCLE_MS = 4200

export default function ProcedureViz() {
  const [phase, setPhase] = useState(0)
  const [autoCycle, setAutoCycle] = useState(true)

  const advance = useCallback(() => {
    setPhase((p) => (p + 1) % PHASES.length)
  }, [])

  useEffect(() => {
    if (!autoCycle) return
    const t = setTimeout(advance, AUTO_CYCLE_MS)
    return () => clearTimeout(t)
  }, [phase, autoCycle, advance])

  const handlePhaseClick = (i: number) => {
    setPhase(i)
    setAutoCycle(false)
  }

  // Derived opacities
  const particleOpacity = phase === 0 ? 1 : phase === 1 ? 0.75 : phase === 2 ? 0.35 : 0.05
  const fiberIIIOpacity = phase === 1 ? 1 : phase === 2 ? 0.4 : 0
  const fiberIOpacity = phase === 2 ? 1 : phase === 3 ? 0.85 : 0
  const fiberIExtraOpacity = phase === 2 ? 0.7 : phase === 3 ? 0.95 : 0
  const needleOpacity = phase === 0 ? 0.8 : 0

  return (
    <div className="proc-viz">
      <div className="proc-viz__phases">
        {PHASES.map((p, i) => (
          <button
            key={i}
            className={`proc-viz__phase-btn${phase === i ? ' proc-viz__phase-btn--active' : ''}`}
            onClick={() => handlePhaseClick(i)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="proc-svg-wrap">
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          aria-label={`Visualización de procedimiento: ${PHASES[phase].label}`}
        >
          <defs>
            <radialGradient id="particleGrad" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#F5D06A" />
              <stop offset="60%" stopColor="#E8B829" />
              <stop offset="100%" stopColor="#C99A18" />
            </radialGradient>
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="0.4" />
            </filter>
          </defs>

          {/* Background layers */}
          <rect x="0" y="0" width="120" height="22" fill="#F0EDE6" rx="2" />
          <rect x="0" y="22" width="120" height="30" fill="#E8E3DA" />
          <rect x="0" y="52" width="120" height="40" fill="#DDD8CE" />
          <rect x="0" y="92" width="120" height="28" fill="#D0CCC0" rx="2" />

          {/* Layer labels */}
          <text x="4" y="14" fontFamily="var(--mono, monospace)" fontSize="4.5" fill="rgba(100,90,70,0.6)" letterSpacing="0.08em">EPIDERMIS</text>
          <text x="4" y="35" fontFamily="var(--mono, monospace)" fontSize="4.5" fill="rgba(100,90,70,0.5)" letterSpacing="0.08em">DERMIS</text>
          <text x="4" y="66" fontFamily="var(--mono, monospace)" fontSize="4.5" fill="rgba(100,90,70,0.45)" letterSpacing="0.08em">SUBDERMIS</text>
          <text x="4" y="106" fontFamily="var(--mono, monospace)" fontSize="4.5" fill="rgba(100,90,70,0.35)" letterSpacing="0.08em">HIPODERMIS</text>

          {/* Dermis / subdermis divider */}
          <line x1="0" y1="52" x2="120" y2="52" stroke="rgba(100,90,70,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="0" y1="22" x2="120" y2="22" stroke="rgba(100,90,70,0.12)" strokeWidth="0.5" />
          <line x1="0" y1="92" x2="120" y2="92" stroke="rgba(100,90,70,0.12)" strokeWidth="0.5" />

          {/* Needle (phase 0) */}
          <g style={{ opacity: needleOpacity, transition: 'opacity 0.6s ease' }}>
            <line x1="60" y1="0" x2="60" y2="68" stroke="#8A8682" strokeWidth="1" />
            <polygon points="57,68 63,68 60,74" fill="#8A8682" />
            <text x="63" y="8" fontFamily="var(--mono, monospace)" fontSize="4" fill="rgba(100,90,70,0.6)" letterSpacing="0.06em">INYECCIÓN</text>
          </g>

          {/* Type III Fibers (phase 1+) — gold dashed */}
          <g style={{ opacity: fiberIIIOpacity, transition: 'opacity 0.8s ease' }}>
            {FIBERS_III.map(([a, b], i) => {
              const pa = PARTICLES[a]
              const pb = PARTICLES[b]
              return (
                <line
                  key={`iii-${i}`}
                  x1={pa.x} y1={pa.y}
                  x2={pb.x} y2={pb.y}
                  stroke="#E8B829"
                  strokeWidth="0.6"
                  strokeDasharray="2,1.5"
                  strokeLinecap="round"
                  style={{
                    animation: fiberIIIOpacity > 0
                      ? `fiber-draw 0.6s ${(i * 0.03).toFixed(2)}s ease forwards`
                      : 'none',
                  }}
                />
              )
            })}
          </g>

          {/* Type I Fibers (phase 2+) — dark solid */}
          <g style={{ opacity: fiberIOpacity, transition: 'opacity 0.8s ease' }}>
            {FIBERS_III.map(([a, b], i) => {
              const pa = PARTICLES[a]
              const pb = PARTICLES[b]
              return (
                <line
                  key={`i-base-${i}`}
                  x1={pa.x} y1={pa.y}
                  x2={pb.x} y2={pb.y}
                  stroke="#3A3832"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              )
            })}
          </g>

          <g style={{ opacity: fiberIExtraOpacity, transition: 'opacity 0.8s ease' }}>
            {FIBERS_I_EXTRA.map(([a, b], i) => {
              const pa = PARTICLES[a]
              const pb = PARTICLES[b]
              return (
                <line
                  key={`i-extra-${i}`}
                  x1={pa.x} y1={pa.y}
                  x2={pb.x} y2={pb.y}
                  stroke="#2A2820"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              )
            })}
          </g>

          {/* Particles (HA) */}
          <g style={{ opacity: particleOpacity, transition: 'opacity 1s ease' }}>
            {PARTICLES.map((p, i) => (
              <circle
                key={`p-${i}`}
                cx={p.x}
                cy={p.y}
                r={p.r}
                fill="url(#particleGrad)"
                filter="url(#softBlur)"
              />
            ))}
          </g>

          {/* Phase label */}
          <rect x="2" y="113" width="116" height="5" fill="none" />
          <text
            x="60"
            y="117.5"
            textAnchor="middle"
            fontFamily="var(--mono, monospace)"
            fontSize="4"
            fill="rgba(100,90,70,0.55)"
            letterSpacing="0.1em"
          >
            {PHASES[phase].label.toUpperCase()}
          </text>
        </svg>
      </div>
    </div>
  )
}
