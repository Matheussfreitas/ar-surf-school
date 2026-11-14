import { useEffect, useState } from 'react'
import logo from '../assets/img/logo.png'
import { navLinks } from '../data'
import { LANGS, useI18n } from '../i18n/context'

/** Abaixo desta largura o menu vira gaveta (precisa bater com o CSS). */
const MOBILE_NAV_QUERY = '(max-width: 1180px)'

function LangSwitch({ className }: { className: string }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div className={`lang ${className}`} role="group" aria-label={t.header.langLabel}>
      {LANGS.map((l) => (
        <button key={l} type="button" lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia(MOBILE_NAV_QUERY)
    const close = () => setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const onResize = (e: MediaQueryListEvent) => !e.matches && close()

    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="brand" onClick={close}>
          <img src={logo} alt="" width={50} height={50} />
          <span>AR SURF SCHOOL</span>
        </a>

        <LangSwitch className="lang--bar" />

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-btn__bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className="nav" aria-label={t.header.navLabel}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {t.header.links[l.key]}
            </a>
          ))}
          <LangSwitch className="lang--nav" />
          <a href="#pacotes" className="btn nav__cta" onClick={close}>
            {t.header.cta}
          </a>
        </nav>
      </div>
      <div className="nav-backdrop" aria-hidden="true" onClick={close} />
    </header>
  )
}
