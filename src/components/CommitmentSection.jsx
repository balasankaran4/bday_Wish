import { useEffect, useRef } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CommitmentSection() {
  const heartPathRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!heartPathRef.current || !containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const path = heartPathRef.current
    const length = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    const anim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 80%',
        scrub: 1.2,
      },
    })

    return () => {
      anim.kill()
    }
  }, [])

  return (
    <section
      id="commitment"
      ref={containerRef}
      className="section-wrapper"
      style={{
        position: 'relative',
        background:
          'radial-gradient(circle at 50% 40%, rgba(255, 253, 254, 0.98) 0%, rgba(255, 240, 245, 0.8) 55%, rgba(248, 187, 208, 0.35) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Parallax Glow */}
      <div
        data-parallax="0.3"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(700px, 90vw)',
          height: 'min(700px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 143, 177, 0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="section-container" style={{ maxWidth: '880px', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Sparkles size={14} color="#d81b60" />
            <span>Unwavering Commitment</span>
          </div>
          <h2 className="section-title">
            Out of Everyone in This World, <br />
            <span className="script-highlight">My Heart Chooses You</span>
          </h2>
          <p className="section-subtitle">
            Not by accident, not by chance, but by a conscious, everyday decision.
          </p>
        </div>

        {/* Large Animated SVG Heart Outline that Draws Itself on Scroll */}
        <div
          data-reveal="up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
            position: 'relative',
          }}
        >
          <svg
            width="220"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              overflow: 'visible',
              filter: 'drop-shadow(0 0 16px rgba(216, 27, 96, 0.45))',
            }}
          >
            {/* Background faint guide */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="rgba(248, 187, 208, 0.4)"
              strokeWidth="1.2"
            />
            {/* Glowing drawn path */}
            <path
              ref={heartPathRef}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#d81b60"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Central Pulsing Heart Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#d81b60',
              animation: 'heartBeatSlow 2.5s ease-in-out infinite',
            }}
          >
            <Heart size={36} fill="#f48fb1" color="#d81b60" />
          </div>
        </div>

        {/* Cinematic Love Declaration Card */}
        <div
          data-reveal="up"
          className="glass-card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.75rem, 5vw, 3.5rem)',
            borderRadius: '28px',
            background: 'rgba(255, 253, 254, 0.94)',
            border: '1.5px solid rgba(248, 187, 208, 0.7)',
            boxShadow: '0 20px 50px -10px rgba(216, 27, 96, 0.18)',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 2.3vw, 1.48rem)',
              color: '#4a2331',
              lineHeight: 1.9,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p style={{ fontWeight: 600, color: '#d81b60' }}>
              I don’t want to be just another person in your life.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                color: '#754052',
                fontStyle: 'italic',
              }}
            >
              <p>The person you can trust.</p>
              <p>The person you can talk to.</p>
              <p>The person who celebrates your happiness.</p>
              <p>The person who supports you during difficult days.</p>
            </div>

            <p>I want to love you with honesty, loyalty, patience, and respect.</p>

            <p>
              I don’t want to prove my love only through beautiful words on a website. I want you to
              feel it in the way I treat you every single day.
            </p>

            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: '#d81b60' }}>
              You are the person I want to keep choosing. My heart has chosen you.
            </p>
          </div>
        </div>

        {/* Final Commitment Seal */}
        <div
          data-reveal="up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 32px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #d81b60, #f48fb1)',
            color: '#ffffff',
            boxShadow: '0 10px 30px -4px rgba(216, 27, 96, 0.42)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          <Heart size={20} fill="#ffffff" />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            “I want to be your one and only love, and earn that place through my actions every single day.”
          </span>
        </div>
      </div>
    </section>
  )
}
