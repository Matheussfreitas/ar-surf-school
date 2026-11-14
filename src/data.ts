import heroGalera from './assets/img/hero-galera.jpg'
import fundadora from './assets/img/fundadora.webp'
import equipeAlessandra from './assets/img/equipe-alessandra.webp'
import equipeDaniel from './assets/img/equipe-daniel.webp'
import equipeLysandro from './assets/img/equipe-lysandro.webp'
import equipeGustavo from './assets/img/equipe-gustavo.webp'
import equipeLucas from './assets/img/equipe-lucas.webp'
import estrutura1 from './assets/img/estrutura-1.webp'
import estrutura2 from './assets/img/estrutura-2.webp'
import estrutura3 from './assets/img/estrutura-3.webp'
import estrutura4 from './assets/img/estrutura-4.webp'
import aulas from './assets/img/aulas.webp'
import local from './assets/img/local.webp'

export const COLORS = {
  navy: '#1D2B57',
  cream: '#F4EAD8',
  yellow: '#F9C43A',
  orange: '#F48A1F',
  red: '#E2521B',
} as const

export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5584991315780'
export const INSTAGRAM_URL = 'https://www.instagram.com/ar.surf.school'
export const MAPS_URL =
  'https://www.google.com/search?hs=IxOU&sxsrf=AE3TifM8i1KH7XO4CeyUNdRcmIqK8w7eiA:1767038162369&kgmid=/g/11fmr3fxvt&q=AR+Surf+School+-+Aulas+de+Surf&shndl=30&shem=ptotplc,shrtsdl&kgs=1f497ed21f3da3f3'
export const VIDEO_URL = 'https://www.instagram.com/reels/DL5w1wxJuyw/'

export const images = {
  heroGalera,
  fundadora,
  aulas,
  local,
}

export const navLinks = [
  { href: '#por-que', key: 'school' },
  { href: '#equipe', key: 'team' },
  { href: '#estrutura', key: 'structure' },
  { href: '#aulas', key: 'classes' },
  { href: '#pacotes', key: 'pricing' },
  { href: '#como-chegar', key: 'location' },
] as const

type Swatch = { bg: string; fg?: string }
/** Cores dos números dos cards de "Por que", aplicadas em ciclo. */
export const featureSwatches: Swatch[] = [
  { bg: COLORS.yellow },
  { bg: COLORS.orange },
  { bg: COLORS.red, fg: '#FBF6EC' },
  { bg: COLORS.navy, fg: COLORS.yellow },
]

/** `role` aponta para a chave do cargo em `team.roles` nos dicionários (src/i18n). */
export const team = [
  { name: 'ALESSANDRA RAMOS (AR)', role: 'founder', photo: equipeAlessandra, bg: COLORS.yellow },
  { name: 'DANIEL SILVA', role: 'filmmaker', photo: equipeDaniel, bg: COLORS.orange },
  { name: 'LYSANDRO', role: 'athlete', photo: equipeLysandro, bg: COLORS.red },
  { name: 'GUSTAVO LEÃO', role: 'instructor', photo: equipeGustavo, bg: COLORS.navy },
  { name: 'LUCAS', role: 'athlete', photo: equipeLucas, bg: COLORS.yellow },
] as const

/** O texto alternativo de cada foto fica em `structure.gallery` (mesma ordem). */
export const gallery = [
  { src: estrutura1, border: COLORS.yellow, wide: true },
  { src: estrutura2, border: COLORS.orange },
  { src: estrutura3, border: COLORS.red },
  { src: estrutura4, border: COLORS.cream },
]

export type PlanMode = 'coletivo' | 'individual'
export type Plan = { name: string; lessons: number; price: number }

export const plans: Record<PlanMode, Plan[]> = {
  coletivo: [
    { name: 'Haole', lessons: 4, price: 190 },
    { name: 'Maroleiro', lessons: 8, price: 290 },
    { name: 'Big Rider', lessons: 12, price: 390 },
    { name: 'Free Surf', lessons: 26, price: 600 },
  ],
  individual: [
    { name: 'Haole', lessons: 4, price: 300 },
    { name: 'Maroleiro', lessons: 8, price: 450 },
    { name: 'Big Rider', lessons: 12, price: 570 },
  ],
}

/** Índice do card em destaque (fundo navy). */
export const FEATURED_PLAN_INDEX = 2

export const singleLessons: { mode: PlanMode; price: number }[] = [
  { mode: 'coletivo', price: 65 },
  { mode: 'individual', price: 100 },
]

/** Textos dos horários ficam em `location.schedule` nos dicionários. */
export const schedule = [
  { key: 'morning', bg: COLORS.yellow, fg: COLORS.navy },
  { key: 'afternoon', bg: COLORS.red, fg: '#fff' },
] as const
