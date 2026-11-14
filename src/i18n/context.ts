import { createContext, useContext } from 'react'
import { en } from './en'
import { pt, type Dictionary } from './pt'

export const dictionaries = { pt, en } satisfies Record<string, Dictionary>

export type Lang = keyof typeof dictionaries
export const LANGS = Object.keys(dictionaries) as Lang[]
export const DEFAULT_LANG: Lang = 'pt'
export const STORAGE_KEY = 'ar-surf-lang'

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in dictionaries
}

/** Ordem de prioridade: ?lang= na URL, escolha salva, idioma do navegador, padrão. */
export function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // localStorage indisponível (modo privado, cookies bloqueados)
  }

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLang(base)) return base
  }
  return DEFAULT_LANG
}

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n precisa estar dentro de <I18nProvider>')
  return ctx
}
