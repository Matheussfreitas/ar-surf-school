import { images } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'
import { SectionHead } from './SectionHead'

export function Classes() {
  const { t } = useI18n()
  return (
    <section id="aulas" className="container section">
      <SectionHead title={<RichText text={t.classes.title} />} lead={t.classes.lead} />
      <div className="classes">
        <div className="classes__photo">
          <img className="cover-img" src={images.aulas} alt={t.classes.photoAlt} loading="lazy" />
        </div>
        <div className="classes__list">
          {t.classes.items.map((c) => (
            <article key={c.title} className="class-card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
