// Hero, Ticker, Video, Manifesto, Dual presentations

function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
  { href: '#que-es', label: 'Qué es' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#aplicaciones', label: 'Aplicaciones' },
  { href: '#evidencia', label: 'Evidencia' },
  { href: '#profesionales', label: 'Profesionales' },
  { href: '#faq', label: 'FAQ' }];


  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <React.Fragment>
      <nav className="nav">
        <a href="#top" className="nav__logo" aria-label="Sveltea">
          <img src="assets/sveltea-logo.png" alt="Sveltea — Hidroxiapatita de origen natural" />
        </a>
        <div className="nav__links">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="nav__cta">
          <button className={`nav__menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menú">
            <span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) =>
        <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        )}
        <div className="mobile-menu__footer">
          <span>+57 301 600 1737</span>
          <span>contacto@sveltea.com.co</span>
          <span style={{ marginTop: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            INVIMA 2022DM-0025405
          </span>
        </div>
      </div>
    </React.Fragment>);

}

const HERO_SLIDES = [
{
  bg: 'slide-bg-1',
  tag: 'Hidroxiapatita de origen natural',
  caption: 'Andamio biológico de < 45 μm',
  num: '01 / 04'
},
{
  bg: 'slide-bg-2',
  tag: 'Bioinducción in vivo',
  caption: 'Colágeno tipo I y III, formado por tu propio cuerpo',
  num: '02 / 04'
},
{
  bg: 'slide-bg-3',
  tag: 'Manejo integral de la celulitis',
  caption: 'Bioestimulación + subcisión en una misma sesión',
  num: '03 / 04'
},
{
  bg: 'slide-bg-4',
  tag: 'Resultado clínico',
  caption: '12 a 18 meses de persistencia documentada',
  num: '04 / 04'
}];


function HeroCarousel() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = HERO_SLIDES.length;

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(id);
  }, [paused, n]);

  const go = (idx) => {setI((idx + n) % n);};

  return (
    <div
      className="hero__carousel reveal"
      data-d="2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Carrusel de imágenes">
      
      <div className="hero__carousel-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {HERO_SLIDES.map((s, idx) =>
        <div key={idx} className="hero__carousel-slide" aria-hidden={i !== idx}>
            <div className={`hero__slide-bg ${s.bg}`}></div>
            <svg className="hero__slide-pattern" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id={`p${idx}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="0.5" fill="rgba(255,255,255,0.18)" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill={`url(#p${idx})`} />
            </svg>
            <div className="hero__slide-grain"></div>
            <div className="hero__slide-overlay">
              <div className="hero__slide-top">
                <span><span className="dot"></span>SVELTEA · {String(idx + 1).padStart(2, '0')}</span>
                <span>
</span>
              </div>
              <div>
                <div className="hero__slide-caption">{s.caption}</div>
                <div className="hero__slide-bottom" style={{ flexDirection: 'row' }}>
                  <span>{s.tag}</span>
                  <span className="hero__slide-num">{s.num}</span>
                </div>
              </div>
            </div>
          </div>)}
      </div>

      <div className="hero__carousel-arrows" aria-hidden="true">
        <button className="hero__carousel-arrow" onClick={() => go(i - 1)} aria-label="Anterior">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="hero__carousel-arrow" onClick={() => go(i + 1)} aria-label="Siguiente">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="hero__carousel-controls">
        {HERO_SLIDES.map((_, idx) =>
        <button
          key={idx}
          className={`hero__carousel-dot ${i === idx ? 'active' : ''}`}
          onClick={() => go(idx)}
          aria-label={`Ir a slide ${idx + 1}`} />

        )}
      </div>
    </div>);

}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__col-text">
            <div className="hero__eyebrow-row reveal">
              <Eyebrow>Bioinductor de colágeno con hidroxiapatita de calcio</Eyebrow>
              <span className="em">Manejo integral de la celulitis</span>
            </div>

            <h1 className="hero__title reveal" data-d="1">
              Bioinducción<br />
              <em>natural.</em>
            </h1>

            <p className="hero__lede reveal" data-d="2">
              Sveltea no rellena: <strong>induce</strong>. Su tecnología de hidroxiapatita de
              calcio actúa como un andamio biológico sobre el cual el propio organismo
              reconstruye colágeno tipo I y III, estimula angiogénesis y mejora la calidad de
              la piel.
            </p>

            <div className="hero__cta-row reveal" data-d="3">
              <a href="#como-funciona" className="btn btn--filled">
                Conocer el protocolo <ArrowIcon />
              </a>
              <a href="#profesionales" className="btn">Zona de profesionales</a>
            </div>

            <div className="hero__strip reveal" data-d="4">
              <div className="hero__strip-item">
                <span className="label">Partícula</span>
                <span className="value">&lt; 45 μm</span>
              </div>
              <div className="hero__strip-item">
                <span className="label">Duración</span>
                <span className="value">12–18 meses</span>
              </div>
              <div className="hero__strip-item">
                <span className="label">Mejoría visible</span>
                <span className="value">1ª sesión</span>
              </div>
              <div className="hero__strip-item">
                <span className="label">Origen</span>
                <span className="value">Natural</span>
              </div>
            </div>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>);

}

function Ticker() {
  const items = [
  'Bioinducción de colágeno autólogo',
  'Hidroxiapatita de calcio < 45 μm',
  'Manejo integral de la celulitis',
  'Rejuvenecimiento facial',
  'Mejoría visible desde la primera sesión',
  'Respaldo clínico internacional'];

  const all = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        <span>
          {all.map((t, i) =>
          <React.Fragment key={i}>
              {t}
              <span className="ticker__dot"></span>
            </React.Fragment>
          )}
        </span>
      </div>
    </div>);

}

function VideoSection() {
  return (
    <section className="video-section section" id="video">
      <div className="wrap">
        <SectionHead
          num="01 / 06"
          eyebrow="El procedimiento en 35 segundos"
          title="Una explicación,<br/><em>visual</em>." />
        

        <div className="video-layout">
          <div className="video-layout__copy reveal">
            <p className="video-layout__lede">
              Lo que ocurre <em>debajo de la piel</em> cuando se aplica Sveltea.
            </p>
            <p>Una pieza animada que recorre el procedimiento completo —desde la inyección de Sveltea hasta la persistencia del colágeno autólogo formado por tu propio organismo.



            </p>
          </div>

          <div className="video-frame reveal" data-d="1" role="button" tabIndex="0" aria-label="Reproducir video explicativo de 35 segundos">
            <div className="video-frame__bg"></div>
            <div className="video-frame__grain"></div>
            <span className="video-frame__corner tl">SVELTEA · 001</span>
            <span className="video-frame__corner bl">ANIMACIÓN</span>
            <span className="video-frame__corner br">REC ●</span>
            <span className="video-frame__duration">00:35</span>
            <div className="video-frame__overlay">
              <button className="play-btn" aria-label="Reproducir">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </button>
              <span className="video-frame__caption">Reproducir explicación</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function QueEs() {
  return (
    <section className="section" id="que-es">
      <div className="wrap">
        <SectionHead
          num="02 / 06"
          eyebrow="Qué es Sveltea"
          title="Un implante inyectable<br/>que <em>enseña al tejido</em><br/>a reconstruirse." />
        

        <div className="manifesto reveal">
          <div className="manifesto__lead">
            La diferencia entre un relleno tradicional y un bioinductor está
            <span className="accent"> justamente ahí</span>: el primero ocupa un espacio que el
            cuerpo reabsorbe; el segundo enseña al tejido a reconstruirse.
          </div>
          <div className="manifesto__body">
            <p>
              Sveltea es un <strong>implante inyectable estéril y apirógeno</strong>, presentado
              en polvo pulverizado de hidroxiapatita de calcio de origen bovino, con tamaño de
              partícula menor a 45 micras. Se reconstituye con solución salina y se aplica como
              implante subcutáneo o subdérmico, según la indicación.
            </p>
            <p>
              La hidroxiapatita de calcio es un componente natural del organismo —forma parte
              del esmalte y del hueso— y eso explica buena parte de su biocompatibilidad. Con
              el tiempo, el producto se metaboliza por completo a calcio y fosfato, dejando
              atrás únicamente el <strong>colágeno autólogo</strong> que el propio paciente generó.
            </p>
          </div>
        </div>

        <div className="spec-grid reveal">
          <div className="spec-grid__cell">
            <span className="spec-grid__label">Tamaño de partícula</span>
            <span className="spec-grid__value">&lt; 45 <span style={{ fontSize: '0.5em', color: 'var(--stone)' }}>μm</span></span>
            <span className="spec-grid__sub">Hidroxiapatita pura</span>
          </div>
          <div className="spec-grid__cell">
            <span className="spec-grid__label">Duración del efecto</span>
            <span className="spec-grid__value">12–18 <span style={{ fontSize: '0.5em', color: 'var(--stone)' }}>meses</span></span>
            <span className="spec-grid__sub">Persistencia clínica</span>
          </div>
          <div className="spec-grid__cell">
            <span className="spec-grid__label">Presentación estándar</span>
            <span className="spec-grid__value">300 <span style={{ fontSize: '0.5em', color: 'var(--stone)' }}>mg</span></span>
            <span className="spec-grid__sub">Para indicaciones puntuales</span>
          </div>
          <div className="spec-grid__cell">
            <span className="spec-grid__label">Presentación profesional</span>
            <span className="spec-grid__value">1000 <span style={{ fontSize: '0.5em', color: 'var(--stone)' }}>mg</span></span>
            <span className="spec-grid__sub">Para manejo corporal</span>
          </div>
        </div>
      </div>
    </section>);

}

function Presentations() {
  return (
    <section className="section" id="presentaciones">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Dos presentaciones, una misma tecnología"
          title="Elige la presentación<br/><em>adecuada</em> para cada indicación." />
        

        <div className="dual">
          <article className="product-card reveal">
            <div className="product-card__tag">Hidroxiapatita pura</div>
            <h3 className="product-card__name"><em>Sveltea</em></h3>
            <p className="product-card__sub">El efecto bioestimulador, sin matices.</p>
            <ul className="product-card__list">
              <li>Manejo de celulitis con subcisión</li>
              <li>Bioestimulación pura facial</li>
              <li>Soporte estructural profundo</li>
              <li>Irregularidades posquirúrgicas</li>
            </ul>
            <a href="#aplicaciones" className="link-arrow">
              Ver aplicaciones <span className="arr">→</span>
            </a>
          </article>

          <article className="product-card reveal" data-d="1">
            <div className="product-card__tag">Con ácido hialurónico no entrecruzado</div>
            <h3 className="product-card__name">Sveltea<em>+</em></h3>
            <p className="product-card__sub">Hidratación inmediata y efecto puente.</p>
            <ul className="product-card__list">
              <li>Rejuvenecimiento facial superficial</li>
              <li>Piel delgada o sensible</li>
              <li>Efecto inmediato visible de puente</li>
              <li>Zonas de transición suave</li>
            </ul>
            <a href="#evidencia" className="link-arrow">
              Ver evidencia <span className="arr">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, Ticker, VideoSection, QueEs, Presentations });