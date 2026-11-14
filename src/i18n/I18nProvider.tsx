import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { detectLang, dictionaries, I18nContext, STORAGE_KEY, type Lang } from './context'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)
  const t = dictionaries[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sem persistência, segue só em memória
    }
  }, [])

  // Mantém <html lang>, <title> e meta description em sincronia com o idioma.
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext value={value}>{children}</I18nContext>
}
