import { MoonStar, SunMedium } from 'lucide-react'

export function ThemeToggle({ theme = 'light', onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {isDark ? <MoonStar size={14} /> : <SunMedium size={14} />}
        </span>
      </span>
    </button>
  )
}
