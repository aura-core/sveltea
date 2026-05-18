// Cómo funciona, Applications, Evidence

function ComoFunciona() {
  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <SectionHead
          num="03 / 06"
          eyebrow="Cómo funciona"
          title="Bioinducción de <em>colágeno</em>.<br/>Una cronología fisiológica."
        >
          <p style={{ fontSize: 'var(--t-body-lg)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '58ch', marginTop: 16 }}>
            Cuando Sveltea se inyecta en la subdermis, la hidroxiapatita actúa como un andamio
            biológico que el tejido reconoce sin desencadenar una respuesta inflamatoria
            crónica. Los fibroblastos depositan progresivamente colágeno tipo III y tipo I, con
            aumento medible del grosor dérmico.
          </p>
        </SectionHead>

        <div className="timeline reveal">
          <div className="timeline__rail">
            <div className="timeline__step">
              <div className="timeline__phase">Días 0–30</div>
              <h4 className="timeline__title">Efecto <em>volumétrico</em> inicial</h4>
              <p className="timeline__copy">
                Volumen discreto dependiente de la dilución utilizada. Resultado inmediato
                visible desde la primera sesión.
              </p>
            </div>
            <div className="timeline__step">
              <div className="timeline__phase">Mes 1–3</div>
              <h4 className="timeline__title">Inicio de <em>neocolagénesis</em></h4>
              <p className="timeline__copy">
                Activación con depósito predominante de colágeno tipo III. Inicio de
                neovascularización local y producción de elastina.
              </p>
            </div>
            <div className="timeline__step">
              <div className="timeline__phase">Mes 3–6</div>
              <h4 className="timeline__title">Pico de <em>respuesta biológica</em></h4>
              <p className="timeline__copy">
                Conversión progresiva a colágeno tipo I, mejor calidad de piel y mayor firmeza.
                Momento de mayor transformación visible.
              </p>
            </div>
            <div className="timeline__step">
              <div className="timeline__phase">Mes 6–18</div>
              <h4 className="timeline__title">Mantenimiento y <em>persistencia</em></h4>
              <p className="timeline__copy">
                Metabolización progresiva de la hidroxiapatita y persistencia del colágeno
                autólogo formado por el organismo.
              </p>
            </div>
          </div>
        </div>

        <ProcedureViz />
      </div>
    </section>
  );
}

function Applications() {
  const [tab, setTab] = React.useState('facial');

  const data = {
    facial: {
      title: 'Rejuvenecimiento <em>facial</em> integral',
      lede: 'El envejecimiento facial combina pérdida de volumen, reabsorción ósea, descenso de tejidos y deterioro de la calidad de la piel. Sveltea aborda esas dimensiones según la técnica elegida por el médico.',
      body: 'En presentación concentrada actúa como soporte estructural profundo. Diluido o hiperdiluido, mejora laxitud cutánea, textura y firmeza en cuello, escote y rostro.',
      panelTitle: 'Lo que verás',
      points: [
        'Firmeza y mejora de la calidad de piel',
        'Contorno facial más definido y natural',
        'Sin aspecto "rellenado"',
        'Duración clínica entre 12 y 18 meses',
        'Procedimiento ambulatorio',
      ],
    },
    celulitis: {
      title: 'Manejo integral de la <em>celulitis</em>',
      lede: 'La celulitis es una alteración estructural del tejido subcutáneo. Nuestro protocolo combina bioestimulación con hidroxiapatita de calcio y subcisión selectiva de septos fibrosos en una misma sesión.',
      body: 'La combinación de subcisión y bioestimulación aborda los dos componentes simultáneamente: la tracción mecánica del septo fibroso y la calidad regenerativa del tejido circundante.',
      panelTitle: 'Lo que aborda el protocolo',
      points: [
        'Subcisión selectiva de septos fibrosos',
        'Bioestimulación con hidroxiapatita',
        'Mejoría visible desde la primera sesión',
        'Aplicable en glúteos, muslos y abdomen',
        'Resultados respaldados por evidencia',
      ],
    },
  };

  const d = data[tab];

  return (
    <section className="section" id="aplicaciones">
      <div className="wrap">
        <SectionHead
          num="04 / 06"
          eyebrow="Aplicaciones"
          title="Dos indicaciones,<br/>un mismo <em>mecanismo</em>."
        />

        <div className="app-toggle">
          <button
            className={`app-toggle__btn ${tab === 'facial' ? 'active' : ''}`}
            onClick={() => setTab('facial')}
          >Rejuvenecimiento facial</button>
          <button
            className={`app-toggle__btn ${tab === 'celulitis' ? 'active' : ''}`}
            onClick={() => setTab('celulitis')}
          >Manejo de celulitis</button>
        </div>

        <div className="app-content" key={tab}>
          <div className="reveal in">
            <h3 className="app-content__title" dangerouslySetInnerHTML={{ __html: d.title }} />
            <p className="app-content__lede">{d.lede}</p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '54ch', marginBottom: 28 }}>
              {d.body}
            </p>
            <a href="#contacto" className="btn">Para pacientes <ArrowIcon /></a>
            <a href="#profesionales" className="btn btn--ghost" style={{ marginLeft: 12 }}>Para profesionales</a>
          </div>

          <aside className="app-content__panel reveal in" data-d="1">
            <h4>{d.panelTitle}</h4>
            <ul>
              {d.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

const STUDIES = [
  {
    author: 'Corduff, 2023',
    type: 'Revisión',
    topic: 'Mecanismo de acción',
    title: 'Andamios regenerativos y respuesta tisular',
    desc: 'La hidroxiapatita de calcio dirige la respuesta inmunitaria hacia regeneración tisular: estimula contractilidad fibroblástica, producción de colágeno tipo III y elastina, proliferación celular y angiogénesis con menor inflamación que los rellenos de ácido hialurónico.',
  },
  {
    author: 'Coleman et al., 2008',
    type: 'Estudio histológico',
    topic: 'Neocolagénesis',
    title: 'Formación de neocolágeno (modelo canino)',
    desc: 'Estableció histológicamente la formación de neocolágeno alrededor de la hidroxiapatita de calcio tras inyección intradérmica y subcutánea, con evidencia de remodelado tisular activo a varios meses de seguimiento.',
  },
  {
    author: 'Ferreira et al., 2025',
    type: 'Revisión sistemática PRISMA',
    topic: 'Rejuvenecimiento facial',
    title: 'Bioinductores de colágeno en estética facial',
    desc: 'Revisión de 14 estudios. Mejoras significativas en elasticidad, reducción de arrugas y volumen facial. Duración del efecto con hidroxiapatita: 12–18 meses. Eventos adversos leves. Conclusión: eficaz y seguro.',
  },
  {
    author: 'Yutskovskaya et al., 2020',
    type: 'Ensayo clínico aleatorizado',
    topic: 'Skin tightening',
    title: 'CaHA diluida + ultrasonido microfocalizado',
    desc: 'Estudio controlado que evalúa la combinación de hidroxiapatita de calcio hiperdiluida con ultrasonido microfocalizado para mejorar la laxitud cutánea. Mejoría significativa en firmeza con perfil de seguridad favorable.',
  },
  {
    author: 'Goldie et al., 2018',
    type: 'Consenso internacional',
    topic: 'Aplicación corporal',
    title: 'Uso diluido e hiperdiluido — cara y cuerpo',
    desc: 'Consenso global que estableció recomendaciones para diluciones 1:1 a ≥1:2. La hidroxiapatita diluida estimula neocolagénesis dirigida en mejillas, cuello, escote, brazos, abdomen, muslos y glúteos.',
  },
  {
    author: 'Lorenc et al., 2022',
    type: 'Guía práctica de expertos',
    topic: 'Celulitis y estrías',
    title: 'Dilución, selección y técnica de aplicación',
    desc: 'Guía de doce inyectores expertos. Efectividad demostrada en celulitis y estrías. Predominancia de colágeno tipo I y ausencia de infiltrados linfocíticos confirman perfil regenerativo sin fibrosis crónica.',
  },
  {
    author: 'Di Sessa et al., 2025',
    type: 'Estudio observacional',
    topic: 'Región glútea',
    title: 'Mejoría glútea y celulitis moderada-severa',
    desc: 'Diez mujeres, sesión única. A los 90 días: flacidez mejoró en 9/10 pacientes, celulitis dinámica mejoró, 100% de satisfacción referida. Apoya el abordaje combinado en manejo integral de la región glútea.',
  },
];

function Evidence() {
  return (
    <section className="section" id="evidencia">
      <div className="wrap">
        <SectionHead
          num="05 / 06"
          eyebrow="Evidencia científica"
          title="Respaldo clínico y<br/><em>científico</em>."
        >
          <p style={{ fontSize: 'var(--t-body-lg)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '58ch', marginTop: 16 }}>
            Los mecanismos de acción de la hidroxiapatita de calcio están validados en estudios
            histológicos, revisiones sistemáticas y consensos internacionales de expertos.
          </p>
          <a href="#" className="link-arrow" style={{ marginTop: 28 }}>
            Bibliografía completa <span className="arr">→</span>
          </a>
        </SectionHead>

        <div className="evidence-grid reveal">
          {STUDIES.map((s, i) => (
            <article key={i} className="evidence-row">
              <div className="evidence-row__meta">
                <span className="evidence-row__author">{s.author}</span>
                <span className="evidence-row__type">{s.type}</span>
              </div>
              <div>
                <span className="evidence-row__topic">{s.topic}</span>
                <h4 className="evidence-row__title">{s.title}</h4>
                <p className="evidence-row__desc">{s.desc}</p>
              </div>
              <a href="#" className="evidence-row__cta">Ver publicación →</a>
            </article>
          ))}
        </div>

        <div className="evidence-note">
          <div className="evidence-note__item">
            <h5>Uso exclusivo para médicos</h5>
            <p>
              Sveltea es un dispositivo médico de uso exclusivo por médicos entrenados en
              técnicas de inyectables estéticos. No es un producto de venta libre.
            </p>
          </div>
          <div className="evidence-note__item">
            <h5>Contraindicaciones</h5>
            <p>
              No se utiliza en infección activa, tejidos desvitalizados, embarazo, lactancia,
              ni en personas con hipersensibilidad a productos bovinos o lidocaína.
            </p>
          </div>
          <div className="evidence-note__item">
            <h5>Información regulatoria</h5>
            <p>
              Fabricado por Cellstech. Esterilizado por óxido de etileno. Producto de un solo
              uso. Registro INVIMA: 2022DM-0025405. Producto de prescripción médica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ComoFunciona, Applications, Evidence });
