import { Heart, Feather } from 'lucide-react'

export function LoveLetter({ theme = 'light' }) {
  const isDark = theme === 'dark'

  return (
    <section
      id="letter"
      className="section-wrapper"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, rgba(7, 12, 24, 0.86) 0%, rgba(15, 23, 42, 0.96) 50%, rgba(7, 12, 24, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.95) 50%, rgba(255, 240, 245, 0.5) 100%)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow" style={{ background: isDark ? 'rgba(96, 165, 250, 0.14)' : 'rgba(248, 187, 208, 0.35)', borderColor: isDark ? 'rgba(147, 197, 253, 0.3)' : 'rgba(244, 143, 177, 0.4)', color: isDark ? '#dcebff' : '#d81b60' }}>
            <Feather size={14} color={isDark ? '#93c5fd' : '#d81b60'} />
            <span>A Message From My Heart</span>
          </div>
          <h2 className="section-title" style={{ color: isDark ? '#f8fbff' : '#4a2331' }}>
            Before You Explore <span className="script-highlight">Our Story...</span>
          </h2>
          <p className="section-subtitle" style={{ color: isDark ? '#cbd5e1' : '#9c6778' }}>
            A handwritten vow etched in honesty, vulnerability, and genuine love.
          </p>
        </div>

        {/* Realistic Unfolding Letter Card */}
        <div
          data-reveal="up"
          className="letter-container"
          style={{
            position: 'relative',
            perspective: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Subtle vintage envelope flap top decorative accent */}
          <div
            style={{
              position: 'absolute',
              top: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #d81b60, #ad1457)',
              boxShadow: '0 6px 18px rgba(216, 27, 96, 0.38), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 255, 255, 0.8)',
            }}
          >
            {/* Wax seal heart icon */}
            <Heart size={30} fill="#ffffff" color="#ffffff" />
          </div>

          {/* Letter Body Paper */}
          <div
            className="letter-paper"
            style={{
              background: isDark ? 'rgba(15, 23, 42, 0.92)' : '#fffdfd',
              borderRadius: '20px',
              padding: 'clamp(2.5rem, 6vw, 4.25rem) clamp(1.75rem, 5vw, 3.75rem)',
              boxShadow: isDark
                ? '0 20px 50px -12px rgba(15, 23, 42, 0.72), 0 0 0 1px rgba(147, 197, 253, 0.24), inset 0 0 40px rgba(96, 165, 250, 0.08)'
                : '0 20px 50px -12px rgba(183, 110, 121, 0.22), 0 0 0 1px rgba(248, 187, 208, 0.55), inset 0 0 40px rgba(255, 240, 245, 0.4)',
              border: isDark ? '1px solid rgba(147, 197, 253, 0.22)' : '1px solid rgba(244, 143, 177, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Elegant corner flourishes */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                width: '32px',
                height: '32px',
                borderTop: '2px solid rgba(244, 143, 177, 0.5)',
                borderLeft: '2px solid rgba(244, 143, 177, 0.5)',
                borderTopLeftRadius: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '32px',
                height: '32px',
                borderTop: '2px solid rgba(244, 143, 177, 0.5)',
                borderRight: '2px solid rgba(244, 143, 177, 0.5)',
                borderTopRightRadius: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                width: '32px',
                height: '32px',
                borderBottom: '2px solid rgba(244, 143, 177, 0.5)',
                borderLeft: '2px solid rgba(244, 143, 177, 0.5)',
                borderBottomLeftRadius: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                right: '14px',
                width: '32px',
                height: '32px',
                borderBottom: '2px solid rgba(244, 143, 177, 0.5)',
                borderRight: '2px solid rgba(244, 143, 177, 0.5)',
                borderBottomRightRadius: '8px',
              }}
            />

            {/* Salutation */}
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <span
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                  color: '#d81b60',
                  display: 'block',
                  lineHeight: 1.15,
                }}
              >
                My love,
              </span>
            </div>

            {/* Letter Content */}
            <div
              className="letter-content"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.12rem, 2.2vw, 1.35rem)',
                color: isDark ? '#e2e8f0' : '#4a2331',
                lineHeight: 1.85,
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <p>
                There are so many things I want to tell you, but sometimes words are not enough to
                explain what my heart feels.
              </p>

              <p>
                You entered my life and slowly became someone I cannot imagine my everyday life
                without.
              </p>

              <p>
                I know we are not perfect. We have our arguments, our misunderstandings, and our
                difficult moments.
              </p>

              <p style={{ fontWeight: 600, color: isDark ? '#93c5fd' : '#d81b60' }}>
                But even after everything, my heart still finds its way back to you.
              </p>

              <p>
                I don’t want a perfect love story. I want <strong style={{ color: isDark ? '#f8fbff' : '#4a2331' }}>our story</strong>, with all its
                happiness, challenges, lessons, and memories.
              </p>

              <p>Thank you for being part of my life.</p>

              <p>I love you, and I want to keep making beautiful memories with you.</p>
            </div>

            {/* Signature & Closing */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px dashed rgba(248, 187, 208, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
                  color: isDark ? '#bfdbfe' : '#d81b60',
                  lineHeight: 1.2,
                }}
              >
                Forever Yours ❤️
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.84rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isDark ? '#cbd5e1' : '#9c6778',
                  marginTop: '4px',
                }}
              >
                With All My Devotion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
