import { images, WHATSAPP_URL } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'

export function Hero() {
  const { t } = useI18n()
  return (
    <section id="topo" className="container hero">
      <div className="hero__copy">
        <span className="eyebrow">{t.hero.eyebrow}</span>
        <h1 className="display hero__title">
          <RichText text={t.hero.title} />
        </h1>
        <p className="hero__text">{t.hero.text}</p>
        <div className="hero__actions">
          <a href="#pacotes" className="btn hero__cta">
            {t.hero.ctaPlans}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-outline hero__whats">
            {t.hero.ctaWhatsapp}
          </a>
        </div>
      </div>
      <div className="hero__art">
        <div className="hero__photo">
          <img className="cover-img" src={images.heroGalera} alt={t.hero.photoAlt} fetchPriority="high" />
        </div>
        <div className="hero__sun" aria-hidden="true" />
        <div className="hero__badge">
          <strong>{t.hero.badgeValue}</strong>
          <span>
            {t.hero.badgeLines[0]}
            <br />
            {t.hero.badgeLines[1]}
          </span>
        </div>
      </div>
    </section>
  )
}
