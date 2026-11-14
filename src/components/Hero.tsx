import { images, WHATSAPP_URL } from '../data'

export function Hero() {
  return (
    <section id="topo" className="container hero">
      <div className="hero__copy">
        <span className="eyebrow">ESCOLA DE SURF · COTOVELO / RN · DESDE 2017</span>
        <h1 className="display hero__title">
          DROPA
          <br />
          COM A
          <br />
          <span className="accent">GALERA.</span>
        </h1>
        <p className="hero__text">
          Aula de surf de frente pro pico, turma separada por nível e instrutor do teu lado. Aqui o objetivo é te
          formar surfista independente, não só te empurrar na onda.
        </p>
        <div className="hero__actions">
          <a href="#pacotes" className="btn hero__cta">
            Ver planos e preços
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-outline hero__whats">
            Chamar no WhatsApp
          </a>
        </div>
      </div>
      <div className="hero__art">
        <div className="hero__photo">
          <img className="cover-img" src={images.heroGalera} alt="Galera com as pranchas" />
        </div>
        <div className="hero__sun" aria-hidden="true" />
        <div className="hero__badge">
          <strong>+3.000</strong>
          <span>
            ALUNOS
            <br />
            FORMADOS
          </span>
        </div>
      </div>
    </section>
  )
}
