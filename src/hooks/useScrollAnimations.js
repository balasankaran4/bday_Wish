import { useEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768

    if (prefersReducedMotion || isTouchDevice) {
      return
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
      infinite: false,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCb = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      const revealElements = document.querySelectorAll('[data-reveal]')
      revealElements.forEach((el) => {
        const direction = el.getAttribute('data-reveal') || 'up'
        let yOffset = 40
        let xOffset = 0

        if (direction === 'down') yOffset = -40
        if (direction === 'left') {
          xOffset = 50
          yOffset = 0
        }
        if (direction === 'right') {
          xOffset = -50
          yOffset = 0
        }

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: yOffset,
            x: xOffset,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      const parallaxElements = document.querySelectorAll('[data-parallax]')
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15
        gsap.to(el, {
          y: () => -100 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    return () => {
      ctx.revert()
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
    }
  }, [])

  const scrollTo = useCallback((target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -30, duration: 1.4 })
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return { scrollTo }
}
