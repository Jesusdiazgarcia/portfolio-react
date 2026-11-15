import { useEffect, useState } from 'react'
import GlowCursor from './GlowCursor'

const isSupported = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const GlowCursorLayer = () => {
  const [enabled, setEnabled] = useState(isSupported)

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

  if (!enabled) return null

  return (
    <GlowCursor
      color="#8ea2ff"
      secondaryColor="#b9c6ff"
      intensity={1.25}
      trailWidth={3.2}
      linger={1.5}
      glow={1.2}
      followSpeed={0.6}
      clickBurst={false}
      quality="medium"
      theme="dark"
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
