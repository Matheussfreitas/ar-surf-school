import logo from '../assets/img/logo.png'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <h2 className="display footer__title">
            BORA PRA
            <br />
            <span className="accent-yellow">ÁGUA?</span>
          </h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn footer__cta">
            Agendar no WhatsApp
          </a>
        </div>
        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="footer__logo">
              <img src={logo} alt="AR Surf School" width={48} height={48} />
            </span>
            <span>AR SURF SCHOOL</span>
          </div>
          <span>Av. Praia de Cotovelo, 160 · Parnamirim/RN</span>
          <div className="footer__links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
