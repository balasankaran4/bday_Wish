import { useMemo } from 'react'

function generatePetals(count) {
  return Array.from({ length: count }, (_, i) => {
    const isHeart = i % 4 === 0
    const left = Math.random() * 96 + 2
    const duration = 12 + Math.random() * 14
    const delay = Math.random() * 10
    const size = isHeart ? 14 + Math.random() * 10 : 18 + Math.random() * 16
    const swayDuration = 3 + Math.random() * 4
    const rotateStart = Math.random() * 360
    const opacity = 0.35 + Math.random() * 0.45

    return {
      id: i,
      isHeart,
      left: `${left}%`,
      duration: `${duration}s`,
      delay: `${delay}s`,
      size,
      swayDuration: `${swayDuration}s`,
      rotateStart,
      opacity,
    }
  })
}

function generateStars(count) {
  return Array.from({ length: count }, (_, index) => {
    const left = Math.random() * 96 + 2
    const top = Math.random() * 78 + 5
    const size = 2 + Math.random() * 3
    const delay = `${(index * 0.27) % 4}s`
    const duration = 2.5 + Math.random() * 3.5

    return {
      id: index,
      left: `${left}%`,
      top: `${top}%`,
      size,
      delay,
      duration: `${duration}s`,
    }
  })
}

export function FloatingPetals({ count = 20, theme = 'light' }) {
  const petals = useMemo(() => generatePetals(count), [count])
  const stars = useMemo(() => generateStars(Math.max(14, Math.min(count * 2, 48))), [count])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {theme === 'dark'
        ? stars.map((star) => (
            <span
              key={star.id}
              style={{
                position: 'absolute',
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                boxShadow: '0 0 10px rgba(147, 197, 253, 0.8)',
                animation: `starTwinkle ${star.duration} ease-in-out ${star.delay} infinite alternate`,
              }}
            />
          ))
        : petals.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: '-40px',
                left: item.left,
                animation: `petalFall ${item.duration} linear ${item.delay} infinite`,
                opacity: item.opacity,
              }}
            >
              <div
                style={{
                  animation: `petalSway ${item.swayDuration} ease-in-out infinite alternate`,
                  transform: `rotate(${item.rotateStart}deg)`,
                }}
              >
                {item.isHeart ? (
                  <svg
                    width={item.size}
                    height={item.size}
                    viewBox="0 0 24 24"
                    fill="#f48fb1"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(244, 143, 177, 0.4))' }}
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    width={item.size}
                    height={item.size * 1.3}
                    viewBox="0 0 30 40"
                    fill="none"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(216, 27, 96, 0.2))' }}
                  >
                    <path
                      d="M15 0 C25 8 30 20 26 32 C22 39 8 39 4 32 C0 20 5 8 15 0 Z"
                      fill="url(#petalGradient)"
                    />
                    <defs>
                      <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fff0f5" />
                        <stop offset="50%" stopColor="#f8bbd0" />
                        <stop offset="100%" stopColor="#f48fb1" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
          ))}

      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(105vh);
          }
        }
        @keyframes petalSway {
          0% {
            transform: translateX(-25px) rotate(-18deg);
          }
          100% {
            transform: translateX(25px) rotate(24deg);
          }
        }
        @keyframes starTwinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
          100% {
            opacity: 0.65;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}
