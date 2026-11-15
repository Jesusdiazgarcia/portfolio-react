import perfil from '../data/perfil.json'

const posters = [
  { title: 'Duna', meta: '2021 · Ciencia ficción', tone: 'a' },
  { title: 'Alien', meta: '1979 · Terror', tone: 'b' },
  { title: 'Amélie', meta: '2001 · Drama', tone: 'c' },
  { title: 'Metrópolis', meta: '1927 · Clásico', tone: 'd' },
]

const Hero = () => {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-h" data-enter>
      <div className="wrap hero__in">
        <div className="hero-text">
          <div className="hero__grid">
            <div className="hero__top">
              <p className="kicker">
                <span className="dot" aria-hidden="true" />
                Portafolio · Interfaces web
              </p>
              <h1 id="hero-h">
                Desarrollador <span className="nowrap">front-end</span> en Santiago de Chile
              </h1>
              <p className="hero__lead">{perfil.descripcion}</p>
              <div className="btn-row">
                <a className="btn btn--primary" href={`mailto:${perfil.email}`}>Contactar</a>
                <a className="btn btn--secondary" href="#trabajo">Ver proyectos</a>
              </div>
            </div>

            <div
              className="hero__frame ui ui-catalog"
              data-ui="catalog"
              data-enter-media
              aria-hidden="true"
            >
              <div className="ui-catalog__bar">
                <span className="ui-catalog__dots"><i /><i /><i /></span>
                <span className="ui-catalog__url">pelialtouch · catálogo</span>
                <span className="ui-catalog__count">24 títulos</span>
              </div>

              <div className="ui-catalog__tools">
                <span className="ui-chip is-on">Todas</span>
                <span className="ui-chip">Cine</span>
                <span className="ui-chip">Series</span>
                <span className="ui-catalog__sort">A–Z</span>
              </div>

              <ul className="ui-catalog__grid">
                {posters.map((poster, index) => (
                  <li className={`poster poster--${poster.tone}`} key={poster.title}>
                    <span className="poster__index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="poster__title">{poster.title}</span>
                    <span className="poster__meta">{poster.meta}</span>
                  </li>
                ))}
              </ul>

              <div className="ui-catalog__foot">
                <span>Género · año · duración</span>
                <span>Ordenar</span>
              </div>
            </div>
          </div>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Proyectos</dt>
            <dd>3 propios</dd>
          </div>
          <div>
            <dt>Tecnologías</dt>
            <dd>8 en uso</dd>
          </div>
          <div>
            <dt>Estudios</dt>
            <dd>{perfil.estudios}</dd>
          </div>
          <div>
            <dt>Base</dt>
            <dd>{perfil.ubicacion}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Hero
