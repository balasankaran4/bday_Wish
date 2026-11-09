import { Heart, Sparkles, HeartHandshake } from 'lucide-react'

export function RelationshipStory() {
  return (
    <section
      id="growth"
      className="section-wrapper"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(255, 253, 254, 0.98) 0%, rgba(255, 240, 245, 0.75) 60%, rgba(248, 187, 208, 0.3) 100%)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <HeartHandshake size={14} color="#d81b60" />
            <span>Our Little Fights, Our Big Love</span>
          </div>
          <h2 className="section-title">
            We Are Not Perfect, <span className="script-highlight">But We Are Us</span>
          </h2>
          <p className="section-subtitle">
            Imperfect days don’t define us—how we choose each other after every storm does.
          </p>
        </div>

        {/* Converging Hearts Visual Indicator */}
        <div
          data-reveal="up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Left heart half */}
          <div
            style={{
              animation: 'convergeLeft 4s ease-in-out infinite alternate',
              color: '#f48fb1',
            }}
          >
            <Heart size={34} fill="#f8bbd0" stroke="#d81b60" strokeWidth={1.5} />
          </div>

          {/* Glowing connecting line */}
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #f48fb1, #d81b60, #f48fb1)',
              boxShadow: '0 0 10px rgba(216, 27, 96, 0.45)',
            }}
          />

          {/* Sparkle center */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#d81b60',
            }}
          >
            <Sparkles size={18} />
          </div>

          {/* Right heart half */}
          <div
            style={{
              animation: 'convergeRight 4s ease-in-out infinite alternate',
              color: '#d81b60',
            }}
          >
            <Heart size={34} fill="#f48fb1" stroke="#d81b60" strokeWidth={1.5} />
          </div>
        </div>

        {/* Split Screen Joining Card */}
        <div
          data-reveal="up"
          className="fights-split-grid glass-card"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(248, 187, 208, 0.65)',
            boxShadow: '0 20px 48px -12px rgba(183, 110, 121, 0.2)',
            marginBottom: '3rem',
          }}
        >
          {/* Left Side: Realities We Face */}
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'rgba(255, 240, 245, 0.5)',
              borderRight: '1px solid rgba(248, 187, 208, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#b76e79',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              The Realities of Us
            </span>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                color: '#4a2331',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <p>We have fought.</p>
              <p>We have argued.</p>
              <p>We have misunderstood each other.</p>
              <p>Sometimes we have been stubborn.</p>
              <p>Sometimes we have been upset.</p>
            </div>
          </div>

          {/* Right Side: Our Special Strength */}
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d81b60',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Our Greatest Strength
            </span>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                color: '#d81b60',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontWeight: 600,
              }}
            >
              <p>We talk to each other directly.</p>
              <p>We understand each other.</p>
              <p>We solve things between ourselves.</p>
              <p>No outside interference.</p>
              <p>Always on the same team.</p>
            </div>
          </div>
        </div>

        {/* Central Heartfelt Reflection Card */}
        <div
          data-reveal="up"
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem)',
            borderRadius: '24px',
            background: 'rgba(255, 253, 254, 0.95)',
            border: '1.5px solid rgba(244, 143, 177, 0.55)',
            boxShadow: '0 16px 40px -10px rgba(216, 27, 96, 0.16)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.3vw, 1.45rem)',
              color: '#4a2331',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            “Even when we disagree, I want us to remember that we are on the same side. I don’t want
            to win every argument. I want us to understand each other better.”
          </p>

          <div
            style={{
              width: '60px',
              height: '2px',
              background: '#f48fb1',
              margin: '0 auto 1.5rem',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.55rem)',
              color: '#d81b60',
              fontWeight: 600,
              fontStyle: 'italic',
            }}
          >
            “Our relationship is not about never fighting. It is about learning how to love each
            other better, even on difficult days.”
          </p>
        </div>
      </div>

      <style>{`
        @keyframes convergeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(12px); }
        }
        @keyframes convergeRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-12px); }
        }
      `}</style>
    </section>
  )
}
