# Our Little Universe ❤️ — A Premium Romantic Birthday Website

> *"Two Hearts, One Beautiful Story, A Thousand Memories."*

A luxury, emotionally engaging, scroll-animated storytelling website crafted for celebrating her birthday (**10 November 2006**) and commemorating our love journey together from **April 2025** towards our second year and beyond.

---

## ✨ Features & Highlights

- **11 Curated Romantic Story Sections:**
  1. **Section 01 – The First Surprise (Hero):** Full-screen romantic greeting, floating rose petals, birthday badge (`10 • 11 • 2006`), and smooth entrance CTA.
  2. **Section 02 – A Message From My Heart:** Unfolding letter-card design with wax seal and authentic, vulnerable love letter.
  3. **Section 03 – Our Love Story Timeline:** Horizontal-to-vertical interactive timeline tracking milestones from April 2025 to April 2027 with glowing progress connector line.
  4. **Section 04 – Our Beautiful Memories:** 18-photo polaroid gallery organized into 6 categories, complete with masonry layout, stickers, captions, and full-screen Lightbox viewer.
  5. **Section 05 – A Million Little Reasons Why I Love You:** 42+ editable reasons categorized into 10 themes with filtering, "Load More" pagination, and infinity final card.
  6. **Section 06 – Our Little Fights, Our Big Love:** Converging hearts animation and split-screen design emphasizing direct communication, forgiveness, and team mindset.
  7. **Section 07 – My Promises to You:** 10 numbered promises with icons and the golden relationship vow callout.
  8. **Section 08 – You Are My One and Only:** Cinematic commitment scene featuring an SVG heart outline that dynamically draws itself on scroll.
  9. **Section 09 – Your Birthday Celebration:** Tiered birthday cake with interactive candle blowing, confetti bursts (`canvas-confetti`), and "Make a Birthday Wish" modal.
  10. **Section 10 – Our Future:** Continuous-scrolling postcard strip and 6 relationship aspirations.
  11. **Section 11 – Final Goodbye:** Full-screen romantic closing with personal signature and smooth scroll-to-top button.

- **Audio & Atmosphere:**
  - Ambient floating music player with play/pause, mute, and animated equalizer.
  - Built-in procedural Web Audio API romantic piano synth fallback + support for custom MP3.
  - Gentle falling rose petals and floating hearts.
  - Top scroll progress bar with a glowing heart indicator.
  - Lenis smooth scrolling synchronized with GSAP ScrollTrigger.

---

## 📸 How to Replace Placeholder Photos

All placeholder images are pre-generated as high-resolution romantic placeholder files in `public/images/memories/`. Replacing them with your real couple photos is super simple:

### Method 1: Drop-In Replacement (Zero Code Changes)
Simply paste your JPG photos into `public/images/memories/` and rename them:
- `memory-01.jpg`
- `memory-02.jpg`
- `memory-03.jpg`
- ... up to `memory-18.jpg`

Your photos will instantly show up in the gallery, polaroid frames, and lightbox viewer!

### Method 2: Customizing Titles, Captions, Dates & Categories
Open [`src/data/memories.js`](file:///src/data/memories.js) to customize each photo's details:

```javascript
{
  id: 1,
  image: "/images/memories/my-custom-photo.jpg",
  title: "Our First Late Night Walk",
  category: "Our Best Moments",
  date: "April 2025",
  caption: "The evening we walked under the streetlights and forgot about the world.",
  aspect: "portrait", // "portrait", "landscape", or "square"
  location: "First Spark",
  sticker: "Forever ❤️"
}
```

Available categories you can filter by:
- `Our Best Moments`
- `Our Favourite Pictures`
- `Little Memories`
- `Smiles and Happiness`
- `Special Days`
- `Random Beautiful Moments`

---

## 💌 How to Add or Edit Love Reasons

Open [`src/data/reasons.js`](file:///src/data/reasons.js). You can add unlimited reasons to any category:

```javascript
{
  id: 43,
  number: "43",
  category: "Your Smile",
  text: "I love how your smile lights up even the rainiest days.",
  tag: "Sunshine"
}
```

Categories included:
- `Your Smile`
- `Your Personality`
- `Your Heart`
- `Your Care`
- `Your Happiness`
- `Your Little Habits`
- `Your Strength`
- `Your Dreams`
- `Your Beautiful Nature`
- `The Way You Make Me Feel`

---

## 🎵 How to Add Your Romantic Music

Place your romantic MP3 song in:
```
public/music/romantic-background.mp3
```

When visitors click the **"Our Melody"** music player at the bottom-left, the website will automatically play your audio file. If the file is not yet added, the built-in tender romantic melody synthesizer plays seamlessly.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **Lenis Smooth Scroll**
- **GSAP & GSAP ScrollTrigger**
- **Canvas Confetti**
- **Lucide React** (Romantic iconography)
- **Google Fonts:** Great Vibes, Playfair Display, Cormorant Garamond, Poppins

---

## 🚀 Running the Project

```bash
# 1. Start development server
npm run dev

# 2. Build for production
npm run build

# 3. Preview production build
npm run preview
```
