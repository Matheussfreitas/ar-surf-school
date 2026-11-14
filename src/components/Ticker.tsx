import { Fragment } from 'react'
import { useI18n } from '../i18n/context'
import { Dot } from './Dot'

export function Ticker() {
  const { t } = useI18n()
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        {t.ticker.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && i < 3 && <Dot size={12} />}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
