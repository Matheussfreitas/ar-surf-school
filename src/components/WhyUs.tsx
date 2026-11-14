import { featureSwatches } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'
import { SectionHead } from './SectionHead'

export function WhyUs() {
  const { t } = useI18n()
  return (
    <section id="por-que" className="container section">
      <SectionHead title={<RichText text={t.whyUs.title} />} titleMaxWidth={760} lead={t.whyUs.lead} />
      <div className="features">
        {t.whyUs.features.map((f, i) => {
          const swatch = featureSwatches[i % featureSwatches.length]
          return (
            <article key={i} className="feature">
              <span className="feature__num" style={{ background: swatch.bg, color: swatch.fg }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
