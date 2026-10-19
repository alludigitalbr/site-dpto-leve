'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from './analytics'
import { IconPlay } from './Icons'
import s from './landing.module.css'

type YTPlayer = { playVideo: () => void; destroy: () => void }
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string
      host?: string
      playerVars?: Record<string, number | string>
      events?: {
        onReady?: (e: { target: YTPlayer }) => void
        onStateChange?: (e: { data: number }) => void
      }
    },
  ) => YTPlayer
}
type W = Window & { YT?: YTNamespace; onYouTubeIframeAPIReady?: () => void }

let apiPromise: Promise<YTNamespace> | null = null

function loadYouTubeApi(): Promise<YTNamespace> {
  const w = window as W
  if (w.YT?.Player) return Promise.resolve(w.YT)
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve, reject) => {
    const prev = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      prev?.()
      if (w.YT) resolve(w.YT)
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    tag.async = true
    tag.onerror = () => {
      apiPromise = null
      reject(new Error('youtube api'))
    }
    document.head.appendChild(tag)
  })
  return apiPromise
}

// Facade: só a miniatura carrega com a página; o player oficial do YouTube
// entra quando o visitante clica (sem autoplay no carregamento). Se a API de
// eventos falhar, cai para o iframe simples — o vídeo nunca deixa de abrir.
export function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [state, setState] = useState<'idle' | 'api' | 'iframe'>('idle')
  const mountRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (state !== 'api' || !mountRef.current) return
    let cancelled = false
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !mountRef.current) return
        // O YouTube substitui o nó alvo pelo iframe; o alvo é criado à mão
        // para o React nunca tentar remover um nó que já não existe.
        const alvo = document.createElement('div')
        mountRef.current.appendChild(alvo)
        playerRef.current = new YT.Player(alvo, {
          videoId,
          host: 'https://www.youtube-nocookie.com',
          playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
          events: {
            onReady: (e) => e.target.playVideo(),
            onStateChange: (e) => {
              // 1 = PLAYING, 0 = ENDED
              if (e.data === 1 && !started.current) {
                started.current = true
                track('video_start', { video_id: videoId })
              }
              if (e.data === 0) track('video_complete', { video_id: videoId })
            },
          },
        })
      })
      .catch(() => {
        if (!cancelled) setState('iframe')
      })
    return () => {
      cancelled = true
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [state, videoId])

  return (
    <div className={s.video}>
      {state === 'idle' && (
        <button type="button" className={s.videoFacade} onClick={() => setState('api')}>
          {/* eslint-disable-next-line @next/next/no-img-element -- miniatura oficial do YouTube */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            width={480}
            height={360}
          />
          <span className={s.videoPlay} aria-hidden="true">
            <IconPlay />
          </span>
          <span className={s.srOnly}>Reproduzir vídeo: {title}</span>
        </button>
      )}
      {state === 'api' && <div ref={mountRef} className={s.videoFrame} />}
      {state === 'iframe' && (
        <iframe
          className={s.videoFrame}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  )
}
