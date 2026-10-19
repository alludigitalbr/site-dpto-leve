'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { TRACKING_PARAMS, getOrigem, track } from './analytics'
import { PRIVACY_URL } from './links'
import s from './landing.module.css'

// IDs reais entram por variável de ambiente. Nenhum configurado = nenhum
// script de terceiros e nenhum aviso de cookies.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || ''
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
const HAS_TRACKING = Boolean(GTM_ID || GA4_ID || META_PIXEL_ID)

const CONSENT_KEY = 'dl_consentimento'

type W = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: (...a: unknown[]) => void; push?: unknown }
  _fbq?: unknown
}

function addScript(src: string) {
  const el = document.createElement('script')
  el.async = true
  el.src = src
  document.head.appendChild(el)
}

// Carrega as ferramentas só depois do consentimento (LGPD). page_view é
// disparado manualmente para todas as ferramentas usarem o mesmo momento.
function loadTracking() {
  const w = window as W
  w.dataLayer = w.dataLayer || []

  if (GTM_ID) {
    w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    addScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`)
  }

  if (GA4_ID) {
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params -- formato exigido pelo gtag.js
      w.dataLayer!.push(arguments)
    }
    w.gtag('js', new Date())
    w.gtag('config', GA4_ID, { send_page_view: false })
    addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`)
  }

  if (META_PIXEL_ID && !w.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue!.push(args)
    } as NonNullable<W['fbq']>
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.push = fbq
    w.fbq = fbq
    w._fbq = fbq
    addScript('https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', META_PIXEL_ID)
    fbq('track', 'PageView')
  }
}

function readConsent(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

// Escolha em memória cobre browsers sem localStorage (vale só para a visita).
let memoria: 'granted' | 'denied' | null = null
const listeners = new Set<() => void>()

function saveConsent(v: 'granted' | 'denied') {
  memoria = v
  try {
    localStorage.setItem(CONSENT_KEY, v)
  } catch {
    // sem storage
  }
  listeners.forEach((l) => l())
}

function subscribeConsent(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

// No servidor o estado é "desconhecido": o aviso só aparece no cliente.
const getConsentSnapshot = () => memoria ?? readConsent()
const getServerConsent = () => 'unknown' as const

export function LandingAnalytics() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsent)
  const askConsent = HAS_TRACKING && consent === null

  useEffect(() => {
    // Repassa a origem do tráfego ao checkout (a Kiwify aceita utm_* e sck/src).
    const origem = getOrigem()
    if (Object.keys(origem).length) {
      document.querySelectorAll<HTMLAnchorElement>('a[data-cta="purchase"]').forEach((a) => {
        const url = new URL(a.href)
        for (const k of TRACKING_PARAMS) {
          if (origem[k] && !url.searchParams.has(k)) url.searchParams.set(k, origem[k])
        }
        a.href = url.toString()
      })
    }

    const inicial = getConsentSnapshot()
    if (HAS_TRACKING && inicial === 'granted') loadTracking()
    // Com consentimento pendente, o page_view sai só quando o visitante
    // aceitar — evita o GTM receber dois page_view ao reprocessar o dataLayer.
    if (!HAS_TRACKING || inicial !== null) track('page_view', { page_location: window.location.href, page_title: document.title })

    // Um único listener para todos os CTAs (data-cta / data-section).
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[data-cta]')
      if (!a) return
      const kind = a.dataset.cta
      const section = a.dataset.section
      const destino = a.href
      track('cta_click', { cta_type: kind, section, destination: destino })
      if (kind === 'purchase') track('purchase_click', { section, destination: destino })
      if (kind === 'whatsapp' || kind === 'trial') track('whatsapp_click', { section, intent: kind })
      if (kind === 'trial') track('trial_request_click', { section })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  if (!askConsent) return null

  function decide(v: 'granted' | 'denied') {
    saveConsent(v)
    if (v === 'granted') {
      loadTracking()
      track('page_view', { page_location: window.location.href, page_title: document.title })
    }
  }

  return (
    <div className={s.consent} role="region" aria-label="Preferências de cookies">
      <p>
        Usamos cookies de medição para entender como a página é utilizada. Você pode aceitar ou recusar.
        {PRIVACY_URL && (
          <>
            {' '}
            <a href={PRIVACY_URL}>Política de privacidade</a>.
          </>
        )}
      </p>
      <div className={s.consentActions}>
        <button type="button" className={`${s.btn} ${s.btn_ghostDark} ${s.btn_sm}`} onClick={() => decide('denied')}>
          Recusar
        </button>
        <button type="button" className={`${s.btn} ${s.btn_secondary} ${s.btn_sm}`} onClick={() => decide('granted')}>
          Aceitar
        </button>
      </div>
    </div>
  )
}
