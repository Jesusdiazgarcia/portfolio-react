import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import covers from './projectCovers'

const ProyectoModal = ({ proyecto, onClose }) => {
  const dialogRef = useRef(null)
  const panelRef = useRef(null)
  const footRef = useRef(null)
  const closingRef = useRef(false)

  const trapFocus = (event) => {
    if (event.key !== 'Tab') return
    const focusables = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled])')]
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const current = document.activeElement
    if (event.shiftKey) {
      if (current === first || current === dialogRef.current || current === panelRef.current) {
        event.preventDefault()
        last.focus()
      }
    } else if (current === last || current === dialogRef.current || current === panelRef.current) {
      event.preventDefault()
      first.focus()
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    if (!proyecto) {
      if (dialog.open) dialog.close()
      return undefined
    }

    closingRef.current = false
    if (!dialog.open) dialog.showModal()
    dialog.addEventListener('keydown', trapFocus)
    panelRef.current?.focus({ preventScroll: true })
    document.documentElement.classList.add('has-modal')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce && panelRef.current && footRef.current) {
      gsap.fromTo([panelRef.current, footRef.current], { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', clearProps: 'transform,opacity' })
      const art = panelRef.current.querySelector('.project-modal__cover svg, .project-modal__cover img')
      if (art) gsap.fromTo(art, { scale: 1.04 }, { scale: 1, duration: 0.55, ease: 'power2.out', clearProps: 'transform' })
    }

    return () => {
      dialog.removeEventListener('keydown', trapFocus)
      document.documentElement.classList.remove('has-modal')
    }
  }, [proyecto])

  const close = () => {
    const dialog = dialogRef.current
    if (!dialog?.open || closingRef.current) return
    closingRef.current = true
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finish = () => {
      closingRef.current = false
      dialog.close()
      onClose()
    }
    if (reduce || !panelRef.current) {
      finish()
      return
    }
    gsap.to([panelRef.current, footRef.current], { y: 14, opacity: 0, duration: 0.18, ease: 'power2.in', onComplete: finish })
  }

  const handleDialogClick = (event) => {
    if (event.target === dialogRef.current) close()
  }

  const detalle = proyecto?.detalle ?? {}

  return (
    <dialog
      ref={dialogRef}
      className={`project-modal${proyecto ? ` project-modal--${proyecto.slug}` : ''}`}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault()
        close()
      }}
      onClick={handleDialogClick}
      onClose={() => {
        document.documentElement.classList.remove('has-modal')
        if (proyecto) onClose()
      }}
    >
      {proyecto && (
        <>
          <button type="button" className="project-modal__close" onClick={close} aria-label="Cerrar ficha">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>

          <div className="project-modal__panel" ref={panelRef} tabIndex={-1}>
            {covers[proyecto.slug] && (
              <div className="cover project-modal__cover">{covers[proyecto.slug]}</div>
            )}

            <div className="project-modal__body">
              <p className="project-modal__eyebrow">
                {proyecto.etiqueta ?? `Ficha ${String(proyecto.id).padStart(2, '0')}`} · {proyecto.estado}
              </p>
              <h2 className="project-modal__title" id="project-modal-title">
                {proyecto.nombre}
              </h2>
              <p className="project-modal__sub">{proyecto.subtitulo}</p>
              <p className="project-modal__desc">{proyecto.descripcion}</p>

              {detalle.video && (
                <>
                  <h3 className="project-modal__label">Demo · {detalle.video.duracion}</h3>
                  <figure className="project-modal__video">
                    <video
                      key={proyecto.slug}
                      controls
                      playsInline
                      preload="metadata"
                      poster={detalle.video.poster}
                      aria-label={`Demostración del flujo de compra de ${proyecto.nombre}`}
                    >
                      <source src={detalle.video.src} type="video/mp4" />
                      Tu navegador no puede reproducir este video.
                    </video>
                  </figure>
                </>
              )}

              {detalle.decisiones?.length > 0 && (
                <>
                  <h3 className="project-modal__label">
                    {detalle.decisiones.length > 1 ? 'Decisiones' : 'Decisión'}
                  </h3>
                  <div className="project-modal__decisions">
                    {detalle.decisiones.map((decision) => (
                      <dl className="project-modal__decision" key={decision.problema}>
                        <div>
                          <dt>Problema</dt>
                          <dd>{decision.problema}</dd>
                        </div>
                        <div>
                          <dt>Decisión</dt>
                          <dd>{decision.decision}</dd>
                        </div>
                        <div>
                          <dt>Por qué</dt>
                          <dd>{decision.porque}</dd>
                        </div>
                      </dl>
                    ))}
                  </div>
                </>
              )}

              {detalle.puntos?.length > 0 && (
                <>
                  <h3 className="project-modal__label">Lo que hace</h3>
                  <ul className="project-modal__puntos">
                    {detalle.puntos.map((punto) => (
                      <li key={punto}>{punto}</li>
                    ))}
                  </ul>
                </>
              )}

              {detalle.galeria?.length > 0 && (
                <>
                  <h3 className="project-modal__label">Pantallas</h3>
                  <ul className="project-modal__shots">
                    {detalle.galeria.map((shot) => (
                      <li key={shot.src}>
                        <figure>
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            width="1440"
                            height="810"
                            loading="lazy"
                            decoding="async"
                          />
                          <figcaption>{shot.caption}</figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {detalle.estadoActual && (
                <>
                  <h3 className="project-modal__label">Estado actual</h3>
                  <div className="project-modal__estado">
                    <div>
                      <p className="project-modal__estado-head">Listo y probado</p>
                      <ul className="project-modal__puntos">
                        {detalle.estadoActual.listo.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="project-modal__estado-head">Pendiente para operar</p>
                      <ul className="project-modal__puntos project-modal__puntos--todo">
                        {detalle.estadoActual.pendiente.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {detalle.rol && (
                <dl className="project-modal__facts">
                  <div>
                    <dt>Rol</dt>
                    <dd>{detalle.rol}</dd>
                  </div>
                </dl>
              )}
            </div>
          </div>

          <div className="project-modal__foot" ref={footRef}>
            <ul className="chips" aria-label="Tecnologías del proyecto">
              {proyecto.tecnologias.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>

            <div className="project-modal__links">
              {detalle.demo && (
                <a
                  className="project-modal__link project-modal__link--primary"
                  href={detalle.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo <span aria-hidden="true">↗</span>
                </a>
              )}
              {detalle.repo && (
                <a className="project-modal__link" href={detalle.repo} target="_blank" rel="noreferrer">
                  Código <span aria-hidden="true">↗</span>
                </a>
              )}
              {detalle.nota && <p className="project-modal__note">{detalle.nota}</p>}
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}

export default ProyectoModal
