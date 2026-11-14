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
  { href: '#por-que', label: 'A escola' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#aulas', label: 'Aulas' },
  { href: '#pacotes', label: 'Pacotes' },
  { href: '#como-chegar', label: 'Como chegar' },
]

export const tickerItems = ['DESDE 2017', 'TURMAS POR NÍVEL', 'ESTRUTURA NO PICO', 'O SURF É PRA TODOS']

type Swatch = { bg: string; fg?: string }
const swatches: Swatch[] = [
  { bg: COLORS.yellow },
  { bg: COLORS.orange },
  { bg: COLORS.red, fg: '#FBF6EC' },
  { bg: COLORS.navy, fg: COLORS.yellow },
]

export const features = [
  { title: 'Instrutores Experientes', text: 'Foco em tornar você um surfista independente, não apenas empurrar nas ondas.' },
  { title: 'Pranchas para Todos', text: 'Variedade de pranchas para todos os biotipos e níveis de experiência.' },
  { title: 'Estrutura Completa', text: 'Em frente ao pico: ducha, banheiro, estacionamento e guarda-volumes.' },
  { title: 'Filmmaker Exclusiva', text: 'Gravação profissional das suas ondas durante a aula.' },
  { title: 'Agendamento Fácil', text: 'Agende suas aulas de forma prática pelo aplicativo ou WhatsApp.' },
  { title: 'Turmas por Nível', text: 'Iniciante, intermediário e avançado: cada aluno no ritmo certo.' },
  { title: 'Surftrips e Eventos', text: 'Integração entre alunos com viagens e eventos especiais.' },
  { title: 'Diversas Praias', text: 'Intermediário e avançado também em outras praias da região.' },
].map((f, i) => ({ ...f, swatch: swatches[i % swatches.length] }))

export const team = [
  { name: 'ALESSANDRA RAMOS (AR)', role: 'Fundadora e Instrutora', photo: equipeAlessandra, bg: COLORS.yellow },
  { name: 'DANIEL SILVA', role: 'Instrutor e Filmmaker', photo: equipeDaniel, bg: COLORS.orange },
  { name: 'LYSANDRO', role: 'Instrutor e Atleta', photo: equipeLysandro, bg: COLORS.red },
  { name: 'GUSTAVO LEÃO', role: 'Instrutor', photo: equipeGustavo, bg: COLORS.navy },
  { name: 'LUCAS', role: 'Instrutor e Atleta', photo: equipeLucas, bg: COLORS.yellow },
]

export const gallery = [
  { src: estrutura1, alt: 'Área externa da escola', border: COLORS.yellow, wide: true },
  { src: estrutura2, alt: 'Loja e pranchas', border: COLORS.orange },
  { src: estrutura3, alt: 'Vista do pico', border: COLORS.red },
  { src: estrutura4, alt: 'Ducha e área de descanso', border: COLORS.cream },
]

export const amenities = ['Ducha/Banho', 'Banheiro', 'Estacionamento', 'Área de Descanso', 'Guarda-volumes', 'Loja/Produtos']

export const classTypes = [
  { title: 'Aula Individual', text: 'Atenção exclusiva para evolução acelerada.' },
  { title: 'Aula em Grupo', text: 'Aprenda com outros alunos em ambiente colaborativo.' },
  { title: 'Aula para Crianças', text: 'Metodologia lúdica e segura para os pequenos.' },
  { title: 'Aula para Iniciantes', text: 'Do zero ao surfista com fundamentos sólidos.' },
  { title: 'Aula Avançada', text: 'Técnicas avançadas para surfistas experientes.' },
  { title: 'Aulas para Idosos', text: 'Ritmo adaptado e acolhimento especial.' },
  { title: 'Turmas por Níveis', text: 'Iniciante, intermediário e avançado.' },
  { title: 'Surf Trips', text: 'Aventuras em diferentes praias da região.' },
  { title: 'Outras Praias', text: 'Aulas para intermediário/avançado em diversos picos.' },
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

export const singleLessons = [
  { label: 'Turma coletiva', price: 65 },
  { label: 'Turma individual', price: 100 },
]

export const rules = [
  { title: 'Validade:', text: '30 dias consecutivos a partir do pagamento (sem extensão)' },
  { title: 'Falta:', text: 'aula contabilizada se agendar e não comparecer' },
  { title: 'Pacotes individuais:', text: 'instrutor fixo' },
  { title: 'Pacotes não transferíveis:', text: 'uso pessoal e intransferível' },
]

export const schedule = [
  { period: 'MANHÃ', days: 'Terça a Domingo', hours: '06h, 07h, 08h, 09h e 10h', bg: COLORS.yellow, fg: COLORS.navy },
  { period: 'TARDE', days: 'Terça a Sexta', hours: '15h e 16h', bg: COLORS.red, fg: '#fff' },
]
