# Portafolio — Jesús Díaz

Portafolio personal de desarrollador full-stack: APIs REST con Node, Express y MySQL, e interfaces en React. Una sola página con secciones de perfil, trabajo, método, herramientas y contacto.

## Stack

- React 19 + Vite 7 (SWC)
- Tailwind CSS 4 vía `@tailwindcss/vite` (solo utilidades, sin preflight: la base la define `src/styles.css`)
- GSAP 3.15 con ScrollTrigger (efectos de entrada de las fichas)
- React Bits: ClickSpark, FadeContent y GlowCursor (copiados en `src/components/reactbits`)
- Tipografías: Hanken Grotesk e Instrument Serif (Google Fonts)

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
npm run lint     # ESLint
```

## Estructura

```
src/
├── components/
│   ├── Navbar.jsx       # navegación, menú móvil, efectos de cursor y clic
│   ├── Hero.jsx         # encabezado + consola de API
│   ├── Trabajo.jsx      # tres fichas de proyecto con portadas SVG
│   ├── Perfil.jsx       # método: datos, contratos, interfaz
│   ├── Herramientas.jsx # lista de las diez herramientas + editor
│   ├── Contacto.jsx     # cierre y datos de contacto
│   └── reactbits/       # efectos React Bits adaptados
├── data/
│   ├── perfil.json      # nombre, título, ubicación, email, LinkedIn
│   ├── proyectos.json   # fichas de proyecto
│   └── conocimientos.json # herramientas, icono y uso
├── styles.css           # sistema de diseño (tokens, bento, componentes)
├── tailwind.css         # utilidades de Tailwind
├── App.jsx
└── main.jsx
public/
├── assets/motion/       # capa de movimiento (CSS + JS)
├── assets/moments/      # momento de resaltado de palabras
├── icons/               # iconos de herramientas + créditos
├── favicon.svg
└── share.jpg            # imagen para Open Graph y Twitter (1200x630)
```

## Editar contenido

Todo el contenido vive en `src/data/`:

- **`proyectos.json`**: `id`, `slug`, `nombre`, `subtitulo`, `descripcion`, `tecnologias[]`, `estado`. La portada se elige por `slug` en `Trabajo.jsx`.
- **`conocimientos.json`**: `id`, `name`, `icon` (ruta en `public/icons/`), `uso`. Con `wide: true` el icono se muestra como logotipo sobre fondo claro (Express).
- **`perfil.json`**: datos personales y de contacto usados en hero, footer y metadatos.

Después de editar, `npm run dev` recarga solo. Recuerda actualizar `index.html` y `public/share.jpg` si cambian el título o el mensaje principal.

## Accesibilidad y movimiento

- Los efectos respetan `prefers-reduced-motion`; GlowCursor solo se activa con puntero fino.
- El menú móvil cierra con Escape, atrapa el foco y lo devuelve al botón.
- Los mockups (consola de API, editor) son decorativos y están ocultos al lector de pantalla.

## Deploy

El build es estático: sirve `dist/` desde cualquier hosting.

- **Vercel / Netlify**: build `npm run build`, carpeta de salida `dist`.
- **GitHub Pages**: si se publica en `usuario.github.io/repo`, define `base: '/repo/'` en `vite.config.js` y usa rutas relativas para los assets. Si se publica en dominio propio o raíz, no hace falta.

Al tener el dominio final, actualiza `canonical`, `og:url` y `og:image` (este último debe ser una URL absoluta).

## Autor

Jesús Díaz — Santiago, Chile
- Email: jesusramondiaz11@gmail.com
- LinkedIn: https://linkedin.com/in/jesus-diaz-garcia/
