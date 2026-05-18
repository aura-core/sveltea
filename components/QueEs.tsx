import { SectionHead } from './ui'

const SPECS = [
  { val: '< 45 μm', label: 'Tamaño de partícula' },
  { val: '12–18 m', label: 'Duración del efecto' },
  { val: '300 mg', label: 'Presentación estándar' },
  { val: '1000 mg', label: 'Presentación profesional' },
]

export default function QueEs() {
  return (
    <section className="section" id="que-es">
      <div className="wrap">
        <SectionHead
          num="02 / 06"
          eyebrow="Qué es Sveltea"
          title={"Un implante inyectable<br/>que <em>enseña al tejido</em><br/>a reconstruirse."}
        />

        <div className="manifesto reveal" data-d="1">
          {/* Left: lead */}
          <p className="manifesto__lead">
            La diferencia entre un relleno tradicional y un bioinductor está{' '}
            <strong>justamente ahí</strong>: el primero ocupa un espacio que el
            cuerpo reabsorbe; el segundo enseña al tejido a reconstruirse.
          </p>

          {/* Right: body */}
          <div className="manifesto__body">
            <p>
              Sveltea es una suspensión de hidroxiapatita de calcio de origen
              bovino con partículas calibradas por debajo de los 45 micrómetros.
              Su tamaño controlado garantiza una distribución homogénea en el
              plano subcutáneo y maximiza la superficie de contacto con los
              fibroblastos del tejido receptor.
            </p>
            <p>
              Tras la aplicación, las partículas actúan como un andamio biológico
              temporal. A medida que el organismo las metaboliza —convirtiéndolas
              en calcio y fosfato absorbibles—, deja en su lugar colágeno autólogo
              tipo I y III sintetizado por los propios fibroblastos del paciente.
              El implante desaparece; el tejido reconstruido permanece.
            </p>
          </div>
        </div>

        <div className="spec-grid reveal" data-d="2">
          {SPECS.map((s) => (
            <div key={s.label} className="spec-grid__cell">
              <span className="spec-grid__val">{s.val}</span>
              <span className="spec-grid__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
