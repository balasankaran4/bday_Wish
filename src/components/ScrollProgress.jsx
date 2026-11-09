import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      const currentScroll = window.scrollY
      const currentProgress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100))
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        zIndex: 1001,
        pointerEvents: 'none',
      }}
    >
      {/* Background track */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(248, 187, 208, 0.25)',
        }}
      />
      {/* Progress fill */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #f8bbd0, #f48fb1, #d81b60)',
          boxShadow: '0 0 10px rgba(216, 27, 96, 0.65)',
          transition: 'width 0.1s linear',
        }}
      >
        {/* Heart knob */}
        <div
          style={{
            position: 'absolute',
            right: '-7px',
            top: '-5px',
            width: '14px',
            height: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 0 6px #d81b60)',
          }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="#d81b60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

