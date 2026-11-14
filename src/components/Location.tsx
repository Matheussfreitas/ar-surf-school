import { images, MAPS_URL, schedule, VIDEO_URL } from '../data'

export function Location() {
  return (
    <section id="como-chegar" className="container location">
      <div className="location__copy">
        <div className="location__head">
          <h2 className="section-title">
            COMO
            <br />
            <span className="accent">CHEGAR</span>
          </h2>
          <p>Venha nos visitar em Cotovelo, RN</p>
        </div>
        <div className="info-block">
          <span className="eyebrow">ENDEREÇO</span>
          <span className="address">Av. Praia de Cotovelo, 160 - Cotovelo, Parnamirim - RN, 59161-120</span>
          <span style={{ fontSize: 15 }}>Ao lado do Orla Café</span>
        </div>
        <div className="info-block">
          <span className="eyebrow">HORÁRIOS DE FUNCIONAMENTO · LOJA E AULAS</span>
          <div className="hours">
            {schedule.map((s) => (
              <div key={s.period} className="hours__card" style={{ background: s.bg, color: s.fg }}>
                <b>{s.period}</b>
                <span style={{ fontWeight: 600 }}>{s.days}</span>
                <span>{s.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="location__actions">
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn maps-btn">
            Abrir rota no Google Maps
          </a>
          <a href={VIDEO_URL} target="_blank" rel="noreferrer" className="btn btn-outline video-btn">
            Ver vídeo de como chegar
          </a>
        </div>
      </div>
      <div className="location__art">
        <div className="location__sun" aria-hidden="true" />
        <div className="location__photo">
          <img className="cover-img" src={images.local} alt="Fachada do local" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
