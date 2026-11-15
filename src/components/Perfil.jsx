const STATEMENT =
  'Cada proyecto es una oportunidad para crecer: leo, pregunto y pruebo hasta que el dato llega a la pantalla y funciona para quien la usa.'

const principios = [
  {
    titulo: 'Datos',
    texto: 'Modelo primero: qué se guarda, cómo se relaciona y qué necesita cada pantalla.',
  },
  {
    titulo: 'Contratos',
    texto: 'Endpoints predecibles, respuestas claras y errores que el front-end puede mostrar.',
  },
  {
    titulo: 'Interfaz',
    texto: 'La última milla: estados de carga, errores y pantallas pequeñas, con datos reales.',
  },
]

const VIZ = {
  Datos: (
    <svg className="principle__viz" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <ellipse cx="24" cy="13" rx="12" ry="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 13v22c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 24c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Contratos: (
    <svg className="principle__viz" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M17 9h-5v30h5M31 9h5v30h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 24h8M25 21l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Interfaz: (
    <svg className="principle__viz" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect x="9" y="12" width="30" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 19h30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="13.5" cy="15.5" r="1.2" fill="currentColor" />
      <circle cx="18" cy="15.5" r="1.2" fill="currentColor" />
      <path d="M15 25.5h9M15 30h13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

const Perfil = () => {
  return (
    <section className="section" id="perfil" data-moment="word-highlight" aria-labelledby="perfil-h">
      <div className="wrap section__in">
        <div className="board-head board-head--index">
          <span className="board-head__index">03 — Enfoque</span>
        </div>

        <div className="perfil__board">
          <article className="tile perfil__statement-tile">
            <span className="tile__corner">En una frase</span>
            <h2 id="perfil-h" className="mo-wh__text perfil__statement">
              Método: de los <strong>datos</strong> a la <strong>interfaz</strong>
            </h2>
            <p className="section__lead">{STATEMENT}</p>
            <span className="perfil__sign">Jesús Díaz · Portafolio 2026</span>
          </article>

          {principios.map((principio, index) => (
            <article className={`tile principle principle--${index + 1}`} key={principio.titulo}>
              <span className="tile__label">
                {String(index + 1).padStart(2, '0')} <span aria-hidden="true">·</span>
              </span>
              {VIZ[principio.titulo]}
              <h3>{principio.titulo}</h3>
              <p>{principio.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Perfil
