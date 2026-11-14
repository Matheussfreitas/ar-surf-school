import { useState } from 'react'
import { FEATURED_PLAN_INDEX, plans, rules, singleLessons, WHATSAPP_URL, type PlanMode } from '../data'
import { Dot } from './Dot'

const modes: { id: PlanMode; label: string }[] = [
  { id: 'coletivo', label: 'Coletivo' },
  { id: 'individual', label: 'Individual' },
]

const perks = ['1 hora por aula', 'Instrutor capacitado']

export function Pricing() {
  const [mode, setMode] = useState<PlanMode>('coletivo')

  return (
    <section id="pacotes" className="pricing">
      <div className="container section">
        <div className="section-head">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 className="section-title">
              PACOTES
              <br />E VALORES
            </h2>
            <p className="pricing__lead">Escolha o pacote ideal para sua jornada no surf</p>
          </div>
          <div className="toggle" role="group" aria-label="Tipo de turma">
            {modes.map((m) => (
              <button key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="plans">
          {plans[mode].map((p, i) => (
            <article key={p.name} className={`plan${i === FEATURED_PLAN_INDEX ? ' plan--featured' : ''}`}>
              <span className="plan__name">{p.name.toUpperCase()}</span>
              <span className="plan__count">{p.lessons} AULAS</span>
              <span className="plan__price">R$ {p.price}</span>
              {perks.map((perk) => (
                <span key={perk} className="plan__perk">
                  <Dot size={8} />
                  {perk}
                </span>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="plan__cta">
                Agendar no WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="single">
          <h3>AULAS AVULSAS / EXPERIMENTAIS</h3>
          <div className="single__grid">
            {singleLessons.map((s) => (
              <div key={s.label} className="single__item">
                <span>{s.label}</span>
                <span>R$ {s.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rules">
          <div className="rules__head">
            <span className="tag">ATENÇÃO</span>
            <h3>
              REGRAS
              <br />
              IMPORTANTES
            </h3>
          </div>
          <div className="rules__list">
            {rules.map((r, i) => (
              <div key={r.title} className="rule">
                <span className="rule__num">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <b>{r.title}</b> {r.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
