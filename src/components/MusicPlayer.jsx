import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isSynthPlaying, setIsSynthPlaying] = useState(false)
  const audioRef = useRef(null)
  const synthTimerRef = useRef(null)
  const audioCtxRef = useRef(null)

  // Gentle romantic arpeggio notes (frequencies in Hz)
  // C major / A minor dreamy romantic sequence: C4, E4, G4, B4, C5, E5, D5, B4, G4...
  const notes = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25, 587.33, 493.88]

  const playSynthesizer = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      let noteIndex = 0
      setIsSynthPlaying(true)

      const playNextNote = () => {
        if (!audioCtxRef.current) return
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        // Soft sine wave for a dreamy music box / acoustic chime feel
        osc.type = 'sine'
        const freq = notes[noteIndex % notes.length]
        osc.frequency.setValueAtTime(freq, ctx.currentTime)

        const volume = isMuted ? 0 : 0.08
        gain.gain.setValueAtTime(0, ctx.currentTime)
        gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.08)
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start()
        osc.stop(ctx.currentTime + 1.5)

        noteIndex = (noteIndex + 1) % notes.length
        synthTimerRef.current = setTimeout(playNextNote, 600)
      }

      playNextNote()
    } catch {
      // Audio context restricted or unavailable
    }
  }

  const stopSynthesizer = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current)
      synthTimerRef.current = null
    }
    setIsSynthPlaying(false)
  }

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }
      stopSynthesizer()
      setIsPlaying(false)
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            // If the audio file fails (e.g. empty dummy or unsupported format), fall back to dreamy synth
            playSynthesizer()
            setIsPlaying(true)
          })
      } else {
        playSynthesizer()
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (audioRef.current) {
      audioRef.current.muted = nextMuted
    }
  }

  useEffect(() => {
    return () => {
      stopSynthesizer()
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {})
      }
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 999,
      }}
    >
      <audio
        ref={audioRef}
        src="/music/romantic-background.mp3"
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      <div
        className="glass-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          borderRadius: '999px',
          border: '1px solid rgba(248, 187, 208, 0.6)',
          boxShadow: '0 8px 24px -4px rgba(216, 27, 96, 0.22)',
          background: 'rgba(255, 253, 254, 0.88)',
          cursor: 'pointer',
        }}
        onClick={togglePlay}
        title={isPlaying ? 'Pause romantic melody' : 'Play romantic melody'}
      >
        <button
          type="button"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: isPlaying
              ? 'linear-gradient(135deg, #d81b60, #f48fb1)'
              : 'rgba(248, 187, 208, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isPlaying ? '#ffffff' : '#d81b60',
            transition: 'all 0.3s ease',
          }}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: '2px' }} />}
        </button>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#4a2331',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Music size={12} color="#d81b60" />
            Our Melody
          </span>
          <span
            style={{
              fontSize: '0.68rem',
              color: '#9c6778',
            }}
          >
            {isPlaying ? (isSynthPlaying ? 'Dreamy Piano' : 'Playing') : 'Click to Play'}
          </span>
        </div>

        {isPlaying && (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '3px',
              height: '14px',
              marginLeft: '4px',
            }}
          >
            <span
              style={{
                width: '3px',
                height: '100%',
                backgroundColor: '#d81b60',
                borderRadius: '2px',
                animation: 'equalizer 0.8s ease-in-out infinite alternate',
              }}
            />
            <span
              style={{
                width: '3px',
                height: '60%',
                backgroundColor: '#f48fb1',
                borderRadius: '2px',
                animation: 'equalizer 1.1s ease-in-out infinite alternate 0.2s',
              }}
            />
            <span
              style={{
                width: '3px',
                height: '80%',
                backgroundColor: '#d81b60',
                borderRadius: '2px',
                animation: 'equalizer 0.9s ease-in-out infinite alternate 0.4s',
              }}
            />
          </div>
        )}

        <button
          type="button"
          onClick={toggleMute}
          style={{
            color: isMuted ? '#b38896' : '#754052',
            padding: '4px',
            marginLeft: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>

      <style>{`
        @keyframes equalizer {
          0% { height: 25%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  )
}
