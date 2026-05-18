import { SectionHead } from './ui'
import ProcedureViz from './ProcedureViz'

const STEPS = [
  {
    period: 'Días 0–30',
    heading: 'Efecto <em>volumétrico</em> inicial',
    desc: 'Discreto volumen dependiente de la dilución utilizada. Las partículas de hidroxiapatita ocupan el espacio intersticial y activan la primera respuesta tisular.',
  },
  {
    period: 'Mes 1–3',
    heading: 'Inicio de <em>neocolagénesis</em>',
    desc: 'Activación fibroblástica con depósito predominante de colágeno tipo III. Inicio del proceso de andamiaje biológico y reorganización del tejido conectivo.',
  },
  {
    period: 'Mes 3–6',
    heading: 'Pico de <em>respuesta biológica</em>',
    desc: 'Conversión progresiva a colágeno tipo I. Mayor firmeza clínica y mejora visible de la calidad de la piel. Estimulación de angiogénesis.',
  },
  {
    period: 'Mes 6–18',
    heading: 'Mantenimiento y <em>persistencia</em>',
    desc: 'Metabolización progresiva de la hidroxiapatita a calcio y fosfato. El colágeno autólogo formado persiste. Efecto clínico sostenido documentado hasta 18 meses.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="section section--warm" id="como-funciona">
      <div className="wrap">
        <SectionHead
          num="03 / 06"
          eyebrow="Cómo funciona"
          title={'Bioinducción de <em>colágeno</em>.<br/>Una cronología fisiológica.'}
        >
          <p className="sec-head__desc">
            Los fibroblastos reconocen la hidroxiapatita como una señal de daño
            tisular y responden sintetizando colágeno. La cronología de esta
            respuesta es predecible, reproducible y documentada en múltiples
            estudios clínicos.
          </p>
        </SectionHead>

        {/* Timeline */}
        <div className="timeline reveal" data-d="1">
          <div className="timeline__rail" />
          {STEPS.map((step, i) => (
            <div key={i} className="timeline__step">
              <div className="timeline__dot" />
              <div className="timeline__period">{step.period}</div>
              <h3
                className="timeline__heading"
                dangerouslySetInnerHTML={{ __html: step.heading }}
              />
              <p className="timeline__desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Procedure visualization */}
        <div className="reveal" data-d="2">
          <ProcedureViz />
        </div>
      </div>
    </section>
  )
}
