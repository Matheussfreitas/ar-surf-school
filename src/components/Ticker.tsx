import { Fragment } from 'react'
import { tickerItems } from '../data'
import { Dot } from './Dot'

export function Ticker() {
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        {tickerItems.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && i < 3 && <Dot size={12} />}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
