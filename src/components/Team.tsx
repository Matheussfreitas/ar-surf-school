import { team } from '../data'
import { SectionHead } from './SectionHead'

export function Team() {
  return (
    <section id="equipe" className="container section">
      <SectionHead
        title={
          <>
            CONHEÇA
            <br />
            NOSSA <span className="accent">EQUIPE</span>
          </>
        }
        lead="Instrutores apaixonados pelo mar, pelo ensino e pela evolução de cada aluno."
        leadMaxWidth={380}
      />
      <div className="team">
        {team.map((m) => (
          <article key={m.name} className="member">
            <div className="member__photo" style={{ background: m.bg }}>
              <img className="cover-img" src={m.photo} alt={m.name} loading="lazy" />
            </div>
            <b className="member__name">{m.name}</b>
            <span className="member__role">{m.role}</span>
            <a href="#" className="member__link">
              Ver perfil
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
