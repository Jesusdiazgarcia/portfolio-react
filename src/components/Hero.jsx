import { useEffect, useRef, useState } from 'react'
import perfil from '../data/perfil.json'

const CURL_COMMAND =
  'curl "https://api.portfolio-cms.cl/v1/proyectos?orden=recientes" \\\n  -H "accept: application/json"'

const clock = new Intl.DateTimeFormat('es-CL', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'America/Santiago',
})

const useSantiagoClock = () => {
  const [time, setTime] = useState(() => clock.format(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => setTime(clock.format(new Date())), 30000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

const Hero = () => {
  const time = useSantiagoClock()
  const [copyState, setCopyState] = useState('')
  const copyTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(copyTimer.current), [])

  const copyCurl = async () => {
    window.clearTimeout(copyTimer.current)
    try {
      await navigator.clipboard.writeText(CURL_COMMAND)
      setCopyState('ok')
    } catch {
      setCopyState('err')
    }
    copyTimer.current = window.setTimeout(() => setCopyState(''), 2000)
  }

  const copyLabel =
    copyState === 'ok' ? 'Copiado' : copyState === 'err' ? 'No se pudo' : 'Copiar cURL'

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-h" data-enter>
      <div className="wrap hero__in">
        <div className="hero__meta">
          <span>Portafolio · 2026</span>
          <span className="hero__clock">
            <span className="live-dot" aria-hidden="true" />
            Santiago · {time} h
          </span>
        </div>

        <div className="hero__board hero-text">
          <article className="tile tile--intro">
            <span className="tile__corner" aria-hidden="true">01 — Perfil</span>
            <h1 id="hero-h">
              <span className="hero__name">
                Jesús <em>Díaz</em>.
              </span>
              <span className="hero__role">
                Desarrollador <strong>full-stack</strong> en Santiago de Chile
              </span>
            </h1>
            <p className="hero__lead">{perfil.descripcion}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={`mailto:${perfil.email}`}>
                Escribir correo
              </a>
              <a className="btn btn--secondary" href="#trabajo">
                Ver proyectos <span aria-hidden="true">↓</span>
              </a>
            </div>
          </article>

          <div className="tile tile--catalog ui" data-ui="catalog" data-enter-media>
            <p className="catalog__caption" aria-hidden="true">API del panel · Portfolio CMS</p>

            <div className="ui-catalog__bar" aria-hidden="true">
              <span className="ui-catalog__dots"><i /><i /><i /></span>
              <span className="ui-catalog__url">api.portfolio-cms.cl/v1</span>
              <span className="ui-catalog__count">200 OK</span>
            </div>

            <div className="ui-catalog__tools" aria-hidden="true">
              <span className="ui-chip is-on">GET</span>
              <span className="ui-chip">POST</span>
              <span className="ui-chip">PUT</span>
              <span className="ui-chip">DELETE</span>
              <span className="ui-catalog__sort">JSON</span>
            </div>

            <div className="ui-catalog__body">
              <div className="ui-catalog__code" aria-hidden="true">
                <ul className="ui-catalog__json">
                  <li>[</li>
                  <li>{'{'}</li>
                  <li className="pl-4">
                    <span className="tok-key">"id"</span>: <span className="tok-fn">3</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"titulo"</span>: <span className="tok-str">"Portfolio CMS"</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"estado"</span>: <span className="tok-str">"publicado"</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"stack"</span>: [<span className="tok-str">"Express"</span>, <span className="tok-str">"MySQL"</span>]
                  </li>
                  <li>{'},'}</li>
                  <li>{'{'}</li>
                  <li className="pl-4">
                    <span className="tok-key">"id"</span>: <span className="tok-fn">2</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"titulo"</span>: <span className="tok-str">"Cosmos"</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"estado"</span>: <span className="tok-str">"completado"</span>,
                  </li>
                  <li className="pl-4">
                    <span className="tok-key">"stack"</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"Tailwind"</span>]
                  </li>
                  <li>{'},'}</li>
                  <li>{'{'}</li>
                  <li className="pl-4">
                    <span className="tok-key">"id"</span>: <span className="tok-fn">1</span>,
                  </li>
                  <li className="pl-4" data-morph-field="titulo">
                    <span className="tok-key">"titulo"</span>: <span className="tok-str">"Pelialtouch"</span>,
                  </li>
                  <li className="pl-4" data-morph-field="estado">
                    <span className="tok-key">"estado"</span>: <span className="tok-str">"completado"</span>,
                  </li>
                  <li className="pl-4" data-morph-field="stack">
                    <span className="tok-key">"stack"</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"NodeJS"</span>]
                  </li>
                  <li>{'}'}</li>
                  <li>]</li>
                </ul>
              </div>

              <div className="ui-catalog__req" role="group" aria-label="Petición a la API">
                <p className="ui-catalog__req-title">Petición</p>
                <p className="ui-catalog__req-line">
                  <span className="ui-catalog__method">GET</span>
                  <span className="ui-catalog__path">/proyectos?orden=recientes</span>
                </p>
                <dl className="ui-catalog__meta">
                  <div>
                    <dt>accept</dt>
                    <dd>application/json</dd>
                  </div>
                  <div>
                    <dt>cache</dt>
                    <dd>no-store</dd>
                  </div>
                </dl>
                <p className="ui-catalog__req-title">cURL</p>
                <pre className="ui-catalog__curl">
                  <code>
                    <span className="tok-fn">curl</span>
                    {' "https://api.portfolio-cms.cl/v1/proyectos?orden=recientes" \\\n  '}
                    <span className="tok-key">-H</span>
                    {' "accept: application/json"'}
                  </code>
                </pre>
                <button
                  type="button"
                  className="ui-catalog__copy"
                  data-state={copyState || undefined}
                  onClick={copyCurl}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    {copyState === 'ok' ? (
                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                      <>
                        <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M10.5 3.5v-.5A1.5 1.5 0 0 0 9 1.5H3.5A1.5 1.5 0 0 0 2 3v5.5A1.5 1.5 0 0 0 3.5 10H4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                  {copyLabel}
                </button>
                <span className="sr-only" role="status">
                  {copyState === 'ok'
                    ? 'Comando copiado al portapapeles'
                    : copyState === 'err'
                      ? 'No se pudo copiar el comando'
                      : ''}
                </span>
              </div>
            </div>

            <div className="ui-catalog__foot" aria-hidden="true">
              <span>Express · MySQL · React</span>
              <span>18 ms</span>
            </div>
          </div>

          <a className="tile tile--stat tile--acid" href="#trabajo">
            <span className="tile__label">
              <span className="tile__label-main">
                <svg className="stat__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M3 5h14M3 10h14M3 15h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Proyectos
              </span>
              <span className="tile__arrow" aria-hidden="true">↗</span>
            </span>
            <span className="stat__value">04</span>
            <span className="stat__note">Propios, con texto y datos reales</span>
          </a>

          <a className="tile tile--stat" href="#herramientas">
            <span className="tile__label">
              <span className="tile__label-main">
                <svg className="stat__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M7 6 3 10l4 4M13 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Tecnologías
              </span>
              <span className="tile__arrow" aria-hidden="true">↗</span>
            </span>
            <span className="stat__value">10</span>
            <span className="stat__note">En uso, de Node a React</span>
          </a>

          <div className="tile tile--stat">
            <span className="tile__label">
              <span className="tile__label-main">
                <svg className="stat__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M10 5.5C8.5 4.2 6.4 4 4 4v11c2.4 0 4.5.2 6 1.5 1.5-1.3 3.6-1.5 6-1.5V4c-2.4 0-4.5.2-6 1.5Zm0 0V16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Estudios
              </span>
            </span>
            <span className="stat__text">{perfil.estudios}</span>
            <span className="stat__note">En curso</span>
          </div>

          <div className="tile tile--stat">
            <span className="tile__label">
              <span className="tile__label-main">
                <svg className="stat__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M10 18s5-4.6 5-9a5 5 0 1 0-10 0c0 4.4 5 9 5 9Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="9" r="1.8" fill="currentColor" />
                </svg>
                Base
              </span>
            </span>
            <span className="stat__text">{perfil.ubicacion}</span>
            <span className="stat__note">GMT-3 · Hora local arriba</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
