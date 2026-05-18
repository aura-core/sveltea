'use client'
import { useState, useEffect } from 'react'
import { SectionHead, PlusIcon, ArrowIcon } from './ui'

interface FAQEntry {
  q: string
  a: string
}

const FAQ_PATIENT: FAQEntry[] = [
  {
    q: '¿Sveltea es lo mismo que un relleno de ácido hialurónico?',
    a: 'No. Un relleno de ácido hialurónico ocupa un espacio que el cuerpo reabsorbe progresivamente. Sveltea es un bioinductor: la hidroxiapatita actúa como andamio biológico para que tu propio organismo genere colágeno autólogo. El producto se metaboliza por completo y permanece únicamente el colágeno que tu cuerpo formó.',
  },
  {
    q: '¿Cuándo se ven los resultados?',
    a: 'Hay un efecto volumétrico inicial visible desde la primera sesión (días 0–30). La neocolagénesis comienza entre el mes 1 y el 3 con colágeno tipo III. El pico de respuesta biológica —cuando se ve mayor firmeza y mejor calidad de piel— ocurre entre el mes 3 y el 6 con la conversión a colágeno tipo I.',
  },
  {
    q: '¿Cuánto duran los resultados?',
    a: 'La duración clínica documentada es de 12 a 18 meses. La hidroxiapatita se metaboliza completamente, pero el colágeno autólogo formado por tu organismo persiste más allá de ese periodo.',
  },
  {
    q: '¿Es doloroso el procedimiento?',
    a: 'El procedimiento es ambulatorio y bien tolerado. Tu médico utilizará anestesia local o lidocaína dentro del producto según la zona a tratar. Los eventos adversos más frecuentes reportados en la literatura son leves y transitorios (dolor leve y edema).',
  },
  {
    q: '¿Qué cuidados requiere después?',
    a: 'Tu médico te entregará una guía de cuidados según la indicación. En general: evitar masajes intensos sobre la zona durante las primeras semanas, hidratación adecuada, protección solar y seguir las recomendaciones específicas que reciba durante la consulta.',
  },
  {
    q: '¿Cuántas sesiones se necesitan?',
    a: 'Depende de la indicación y de la evaluación clínica individual. Tu médico definirá el plan de tratamiento durante la consulta de valoración, considerando objetivos, anatomía y zona a tratar.',
  },
]

const FAQ_PRO: FAQEntry[] = [
  {
    q: '¿Cuál es la dilución recomendada por indicación?',
    a: 'La dilución varía según el objetivo clínico: concentrada para soporte estructural profundo, 1:1 a 1:2 para mejora de calidad de piel, e hiperdiluciones (≥1:2) para uso corporal según el consenso Goldie 2018. La tabla completa de diluciones está disponible en la zona de profesionales.',
  },
  {
    q: '¿Cómo se realiza la subcisión combinada en manejo de celulitis?',
    a: 'El protocolo combina subcisión selectiva de septos fibrosos con aplicación inmediata de Sveltea en hidroxiapatita pura (sin AH). El protocolo clínico completo, incluyendo selección del paciente, técnica, profundidad y manejo posoperatorio, está disponible en la zona profesional.',
  },
  {
    q: '¿Cuándo elegir Sveltea+ sobre Sveltea puro?',
    a: 'Sveltea+ (con AH no entrecruzado) se prefiere en piel delgada o sensible, rejuvenecimiento facial superficial, zonas de transición suave y cuando se busca un efecto puente inmediato. Sveltea puro es preferible donde el efecto bioestimulador puro es prioritario y donde el AH aumenta el riesgo de acumulación focal (notablemente en celulitis con subcisión).',
  },
  {
    q: '¿Cómo se calcula la dosis máxima de lidocaína?',
    a: 'La zona profesional incluye una calculadora interactiva de dosis máxima de lidocaína por peso del paciente y concentración utilizada, junto con recomendaciones de manejo de eventos adversos relacionados.',
  },
  {
    q: '¿Cómo solicito formación y certificación?',
    a: 'La formación es presencial y online. Solicita acceso a la zona de profesionales y nuestro equipo médico te contactará con el calendario de webinars y los próximos cursos presenciales en Colombia.',
  },
  {
    q: '¿Cómo me conecto con la dirección médica de Cellstech?',
    a: 'Las consultas técnicas son atendidas directamente por la dirección médica de Cellstech a través del canal habilitado en la zona profesional. Tiempo de respuesta promedio: 24 horas hábiles.',
  },
]

interface FAQItemProps {
  q: string
  a: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ q, a, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="faq-item">
      <button className="faq-item__trigger" onClick={onClick}>
        <span className="faq-item__question">{q}</span>
        <span className={`faq-item__icon${isOpen ? ' faq-item__icon--open' : ''}`}>
          <PlusIcon size={12} />
        </span>
      </button>
      <div className={`faq-item__answer${isOpen ? ' faq-item__answer--open' : ''}`}>
        <div className="faq-item__answer-inner">{a}</div>
      </div>
    </div>
  )
}

type TabKey = 'patient' | 'pro'

export default function FAQ() {
  const [tab, setTab] = useState<TabKey>('patient')
  const [openIdx, setOpenIdx] = useState<number>(0)
  const items = tab === 'patient' ? FAQ_PATIENT : FAQ_PRO

  useEffect(() => {
    setOpenIdx(0)
  }, [tab])

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Preguntas frecuentes"
          title={'Resolvemos<br/>tus <em>dudas</em>.'}
        />

        <div className="faq-tabs reveal" data-d="1">
          <button
            className={`faq-tabs__btn${tab === 'patient' ? ' faq-tabs__btn--active' : ''}`}
            onClick={() => setTab('patient')}
          >
            Para pacientes
          </button>
          <button
            className={`faq-tabs__btn${tab === 'pro' ? ' faq-tabs__btn--active' : ''}`}
            onClick={() => setTab('pro')}
          >
            Para profesionales
          </button>
        </div>

        <div className="faq-list reveal" data-d="2">
          {items.map((item, i) => (
            <FAQItem
              key={`${tab}-${i}`}
              q={item.q}
              a={item.a}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="faq-bottom reveal" data-d="3">
          <span className="eyebrow">¿Otra pregunta?</span>
          <a href="#contacto" className="link-arrow">
            Contáctanos <ArrowIcon size={11} />
          </a>
        </div>
      </div>
    </section>
  )
}
