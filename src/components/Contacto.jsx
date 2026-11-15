import { useState } from 'react'
import perfil from '../data/perfil.json'

const Contacto = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = `mailto:${perfil.email}`
    }
  }

  return (
    <footer className="closing" id="contacto" aria-labelledby="contacto-h">
      <div className="wrap closing__in">
        <div className="board-head board-head--index">
          <span className="board-head__index">05 — Contacto</span>
        </div>

        <div className="closing__board">
          <article className="tile closing__close">
            <span className="tile__corner tile__corner--inv">Escríbeme</span>
            <svg className="closing__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <path
                d="M10 48a22 22 0 0 1 44 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="32" cy="48" r="1.6" fill="currentColor" />
            </svg>
            <h2 id="contacto-h">Hablemos de los datos y de la interfaz que los usa</h2>
            <div className="closing__close-body">
              <p>
                Cuéntame qué necesitas construir —la API, la base de datos o la interfaz que las
                usa— y te respondo por correo. También puedes ver mi recorrido en LinkedIn.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={`mailto:${perfil.email}`}>
                  Escribir correo
                </a>
                <button className="btn btn--secondary" type="button" onClick={copyEmail}>
                  <span className="btn__swap" key={copied ? 'done' : 'idle'}>
                    {copied ? 'Correo copiado' : 'Copiar correo'}
                  </span>
                </button>
              </div>
              <p className="sr-only" aria-live="polite">
                {copied ? 'Correo copiado al portapapeles' : ''}
              </p>
            </div>
          </article>

          <dl className="tile closing__contact">
            <div>
              <dt>Correo</dt>
              <dd>
                <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                  /in/jesus-diaz-garcia <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{perfil.ubicacion}</dd>
            </div>
            <div>
              <dt>Formación</dt>
              <dd>{perfil.estudios}</dd>
            </div>
          </dl>

          <div className="closing__foot">
            <a className="closing__mail" href={`mailto:${perfil.email}`}>
              {perfil.email}
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <p className="legal">© {new Date().getFullYear()} Jesús Díaz · Hecho con React, Vite y Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contacto
