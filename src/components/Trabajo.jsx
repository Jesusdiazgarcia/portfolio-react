import proyectos from '../data/proyectos.json'
import FadeContent from './reactbits/FadeContent'

const covers = {
  pelialtouch: (
    <svg className="cover__svg" viewBox="0 0 1200 800" preserveAspectRatio="xMinYMid slice" aria-hidden="true" focusable="false">
      <rect width="1200" height="800" fill="#101a2e" />
      <text x="72" y="92" fill="#8fa0bf" fontSize="20" letterSpacing="5">FICHA 01 · CATÁLOGO</text>
      <text x="72" y="412" fill="#e9e6dd" fontSize="120" letterSpacing="-5">PELIAL</text>
      <text x="72" y="542" fill="none" stroke="#a9b8ff" strokeWidth="2.5" fontSize="120" letterSpacing="-5">TOUCH</text>
      <rect x="72" y="600" width="96" height="6" fill="#8ea2ff" />
      <text x="72" y="700" fill="#8fa0bf" fontSize="21" letterSpacing="2">OMDb · React · Vite · NodeJS</text>
      <g fill="none" stroke="#2c4370" strokeWidth="2">
        <rect x="880" y="150" width="240" height="150" rx="4" />
        <rect x="880" y="330" width="240" height="150" rx="4" />
        <rect x="880" y="510" width="240" height="150" rx="4" />
      </g>
      <g fill="#8ea2ff">
        <rect x="900" y="330" width="8" height="150" />
        <rect x="900" y="150" width="8" height="150" opacity=".45" />
        <rect x="900" y="510" width="8" height="150" opacity=".65" />
      </g>
    </svg>
  ),
  sportspot: (
    <svg className="cover__svg" viewBox="0 0 1200 800" preserveAspectRatio="xMinYMid slice" aria-hidden="true" focusable="false">
      <rect width="1200" height="800" fill="#d7d5cf" />
      <g fill="none" stroke="#33499c" strokeWidth="3">
        <rect x="90" y="130" width="1020" height="540" />
        <path d="M90 400h1020" />
        <circle cx="600" cy="400" r="86" />
        <rect x="90" y="280" width="130" height="240" />
        <rect x="980" y="280" width="130" height="240" />
      </g>
      <circle cx="600" cy="400" r="6" fill="#26251e" />
      <text x="120" y="105" fill="#26251e" fontSize="20" letterSpacing="5">FICHA 02 · COMUNIDAD</text>
      <text x="120" y="470" fill="#26251e" fontSize="112" letterSpacing="-4">SPORT</text>
      <text x="120" y="592" fill="#33499c" fontSize="112" letterSpacing="-4">SPOT</text>
      <text x="120" y="700" fill="#45443d" fontSize="20" letterSpacing="2">React · Next.js · JavaScript</text>
    </svg>
  ),
  'portfolio-cms': (
    <svg className="cover__svg" viewBox="0 0 1200 800" preserveAspectRatio="xMinYMid slice" aria-hidden="true" focusable="false">
      <rect width="1200" height="800" fill="#26251e" />
      <g stroke="#3b3a32" strokeWidth="1">
        {Array.from({ length: 19 }, (_, i) => (
          <line key={`v${i}`} x1={i * 60 + 60} y1="0" x2={i * 60 + 60} y2="800" />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60 + 40} x2="1200" y2={i * 60 + 40} />
        ))}
      </g>
      <g stroke="#5a5850" strokeWidth="2">
        <path d="M72 120v560M72 680h500" />
        <path d="M72 676v8M568 676v8" />
      </g>
      <text x="72" y="92" fill="#9e9d99" fontSize="20" letterSpacing="5">FICHA 03 · PANEL Y API</text>
      <text x="100" y="400" fill="#dfdedb" fontSize="112" letterSpacing="-4">PORT</text>
      <text x="100" y="505" fill="#dfdedb" fontSize="112" letterSpacing="-4">FOLIO</text>
      <text x="100" y="620" fill="none" stroke="#a9b8ff" strokeWidth="2.5" fontSize="112" letterSpacing="-4">CMS</text>
      <text x="100" y="722" fill="#9e9d99" fontSize="20" letterSpacing="2">Express · MySQL · REST · React</text>
      <circle cx="1020" cy="190" r="34" fill="none" stroke="#8ea2ff" strokeWidth="2" />
      <path d="M1004 190h32M1020 174v32" stroke="#8ea2ff" strokeWidth="2" />
    </svg>
  ),
}

const Trabajo = () => {
  return (
    <section className="section section--inverse" id="trabajo" aria-labelledby="trabajo-h">
      <div className="wrap section__in">
        <div className="board-head">
          <span className="board-head__index">02 — Trabajo</span>
          <h2 id="trabajo-h">Trabajo full-stack</h2>
          <p>
            Tres proyectos propios: un catálogo sobre la API de OMDb, una comunidad deportiva y un
            panel de contenido. En los tres hice la interfaz; en el panel, además, la API REST en
            Express y MySQL que la alimenta.
          </p>
        </div>

        {/* stays in the accessibility tree while invisible */}
        <FadeContent
          as="ul"
          className="work"
          duration={0.85}
          ease="power3.out"
          stagger={0.12}
          threshold={0.15}
          initialOpacity={0.001}
        >
          {proyectos.map((proyecto) => (
            <li className={`work__item work__item--${proyecto.slug}`} key={proyecto.id}>
              <div className="cover">{covers[proyecto.slug]}</div>
              <div className="work__body">
                <div className="work__meta">
                  <span>Ficha {String(proyecto.id).padStart(2, '0')}</span>
                  <span>{proyecto.estado}</span>
                </div>
                <h3>{proyecto.nombre}</h3>
                <p className="work__sub">{proyecto.subtitulo}</p>
                <p className="work__desc">{proyecto.descripcion}</p>
                <ul className="chips" aria-label="Tecnologías del proyecto">
                  {proyecto.tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </FadeContent>
      </div>
    </section>
  )
}

export default Trabajo
