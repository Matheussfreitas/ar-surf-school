import { classTypes, images } from '../data'
import { SectionHead } from './SectionHead'

export function Classes() {
  return (
    <section id="aulas" className="container section">
      <SectionHead
        title={
          <>
            AULAS E<br />
            <span className="accent">SERVIÇOS</span>
          </>
        }
        lead="Opções para todos os perfis e níveis de experiência"
      />
      <div className="classes">
        <div className="classes__photo">
          <img className="cover-img" src={images.aulas} alt="Aluna em pé na prancha" loading="lazy" />
        </div>
        <div className="classes__list">
          {classTypes.map((c) => (
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
