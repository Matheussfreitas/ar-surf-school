import { gallery } from '../data'
import { useI18n } from '../i18n/context'
import { Dot } from './Dot'
import { RichText } from './RichText'
import { SectionHead } from './SectionHead'

export function Structure() {
  const { t } = useI18n()
  return (
    <section id="estrutura" className="structure">
      <div className="container section">
        <SectionHead
          title={<RichText text={t.structure.title} accentClassName="accent-yellow" />}
          lead={t.structure.lead}
        />
        <div className="gallery">
          {gallery.map((g, i) => (
            <div
              key={g.src}
              className={`gallery__item${g.wide ? ' gallery__item--wide' : ''}`}
              style={{ borderColor: g.border }}
            >
              <img className="cover-img" src={g.src} alt={t.structure.gallery[i]} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="chips">
          {t.structure.amenities.map((a) => (
            <span key={a} className="chip">
              <Dot />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
