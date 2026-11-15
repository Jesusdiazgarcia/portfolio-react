import { useEffect, useState } from 'react'
import GlowCursor from './GlowCursor'

const isSupported = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const GlowCursorLayer = () => {
  const [enabled, setEnabled] = useState(isSupported)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(fine.matches && !calm.matches)

    sync()
    fine.addEventListener('change', sync)
    calm.addEventListener('change', sync)
    return () => {
      fine.removeEventListener('change', sync)
      calm.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    let x = 0
    let y = 0
    let frame = 0
    const read = () => {
      frame = 0
      const ground = document.elementFromPoint(x, y)?.closest('.section--inverse')
      setTheme(ground ? 'dark' : 'light')
    }
    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = window.requestAnimationFrame(read)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <GlowCursor
      color="#2456d6"
      secondaryColor="#5d7fe0"
      intensity={1.25}
      trailWidth={3.2}
      linger={1.5}
      glow={1.2}
      followSpeed={0.6}
      clickBurst={false}
      quality="medium"
      theme={theme}
      maxDevicePixelRatio={1.5}
      style={{
        position: 'fixed',
        inset: 0,
        width: 'auto',
        height: 'auto',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    />
  )
}

export default GlowCursorLayer
