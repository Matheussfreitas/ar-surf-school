import { useState } from 'react'
import { FEATURED_PLAN_INDEX, plans, singleLessons, WHATSAPP_URL, type PlanMode } from '../data'
import { useI18n } from '../i18n/context'
import { Dot } from './Dot'
import { RichText } from './RichText'

const modes: PlanMode[] = ['coletivo', 'individual']

export function Pricing() {
  const { t } = useI18n()
  const p = t.pricing
  const [mode, setMode] = useState<PlanMode>('coletivo')

  return (
    <section id="pacotes" className="pricing">
      <div className="container section">
        <div className="section-head">
          <div className="pricing__head">
            <h2 className="section-title">
              <RichText text={p.title} />
            </h2>
            <p className="pricing__lead">{p.lead}</p>
          </div>
          <div className="toggle" role="group" aria-label={p.modeLabel}>
            {modes.map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
                {p.modes[m]}
              </button>
            ))}
          </div>
        </div>

        <div className="plans">
          {plans[mode].map((plan, i) => (
            <article key={plan.name} className={`plan${i === FEATURED_PLAN_INDEX ? ' plan--featured' : ''}`}>
              <span className="plan__name">{plan.name.toUpperCase()}</span>
              <span className="plan__count">{p.lessons(plan.lessons)}</span>
              <span className="plan__price">R$ {plan.price}</span>
              {p.perks.map((perk) => (
                <span key={perk} className="plan__perk">
                  <Dot size={8} />
                  {perk}
                </span>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="plan__cta">
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="single">
          <h3>{p.singleTitle}</h3>
          <div className="single__grid">
            {singleLessons.map((s) => (
              <div key={s.mode} className="single__item">
                <span>{p.single[s.mode]}</span>
                <span>R$ {s.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rules">
          <div className="rules__head">
            <span className="tag">{p.rulesTag}</span>
            <h3>
              <RichText text={p.rulesTitle} />
            </h3>
          </div>
          <div className="rules__list">
            {p.rules.map((r, i) => (
              <div key={i} className="rule">
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
