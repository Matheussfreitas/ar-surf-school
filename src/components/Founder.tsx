import { images } from '../data'

export function Founder() {
  return (
    <section id="fundadora" className="founder">
      <div className="container founder__grid">
        <div className="founder__art">
          <div className="founder__photo">
            <img className="cover-img" src={images.fundadora} alt="Alessandra surfando" />
          </div>
          <div className="founder__badge">
            <strong>20+ anos</strong>
            <span>DE EXPERIÊNCIA</span>
          </div>
        </div>
        <div className="founder__copy">
          <span className="eyebrow">CONHEÇA A FUNDADORA</span>
          <h2 className="display founder__name">ALESSANDRA RAMOS DE ALMEIDA</h2>
          <span className="founder__role">Fundadora da AR SURF SCHOOL</span>
          <p className="founder__bio">
            Com mais de 20 anos de experiência no surf e quase uma década ensinando, Alessandra combina paixão pelo mar
            com formação técnica sólida. Graduada em Turismo pela UNP (2013) e atualmente cursando Educação Física
            (previsão 2026), possui certificações ISA LEVEL 1 Surf Instructor e SURF SALVA PRO.
          </p>
          <div className="callout callout--dark">
            <span className="tag" style={{ background: 'var(--yellow)', color: 'var(--navy)' }}>
              TÍTULOS
            </span>
            <p>
              Tricampeã estadual, campeã do Brasileiro Universitário e 5º lugar no Circuito Banco do Brasil QS 4.000,
              Alessandra também é voluntária no projeto Filhos de Mãe Luiza.
            </p>
          </div>
          <div className="callout callout--light">
            <span className="tag" style={{ background: 'var(--red)', color: '#fff' }}>
              MISSÃO
            </span>
            <p>
              Na AR SURF SCHOOL, o objetivo vai além de empurrar alunos nas ondas. É formar surfistas independentes,
              seguros e conectados com o mar. Aqui, todo perfil é bem-vindo: crianças, adultos, idosos, iniciantes ou
              experientes. O surf é para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
