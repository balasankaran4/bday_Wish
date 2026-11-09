const starPositions = [
  { left: '8%', top: '12%', size: 2, delay: '0s' },
  { left: '14%', top: '28%', size: 3, delay: '1.2s' },
  { left: '22%', top: '18%', size: 2, delay: '0.7s' },
  { left: '30%', top: '36%', size: 3, delay: '2.1s' },
  { left: '38%', top: '14%', size: 2, delay: '2.7s' },
  { left: '46%', top: '26%', size: 2, delay: '1.5s' },
  { left: '54%', top: '18%', size: 3, delay: '0.4s' },
  { left: '63%', top: '30%', size: 2, delay: '1.9s' },
  { left: '71%', top: '14%', size: 3, delay: '2.3s' },
  { left: '80%', top: '24%', size: 2, delay: '0.9s' },
  { left: '88%', top: '16%', size: 3, delay: '2.8s' },
  { left: '92%', top: '36%', size: 2, delay: '1.1s' },
  { left: '12%', top: '52%', size: 2, delay: '1.7s' },
  { left: '18%', top: '62%', size: 3, delay: '0.2s' },
  { left: '28%', top: '70%', size: 2, delay: '2.5s' },
  { left: '40%', top: '58%', size: 3, delay: '3s' },
  { left: '52%', top: '66%', size: 2, delay: '1.3s' },
  { left: '64%', top: '54%', size: 3, delay: '0.6s' },
  { left: '78%', top: '62%', size: 2, delay: '2.9s' },
  { left: '90%', top: '72%', size: 3, delay: '1.8s' },
  { left: '6%', top: '82%', size: 2, delay: '2.4s' },
  { left: '32%', top: '84%', size: 2, delay: '1.4s' },
  { left: '58%', top: '82%', size: 3, delay: '3.1s' },
  { left: '84%', top: '88%', size: 2, delay: '0.8s' },
]

export function ThemeBackground({ theme = 'light' }) {
  const isDark = theme === 'dark'

  return (
    <div className={`theme-background ${isDark ? 'dark' : 'light'}`} aria-hidden="true">
      {isDark ? (
        <>
          <div className="nebula nebula-one" />
          <div className="nebula nebula-two" />
          <div className="moon" />
          <div className="star-field">
            {starPositions.map((star, index) => (
              <span
                key={`${star.left}-${index}`}
                className="star"
                style={{
                  left: star.left,
                  top: star.top,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay,
                }}
              />
            ))}
          </div>
          <div className="constellation constellation-one" />
          <div className="constellation constellation-two" />
        </>
      ) : (
        <>
          <div className="rose-glow glow-one" />
          <div className="rose-glow glow-two" />
          <div className="rose-glow glow-three" />
        </>
      )}
    </div>
  )
}
