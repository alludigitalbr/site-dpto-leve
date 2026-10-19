// Camada única de eventos da landing. Empurra tudo para o dataLayer (GTM lê
// daí) e, se GA4 direto ou Meta Pixel estiverem carregados (só após
// consentimento), repassa o evento. Sem IDs configurados nada sai do browser.
//
// Importante: `purchase_click` é só o clique que leva ao checkout. Venda
// concluída deve vir de integração validada com a Kiwify (webhook/pixel do
// checkout), nunca daqui.

type Params = Record<string, string | number | undefined>

type W = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
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
