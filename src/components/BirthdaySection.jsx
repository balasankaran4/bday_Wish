import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Sparkles, Heart, Cake, Wand2, Star, Check } from 'lucide-react'

export function BirthdaySection() {
  const [candlesLit, setCandlesLit] = useState(true)
  const [wishModalOpen, setWishModalOpen] = useState(false)
  const [wishText, setWishText] = useState('')
  const [wishGranted, setWishGranted] = useState(false)

  // Trigger grand romantic confetti
  const fireConfetti = () => {
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#f8bbd0', '#f48fb1', '#d81b60', '#ffd54f', '#ffffff'],
    })
    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#f8bbd0', '#f48fb1', '#d81b60', '#ffd54f', '#ffffff'],
    })
    // Center heart burst
    confetti({
      particleCount: 60,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#d81b60', '#f48fb1', '#ffffff'],
    })
  }

  const handleBlowCandles = () => {
    setCandlesLit(!candlesLit)
    if (candlesLit) {
      fireConfetti()
    }
  }

  const handleMakeWishClick = () => {
    setWishModalOpen(true)
    fireConfetti()
  }

  const handleSealWish = (e) => {
    e.preventDefault()
    setWishGranted(true)
    fireConfetti()
    setTimeout(() => {
      setWishModalOpen(false)
      setWishGranted(false)
      setWishText('')
    }, 2800)
  }

  return (
    <section
      id="birthday"
      className="section-wrapper"
      style={{
        background:
          'radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 240, 245, 0.9) 55%, rgba(248, 187, 208, 0.4) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Floating Pink Balloons */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '6%',
          pointerEvents: 'none',
          animation: 'gentleFloat 6s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '78px',
            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
            background: 'radial-gradient(circle at 35% 35%, #fff0f5, #f48fb1)',
            boxShadow: '0 10px 24px rgba(244, 143, 177, 0.4)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '35px',
              backgroundColor: '#b76e79',
            }}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '18%',
          right: '8%',
          pointerEvents: 'none',
          animation: 'gentleFloat 7s ease-in-out 1.5s infinite',
        }}
      >
        <div
          style={{
            width: '74px',
            height: '90px',
            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
            background: 'radial-gradient(circle at 35% 35%, #fff0f5, #f8bbd0)',
            boxShadow: '0 10px 24px rgba(248, 187, 208, 0.4)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '40px',
              backgroundColor: '#b76e79',
            }}
          />
        </div>
      </div>

      <div className="section-container" style={{ maxWidth: '920px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Cake size={14} color="#d81b60" />
            <span>The Queen of My Heart</span>
          </div>

          <h2
            className="section-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
              color: '#d81b60',
              letterSpacing: '0.04em',
              lineHeight: 1.15,
            }}
          >
            HAPPY BIRTHDAY, MY LOVE!
          </h2>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 24px',
              borderRadius: '999px',
              background: '#ffffff',
              border: '1.5px solid rgba(244, 143, 177, 0.6)',
              boxShadow: '0 6px 20px -4px rgba(216, 27, 96, 0.2)',
              marginTop: '10px',
            }}
          >
            <Sparkles size={16} color="#d81b60" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#4a2331',
              }}
            >
              10 NOVEMBER 2006
            </span>
          </div>
        </div>

        {/* Lightweight Elegant CSS & SVG Birthday Cake Illustration */}
        <div
          data-reveal="up"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '240px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {/* Candles on top */}
            <div
              style={{
                display: 'flex',
                gap: '18px',
                marginBottom: '-4px',
                zIndex: 3,
              }}
            >
              {[1, 2, 3].map((candle) => (
                <div
                  key={candle}
                  onClick={handleBlowCandles}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  title="Click to blow out / light candles!"
                >
                  {/* Candle flame */}
                  {candlesLit ? (
                    <div
                      className="animate-flame"
                      style={{
                        width: '12px',
                        height: '18px',
                        borderRadius: '50% 50% 20% 20%',
                        background: 'radial-gradient(circle at 50% 70%, #ffeb3b, #ff9800, #ff5722)',
                        boxShadow: '0 0 14px #ffb300, 0 0 24px #ff7043',
                        marginBottom: '2px',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '4px',
                        height: '8px',
                        backgroundColor: '#8a5363',
                        marginBottom: '4px',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                  {/* Candle stick */}
                  <div
                    style={{
                      width: '8px',
                      height: '34px',
                      background: 'repeating-linear-gradient(45deg, #f8bbd0, #f8bbd0 4px, #ffffff 4px, #ffffff 8px)',
                      borderRadius: '4px 4px 0 0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Top Tier */}
            <div
              style={{
                width: '140px',
                height: '52px',
                background: 'linear-gradient(180deg, #fffdfd 0%, #fce4ec 100%)',
                borderRadius: '16px 16px 0 0',
                border: '2px solid rgba(244, 143, 177, 0.6)',
                borderBottom: 'none',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(183, 110, 121, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              {/* Frosting drips */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '14px',
                  background: 'repeating-radial-gradient(circle at 10px 0, #f48fb1 0, #f48fb1 8px, transparent 8px, transparent 20px)',
                  opacity: 0.6,
                }}
              />
              <Heart size={16} fill="#f48fb1" color="#d81b60" />
            </div>

            {/* Bottom Tier */}
            <div
              style={{
                width: '210px',
                height: '66px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8bbd0 100%)',
                borderRadius: '18px 18px 6px 6px',
                border: '2px solid rgba(244, 143, 177, 0.7)',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(183, 110, 121, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                zIndex: 1,
              }}
            >
              {/* Pearl bead decoration */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1px solid #f48fb1',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cake Plate Stand */}
            <div
              style={{
                width: '250px',
                height: '12px',
                background: 'linear-gradient(90deg, #fff 0%, #fce4ec 50%, #fff 100%)',
                borderRadius: '999px',
                border: '1.5px solid rgba(248, 187, 208, 0.8)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                marginTop: '1px',
              }}
            />
          </div>

          <span
            style={{
              fontSize: '0.8rem',
              color: '#b76e79',
              marginTop: '12px',
              cursor: 'pointer',
            }}
            onClick={handleBlowCandles}
          >
            {candlesLit ? '✨ Click candles to make a wish & blow them out!' : '🕯️ Click to light the candles again'}
          </span>
        </div>

        {/* Birthday Message Box */}
        <div
          data-reveal="up"
          className="glass-card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.75rem, 5vw, 3.5rem)',
            borderRadius: '28px',
            background: 'rgba(255, 253, 254, 0.95)',
            border: '1.5px solid rgba(244, 143, 177, 0.65)',
            boxShadow: '0 20px 50px -10px rgba(216, 27, 96, 0.22)',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.15rem, 2.3vw, 1.45rem)',
              color: '#4a2331',
              lineHeight: 1.9,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.55rem', color: '#d81b60', fontWeight: 600 }}>
              Today is all about you.
            </p>

            <p>
              I wish you endless happiness, good health, success, peace, and everything your
              beautiful heart dreams of.
            </p>

            <p>May you achieve everything you work hard for.</p>

            <p style={{ color: '#d81b60', fontWeight: 600 }}>May your smile never fade.</p>

            <p>
              May your life be filled with beautiful opportunities and unforgettable moments.
            </p>

            <p>Never forget how special you are. You deserve the very best in this world.</p>

            <div
              style={{
                width: '60px',
                height: '2px',
                background: '#f48fb1',
                margin: '0.75rem auto',
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
                color: '#d81b60',
                lineHeight: 1.2,
              }}
            >
              Happy Birthday to my favourite person. ❤️
            </p>
          </div>
        </div>

        {/* Interactive "Make a Birthday Wish" CTA */}
        <div data-reveal="up" style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="btn-romantic animate-pulse-glow"
            onClick={handleMakeWishClick}
            style={{
              fontSize: '1.08rem',
              padding: '16px 42px',
            }}
          >
            <Wand2 size={20} />
            <span>Make a Birthday Wish</span>
            <Sparkles size={18} />
          </button>
        </div>
      </div>

      {/* Birthday Wish Modal */}
      {wishModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setWishModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(74, 35, 49, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '520px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: 'clamp(24px, 5vw, 36px)',
              boxShadow: '0 25px 60px rgba(216, 27, 96, 0.35)',
              border: '2px solid rgba(244, 143, 177, 0.7)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {wishGranted ? (
              <div style={{ padding: '20px 0' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(248, 187, 208, 0.45)',
                    color: '#d81b60',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Star size={32} fill="#ffd54f" color="#ffb300" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    color: '#d81b60',
                    marginBottom: '8px',
                  }}
                >
                  Your Wish is Sealed! ✨
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    color: '#754052',
                    fontStyle: 'italic',
                  }}
                >
                  May the universe conspire to bring every bit of your wish to life. I will do
                  everything in my power to make you happy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSealWish}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 143, 177, 0.25)',
                    color: '#d81b60',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}
                >
                  <Sparkles size={28} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    color: '#4a2331',
                    marginBottom: '8px',
                  }}
                >
                  Close Your Eyes & Wish
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#754052',
                    marginBottom: '20px',
                    lineHeight: 1.5,
                  }}
                >
                  Type your secret birthday wish below (or just hold it in your heart) and seal it:
                </p>

                <textarea
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder="My secret wish for this year..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '16px',
                    border: '1.5px solid rgba(248, 187, 208, 0.8)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.96rem',
                    color: '#4a2331',
                    marginBottom: '20px',
                    outline: 'none',
                    resize: 'none',
                    backgroundColor: '#fff0f5',
                  }}
                />

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={() => setWishModalOpen(false)}
                    className="btn-secondary"
                    style={{ padding: '10px 22px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-romantic"
                    style={{ padding: '10px 28px' }}
                  >
                    <Check size={18} />
                    <span>Seal My Wish ❤️</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
