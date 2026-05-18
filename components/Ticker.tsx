const ITEMS = [
  'Bioinducción de colágeno autólogo',
  'Hidroxiapatita de calcio < 45 μm',
  'Manejo integral de la celulitis',
  'Rejuvenecimiento facial',
  'Mejoría visible desde la primera sesión',
  'Respaldo clínico internacional',
]

export default function Ticker() {
  // Duplicate items for seamless loop
  const allItems = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {allItems.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
