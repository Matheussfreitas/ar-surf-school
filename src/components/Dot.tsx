type Props = { size?: number; color?: string }

export function Dot({ size = 10, color }: Props) {
  return <span className="dot" style={{ width: size, height: size, background: color }} aria-hidden="true" />
}
