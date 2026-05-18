'use client'
import { useState, FormEvent } from 'react'
import { SectionHead, ArrowIcon } from './ui'

type Route = 'patient' | 'pro'

export default function Contact() {
  const [route, setRoute] = useState<Route>('patient')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const cardTitle =
    route === 'patient'
      ? 'Encuentra un <em>profesional</em> certificado'
      : 'Acceso para <em>médicos</em> y distribuidores'

  const cardDesc =
    route === 'patient'
      ? 'Ingresa tu ciudad y te conectamos con médicos entrenados en Sveltea con datos de contacto directo. Nuestra red de aplicadores certificados garantiza la calidad del procedimiento.'
      : 'Solicita acceso al protocolo clínico completo, tabla de diluciones, videos de procedimiento, formación continua y soporte directo de la dirección médica.'

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <SectionHead
          num="—"
          eyebrow="Contacto"
          title={'Hablemos<br/>de <em>Sveltea</em>.'}
        >
          <p className="sec-head__desc">
            Dos rutas de contacto: para pacientes que buscan un profesional
            certificado, y para médicos y distribuidores.
          </p>
        </SectionHead>

        {/* Route toggle */}
        <div className="route-toggle reveal" data-d="1">
          <button
            className={`route-toggle__btn${route === 'patient' ? ' route-toggle__btn--active' : ''}`}
            onClick={() => setRoute('patient')}
          >
            Soy paciente
          </button>
          <button
            className={`route-toggle__btn${route === 'pro' ? ' route-toggle__btn--active' : ''}`}
            onClick={() => setRoute('pro')}
          >
            Soy profesional
          </button>
        </div>

        <div className="contact-grid">
          {/* Left card: info */}
          <div className="contact-card reveal" data-d="1">
            <h3
              className="contact-card__title"
              dangerouslySetInnerHTML={{ __html: cardTitle }}
            />
            <p className="contact-card__desc">
              {cardDesc}
            </p>

            <div className="contact-info">
              <div className="contact-info__item">
                <span className="contact-info__label">Teléfono / WhatsApp</span>
                <span className="contact-info__value">
                  <a href="tel:+573016001737">+57 301 600 1737</a>
                </span>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">Email</span>
                <span className="contact-info__value">
                  <a href="mailto:contacto@sveltea.com.co">contacto@sveltea.com.co</a>
                </span>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">Fabricante</span>
                <span className="contact-info__value">Cellstech</span>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">INVIMA</span>
                <span className="contact-info__value">2022DM-0025405</span>
              </div>
            </div>

            <a
              href="https://wa.me/573016001737"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--filled"
            >
              {route === 'patient' ? 'Escribir por WhatsApp' : 'Solicitar acceso profesional'}
              <ArrowIcon size={12} />
            </a>
          </div>

          {/* Right card: form */}
          <div className="form-card reveal" data-d="2">
            <h3 className="form-card__title">
              Solicita <em>información</em>
            </h3>

            {submitted ? (
              <div className="form-card__thanks">
                <span className="form-card__thanks-title">
                  Gracias.
                </span>
                <p className="form-card__thanks-copy">
                  Te responderemos en menos de 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label className="field__label" htmlFor="nombre">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className="field__input"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="correo">
                      Correo electrónico
                    </label>
                    <input
                      id="correo"
                      type="email"
                      className="field__input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="telefono">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="field__input"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="ciudad">
                      Ciudad
                    </label>
                    <input
                      id="ciudad"
                      type="text"
                      className="field__input"
                      placeholder="Tu ciudad"
                    />
                  </div>
                  <div className="field field--full">
                    <label className="field__label" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="field__textarea"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <div className="field field--consent field--full">
                    <input type="checkbox" id="consent" required />
                    <label htmlFor="consent">
                      He leído y acepto la política de tratamiento de datos personales.
                      Esta información no sustituye la consulta médica.
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn--filled form-submit">
                  Enviar solicitud <ArrowIcon size={12} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
