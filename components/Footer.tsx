import Image from 'next/image'

const RECURSOS_LINKS = [
  { href: '#que-es', label: 'Qué es Sveltea' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#aplicaciones', label: 'Aplicaciones' },
  { href: '#presentaciones', label: 'Sveltea+' },
  { href: '#evidencia', label: 'Evidencia científica' },
  { href: '#profesionales', label: 'Zona de profesionales' },
]

const SERVICIO_LINKS = [
  { href: '#faq', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Localizador de profesionales' },
  { href: '#', label: 'Política de privacidad' },
  { href: '#', label: 'Términos de uso' },
  { href: '#', label: 'Información regulatoria' },
  { href: '#', label: 'Soporte técnico' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          {/* Brand column */}
          <div>
            <div className="footer__brand-logo">
              <Image
                src="/logo_sveltea_bw.png"
                alt="Sveltea"
                width={420}
                height={104}
                className="footer__brand-logo-img"
              />
            </div>
            <p className="footer__brand-desc">
              Bioinductor de colágeno con hidroxiapatita de calcio. Diseñado para
              rejuvenecimiento facial y manejo integral de la celulitis. Fabricado
              por Cellstech. Medellín, Colombia.
            </p>
            <p className="footer__brand-phone">+57 301 600 1737</p>
          </div>

          {/* Recursos */}
          <div>
            <p className="footer__col-title">Recursos</p>
            <ul className="footer__links">
              {RECURSOS_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicio */}
          <div>
            <p className="footer__col-title">Servicio al cliente</p>
            <ul className="footer__links">
              {SERVICIO_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="footer__col-title">Contacto</p>
            <p className="footer__contact-item">
              <a href="tel:+573016001737">+57 301 600 1737</a>
            </p>
            <p className="footer__contact-item">
              <a href="mailto:contacto@sveltea.com.co">
                contacto@sveltea.com.co
              </a>
            </p>
            <p className="footer__contact-item">Colombia</p>
            <p className="footer__contact-item">Lun–Vie: 8am–6pm</p>
            <p className="footer__contact-item footer__contact-item--spaced">
              <a
                href="https://wa.me/573016001737"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-bar">
            <span className="footer__copyright">
              © 2026 SVELTEA® · CELLSTECH
            </span>
            <span className="footer__invima">
              INVIMA 2022DM-0025405 · BIOINDUCTOR DE COLÁGENO
            </span>
          </div>
          <p className="footer__disclaimer">
            Sveltea es un dispositivo médico fabricado por Cellstech. Producto
            esterilizado por óxido de etileno, de un solo uso. Reservado al uso
            exclusivo de profesionales de la salud entrenados en técnicas de
            inyectables estéticos. Producto de prescripción médica. La
            información presentada en este sitio no sustituye la consulta médica.
            Medellín, Colombia. Registro INVIMA 2022DM-0025405.
          </p>
        </div>
      </div>
    </footer>
  )
}
