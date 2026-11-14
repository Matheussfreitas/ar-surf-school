import { images } from '../data'
import { useI18n } from '../i18n/context'

export function Founder() {
  const { t } = useI18n()
  const f = t.founder
  return (
    <section id="fundadora" className="founder">
      <div className="container founder__grid">
        <div className="founder__art">
          <div className="founder__photo">
            <img className="cover-img" src={images.fundadora} alt={f.photoAlt} loading="lazy" />
          </div>
          <div className="founder__badge">
            <strong>{f.badgeValue}</strong>
            <span>{f.badgeLabel}</span>
          </div>
        </div>
        <div className="founder__copy">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="display founder__name">ALESSANDRA RAMOS DE ALMEIDA</h2>
          <span className="founder__role">{f.role}</span>
          <p className="founder__bio">{f.bio}</p>
          <div className="callout callout--dark">
            <span className="tag" style={{ background: 'var(--yellow)', color: 'var(--navy)' }}>
              {f.titlesTag}
            </span>
            <p>{f.titles}</p>
          </div>
          <div className="callout callout--light">
            <span className="tag" style={{ background: 'var(--red)', color: '#fff' }}>
              {f.missionTag}
            </span>
            <p>{f.mission}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
