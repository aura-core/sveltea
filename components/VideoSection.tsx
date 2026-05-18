'use client'
import { useRef, useState } from 'react'
import { SectionHead } from './ui'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

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

  return (
    <section className="video-section" id="video">
      <div className="wrap">
        <SectionHead
          num="01 / 06"
          eyebrow="El procedimiento en 35 segundos"
          title={'Una explicación,<br/><em>visual</em>.'}
        />

        <div className="video-section__grid">
          {/* Left: copy */}
          <div className="video-section__copy reveal" data-d="1">
            <p className="video-section__lede">
              Lo que ocurre <em>debajo de la piel</em> cuando se aplica Sveltea.
            </p>
            <p>
              Una animación científica que muestra en tiempo real la interacción
              entre las partículas de hidroxiapatita de calcio y el tejido
              subcutáneo. Observa cómo el andamio biológico dirige la
              neocolagénesis y la reorganización del tejido conectivo desde el
              momento de la aplicación hasta los 18 meses de seguimiento.
            </p>
          </div>

          {/* Right: video frame */}
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
                ref={videoRef}
                className="video-frame__video"
                src="/sveltea-video.mp4"
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
              />

              <div className="video-frame__gradient" />

              <span className="video-frame__label">SVELTEA · 001</span>

              <div className="video-frame__rec">
                <span>ANIMACIÓN</span>
              </div>

              <div className="video-frame__rec-status">
                <div className="video-frame__rec-dot" />
                <span>REC</span>
              </div>

              <div className="video-frame__duration">00:35</div>

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
