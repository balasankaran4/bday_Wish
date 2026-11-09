import { useState, useEffect } from 'react'
import { Heart, Menu, X, Sparkles } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'memories', label: 'Memories' },
  { id: 'reasons', label: 'Reasons' },
  { id: 'promises', label: 'Promises' },
  { id: 'birthday', label: 'Birthday 🎉' },
]

export function Navbar({ activeSection = 'hero', onNavigate, theme = 'light', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  const handleLinkClick = (id) => {
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="nav-shell">
      <nav
        className="nav-bar glass-card"
        style={{
          padding: scrolled ? '10px 22px' : '14px 28px',
        }}
      >
        <button type="button" onClick={() => handleLinkClick('hero')} className="nav-brand">
          <span className="nav-brand-mark">
            <Heart size={16} fill="var(--accent)" color="var(--accent)" />
          </span>
          <span className="nav-brand-text">
            <span className="nav-brand-full">Our Little Universe</span>
            <span className="nav-brand-short">Our Universe</span>
            <span style={{ color: 'var(--accent)' }}>❤️</span>
          </span>
        </button>

        <div className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                type="button"
                className={isActive ? 'active' : ''}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((previous) => !previous)}
            className="mobile-hamburger"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav-panel glass-card" style={{ animation: 'fadeInDown 0.25s ease-out' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                type="button"
                className={isActive ? 'active' : ''}
                onClick={() => handleLinkClick(link.id)}
              >
                <span>{link.label}</span>
                {isActive && <Sparkles size={16} />}
              </button>
            )
          })}

          <div className="mobile-menu-footer">
            <span>{theme === 'dark' ? 'Midnight Universe' : 'Rose Garden'}</span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
