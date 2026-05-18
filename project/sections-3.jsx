// Professional zone, FAQ, Contact, Footer

function ProZone() {
  const items = [
    { num: '01', label: 'Protocolo clínico de celulitis' },
    { num: '02', label: 'Tabla de diluciones por indicación' },
    { num: '03', label: 'Videos de procedimiento' },
    { num: '04', label: 'Consentimiento informado modelo' },
    { num: '05', label: 'Formación continua y webinars' },
    { num: '06', label: 'Cálculo de dosis máxima de lidocaína' },
  ];
  return (
    <section className="section pro-zone" id="profesionales">
      <div className="wrap">
        <SectionHead
          num="06 / 06"
          eyebrow="Zona de profesionales"
          title="Acceso exclusivo<br/>para <em>médicos registrados</em>."
        >
          <p style={{ fontSize: 'var(--t-body-lg)', lineHeight: 1.65, color: 'rgba(244,239,231,0.78)', maxWidth: '58ch', marginTop: 16 }}>
            La zona de profesionales reúne el protocolo clínico de manejo integral de la
            celulitis, la técnica de aplicación facial multiplano, recomendaciones de dilución,
            videos de procedimiento y formatos de consentimiento informado. Las consultas
            técnicas son atendidas directamente por la dirección médica de Cellstech.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href="#contacto" className="btn btn--filled">Solicitar acceso <ArrowIcon /></a>
            <a href="#" className="btn">Iniciar sesión</a>
          </div>
        </SectionHead>

        <div className="pro-grid reveal">
          {items.map((it, i) => (
            <div key={i} className="pro-grid__item">
              <span className="num">— {it.num}</span>
              <span className="label">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_PATIENT = [
  { q: '¿Sveltea es lo mismo que un relleno de ácido hialurónico?', a: 'No. Un relleno de ácido hialurónico ocupa un espacio que el cuerpo reabsorbe progresivamente. Sveltea es un bioinductor: la hidroxiapatita actúa como andamio biológico para que tu propio organismo genere colágeno autólogo. El producto se metaboliza por completo y permanece únicamente el colágeno que tu cuerpo formó.' },
  { q: '¿Cuándo se ven los resultados?', a: 'Hay un efecto volumétrico inicial visible desde la primera sesión (días 0–30). La neocolagénesis comienza entre el mes 1 y el 3 con colágeno tipo III. El pico de respuesta biológica —cuando se ve mayor firmeza y mejor calidad de piel— ocurre entre el mes 3 y el 6 con la conversión a colágeno tipo I.' },
  { q: '¿Cuánto duran los resultados?', a: 'La duración clínica documentada es de 12 a 18 meses. La hidroxiapatita se metaboliza completamente, pero el colágeno autólogo formado por tu organismo persiste más allá de ese periodo.' },
  { q: '¿Es doloroso el procedimiento?', a: 'El procedimiento es ambulatorio y bien tolerado. Tu médico utilizará anestesia local o lidocaína dentro del producto según la zona a tratar. Los eventos adversos más frecuentes reportados en la literatura son leves y transitorios (dolor leve y edema).' },
  { q: '¿Qué cuidados requiere después?', a: 'Tu médico te entregará una guía de cuidados según la indicación. En general: evitar masajes intensos sobre la zona durante las primeras semanas, hidratación adecuada, protección solar y seguir las recomendaciones específicas que reciba durante la consulta.' },
  { q: '¿Cuántas sesiones se necesitan?', a: 'Depende de la indicación y de la evaluación clínica individual. Tu médico definirá el plan de tratamiento durante la consulta de valoración, considerando objetivos, anatomía y zona a tratar.' },
];

const FAQ_PRO = [
  { q: '¿Cuál es la dilución recomendada por indicación?', a: 'La dilución varía según el objetivo clínico: concentrada para soporte estructural profundo, 1:1 a 1:2 para mejora de calidad de piel, e hiperdiluciones (≥1:2) para uso corporal según el consenso Goldie 2018. La tabla completa de diluciones está disponible en la zona de profesionales.' },
  { q: '¿Cómo se realiza la subcisión combinada en manejo de celulitis?', a: 'El protocolo combina subcisión selectiva de septos fibrosos con aplicación inmediata de Sveltea en hidroxiapatita pura (sin AH). El protocolo clínico completo, incluyendo selección del paciente, técnica, profundidad y manejo posoperatorio, está disponible en la zona profesional.' },
  { q: '¿Cuándo elegir Sveltea+ sobre Sveltea puro?', a: 'Sveltea+ (con AH no entrecruzado) se prefiere en piel delgada o sensible, rejuvenecimiento facial superficial, zonas de transición suave y cuando se busca un efecto puente inmediato. Sveltea puro es preferible donde el efecto bioestimulador puro es prioritario y donde el AH aumenta el riesgo de acumulación focal (notablemente en celulitis con subcisión).' },
  { q: '¿Cómo se calcula la dosis máxima de lidocaína?', a: 'La zona profesional incluye una calculadora interactiva de dosis máxima de lidocaína por peso del paciente y concentración utilizada, junto con recomendaciones de manejo de eventos adversos relacionados.' },
  { q: '¿Cómo solicito formación y certificación?', a: 'La formación es presencial y online. Solicita acceso a la zona de profesionales y nuestro equipo médico te contactará con el calendario de webinars y los próximos cursos presenciales en Colombia.' },
  { q: '¿Cómo me conecto con la dirección médica de Cellstech?', a: 'Las consultas técnicas son atendidas directamente por la dirección médica de Cellstech a través del canal habilitado en la zona profesional. Tiempo de respuesta promedio: 24 horas hábiles.' },
];

function FAQItem({ q, a, num, open, onClick }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-item__q" onClick={onClick}>
        <span className="faq-item__q-num">{num}</span>
        <span style={{ flex: 1 }}>{q}</span>
        <span className="faq-item__icon"><PlusIcon /></span>
      </button>
      <div className="faq-item__a">
        <div className="faq-item__a-inner">{a}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const [tab, setTab] = React.useState('patient');
  const [open, setOpen] = React.useState(0);
  const items = tab === 'patient' ? FAQ_PATIENT : FAQ_PRO;
  React.useEffect(() => setOpen(0), [tab]);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Preguntas frecuentes"
          title="Resolvemos<br/>tus <em>dudas</em>."
        >
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 16, lineHeight: 1.6 }}>
            FAQ doble: para pacientes y para profesionales. Selecciona tu perfil.
          </p>
        </SectionHead>

        <div className="faq-tabs">
          <button
            className={`faq-tabs__btn ${tab === 'patient' ? 'active' : ''}`}
            onClick={() => setTab('patient')}
          >Para pacientes</button>
          <button
            className={`faq-tabs__btn ${tab === 'pro' ? 'active' : ''}`}
            onClick={() => setTab('pro')}
          >Para profesionales</button>
        </div>

        <div className="faq-list">
          {items.map((it, i) => (
            <FAQItem
              key={`${tab}-${i}`}
              q={it.q}
              a={it.a}
              num={String(i + 1).padStart(2, '0')}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span className="eyebrow">¿Otra pregunta?</span>
          <a href="#contacto" className="link-arrow">Contáctanos <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [route, setRoute] = React.useState('patient');

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Contacto"
          title="Hablemos<br/>de <em>Sveltea</em>."
        >
          <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--ink-soft)', marginTop: 16, lineHeight: 1.6, maxWidth: '50ch' }}>
            Dos rutas de contacto: para pacientes que buscan un profesional certificado, y
            para médicos y distribuidores.
          </p>
          <div className="contact-routes" style={{ marginTop: 24 }}>
            <button
              className={`contact-routes__btn ${route === 'patient' ? 'active' : ''}`}
              onClick={() => setRoute('patient')}
            >Soy paciente</button>
            <button
              className={`contact-routes__btn ${route === 'pro' ? 'active' : ''}`}
              onClick={() => setRoute('pro')}
            >Soy profesional</button>
          </div>
        </SectionHead>

        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>
              {route === 'patient'
                ? <>Encuentra un <em>profesional</em> certificado</>
                : <>Acceso para <em>médicos</em> y distribuidores</>}
            </h3>
            <p>
              {route === 'patient'
                ? 'Ingresa tu ciudad y te conectamos con médicos entrenados en Sveltea con datos de contacto directo. Nuestra red de aplicadores certificados garantiza la calidad del procedimiento.'
                : 'Solicita acceso al protocolo clínico completo, tabla de diluciones, videos de procedimiento, formación continua y soporte directo de la dirección médica.'}
            </p>

            <div className="contact-info">
              <div className="contact-info__item">
                <div className="label">Teléfono / WhatsApp</div>
                <div className="value">+57 301 600 1737</div>
              </div>
              <div className="contact-info__item">
                <div className="label">Email</div>
                <div className="value" style={{ fontSize: 14 }}>contacto@sveltea.com.co</div>
              </div>
              <div className="contact-info__item">
                <div className="label">Fabricante</div>
                <div className="value">Cellstech</div>
              </div>
              <div className="contact-info__item">
                <div className="label">INVIMA</div>
                <div className="value" style={{ fontSize: 14 }}>2022DM-0025405</div>
              </div>
            </div>

            <a href="https://wa.me/573016001737" className="btn btn--filled">
              {route === 'patient' ? 'Atención directa por WhatsApp' : 'Solicitar acceso profesional'}
              <ArrowIcon />
            </a>
          </div>

          <div className="contact-card reveal" data-d="1">
            <h3>Solicita <em>información</em></h3>
            <p>Te respondemos en menos de 24 horas hábiles.</p>

            <form className="form-grid" onSubmit={(e) => { e.preventDefault(); alert('Formulario enviado'); }}>
              <div className="field">
                <label htmlFor="name">Nombre completo</label>
                <input id="name" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input id="phone" type="tel" placeholder="+57 300 000 0000" />
              </div>
              <div className="field">
                <label htmlFor="city">Ciudad</label>
                <input id="city" type="text" placeholder="Tu ciudad" />
              </div>
              <div className="field">
                <label htmlFor="msg">Mensaje</label>
                <textarea id="msg" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <label className="check">
                <input type="checkbox" required />
                <span>He leído y acepto la política de tratamiento de datos personales.</span>
              </label>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--stone)' }}>
                  No sustituye consulta médica
                </span>
                <button type="submit" className="btn btn--filled">Enviar <ArrowIcon /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand-name">SVELTEA<span style={{ color: '#C99463' }}>.</span></div>
            <p className="footer__brand-desc">
              Bioinductor de colágeno con hidroxiapatita de calcio. Diseñado para
              rejuvenecimiento facial y manejo integral de la celulitis. Fabricado por Cellstech.
            </p>
            <span className="mono" style={{ color: 'rgba(244,239,231,0.5)' }}>+57 301 600 1737</span>
          </div>
          <div className="footer__col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="#que-es">Qué es Sveltea</a></li>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#aplicaciones">Aplicaciones</a></li>
              <li><a href="#presentaciones">Sveltea+</a></li>
              <li><a href="#evidencia">Evidencia científica</a></li>
              <li><a href="#profesionales">Zona de profesionales</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Servicio al cliente</h5>
            <ul>
              <li><a href="#faq">Preguntas frecuentes</a></li>
              <li><a href="#contacto">Localizador de profesionales</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Información regulatoria</a></li>
              <li><a href="#">Soporte técnico</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Contacto</h5>
            <ul>
              <li>+57 301 600 1737</li>
              <li>contacto@sveltea.com.co</li>
              <li>Colombia</li>
              <li style={{ color: 'rgba(244,239,231,0.5)' }}>Lun–Vie: 8am–6pm</li>
              <li style={{ marginTop: 14 }}><a href="https://wa.me/573016001737" style={{ color: '#C99463' }}>WhatsApp →</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 SVELTEA® · CELLSTECH</span>
          <span>INVIMA 2022DM-0025405</span>
          <span>BIOINDUCTOR DE COLÁGENO</span>
        </div>

        <p className="footer__regulatory">
          Sveltea es un dispositivo médico fabricado por Cellstech. Producto esterilizado por
          óxido de etileno, de un solo uso. Reservado al uso exclusivo de profesionales de la
          salud entrenados en técnicas de inyectables estéticos. Producto de prescripción
          médica. La información presentada en este sitio no sustituye la consulta médica.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { ProZone, FAQ, Contact, Footer });
