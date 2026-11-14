import { features } from '../data'
import { SectionHead } from './SectionHead'

export function WhyUs() {
  return (
    <section id="por-que" className="container section">
      <SectionHead
        title={
          <>
            POR QUE A <span className="accent">AR SURF SCHOOL?</span>
          </>
        }
        titleMaxWidth={760}
        lead="Mais de 7 anos formando surfistas independentes no Rio Grande do Norte"
      />
      <div className="features">
        {features.map((f, i) => (
          <article key={f.title} className="feature">
            <span className="feature__num" style={{ background: f.swatch.bg, color: f.swatch.fg }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
