# AR Surf School

Site institucional da **AR Surf School**, escola de surf em Cotovelo (Parnamirim, RN) fundada em 2017 por Alessandra Ramos de Almeida.

A página apresenta a escola, a fundadora, a equipe de instrutores, a infraestrutura em frente ao pico, os tipos de aula, os pacotes com preços e as informações de como chegar. Todo o contato acontece pelo WhatsApp.

## Stack

| Ferramenta | Versão |
| ---------- | ------ |
| React | 19 |
| TypeScript | 7 |
| Vite | 8 |
| Oxlint | 1 |

Sem bibliotecas de UI ou de CSS. Os estilos são escritos à mão em um único arquivo, usando variáveis CSS para cores e fontes.

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

### Scripts

| Comando | O que faz |
| ------- | --------- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Checagem de tipos e build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Roda o Oxlint |

## Estrutura

```
src/
  main.tsx            ponto de entrada
  App.tsx             monta a página na ordem das seções
  data.ts             todo o conteúdo do site (textos, planos, equipe, links)
  index.css           fontes, cores e estilos de cada seção
  components/
    Header.tsx        logo, menu e seletor de idioma
    Hero.tsx          chamada principal com a foto da galera
    Ticker.tsx        faixa azul com os destaques
    WhyUs.tsx         os 8 motivos para escolher a escola
    Founder.tsx       história, títulos e missão da fundadora
    Team.tsx          cards dos instrutores
    Structure.tsx     galeria da infraestrutura e comodidades
    Classes.tsx       tipos de aula e serviços
    Pricing.tsx       pacotes coletivo e individual, avulsas e regras
    Location.tsx      endereço, horários e links de rota
    Footer.tsx        chamada final e contatos
    SectionHead.tsx   título e subtítulo padrão das seções
    Dot.tsx           bolinha decorativa
  assets/
    img/              fotos e logo
    fonts/            Archivo e Bowlby One (servidas localmente)
public/
  favicon.png
```

## Editando o conteúdo

Quase tudo o que aparece na tela está em `src/data.ts`. Para mudar um preço, trocar um instrutor ou ajustar um horário, basta editar esse arquivo, sem mexer nos componentes.

Alguns exemplos:

**Alterar o preço de um pacote**

```ts
export const plans: Record<PlanMode, Plan[]> = {
  coletivo: [
    { name: 'Haole', lessons: 4, price: 190 },
    // ...
  ],
}
```

**Adicionar um instrutor**

Coloque a foto em `src/assets/img/`, importe no topo de `data.ts` e acrescente um item na lista `team`:

```ts
{ name: 'NOME', role: 'Instrutor', photo: equipeNovo, bg: COLORS.orange },
```

**Mudar o número do WhatsApp**

Todos os botões de agendamento usam a constante `WHATSAPP_URL`.

## Identidade visual

| Nome | Cor | Uso |
| ---- | --- | --- |
| Navy | `#1D2B57` | Texto, bordas, sombras e seções escuras |
| Cream | `#F4EAD8` | Fundo principal |
| Paper | `#FBF6EC` | Fundo dos cards |
| Yellow | `#F9C43A` | Destaques e botões em fundo escuro |
| Orange | `#F48A1F` | Seções da fundadora e dos pacotes |
| Red | `#E2521B` | Palavras em destaque e botão principal |

Tipografia:

* **Bowlby One** nos títulos, números e preços
* **Archivo** (400 a 800) no restante do texto

O estilo segue uma linha retrô de praia: bordas grossas, sombras sólidas deslocadas, cantos bem arredondados e um sol listrado em degradê que aparece no hero e na seção de como chegar.

## Responsividade

O layout se adapta sem breakpoints fixos na maior parte das seções, usando `grid` com `auto-fit`, `flex-wrap` e tamanhos com `clamp()`. Funciona de celulares pequenos até telas largas, com largura máxima de conteúdo em 1320px.

## Pendências

* O seletor PT/EN alterna apenas o estado visual do botão. A tradução do conteúdo ainda não foi implementada.
* Os links "Ver perfil" da equipe ainda não levam a nenhuma página.
* A foto do hero (`hero-galera.jpg`) tem 1,2 MB. Convertê-la para WebP deixaria o carregamento mais rápido.

## Deploy

O build gera arquivos estáticos em `dist/`, prontos para qualquer hospedagem estática como Vercel, Netlify ou GitHub Pages.

```bash
npm run build
```
