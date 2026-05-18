import { SectionHead } from './ui'
import { ArrowIcon } from './ui'

const PRODUCTS = [
  {
    tag: 'Hidroxiapatita pura',
    name: <><em>Sveltea</em></>,
    nameRaw: 'Sveltea',
    sub: 'El efecto bioestimulador, sin matices.',
    items: [
      'Manejo de celulitis con subcisión',
      'Bioestimulación pura facial',
      'Soporte estructural profundo',
      'Irregularidades posquirúrgicas',
    ],
    link: '#aplicaciones',
  },
  {
    tag: 'Con ácido hialurónico no entrecruzado',
    name: <>Sveltea<em>+</em></>,
    nameRaw: 'Sveltea+',
    sub: 'Hidratación inmediata y efecto puente.',
    items: [
      'Rejuvenecimiento facial superficial',
      'Piel delgada o sensible',
      'Efecto inmediato visible de puente',
      'Zonas de transición suave',
    ],
    link: '#evidencia',
  },
]

export default function Presentations() {
  return (
    <section className="section section--warm" id="presentaciones">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Dos presentaciones, una misma tecnología"
          title={"Elige la presentación<br/><em>adecuada</em> para cada indicación."}
        />

        <div className="dual">
          {PRODUCTS.map((product, i) => (
            <div key={i} className="product-card reveal" data-d={String(i + 1)}>
              <div>
                <span className="product-card__tag">{product.tag}</span>
              </div>
              <div className="product-card__name">{product.name}</div>
              <p className="product-card__sub">{product.sub}</p>
              <ul className="product-card__items">
                {product.items.map((item) => (
                  <li key={item} className="product-card__item">
                    {item}
                  </li>
                ))}
              </ul>
              <a href={product.link} className="link-arrow">
                Ver aplicaciones <ArrowIcon size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
