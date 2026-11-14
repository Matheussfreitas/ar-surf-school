import type { ReactNode } from 'react'

type Props = {
  title: ReactNode
  lead?: ReactNode
  leadMaxWidth?: number
  titleMaxWidth?: number
}

export function SectionHead({ title, lead, leadMaxWidth, titleMaxWidth }: Props) {
  return (
    <div className="section-head">
      <h2 className="section-title" style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}>
        {title}
      </h2>
      {lead && (
        <p className="section-lead" style={leadMaxWidth ? { maxWidth: leadMaxWidth } : undefined}>
          {lead}
        </p>
      )}
    </div>
  )
}
