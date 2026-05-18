import { SectionHead, ArrowIcon } from './ui'

const PRO_ITEMS = [
  { num: '01', title: 'Protocolo clínico de celulitis' },
  { num: '02', title: 'Tabla de diluciones por indicación' },
  { num: '03', title: 'Videos de procedimiento' },
  { num: '04', title: 'Consentimiento informado modelo' },
  { num: '05', title: 'Formación continua y webinars' },
  { num: '06', title: 'Cálculo de dosis máxima de lidocaína' },
]

export default function ProZone() {
  return (
    <section className="section pro-zone" id="profesionales">
      <div className="wrap">
        <SectionHead
          num="06 / 06"
          eyebrow="Zona de profesionales"
          title={'Acceso exclusivo<br/>para <em>médicos registrados</em>.'}
        >
          <p className="sec-head__desc">
            La zona de profesionales reúne el protocolo clínico de manejo integral
            de la celulitis, la técnica de aplicación facial multiplano,
            recomendaciones de dilución, videos de procedimiento y formatos de
            consentimiento informado. Las consultas técnicas son atendidas
            directamente por la dirección médica de Cellstech.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '28px',
              flexWrap: 'wrap',
            }}
          >
            <a href="#contacto" className="btn btn--filled">
              Solicitar acceso <ArrowIcon size={12} />
            </a>
            <a href="#" className="btn">
              Iniciar sesión
            </a>
          </div>
        </SectionHead>

        <div className="pro-grid reveal" data-d="1">
          {PRO_ITEMS.map((item) => (
            <div key={item.num} className="pro-grid__item">
              <span className="pro-grid__num">{item.num}</span>
              <h3 className="pro-grid__title">{item.title}</h3>
              <div className="pro-grid__arrow">
                <ArrowIcon size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
