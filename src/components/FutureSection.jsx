import { Compass, Sparkles, Heart, Plane, Smile, PartyPopper } from 'lucide-react'

const futureItems = [
  { icon: Heart, label: 'More memories to create', detail: 'New inside jokes, quiet Sunday mornings, and shared secrets.' },
  { icon: Plane, label: 'More places to explore', detail: 'Wandering new cities, beaches, and hidden mountain trails.' },
  { icon: Smile, label: 'More smiles to share', detail: 'Laughing until our stomachs hurt over the simplest things.' },
  { icon: Sparkles, label: 'More dreams to support', detail: 'Being each other’s pillar as we build our chosen careers.' },
  { icon: PartyPopper, label: 'More birthdays to celebrate', detail: 'Many more November 10ths, celebrating the gift of you.' },
  { icon: Compass, label: 'More beautiful moments together', detail: 'Growing wiser, softer, and more deeply in love.' },
]

export function FutureSection() {
  return (
    <section
      id="future"
      className="section-wrapper"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.95) 50%, rgba(255, 240, 245, 0.5) 100%)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1060px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Compass size={14} color="#d81b60" />
            <span>Tomorrow & Beyond</span>
          </div>
          <h2 className="section-title">
            The Best Chapters Are <span className="script-highlight">Yet to Come...</span>
          </h2>
          <p className="section-subtitle">
            Looking forward with hope, open arms, and an unshakable devotion.
          </p>
        </div>

        {/* Future Aspirations Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px',
            marginBottom: '3.5rem',
          }}
        >
          {futureItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                data-reveal="up"
                className="glass-card"
                style={{
                  padding: '28px 24px',
                  borderRadius: '22px',
                  background: 'rgba(255, 253, 254, 0.92)',
                  border: '1px solid rgba(248, 187, 208, 0.6)',
                  textAlign: 'left',
                  transition: 'all 0.35s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = 'rgba(216, 27, 96, 0.5)'
                  e.currentTarget.style.boxShadow = '0 16px 36px -8px rgba(216, 27, 96, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(248, 187, 208, 0.6)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 143, 177, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d81b60',
                    marginBottom: '16px',
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.28rem',
                    color: '#4a2331',
                    marginBottom: '8px',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
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
            )
          })}
        </div>

        {/* Horizontal Future Postcards Strip */}
        <div
          data-reveal="up"
          style={{
            marginBottom: '3.5rem',
            overflow: 'hidden',
            borderRadius: '24px',
            padding: '16px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '18px',
              animation: 'infiniteScroll 35s linear infinite',
              width: 'max-content',
            }}
          >
            {[...Array(8)].map((_, i) => {
              const memId = (i % 6) + 1
              const pad = String(memId).padStart(2, '0')
              return (
                <div
                  key={i}
                  style={{
                    width: '260px',
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '2px solid rgba(248, 187, 208, 0.7)',
                    boxShadow: '0 8px 24px rgba(183, 110, 121, 0.15)',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={`/images/memories/memory-${pad}.jpg`}
                    alt="Future memory placeholder"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(0deg, rgba(74, 35, 49, 0.65) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '12px',
                    }}
                  >
                    <span style={{ color: '#ffffff', fontSize: '0.82rem', fontWeight: 600 }}>
                      Chapter {i + 1} • Waiting For Us ✨
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Final Future Message Card */}
        <div
          data-reveal="up"
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem)',
            borderRadius: '24px',
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 253, 254, 0.98), rgba(255, 240, 245, 0.9))',
            border: '1.5px solid rgba(244, 143, 177, 0.65)',
            boxShadow: '0 18px 45px -10px rgba(216, 27, 96, 0.22)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.3vw, 1.5rem)',
              color: '#d81b60',
              fontStyle: 'italic',
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto',
              fontWeight: 500,
            }}
          >
            “I don’t know everything about tomorrow, but I hope we continue growing together,
            understanding each other, and creating a beautiful future.”
          </p>
        </div>
      </div>

      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
