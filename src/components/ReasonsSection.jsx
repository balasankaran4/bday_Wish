import { useState } from 'react'
import { reasonCategories, reasonsList, specialFinalReason } from '../data/reasons'
import { Heart, Plus, Infinity as InfinityIcon } from 'lucide-react'

export function ReasonsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(12)

  // Filter reasons
  const filteredReasons =
    selectedCategory === 'All'
      ? reasonsList
      : reasonsList.filter((r) => r.category === selectedCategory)

  const displayedReasons = filteredReasons.slice(0, visibleCount)
  const hasMore = visibleCount < filteredReasons.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12)
  }

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    setVisibleCount(12) // reset pagination when switching category
  }

  return (
    <section
      id="reasons"
      className="section-wrapper"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.95) 50%, rgba(255, 240, 245, 0.4) 100%)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Heart size={14} color="#d81b60" />
            <span>Endless Devotion</span>
          </div>
          <h2 className="section-title">
            A Million Little Reasons <span className="script-highlight">Why I Love You</span>
          </h2>
          <p className="section-subtitle">
            Not just six reasons, but an entire universe of why my heart will always choose you.
          </p>
        </div>

        {/* Category Pills Bar */}
        <div
          data-reveal="up"
          className="reasons-filter-bar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '3rem',
          }}
        >
          {reasonCategories.map((category) => {
            const isActive = selectedCategory === category
            const count =
              category === 'All'
                ? reasonsList.length
                : reasonsList.filter((r) => r.category === category).length

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className="filter-pill"
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : '#754052',
                  backgroundColor: isActive ? '#d81b60' : 'rgba(255, 253, 254, 0.85)',
                  border: `1px solid ${isActive ? '#d81b60' : 'rgba(248, 187, 208, 0.65)'}`,
                  boxShadow: isActive ? '0 6px 18px -2px rgba(216, 27, 96, 0.35)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{category}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    opacity: 0.85,
                    backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(248, 187, 208, 0.4)',
                    padding: '2px 6px',
                    borderRadius: '999px',
                  }}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Reasons Grid */}
        <div
          className="reasons-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '20px',
            marginBottom: '3rem',
          }}
        >
          {displayedReasons.map((item) => (
            <div
              key={item.id}
              data-reveal="up"
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '20px',
                border: '1px solid rgba(248, 187, 208, 0.55)',
                background: 'rgba(255, 253, 254, 0.88)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(216, 27, 96, 0.5)'
                e.currentTarget.style.boxShadow = '0 16px 36px -8px rgba(216, 27, 96, 0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(248, 187, 208, 0.55)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
            >
              {/* Card Top: Number & Category Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#d81b60',
                    opacity: 0.85,
                  }}
                >
                  #{item.number}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#b76e79',
                    backgroundColor: 'rgba(248, 187, 208, 0.3)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid rgba(244, 143, 177, 0.35)',
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Reason Text */}
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.18rem',
                  lineHeight: 1.6,
                  color: '#4a2331',
                  marginBottom: '16px',
                  fontWeight: 500,
                  textAlign: 'left',
                }}
              >
                “{item.text}”
              </p>

              {/* Bottom Heart Accent */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  color: '#f48fb1',
                }}
              >
                <Heart size={16} fill="currentColor" />
              </div>
            </div>
          ))}

          {/* Special Final Infinity Card (always shown when all are loaded or at the end) */}
          {!hasMore && (
            <div
              data-reveal="up"
              className="glass-card"
              style={{
                gridColumn: '1 / -1',
                padding: '36px clamp(20px, 4vw, 42px)',
                borderRadius: '24px',
                background:
                  'radial-gradient(circle at 50% 50%, rgba(255, 253, 254, 0.98), rgba(255, 240, 245, 0.85))',
                border: '2px solid rgba(216, 27, 96, 0.4)',
                boxShadow: '0 16px 40px -8px rgba(216, 27, 96, 0.28)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(248, 187, 208, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#d81b60',
                }}
              >
                <InfinityIcon size={28} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.6rem)',
                  color: '#d81b60',
                  lineHeight: 1.15,
                  marginBottom: '10px',
                }}
              >
                {specialFinalReason.text}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontStyle: 'italic',
                  color: '#754052',
                  maxWidth: '650px',
                  margin: '0 auto',
                }}
              >
                {specialFinalReason.subtitle}
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div data-reveal="up" style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={handleLoadMore}
              className="btn-secondary"
              style={{
                fontSize: '0.98rem',
                padding: '13px 34px',
                border: '1.5px solid rgba(244, 143, 177, 0.7)',
              }}
            >
              <Plus size={18} color="#d81b60" />
              <span>Load More Reasons ({filteredReasons.length - visibleCount} more)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
