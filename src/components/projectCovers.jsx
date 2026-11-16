import pelialtouchShot from '../assets/proyectos/pelialtouch.jpg'
import mistareasShot from '../assets/proyectos/mistareas.jpg'
import cosmosShot from '../assets/proyectos/cosmos.jpg'

const covers = {
  pelialtouch: (
    <img
      className="cover__shot"
      src={pelialtouchShot}
      width="1440"
      height="810"
      loading="lazy"
      decoding="async"
      alt="Catálogo de PeliAltouch con la búsqueda «Avengers» y cuatro pósters con su botón Ver más"
    />
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
  mistareas: (
    <img
      className="cover__shot"
      src={mistareasShot}
      width="720"
      height="900"
      loading="lazy"
      decoding="async"
      alt="Mis Tareas en vista de lista: buscador, filtros por estado y tarjetas de tareas con etiquetas Personal y Alta"
    />
  ),
  cosmos: (
    <img
      className="cover__shot"
      src={cosmosShot}
      width="1440"
      height="810"
      loading="lazy"
      decoding="async"
      alt="Portada de Cosmos con el título «Explora lo desconocido» y un campo de estrellas de fondo, marcada como datos en vivo de la API de la NASA"
    />
  ),
}

export default covers
