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
        <div className="closing__close">
          <h2 id="contacto-h">Hablemos de la interfaz que tienes en mente</h2>
          <p>
            Escríbeme con lo que necesitas y te respondo por correo. También puedes ver mi
            recorrido en LinkedIn.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={`mailto:${perfil.email}`}>
              Contactar
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

          <dl className="closing__contact">
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
                  /in/jesus-diaz-garcia
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
        </div>

        <div className="closing__foot">
          <a className="closing__mail" href={`mailto:${perfil.email}`}>
            {perfil.email}
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <p className="legal">© {new Date().getFullYear()} Jesús Díaz · Hecho con React y Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Contacto
