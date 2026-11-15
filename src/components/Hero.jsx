import { useEffect, useState } from 'react'
import perfil from '../data/perfil.json'

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

          <div className="tile tile--catalog ui" data-ui="catalog" data-enter-media aria-hidden="true">
            <p className="catalog__caption">API del panel · Portfolio CMS</p>

            <div className="ui-catalog__bar">
              <span className="ui-catalog__dots"><i /><i /><i /></span>
              <span className="ui-catalog__url">api.portfolio-cms.cl/v1</span>
              <span className="ui-catalog__count">200 OK</span>
            </div>

            <div className="ui-catalog__tools">
              <span className="ui-chip is-on">GET</span>
              <span className="ui-chip">POST</span>
              <span className="ui-chip">PUT</span>
              <span className="ui-chip">DELETE</span>
              <span className="ui-catalog__sort">JSON</span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden px-3 pt-1 pb-3.5 font-[family-name:var(--font-mono)] text-[10.5px] leading-[1.55] text-[var(--inv-muted)] sm:px-4">
              <p className="text-[11px] tracking-[0.02em] text-[var(--inv-ink)]">
                <b className="mr-1.5 font-semibold text-[var(--accent-hover)]">GET</b> /proyectos?orden=recientes
              </p>
              <ul className="m-0 flex list-none flex-col p-0 [&>li]:whitespace-pre">
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
                  <span className="tok-key">"titulo"</span>: <span className="tok-str">"Sportspot"</span>,
                </li>
                <li className="pl-4">
                  <span className="tok-key">"estado"</span>: <span className="tok-str">"en revisión"</span>,
                </li>
                <li className="pl-4">
                  <span className="tok-key">"stack"</span>: [<span className="tok-str">"Next.js"</span>, <span className="tok-str">"React"</span>]
                </li>
                <li>{'},'}</li>
                <li>{'{'}</li>
                <li className="pl-4">
                  <span className="tok-key">"id"</span>: <span className="tok-fn">1</span>,
                </li>
                <li className="pl-4">
                  <span className="tok-key">"titulo"</span>: <span className="tok-str">"Pelialtouch"</span>,
                </li>
                <li className="pl-4">
                  <span className="tok-key">"estado"</span>: <span className="tok-str">"completado"</span>,
                </li>
                <li className="pl-4">
                  <span className="tok-key">"stack"</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"NodeJS"</span>]
                </li>
                <li>{'}'}</li>
                <li>]</li>
              </ul>
            </div>

            <div className="ui-catalog__foot">
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
            <span className="stat__value">03</span>
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
