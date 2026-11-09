import fs from 'fs'
import path from 'path'
import jpeg from 'jpeg-js'

const outputDir = path.resolve('public/images/memories')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const colorThemes = [
  { top: [255, 240, 245], bottom: [248, 187, 208], accent: [216, 27, 96] }, // soft pink
  { top: [255, 245, 247], bottom: [244, 143, 177], accent: [194, 24, 91] }, // rose pink
  { top: [253, 242, 248], bottom: [251, 207, 232], accent: [219, 39, 119] }, // blush
  { top: [255, 241, 242], bottom: [254, 205, 211], accent: [225, 29, 72] }, // warm rose
  { top: [254, 243, 199], bottom: [251, 207, 232], accent: [183, 110, 121] }, // rose gold
  { top: [243, 232, 255], bottom: [248, 187, 208], accent: [157, 23, 77] }, // lavender rose
]

function renderPlaceholder(index, width, height) {
  const buffer = Buffer.alloc(width * height * 4)
  const theme = colorThemes[(index - 1) % colorThemes.length]

  const cx = width / 2
  const cy = height / 2 - 20
  const heartScale = Math.min(width, height) * 0.16

  for (let y = 0; y < height; y++) {
    const vFactor = y / height
    const rBase = Math.round(theme.top[0] * (1 - vFactor) + theme.bottom[0] * vFactor)
    const gBase = Math.round(theme.top[1] * (1 - vFactor) + theme.bottom[1] * vFactor)
    const bBase = Math.round(theme.top[2] * (1 - vFactor) + theme.bottom[2] * vFactor)

    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4

      // Soft vignette
      const dx = (x - cx) / (width / 2)
      const dy = (y - cy) / (height / 2)
      const dist = Math.sqrt(dx * dx + dy * dy)
      const vignette = Math.max(0, 1 - dist * 0.45)

      let r = rBase * vignette
      let g = gBase * vignette
      let b = bBase * vignette

      // Subtle border frame (inner luxury card border)
      const borderDistX = Math.min(x, width - x)
      const borderDistY = Math.min(y, height - y)
      const borderMargin = 28
      if (
        (Math.abs(borderDistX - borderMargin) <= 1 && borderDistY >= borderMargin && borderDistY <= height - borderMargin) ||
        (Math.abs(borderDistY - borderMargin) <= 1 && borderDistX >= borderMargin && borderDistX <= width - borderMargin)
      ) {
        r = theme.accent[0] * 0.85 + r * 0.15
        g = theme.accent[1] * 0.85 + g * 0.15
        b = theme.accent[2] * 0.85 + b * 0.15
      }

      // Heart equation in center: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
      const hx = (x - cx) / heartScale
      const hy = -(y - cy) / heartScale + 0.2 // flip y and offset
      const hEq = Math.pow(hx * hx + hy * hy - 1, 3) - hx * hx * Math.pow(hy, 3)

      if (hEq <= 0) {
        // inside heart
        const depth = Math.min(1, Math.abs(hEq) * 3)
        r = theme.accent[0] * 0.9 + 255 * 0.1 * depth
        g = theme.accent[1] * 0.9 + 255 * 0.1 * depth
        b = theme.accent[2] * 0.9 + 255 * 0.1 * depth
      } else if (hEq < 0.35) {
        // glowing halo around heart
        const glow = (0.35 - hEq) / 0.35
        r = r * (1 - glow * 0.4) + theme.accent[0] * (glow * 0.4)
        g = g * (1 - glow * 0.4) + theme.accent[1] * (glow * 0.4)
        b = b * (1 - glow * 0.4) + theme.accent[2] * (glow * 0.4)
      }

      // Soft film grain
      const grain = (Math.random() - 0.5) * 8
      buffer[idx] = Math.min(255, Math.max(0, Math.round(r + grain)))
      buffer[idx + 1] = Math.min(255, Math.max(0, Math.round(g + grain)))
      buffer[idx + 2] = Math.min(255, Math.max(0, Math.round(b + grain)))
      buffer[idx + 3] = 255
    }
  }

  const rawImageData = { data: buffer, width, height }
  return jpeg.encode(rawImageData, 88).data
}

// Generate 18 memories
for (let i = 1; i <= 18; i++) {
  const pad = String(i).padStart(2, '0')
  const filename = `memory-${pad}.jpg`
  const filepath = path.join(outputDir, filename)
  // Vary aspect ratios
  const isLandscape = [2, 6, 10, 14, 18].includes(i)
  const isSquare = [4, 8, 12, 16].includes(i)
  const width = isLandscape ? 800 : isSquare ? 700 : 640
  const height = isLandscape ? 560 : isSquare ? 700 : 800

  const data = renderPlaceholder(i, width, height)
  fs.writeFileSync(filepath, data)
  console.log(`Generated ${filename} (${width}x${height})`)
}

// Also generate birthday banner placeholder
const birthdayPath = path.resolve('public/images/birthday/celebration.jpg')
const birthdayData = renderPlaceholder(99, 900, 600)
fs.writeFileSync(birthdayPath, birthdayData)
console.log('Generated birthday/celebration.jpg')

