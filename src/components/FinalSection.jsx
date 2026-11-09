import { Heart, ArrowUp } from 'lucide-react'

export function FinalSection({ onScrollToTop }) {
  const handleScrollTop = () => {
    if (onScrollToTop) {
      onScrollToTop()
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer
      id="final"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background:
          'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 240, 245, 0.85) 60%, rgba(248, 187, 208, 0.4) 100%)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="section-container" style={{ maxWidth: '820px' }}>
        {/* Animated Heart Centerpiece */}
        <div
          data-reveal="up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffffff 40%, #fce4ec 100%)',
            border: '2px solid rgba(244, 143, 177, 0.7)',
            boxShadow: '0 0 35px rgba(216, 27, 96, 0.35)',
            marginBottom: '2rem',
            animation: 'heartBeatSlow 2.6s ease-in-out infinite',
            color: '#d81b60',
          }}
        >
          <Heart size={44} fill="#f48fb1" stroke="#d81b60" strokeWidth={1.5} />
        </div>

        {/* Main Heading */}
        <h2
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            color: '#4a2331',
            lineHeight: 1.2,
            marginBottom: '1.75rem',
          }}
        >
          Thank You For Being <br />
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.35em',
              color: '#d81b60',
              fontWeight: 400,
            }}
          >
            My Favourite Part Of Life.
          </span>
        </h2>

        {/* Emotional Final Prose */}
        <div
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.22rem, 2.4vw, 1.55rem)',
            color: '#754052',
            lineHeight: 1.9,
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <p>
            From April 2025 to all the beautiful moments waiting for us ahead, this is our story.
          </p>

          <p style={{ fontStyle: 'italic', color: '#b76e79' }}>
            Not a perfect story. <br />
            Not a story without challenges. <br />
            But a story that means everything to me.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              color: '#d81b60',
              fontWeight: 600,
              marginTop: '0.5rem',
            }}
          >
            Happy Birthday, My Love.
          </p>
        </div>

        {/* Signature */}
        <div data-reveal="up" style={{ marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: '#d81b60',
              display: 'block',
              lineHeight: 1.15,
            }}
          >
            With All My Love, Forever Yours. ❤️
          </span>
          <span
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#9c6778',
              marginTop: '6px',
              display: 'block',
            }}
          >
            Our Little Universe • 10 November 2006
          </span>
        </div>

        {/* Back to Beginning Scroll Button */}
        <div data-reveal="up">
          <button
            type="button"
            onClick={handleScrollTop}
            className="btn-secondary"
            style={{
              fontSize: '0.92rem',
              padding: '12px 28px',
              gap: '8px',
            }}
          >
            <ArrowUp size={16} color="#d81b60" />
            <span>Back to the Beginning</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
