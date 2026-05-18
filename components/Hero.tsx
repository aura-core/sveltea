import HeroCarousel from './HeroCarousel'

const SPECS = [
  { val: '< 45 μm', label: 'Partícula' },
  { val: '12–18 m', label: 'Duración' },
  { val: '1ª sesión', label: 'Mejoría visible' },
  { val: 'Natural', label: 'Origen' },
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left column */}
          <div className="hero__content">
            <div className="hero__eyebrow-row reveal" data-d="0">
              <div className="hero__eyebrow-dot" />
              <span className="eyebrow">Bioinductor de colágeno · Cellstech · INVIMA 2022DM-0025405</span>
            </div>

            <h1 className="hero__title reveal" data-d="1">
              Bioinducción<br />
              <em>natural.</em>
            </h1>

            <p className="hero__lede reveal" data-d="2">
              Sveltea no rellena: <strong>induce</strong>. Su tecnología de
              hidroxiapatita de calcio actúa como un andamio biológico sobre el
              cual el propio organismo reconstruye colágeno tipo I y III, estimula
              angiogénesis y mejora la calidad de la piel.
            </p>

            <div className="hero__ctas reveal" data-d="3">
              <a href="#como-funciona" className="btn btn--filled">
                Conocer el protocolo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#profesionales" className="btn btn--ghost">
                Zona de profesionales
              </a>
            </div>

            <div className="hero__strip reveal" data-d="4">
              {SPECS.map((s) => (
                <div key={s.label} className="hero__spec">
                  <span className="hero__spec-val">{s.val}</span>
                  <span className="hero__spec-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: carousel */}
          <div className="reveal" data-d="2">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
