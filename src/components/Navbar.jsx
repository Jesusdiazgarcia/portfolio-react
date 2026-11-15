import { useEffect, useRef, useState } from 'react'
import perfil from '../data/perfil.json'
import ClickSpark from './reactbits/ClickSpark'
import GlowCursorLayer from './reactbits/GlowCursorLayer'

const links = [
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#perfil', label: 'Método' },
  { href: '#herramientas', label: 'Herramientas' },
]

const Mark = () => (
  <svg className="mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path
      d="M10 48a22 22 0 0 1 44 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="32" cy="48" r="4" fill="currentColor" />
  </svg>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const toggle = toggleRef.current

    const focusables = () =>
      menu ? Array.from(menu.querySelectorAll('a[href], button:not([disabled])')) : []

    const frame = window.requestAnimationFrame(() => focusables()[0]?.focus())

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const inside = menu.contains(document.activeElement)
      if (event.shiftKey && (!inside || document.activeElement === first)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (!inside || document.activeElement === last)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 899) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => ({ href: link.href, el: document.querySelector(link.href) }))
      .filter((link) => link.el)
    if (!sections.length) return

    let frame = 0
    const paint = () => {
      frame = 0
      const mark = window.scrollY + window.innerHeight * 0.45
      let current = ''
      sections.forEach((section) => {
        if (section.el.getBoundingClientRect().top + window.scrollY <= mark) {
          current = section.href
        }
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="nav">
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <div className="wrap nav__bar">
        <a className="brand" href="#inicio">
          <Mark />
          <span>{perfil.nombre}</span>
        </a>

        <nav className="nav__links" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              className="nav__link"
              href={link.href}
              aria-current={active === link.href ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary nav__cta" href={`mailto:${perfil.email}`}>
          Contactar
        </a>

        <button
          className="nav__toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            key={open ? 'close' : 'open'}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            aria-hidden="true"
            focusable="false"
          >
            {open ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 7h16M3 15h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={open ? 'menu is-open' : 'menu'}
        id="menu"
        ref={menuRef}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? 'true' : undefined}
        aria-label={open ? 'Menú de navegación' : undefined}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Menú">
          <ul className="menu__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--primary" href={`mailto:${perfil.email}`}>
          Contactar
        </a>
      </div>

      <GlowCursorLayer />
      <ClickSpark
        sparkColor={['#8ea2ff', '#f1ecdf']}
        sparkSize={10}
        sparkRadius={26}
        sparkCount={6}
        sparkWidth={1.6}
        duration={420}
        randomness={0.35}
        gravity={0.5}
        style={{
          position: 'fixed',
          inset: 0,
          width: 'auto',
          height: 'auto',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />
    </header>
  )
}

export default Navbar
