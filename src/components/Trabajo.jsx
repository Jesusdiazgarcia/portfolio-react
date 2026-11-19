import { useState } from 'react'
import proyectos from '../data/proyectos.json'
import sitio from '../data/sitio.json'
import FadeContent from './reactbits/FadeContent'
import ProyectoModal from './ProyectoModal'
import covers from './projectCovers'

const Trabajo = () => {
  const [activo, setActivo] = useState(null)

  return (
    <section className="section section--inverse" id="trabajo" aria-labelledby="trabajo-h">
      <div className="wrap section__in">
        <div className="board-head">
          <span className="board-head__index">02 — Trabajo</span>
          <h2 id="trabajo-h">Trabajo full-stack</h2>
          <p>
            Cinco proyectos propios: un catálogo sobre la API de OMDb, un explorador con datos en
            vivo de la NASA, un panel de contenido con su API, un gestor de tareas instalable y una
            tienda de camisetas con checkout y pagos. En todos hice la interfaz; en el panel, además,
            la API REST en Express y MySQL que la alimenta, y en la tienda, el backend completo en
            Laravel. Al final, una ficha técnica de este mismo sitio.
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
              <button
                type="button"
                className="work__open"
                aria-haspopup="dialog"
                onClick={() => setActivo(proyecto)}
              >
                <span className="sr-only">Ver la ficha de {proyecto.nombre}</span>
              </button>
            </li>
          ))}

          <li className="work__item work__item--sitio" key="sitio">
            <div className="work__body work__body--sitio">
              <div className="work__meta">
                <span>Ficha técnica</span>
                <span>{sitio.estado}</span>
              </div>
              <h3>{sitio.nombre}</h3>
              <p className="work__sub">{sitio.subtitulo}</p>
              <p className="work__desc">{sitio.descripcion}</p>
              <ul className="chips" aria-label="Tecnologías de este sitio">
                {sitio.tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>
            </div>

            <dl className="work__ledger">
              {sitio.ledger.map((fila) => (
                <div key={fila.k}>
                  <dt>{fila.k}</dt>
                  <dd>{fila.v}</dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              className="work__open"
              aria-haspopup="dialog"
              onClick={() => setActivo(sitio)}
            >
              <span className="sr-only">Ver la ficha de {sitio.nombre}</span>
            </button>
          </li>
        </FadeContent>
      </div>

      <ProyectoModal proyecto={activo} onClose={() => setActivo(null)} />
    </section>
  )
}

export default Trabajo
