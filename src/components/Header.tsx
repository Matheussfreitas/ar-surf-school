import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { navLinks } from '../data'

type Lang = 'pt' | 'en'

export function Header() {
  const [lang, setLang] = useState<Lang>('pt')

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#topo" className="brand">
          <img src={logo} alt="AR Surf School" width={50} height={50} />
          <span>AR SURF SCHOOL</span>
        </a>
        <nav className="nav" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <div className="lang" role="group" aria-label="Idioma">
            {(['pt', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#pacotes" className="btn nav__cta">
            Ver planos
          </a>
        </nav>
      </div>
    </header>
  )
}
