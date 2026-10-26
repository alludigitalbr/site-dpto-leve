'use client'

import { useEffect } from 'react'
import { sendAdsConversion, track } from './analytics'

const SESSION_KEY = 'dl_conversao_obrigado'

// Registra a chegada na /obrigado uma vez por sessão (recarregar a página
// não duplica a conversão).
export function ThankYouConversion() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // sem storage: registra mesmo assim
    }
    track('purchase_thank_you_view')
    sendAdsConversion()
  }, [])

  return null
}
