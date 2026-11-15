import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FIELDS = [
  { field: 'titulo', at: 0.52, lead: 0, lift: 16, bend: 10 },
  { field: 'estado', at: 0.06, lead: 0.05, lift: 34, bend: 30 },
  { field: 'stack', at: 0.93, lead: 0.1, lift: 50, bend: 48 },
]

const clamp01 = (value) => Math.min(Math.max(value, 0), 1)

const HeroMorph = () => {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return undefined

    const ease = gsap.parseEase('power2.inOut')
    const wide = window.matchMedia('(min-width: 900px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    let trigger = null
    let card = null
    let capsules = []

    const clear = () => {
      trigger?.kill()
      trigger = null
      capsules.forEach(({ el }) => el.remove())
      capsules = []
      card?.classList.remove('is-born')
      card?.style.removeProperty('--morph-dim')
      card = null
      layer.style.opacity = '0'
      layer.style.visibility = 'hidden'
    }

    const apply = (progress) => {
      if (!capsules.length) return
      if (progress <= 0.003 || progress >= 0.94) {
        layer.style.opacity = '0'
        layer.style.visibility = 'hidden'
        card.classList.toggle('is-born', progress >= 0.94)
        card.style.removeProperty('--morph-dim')
        return
      }
      layer.style.opacity = '1'
      layer.style.visibility = 'visible'
      const cover = card.querySelector('.cover').getBoundingClientRect()
      const fadeIn = clamp01(progress / 0.03)
      capsules.forEach((cap) => {
        const source = cap.source.getBoundingClientRect()
        const raw = clamp01((progress - cap.lead) / (0.88 - cap.lead))
        const q = ease(raw)
        const dock = clamp01((raw - 0.86) / 0.14)
        const fromX = source.left + cap.inset
        const fromY = source.top + source.height / 2 - cap.height / 2
        // 6% is the cover's text column; 9px cancels the pill's own inset
        const toX = cover.left + cover.width * 0.06 - 9
        const toY = cover.top + cover.height * cap.at - cap.height / 2
        const arc = Math.sin(Math.PI * q)
        const x = fromX + (toX - fromX) * q + arc * cap.bend
        const y = fromY + (toY - fromY) * q - arc * cap.lift
        const scale = (1 + 0.1 * arc) * (1 - 0.28 * dock)
        cap.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`
        cap.el.style.opacity = (fadeIn * (1 - dock)).toFixed(3)
      })
      const dim = clamp01((progress - 0.68) / 0.06) * (1 - clamp01((progress - 0.86) / 0.06))
      card.style.setProperty('--morph-dim', (0.84 * dim).toFixed(3))
      card.classList.toggle('is-born', progress > 0.9)
    }

    const build = () => {
      if (trigger || reduce.matches || !wide.matches) return
      const hero = document.querySelector('.hero')
      const workCard = document.querySelector('.work__item--pelialtouch')
      if (!hero || !workCard) return
      const sources = FIELDS.map(({ field }) => hero.querySelector(`[data-morph-field="${field}"]`))
      if (sources.some((node) => !node)) return

      card = workCard
      capsules = FIELDS.map((spec, index) => {
        const source = sources[index]
        const el = document.createElement('span')
        el.className = 'hero-morph__field'
        el.setAttribute('aria-hidden', 'true')
        el.innerHTML = source.innerHTML
        layer.append(el)
        const key = source.firstElementChild
        return {
          ...spec,
          source,
          el,
          inset: key ? key.getBoundingClientRect().left - source.getBoundingClientRect().left : 0,
          height: el.offsetHeight,
        }
      })

      const reflow = () => {
        capsules.forEach((cap) => {
          const key = cap.source.firstElementChild
          cap.inset = key ? key.getBoundingClientRect().left - cap.source.getBoundingClientRect().left : 0
          cap.height = cap.el.offsetHeight
        })
      }

      trigger = ScrollTrigger.create({
        trigger: hero,
        start: 'bottom 88%',
        end: () => `+=${window.innerHeight * 0.85}`,
        onUpdate: (self) => apply(self.progress),
        onRefresh: (self) => {
          reflow()
          apply(self.progress)
        },
      })
      apply(trigger.progress)
    }

    const sync = () => {
      clear()
      build()
    }

    wide.addEventListener('change', sync)
    reduce.addEventListener('change', sync)
    build()

    return () => {
      wide.removeEventListener('change', sync)
      reduce.removeEventListener('change', sync)
      clear()
    }
  }, [])

  return <div className="hero-morph" ref={layerRef} aria-hidden="true" />
}

export default HeroMorph
