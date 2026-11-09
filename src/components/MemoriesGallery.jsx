import { useState, useEffect } from 'react'
import { memoryCategories, memoriesData } from '../data/memories'
import { Camera, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

export function MemoriesGallery() {
  const [activeCategory, setActiveCategory] = useState('All Memories')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Filter memories
  const filteredMemories =
    activeCategory === 'All Memories'
      ? memoriesData
      : memoriesData.filter((m) => m.category === activeCategory)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredMemories.length)
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredMemories.length) % filteredMemories.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredMemories.length])

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % filteredMemories.length)
  }

  const prevLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + filteredMemories.length) % filteredMemories.length)
  }

  return (
    <section
      id="memories"
      className="section-wrapper"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 253, 254, 0.95) 50%, rgba(255, 240, 245, 0.5) 100%)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" data-reveal="up">
          <div className="section-eyebrow">
            <Camera size={14} color="#d81b60" />
            <span>Cherished Snapshots</span>
          </div>
          <h2 className="section-title">
            Every Picture Has a <span className="script-highlight">Story</span>
          </h2>
          <p className="section-subtitle">
            A gallery of quiet laughter, stolen glances, and unforgettable days.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          data-reveal="up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '3rem',
          }}
        >
          {memoryCategories.map((cat) => {
            const isActive = activeCategory === cat
            const count =
              cat === 'All Memories'
                ? memoriesData.length
                : memoriesData.filter((m) => m.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
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
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    opacity: 0.8,
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(248, 187, 208, 0.4)',
                    padding: '2px 7px',
                    borderRadius: '999px',
                  }}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div
          className="gallery-masonry"
          style={{
            columns: '3 320px',
            columnGap: '24px',
            width: '100%',
          }}
        >
          {filteredMemories.map((mem, index) => {
            return (
              <div
                key={mem.id}
                data-reveal="up"
                style={{
                  breakInside: 'avoid',
                  marginBottom: '24px',
                  position: 'relative',
                }}
              >
                <div
                  className="glass-card polaroid-frame"
                  onClick={() => openLightbox(index)}
                  style={{
                    background: '#ffffff',
                    padding: '14px',
                    borderRadius: '16px',
                    boxShadow: '0 12px 30px -8px rgba(183, 110, 121, 0.18)',
                    border: '1px solid rgba(248, 187, 208, 0.55)',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(216, 27, 96, 0.28)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 12px 30px -8px rgba(183, 110, 121, 0.18)'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: '10px',
                      backgroundColor: '#fff0f5',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={mem.image}
                      alt=""
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        transition: 'transform 0.6s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.06)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredMemories[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(74, 35, 49, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: 'clamp(16px, 3vw, 24px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '92vh',
              overflowY: 'auto',
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo preview"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 240, 245, 0.9)',
                border: '1px solid rgba(248, 187, 208, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d81b60',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevLightbox}
              aria-label="Previous image"
              style={{
                position: 'absolute',
                top: '45%',
                left: '12px',
                zIndex: 10,
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(248, 187, 208, 0.8)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d81b60',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextLightbox}
              aria-label="Next image"
              style={{
                position: 'absolute',
                top: '45%',
                right: '12px',
                zIndex: 10,
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(248, 187, 208, 0.8)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d81b60',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Image */}
            <div
              style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#fff0f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: '62vh',
              }}
            >
              <img
                src={filteredMemories[lightboxIndex].image}
                alt={filteredMemories[lightboxIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />
            </div>

            <div style={{ marginTop: '18px', textAlign: 'left' }} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
