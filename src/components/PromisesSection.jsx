import { promisesList, promisesHighlight } from '../data/promises'
import {
  ShieldCheck,
  Heart,
  Ear,
  Rocket,
  Trophy,
  Sparkles,
  MessageCircleHeart,
  Compass,
  Clock,
  Flame,
  CheckCircle2,
} from 'lucide-react'

const iconMap = {
  ShieldCheck,
  Heart,
  Ear,
  Rocket,
  Trophy,
  Sparkles,
  MessageCircleHeart,
  Compass,
  Clock,
  Flame,
}

export function PromisesSection() {
  return (
    <section
      id="promises"
      className="section-wrapper"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.95) 50%, rgba(255, 240, 245, 0.4) 100%)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1000px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <CheckCircle2 size={14} color="#d81b60" />
            <span>Sacred Vows</span>
          </div>
          <h2 className="section-title">
            Promises From <span className="script-highlight">My Heart</span>
          </h2>
          <p className="section-subtitle">
            Not empty words on a screen, but ten conscious decisions I make for us every day.
          </p>
        </div>

        {/* 10 Promises Grid */}
        <div
          className="promises-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '24px',
            marginBottom: '3.5rem',
          }}
        >
          {promisesList.map((item) => {
            const IconComponent = iconMap[item.icon] || Heart

            return (
              <div
                key={item.number}
                data-reveal="up"
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  borderRadius: '20px',
                  background: 'rgba(255, 253, 254, 0.92)',
                  border: '1px solid rgba(248, 187, 208, 0.65)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'rgba(216, 27, 96, 0.5)'
                  e.currentTarget.style.boxShadow = '0 16px 36px -8px rgba(216, 27, 96, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(248, 187, 208, 0.65)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                }}
              >
                {/* Number Badge with Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
                    border: '1.5px solid rgba(244, 143, 177, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d81b60',
                    boxShadow: '0 4px 12px rgba(216, 27, 96, 0.12)',
                  }}
                >
                  <IconComponent size={22} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#d81b60',
                      }}
                    >
                      Promise {item.number}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#b76e79' }}>•</span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: '#9c6778',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      color: '#4a2331',
                      fontWeight: 600,
                      marginBottom: '6px',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.promise}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#754052',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlight Vow Banner */}
        <div
          data-reveal="up"
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: '24px',
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 253, 254, 0.98), rgba(255, 240, 245, 0.85))',
            border: '2px solid rgba(244, 143, 177, 0.7)',
            boxShadow: '0 18px 45px -10px rgba(216, 27, 96, 0.25)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(248, 187, 208, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: '#d81b60',
            }}
          >
            <Sparkles size={24} />
          </div>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
              color: '#d81b60',
              lineHeight: 1.65,
              fontWeight: 600,
              fontStyle: 'italic',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            “{promisesHighlight}”
          </p>
        </div>
      </div>
    </section>
  )
}

