import { team } from '../data'
import { useI18n } from '../i18n/context'
import { RichText } from './RichText'
import { SectionHead } from './SectionHead'

export function Team() {
  const { t } = useI18n()
  return (
    <section id="equipe" className="container section">
      <SectionHead title={<RichText text={t.team.title} />} lead={t.team.lead} leadMaxWidth={380} />
      <div className="team">
        {team.map((m) => (
          <article key={m.name} className="member">
            <div className="member__photo" style={{ background: m.bg }}>
              <img className="cover-img" src={m.photo} alt={m.name} loading="lazy" />
            </div>
            <b className="member__name">{m.name}</b>
            <span className="member__role">{t.team.roles[m.role]}</span>
            <a href="#" className="member__link">
              {t.team.profile}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
