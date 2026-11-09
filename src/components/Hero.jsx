import { Heart, Calendar, Sparkles, ChevronDown } from 'lucide-react'

export function Hero({ onEnter }) {
  const handleEnterClick = () => {
    if (onEnter) {
      onEnter()
    } else {
      const nextSection = document.getElementById('letter')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '3rem',
        background:
          'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 240, 245, 0.7) 60%, rgba(248, 187, 208, 0.35) 100%)',
      }}
    >
      {/* Decorative ambient glowing backdrops */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(650px, 90vw)',
          height: 'min(650px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 143, 177, 0.28) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Floating Tagline Badge */}
        <div
          data-reveal="down"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 22px',
            borderRadius: '999px',
            background: 'rgba(255, 253, 254, 0.85)',
            border: '1px solid rgba(248, 187, 208, 0.65)',
            boxShadow: '0 4px 20px -4px rgba(216, 27, 96, 0.15)',
            backdropFilter: 'blur(10px)',
            marginBottom: '1.5rem',
          }}
        >
          <Sparkles size={15} color="#d81b60" />
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#d81b60',
            }}
          >
            Two Hearts • One Story • A Thousand Memories
          </span>
        </div>

        {/* Emotional Main Heading */}
        <h1
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(3.8rem, 8.5vw, 6.8rem)',
            color: '#d81b60',
            lineHeight: 1.08,
            marginBottom: '0.85rem',
            textShadow: '0 4px 24px rgba(244, 143, 177, 0.45)',
          }}
        >
          Hey My Love...
        </h1>

        {/* Subheading */}
        <p
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 2.6vw, 1.75rem)',
            fontStyle: 'italic',
            color: '#4a2331',
            maxWidth: '680px',
            margin: '0 auto 1.85rem',
            lineHeight: 1.45,
          }}
        >
          “I made something special for the most special person in my world.”
        </p>

        {/* Birthday Date Display Banner */}
        <div
          data-reveal="up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            borderRadius: '999px',
            background: 'rgba(255, 253, 254, 0.92)',
            border: '1.5px solid rgba(244, 143, 177, 0.7)',
            boxShadow: '0 8px 30px -6px rgba(216, 27, 96, 0.2)',
            marginBottom: '2.5rem',
          }}
        >
          <Calendar size={18} color="#d81b60" />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              letterSpacing: '0.22em',
              fontWeight: 700,
              color: '#4a2331',
            }}
          >
            10 • 11 • 2006
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: '999px',
              background: '#f8bbd0',
              color: '#754052',
              fontWeight: 600,
            }}
          >
            Birthday Girl
          </span>
        </div>

        {/* Main CTA Button */}
        <div data-reveal="up">
          <button
            type="button"
            className="btn-romantic animate-pulse-glow"
            onClick={handleEnterClick}
            style={{
              fontSize: '1.08rem',
              padding: '16px 42px',
            }}
          >
            <span>Enter Our Little World</span>
            <Heart size={20} fill="#ffffff" color="#ffffff" />
          </button>
        </div>

        {/* Relationship Summary Footer Pill */}
        <div
          data-reveal="up"
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: '#9c6778',
            fontSize: '0.88rem',
          }}
        >
          <span>Together since April 2025</span>
          <span>•</span>
          <span style={{ color: '#d81b60', fontWeight: 600 }}>Approaching Two Years</span>
          <span>•</span>
          <span>Forever to go</span>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={handleEnterClick}
          aria-label="Scroll to letter section"
          style={{
            marginTop: '2rem',
            color: '#b76e79',
            animation: 'gentleFloat 3s ease-in-out infinite',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Scroll to Discover
          </span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  )
}
