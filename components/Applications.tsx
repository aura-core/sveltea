'use client'
import { useState } from 'react'
import { SectionHead, ArrowIcon } from './ui'

type TabKey = 'facial' | 'celulitis'

interface TabData {
  title: string
  lede: string
  body: string
  points: string[]
}

const DATA: Record<TabKey, TabData> = {
  facial: {
    title: 'Rejuvenecimiento <em>facial</em> integral',
    lede: 'El envejecimiento facial combina pérdida de volumen, reabsorción ósea, descenso de tejidos y deterioro de la calidad de la piel. Sveltea aborda esas dimensiones según la técnica elegida por el médico.',
    body: 'En presentación concentrada actúa como soporte estructural profundo. Diluido o hiperdiluido, mejora laxitud cutánea, textura y firmeza en cuello, escote y rostro.',
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
    points: [
      'Subcisión selectiva de septos fibrosos',
      'Bioestimulación con hidroxiapatita',
      'Mejoría visible desde la primera sesión',
      'Aplicable en glúteos, muslos y abdomen',
      'Resultados respaldados por evidencia',
    ],
  },
}

export default function Applications() {
  const [tab, setTab] = useState<TabKey>('facial')
  const d = DATA[tab]

  return (
    <section className="section" id="aplicaciones">
      <div className="wrap">
        <SectionHead
          num="04 / 06"
          eyebrow="Aplicaciones"
          title={'Dos indicaciones,<br/>un mismo <em>mecanismo</em>.'}
        />

        <div className="app-toggle">
          <button
            className={`app-toggle__btn${tab === 'facial' ? ' app-toggle__btn--active' : ''}`}
            onClick={() => setTab('facial')}
          >
            Rejuvenecimiento facial
          </button>
          <button
            className={`app-toggle__btn${tab === 'celulitis' ? ' app-toggle__btn--active' : ''}`}
            onClick={() => setTab('celulitis')}
          >
            Manejo de celulitis
          </button>
        </div>

        <div className="app-content" key={tab}>
          {/* Left: copy */}
          <div>
            <h3
              className="app-content__title"
              dangerouslySetInnerHTML={{ __html: d.title }}
            />
            <p className="app-content__lede">{d.lede}</p>
            <p className="app-content__body">{d.body}</p>

            <ul className="app-content__points">
              {d.points.map((point) => (
                <li key={point} className="app-content__point">
                  {point}
                </li>
              ))}
            </ul>

            <div className="app-content__ctas">
              <a href="#contacto" className="btn btn--filled">
                Para pacientes <ArrowIcon size={12} />
              </a>
              <a href="#profesionales" className="btn btn--ghost">
                Para profesionales
              </a>
            </div>
          </div>

          <div className={`app-visual app-visual--${tab}`} aria-hidden="true">
            <div className="app-visual__inner">
              <span className="app-visual__particle app-visual__particle--one" />
              <span className="app-visual__particle app-visual__particle--two" />
              <span className="app-visual__line app-visual__line--one" />
              <span className="app-visual__line app-visual__line--two" />
              <span className="app-visual__line app-visual__line--three" />
              <span className="app-visual__mark">
                {tab === 'facial' ? '01' : '02'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
