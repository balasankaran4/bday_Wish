import { useEffect, useRef } from 'react'
import { timelineMilestones } from '../data/timeline'
import { Sparkles, HeartHandshake, ShieldAlert, HeartPulse, Cake, Infinity as InfinityIcon, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  HeartPulse,
  Cake,
  Infinity: InfinityIcon,
}

export function LoveTimeline() {
  const lineRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const anim = gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 85%',
          scrub: true,
        },
      }
    )

    return () => {
      anim.kill()
    }
  }, [])

  return (
    <section
      id="story"
      className="section-wrapper"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.9) 50%, rgba(255, 240, 245, 0.4) 100%)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Clock size={14} color="#d81b60" />
            <span>Our Journey Together</span>
          </div>
          <h2 className="section-title">
            Our Love Story <span className="script-highlight">Timeline</span>
          </h2>
          <p className="section-subtitle">
            From our first spark in April 2025 to our upcoming second year and beyond.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          {/* Central Vertical Connecting Line Background */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '4px',
              backgroundColor: 'rgba(248, 187, 208, 0.45)',
              transform: 'translateX(-50%)',
              borderRadius: '999px',
            }}
          />

          {/* Glowing Animated Scroll Progress Line */}
          <div
            ref={lineRef}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '4px',
              background: 'linear-gradient(180deg, #f8bbd0, #f48fb1, #d81b60)',
              transform: 'translateX(-50%)',
              transformOrigin: 'top center',
              borderRadius: '999px',
              boxShadow: '0 0 12px rgba(216, 27, 96, 0.65)',
            }}
          />

          {/* Milestones List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timelineMilestones.map((item, index) => {
              const isEven = index % 2 === 0
              const IconComponent = iconMap[item.icon] || Sparkles

              return (
                <div
                  key={item.id}
                  className={`timeline-item ${isEven ? 'left' : 'right'}`}
                  data-reveal={isEven ? 'right' : 'left'}
                  style={{
                    position: 'relative',
                    width: '50%',
                    paddingRight: isEven ? '45px' : '0',
                    paddingLeft: isEven ? '0' : '45px',
                    marginLeft: isEven ? '0' : '50%',
                    textAlign: isEven ? 'right' : 'left',
                  }}
                >
                  {/* Glowing Milestone Dot Center */}
                  <div
                    className="timeline-dot"
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: isEven ? '-18px' : 'auto',
                      left: isEven ? 'auto' : '-18px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #ffffff 40%, #f48fb1 100%)',
                      border: '3px solid #d81b60',
                      boxShadow: '0 0 16px rgba(216, 27, 96, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                    }}
                  >
                    <IconComponent size={16} color="#d81b60" />
                  </div>

                  {/* Milestone Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '24px 28px',
                      borderRadius: '20px',
                      border: '1px solid rgba(248, 187, 208, 0.6)',
                      background: 'rgba(255, 253, 254, 0.88)',
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      position: 'relative',
                    }}
                  >
                    {/* Date Tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'rgba(244, 143, 177, 0.2)',
                        border: '1px solid rgba(244, 143, 177, 0.4)',
                        color: '#d81b60',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        marginBottom: '8px',
                      }}
                    >
                      <span>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.45rem',
                        color: '#4a2331',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        color: '#d81b60',
                        fontStyle: 'italic',
                        marginBottom: '10px',
                      }}
                    >
                      {item.subtitle}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: '#754052',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Highlight Badge */}
                    <div
                      style={{
                        marginTop: '14px',
                        paddingTop: '10px',
                        borderTop: '1px dashed rgba(248, 187, 208, 0.6)',
                        fontSize: '0.8rem',
                        color: '#b76e79',
                        fontStyle: 'italic',
                      }}
                    >
                      ✨ {item.highlight}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
