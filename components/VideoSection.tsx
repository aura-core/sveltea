'use client'
import { useRef, useState } from 'react'
import { SectionHead } from './ui'

type VideoCaseKey = 'facial' | 'celulitis'

const videoCases: Record<VideoCaseKey, {
  label: string
  eyebrow: string
  title: string
  lede: string
  body: string
  src: string
  duration: string
  meta: string
  frameLabel: string
}> = {
  facial: {
    label: 'Rejuvenecimiento facial',
    eyebrow: 'Firmeza, soporte y contorno',
    title: 'Rostro firme desde el soporte profundo',
    lede: 'Con los años, el rostro pierde firmeza: aparecen surcos, pliegues y líneas, y el contorno se difumina.',
    body: 'Sveltea actúa en el plano exacto donde el colágeno y los tejidos de sostén pierden estructura. El profesional deposita el bioestimulador con cánula para formar un andamiaje que reactiva el colágeno propio: los surcos se elevan y la piel se alisa desde dentro.',
    src: '/SvelteaFacial.mp4',
    duration: '00:41',
    meta: 'CASO FACIAL',
    frameLabel: 'SVELTEA · 002',
  },
  celulitis: {
    label: 'Manejo de celulitis',
    eyebrow: 'Bioestimulación y subcisión',
    title: 'Tejido reorganizado desde el plano subcutáneo',
    lede: 'La celulitis combina septos fibrosos, irregularidades visibles y pérdida de calidad del tejido conectivo.',
    body: 'La animación muestra cómo las partículas de hidroxiapatita de calcio funcionan como andamio biológico para dirigir la neocolagénesis y la reorganización del tejido subcutáneo desde la aplicación hasta los 18 meses de seguimiento.',
    src: '/sveltea-video.mp4',
    duration: '00:38',
    meta: 'CASO CELULITIS',
    frameLabel: 'SVELTEA · 001',
  },
}

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [selectedCase, setSelectedCase] = useState<VideoCaseKey>('facial')
  const [playing, setPlaying] = useState(false)
  const currentCase = videoCases[selectedCase]

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const selectCase = (key: VideoCaseKey) => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
    setPlaying(false)
    setSelectedCase(key)
  }

  return (
    <section className="video-section" id="video">
      <div className="wrap">
        <div className="video-section__grid">
          <div className="video-section__copy reveal" data-d="1">
            <SectionHead
              num="01 / 06"
              eyebrow="Dos casos de uso"
              title={'El efecto Sveltea,<br/><em>en contexto</em>.'}
            />

            <div className="video-tabs" aria-label="Selecciona el caso de uso">
              {(Object.keys(videoCases) as VideoCaseKey[]).map((key) => (
                <button
                  key={key}
                  className={`video-tabs__btn${selectedCase === key ? ' video-tabs__btn--active' : ''}`}
                  type="button"
                  onClick={() => selectCase(key)}
                  aria-pressed={selectedCase === key}
                >
                  {videoCases[key].label}
                </button>
              ))}
            </div>

            <span className="video-section__case-eyebrow">{currentCase.eyebrow}</span>
            <h3 className="video-section__case-title">{currentCase.title}</h3>
            <p className="video-section__lede">
              {currentCase.lede}
            </p>
            <p>
              {currentCase.body}
            </p>
          </div>

          <div className="reveal" data-d="2">
            <div
              className={`video-frame${playing ? ' is-playing' : ''}`}
              onClick={handlePlay}
              role="button"
              tabIndex={0}
              aria-label={playing ? 'Pausar video' : 'Reproducir video explicativo'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handlePlay()
                }
              }}
            >
              <video
                key={currentCase.src}
                ref={videoRef}
                className="video-frame__video"
                src={currentCase.src}
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
              />

              <div className="video-frame__gradient" />

              <span className="video-frame__label">{currentCase.frameLabel}</span>

              <div className="video-frame__rec">
                <span>{currentCase.meta}</span>
              </div>

              <div className="video-frame__rec-status">
                <div className="video-frame__rec-dot" />
                <span>REC</span>
              </div>

              <div className="video-frame__duration">{currentCase.duration}</div>

              <button
                className="play-btn"
                aria-label={playing ? 'Pausar' : 'Reproducir explicación animada'}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePlay()
                }}
              >
                <div className="play-btn__ring">
                  <div className="play-btn__circle">
                    {playing ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="4" y="3" width="3.5" height="12" fill="currentColor" />
                        <rect x="10.5" y="3" width="3.5" height="12" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6 4L14 9L6 14V4Z" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="play-btn__caption">
                  {playing ? 'Pausar' : 'Reproducir explicación'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
