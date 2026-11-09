import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LoveLetter } from './components/LoveLetter'
import { LoveTimeline } from './components/LoveTimeline'
import { MemoriesGallery } from './components/MemoriesGallery'
import { ReasonsSection } from './components/ReasonsSection'
import { RelationshipStory } from './components/RelationshipStory'
import { PromisesSection } from './components/PromisesSection'
import { CommitmentSection } from './components/CommitmentSection'
import { BirthdaySection } from './components/BirthdaySection'
import { FutureSection } from './components/FutureSection'
import { FinalSection } from './components/FinalSection'
import { MusicPlayer } from './components/MusicPlayer'
import { FloatingPetals } from './components/FloatingPetals'
import { ThemeBackground } from './components/ThemeBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { useScrollAnimations } from './hooks/useScrollAnimations'

const STORAGE_KEY = 'little-universe-theme'
const NAV_SECTION_MAP = [
  { id: 'hero', navId: 'hero' },
  { id: 'letter', navId: 'hero' },
  { id: 'story', navId: 'story' },
  { id: 'memories', navId: 'memories' },
  { id: 'reasons', navId: 'reasons' },
  { id: 'growth', navId: 'story' },
  { id: 'promises', navId: 'promises' },
  { id: 'commitment', navId: 'promises' },
  { id: 'birthday', navId: 'birthday' },
  { id: 'future', navId: 'birthday' },
  { id: 'final', navId: 'birthday' },
]

export default function App() {
  const [activeNav, setActiveNav] = useState('hero')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'

    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const { scrollTo } = useScrollAnimations()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (let i = NAV_SECTION_MAP.length - 1; i >= 0; i--) {
        const item = NAV_SECTION_MAP[i]
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveNav(item.navId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (targetId) => {
    scrollTo(`#${targetId}`)
  }

  return (
    <>
      <ThemeBackground theme={theme} />

      <a className="skip-link" href="#hero">
        Skip to content
      </a>

      <ScrollProgress />

      <FloatingPetals theme={theme} count={theme === 'dark' ? 18 : 22} />

      <Navbar
        activeSection={activeNav}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />

      <main id="main-content">
        <Hero onEnter={() => scrollTo('#letter')} />
        <LoveLetter theme={theme} />
        <LoveTimeline />
        <MemoriesGallery />
        <ReasonsSection />
        <RelationshipStory />
        <PromisesSection />
        <CommitmentSection />
        <BirthdaySection />
        <FutureSection />
        <FinalSection onScrollToTop={() => scrollTo('#hero')} />
      </main>

      <MusicPlayer />
    </>
  )
}
