// Camada única de eventos da landing. Empurra tudo para o dataLayer (GTM lê
// daí) e, se GA4 direto ou Meta Pixel estiverem carregados (só após
// consentimento), repassa o evento. Sem IDs configurados nada sai do browser.
//
// Importante: `purchase_click` é só o clique que leva ao checkout. A
// conversão de compra do Google Ads sai da página /obrigado, que a Kiwify
// abre depois do pagamento (configurada como página de obrigado do produto).

type Params = Record<string, string | number | undefined>

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''
const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || ''

// Marca no window: conversão pedida antes do gtag existir (consentimento pendente).
export const ADS_CONVERSION_PENDING = '__dlAdsConversionPending'

type W = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
  [ADS_CONVERSION_PENDING]?: boolean
}

export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
]

const STORAGE_KEY = 'dl_origem'

// Origem do tráfego (UTMs + click IDs) da primeira página da sessão.
export function getOrigem(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const atual: Record<string, string> = {}
  const qs = new URLSearchParams(window.location.search)
  for (const k of TRACKING_PARAMS) {
    const v = qs.get(k)
    if (v) atual[k] = v
  }
  try {
    if (Object.keys(atual).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(atual))
      return atual
    }
    const salvo = sessionStorage.getItem(STORAGE_KEY)
    return salvo ? JSON.parse(salvo) : {}
  } catch {
    return atual
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return
  const w = window as W
  const payload = { ...getOrigem(), ...params }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...payload })
  if (typeof w.gtag === 'function') w.gtag('event', event, payload)
  // O Pixel já registra o próprio PageView ao iniciar.
  if (typeof w.fbq === 'function' && event !== 'page_view') w.fbq('trackCustom', event, payload)
}

// Conversão de compra do Google Ads (gtag direto). Com GTM, use o evento
// `purchase_thank_you_view` do dataLayer como acionador. Se o gtag ainda não
// carregou, fica pendente e SiteAnalytics envia ao carregar.
export function sendAdsConversion() {
  if (typeof window === 'undefined' || !GOOGLE_ADS_ID || !GOOGLE_ADS_CONVERSION_LABEL) return
  const w = window as W
  if (typeof w.gtag !== 'function') {
    w[ADS_CONVERSION_PENDING] = true
    return
  }
  w[ADS_CONVERSION_PENDING] = false
  w.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}` })
}
