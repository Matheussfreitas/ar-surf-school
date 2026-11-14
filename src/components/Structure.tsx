import { amenities, gallery } from '../data'
import { Dot } from './Dot'
import { SectionHead } from './SectionHead'

export function Structure() {
  return (
    <section id="estrutura" className="structure">
      <div className="container section">
        <SectionHead
          title={
            <>
              NOSSA
              <br />
              <span className="accent-yellow">INFRAESTRUTURA</span>
            </>
          }
          lead="Em frente ao pico: sai da aula, toma uma ducha e descansa sem sair da areia."
        />
        <div className="gallery">
          {gallery.map((g) => (
            <div
              key={g.alt}
              className={`gallery__item${g.wide ? ' gallery__item--wide' : ''}`}
              style={{ borderColor: g.border }}
            >
              <img className="cover-img" src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="chips">
          {amenities.map((a) => (
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
