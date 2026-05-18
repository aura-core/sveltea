import { SectionHead, ArrowIcon } from './ui'

interface Study {
  author: string
  type: string
  topic: string
  title: string
  desc: string
}

const STUDIES: Study[] = [
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
]

const NOTES = [
  {
    label: 'Uso exclusivo para médicos',
    text: 'Sveltea es un dispositivo médico implantable de uso exclusivo por médicos habilitados. No está indicado para automedicación ni para personal no médico.',
  },
  {
    label: 'Contraindicaciones',
    text: 'Hipersensibilidad conocida a componentes, embarazo, lactancia, infección activa en la zona a tratar, trastornos de coagulación no controlados, o enfermedades autoinmunes activas.',
  },
  {
    label: 'Información regulatoria',
    text: 'Registro INVIMA 2022DM-0025405. Fabricado por Cellstech. Cumple con la normativa vigente para dispositivos médicos en Colombia.',
  },
]

export default function Evidence() {
  return (
    <section className="section section--warm" id="evidencia">
      <div className="wrap">
        <SectionHead
          num="05 / 06"
          eyebrow="Evidencia científica"
          title={'Respaldo clínico y<br/><em>científico</em>.'}
        >
          <p className="sec-head__desc">
            Los mecanismos de acción de la hidroxiapatita de calcio como bioinductor
            están documentados en revisiones sistemáticas, ensayos clínicos y consensos
            de expertos internacionales.
          </p>
          <a href="#" className="link-arrow" style={{ marginTop: '16px', display: 'inline-flex' }}>
            Bibliografía completa <ArrowIcon size={11} />
          </a>
        </SectionHead>

        <div className="evidence-grid">
          {STUDIES.map((study, i) => (
            <div key={i} className="evidence-row reveal" data-d={String((i % 3) + 1)}>
              <div className="evidence-row__meta">
                <span className="evidence-row__author">{study.author}</span>
                <span className="evidence-row__type">{study.type}</span>
                <span className="evidence-row__topic">{study.topic}</span>
              </div>
              <div className="evidence-row__body">
                <h3 className="evidence-row__title">{study.title}</h3>
                <p className="evidence-row__desc">{study.desc}</p>
                <div className="evidence-row__link">
                  <a href="#" className="link-arrow">
                    Ver publicación <ArrowIcon size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="evidence-note reveal" data-d="1">
          {NOTES.map((note, i) => (
            <div key={i} className="evidence-note__item">
              <span className="evidence-note__label">{note.label}</span>
              <p className="evidence-note__text">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
