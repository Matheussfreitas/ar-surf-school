import { Fragment } from 'react'

type Props = {
  text: string
  /** Classe aplicada aos trechos marcados com *asteriscos*. */
  accentClassName?: string
}

/**
 * Renderiza a marcação simples dos dicionários:
 * `\n` vira <br /> e `*trecho*` vira <span className={accentClassName}>.
 */
export function RichText({ text, accentClassName = 'accent' }: Props) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/(\*[^*]+\*)/).map((part, j) =>
            part.startsWith('*') && part.endsWith('*') && part.length > 1 ? (
              <span key={j} className={accentClassName}>
                {part.slice(1, -1)}
              </span>
            ) : (
              part && <Fragment key={j}>{part}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  )
}
