/**
 * Textos em português (idioma padrão).
 *
 * Marcação simples usada nos títulos (ver `RichText`):
 *   \n      quebra de linha
 *   *texto* palavra em destaque (cor de acento da seção)
 */
export const pt = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'AR SURF SCHOOL | Aulas de Surf em Cotovelo (RN)',
    description: 'Aulas de surf em Cotovelo (RN) com turmas por nível, estrutura no pico e instrutores experientes.',
  },
  header: {
    navLabel: 'Principal',
    langLabel: 'Idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    cta: 'Ver planos',
    links: {
      school: 'A escola',
      team: 'Equipe',
      structure: 'Estrutura',
      classes: 'Aulas',
      pricing: 'Pacotes',
      location: 'Como chegar',
    },
  },
  hero: {
    eyebrow: 'ESCOLA DE SURF · COTOVELO / RN · DESDE 2017',
    title: 'DROPA\nCOM A\n*GALERA.*',
    text: 'Aula de surf de frente pro pico, turma separada por nível e instrutor do teu lado. Aqui o objetivo é te formar surfista independente, não só te empurrar na onda.',
    ctaPlans: 'Ver planos e preços',
    ctaWhatsapp: 'Chamar no WhatsApp',
    photoAlt: 'Galera com as pranchas',
    badgeValue: '+3.000',
    badgeLines: ['ALUNOS', 'FORMADOS'],
  },
  ticker: ['DESDE 2017', 'TURMAS POR NÍVEL', 'ESTRUTURA NO PICO', 'O SURF É PRA TODOS'],
  whyUs: {
    title: 'POR QUE A *AR SURF SCHOOL?*',
    lead: 'Mais de 7 anos formando surfistas independentes no Rio Grande do Norte',
    features: [
      { title: 'Instrutores Experientes', text: 'Foco em tornar você um surfista independente, não apenas empurrar nas ondas.' },
      { title: 'Pranchas para Todos', text: 'Variedade de pranchas para todos os biotipos e níveis de experiência.' },
      { title: 'Estrutura Completa', text: 'Em frente ao pico: ducha, banheiro, estacionamento e guarda-volumes.' },
      { title: 'Filmmaker Exclusiva', text: 'Gravação profissional das suas ondas durante a aula.' },
      { title: 'Agendamento Fácil', text: 'Agende suas aulas de forma prática pelo aplicativo ou WhatsApp.' },
      { title: 'Turmas por Nível', text: 'Iniciante, intermediário e avançado: cada aluno no ritmo certo.' },
      { title: 'Surftrips e Eventos', text: 'Integração entre alunos com viagens e eventos especiais.' },
      { title: 'Diversas Praias', text: 'Intermediário e avançado também em outras praias da região.' },
    ],
  },
  founder: {
    photoAlt: 'Alessandra surfando',
    badgeValue: '20+ anos',
    badgeLabel: 'DE EXPERIÊNCIA',
    eyebrow: 'CONHEÇA A FUNDADORA',
    role: 'Fundadora da AR SURF SCHOOL',
    bio: 'Com mais de 20 anos de experiência no surf e quase uma década ensinando, Alessandra combina paixão pelo mar com formação técnica sólida. Graduada em Turismo pela UNP (2013) e atualmente cursando Educação Física (previsão 2026), possui certificações ISA LEVEL 1 Surf Instructor e SURF SALVA PRO.',
    titlesTag: 'TÍTULOS',
    titles:
      'Tricampeã estadual, campeã do Brasileiro Universitário e 5º lugar no Circuito Banco do Brasil QS 4.000, Alessandra também é voluntária no projeto Filhos de Mãe Luiza.',
    missionTag: 'MISSÃO',
    mission:
      'Na AR SURF SCHOOL, o objetivo vai além de empurrar alunos nas ondas. É formar surfistas independentes, seguros e conectados com o mar. Aqui, todo perfil é bem-vindo: crianças, adultos, idosos, iniciantes ou experientes. O surf é para todos.',
  },
  team: {
    title: 'CONHEÇA\nNOSSA *EQUIPE*',
    lead: 'Instrutores apaixonados pelo mar, pelo ensino e pela evolução de cada aluno.',
    profile: 'Ver perfil',
    roles: {
      founder: 'Fundadora e Instrutora',
      filmmaker: 'Instrutor e Filmmaker',
      athlete: 'Instrutor e Atleta',
      instructor: 'Instrutor',
    },
  },
  structure: {
    title: 'NOSSA\n*INFRAESTRUTURA*',
    lead: 'Em frente ao pico: sai da aula, toma uma ducha e descansa sem sair da areia.',
    gallery: ['Área externa da escola', 'Loja e pranchas', 'Vista do pico', 'Ducha e área de descanso'],
    amenities: ['Ducha/Banho', 'Banheiro', 'Estacionamento', 'Área de Descanso', 'Guarda-volumes', 'Loja/Produtos'],
  },
  classes: {
    title: 'AULAS E\n*SERVIÇOS*',
    lead: 'Opções para todos os perfis e níveis de experiência',
    photoAlt: 'Aluna em pé na prancha',
    items: [
      { title: 'Aula Individual', text: 'Atenção exclusiva para evolução acelerada.' },
      { title: 'Aula em Grupo', text: 'Aprenda com outros alunos em ambiente colaborativo.' },
      { title: 'Aula para Crianças', text: 'Metodologia lúdica e segura para os pequenos.' },
      { title: 'Aula para Iniciantes', text: 'Do zero ao surfista com fundamentos sólidos.' },
      { title: 'Aula Avançada', text: 'Técnicas avançadas para surfistas experientes.' },
      { title: 'Aulas para Idosos', text: 'Ritmo adaptado e acolhimento especial.' },
      { title: 'Turmas por Níveis', text: 'Iniciante, intermediário e avançado.' },
      { title: 'Surf Trips', text: 'Aventuras em diferentes praias da região.' },
      { title: 'Outras Praias', text: 'Aulas para intermediário/avançado em diversos picos.' },
    ],
  },
  pricing: {
    title: 'PACOTES\nE VALORES',
    lead: 'Escolha o pacote ideal para sua jornada no surf',
    modeLabel: 'Tipo de turma',
    modes: { coletivo: 'Coletivo', individual: 'Individual' },
    lessons: (n: number) => `${n} AULAS`,
    perks: ['1 hora por aula', 'Instrutor capacitado'],
    cta: 'Agendar no WhatsApp',
    singleTitle: 'AULAS AVULSAS / EXPERIMENTAIS',
    single: { coletivo: 'Turma coletiva', individual: 'Turma individual' },
    rulesTag: 'ATENÇÃO',
    rulesTitle: 'REGRAS\nIMPORTANTES',
    rules: [
      { title: 'Validade:', text: '30 dias consecutivos a partir do pagamento (sem extensão)' },
      { title: 'Falta:', text: 'aula contabilizada se agendar e não comparecer' },
      { title: 'Pacotes individuais:', text: 'instrutor fixo' },
      { title: 'Pacotes não transferíveis:', text: 'uso pessoal e intransferível' },
    ],
  },
  location: {
    title: 'COMO\n*CHEGAR*',
    lead: 'Venha nos visitar em Cotovelo, RN',
    addressLabel: 'ENDEREÇO',
    address: 'Av. Praia de Cotovelo, 160 - Cotovelo, Parnamirim - RN, 59161-120',
    landmark: 'Ao lado do Orla Café',
    hoursLabel: 'HORÁRIOS DE FUNCIONAMENTO · LOJA E AULAS',
    schedule: {
      morning: { period: 'MANHÃ', days: 'Terça a Domingo', hours: '06h, 07h, 08h, 09h e 10h' },
      afternoon: { period: 'TARDE', days: 'Terça a Sexta', hours: '15h e 16h' },
    },
    mapsCta: 'Abrir rota no Google Maps',
    videoCta: 'Ver vídeo de como chegar',
    photoAlt: 'Fachada do local',
  },
  footer: {
    title: 'BORA PRA\n*ÁGUA?*',
    cta: 'Agendar no WhatsApp',
    address: 'Av. Praia de Cotovelo, 160 · Parnamirim/RN',
  },
}

/** Formato que todo dicionário precisa seguir. */
export type Dictionary = typeof pt
