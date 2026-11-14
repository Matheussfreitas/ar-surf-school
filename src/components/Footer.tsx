import logo from '../assets/img/logo.png'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <h2 className="display footer__title">
            <RichText text={t.footer.title} accentClassName="accent-yellow" />
          </h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn footer__cta">
            {t.footer.cta}
          </a>
        </div>
        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="footer__logo">
              <img src={logo} alt="" width={48} height={48} />
            </span>
            <span>AR SURF SCHOOL</span>
          </div>
          <span>{t.footer.address}</span>
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
