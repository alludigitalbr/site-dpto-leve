'use client'

import { useEffect, useState } from 'react'
import { Cta } from './Cta'
import { IconWhatsApp } from './Icons'
import { WHATSAPP_GERAL_URL } from './links'
import s from './landing.module.css'

// Celular: barra inferior com "Quero comprar" depois que o hero sai da tela
// (respeita a safe-area). Desktop: só um atalho discreto do WhatsApp.
// Some perto do CTA final para não duplicar botões na mesma tela.
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    const final = document.getElementById('cta-final')
    if (!hero || !('IntersectionObserver' in window)) return
    let heroVisible = true
    let finalVisible = false
    const update = () => setVisible(!heroVisible && !finalVisible)
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting
        if (e.target === final) finalVisible = e.isIntersecting
      }
      update()
    })
    io.observe(hero)
    if (final) io.observe(final)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className={`${s.stickyBar} ${visible ? s.stickyBarOn : ''}`} inert={!visible}>
        <Cta kind="purchase" section="barra_fixa_mobile" className={s.stickyBuy}>
          Quero comprar
        </Cta>
        <a
          href={WHATSAPP_GERAL_URL}
          className={s.stickyWa}
          data-cta="whatsapp"
          data-section="barra_fixa_mobile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um consultor pelo WhatsApp (abre em nova aba)"
        >
          <IconWhatsApp />
        </a>
      </div>
      <a
        href={WHATSAPP_GERAL_URL}
        className={s.floatWa}
        data-cta="whatsapp"
        data-section="botao_flutuante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um consultor pelo WhatsApp (abre em nova aba)"
      >
        <IconWhatsApp />
      </a>
    </>
  )
}
