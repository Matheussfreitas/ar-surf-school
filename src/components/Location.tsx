import { images, MAPS_URL, schedule, VIDEO_URL } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'

export function Location() {
  const { t } = useI18n()
  const l = t.location
  return (
    <section id="como-chegar" className="container location">
      <div className="location__copy">
        <div className="location__head">
          <h2 className="section-title">
            <RichText text={l.title} />
          </h2>
          <p>{l.lead}</p>
        </div>
        <div className="info-block">
          <span className="eyebrow">{l.addressLabel}</span>
          <span className="address">{l.address}</span>
          <span className="landmark">{l.landmark}</span>
        </div>
        <div className="info-block">
          <span className="eyebrow">{l.hoursLabel}</span>
          <div className="hours">
            {schedule.map((s) => {
              const info = l.schedule[s.key]
              return (
                <div key={s.key} className="hours__card" style={{ background: s.bg, color: s.fg }}>
                  <b>{info.period}</b>
                  <span className="hours__days">{info.days}</span>
                  <span>{info.hours}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="location__actions">
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn maps-btn">
            {l.mapsCta}
          </a>
          <a href={VIDEO_URL} target="_blank" rel="noreferrer" className="btn btn-outline video-btn">
            {l.videoCta}
          </a>
        </div>
      </div>
      <div className="location__art">
        <div className="location__sun" aria-hidden="true" />
        <div className="location__photo">
          <img className="cover-img" src={images.local} alt={l.photoAlt} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
