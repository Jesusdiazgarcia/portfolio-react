import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trabajo from './components/Trabajo'
import Perfil from './components/Perfil'
import Herramientas from './components/Herramientas'
import Contacto from './components/Contacto'
import './styles.css'

const loadLayer = (src, name) => {
  if (document.querySelector(`script[data-layer="${name}"]`)) return
  const script = document.createElement('script')
  script.type = 'module'
  script.src = src
  script.dataset.layer = name
  document.body.append(script)
}

const App = () => {
  useEffect(() => {
    loadLayer('/assets/motion/motion.js', 'motion')
    loadLayer('/assets/moments/moments.js', 'moments')
  }, [])

  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Trabajo />
        <Perfil />
        <Herramientas />
      </main>
      <Contacto />
    </>
  )
}

export default App
