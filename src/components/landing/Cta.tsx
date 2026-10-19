import { KIWIFY_URL, WHATSAPP_GERAL_URL, WHATSAPP_TESTE_URL } from './links'
import { IconWhatsApp } from './Icons'
import s from './landing.module.css'

type Kind = 'purchase' | 'whatsapp' | 'trial'

const DESTINO: Record<Kind, string> = {
  purchase: KIWIFY_URL,
  whatsapp: WHATSAPP_GERAL_URL,
  trial: WHATSAPP_TESTE_URL,
}

type Props = {
  kind: Kind
  section: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'secondaryLight' | 'ghost'
  size?: 'md' | 'lg' | 'sm'
  className?: string
}

// Todo CTA da página passa por aqui: o destino vem do tipo (nunca digitado à
// mão) e os data-attributes alimentam o rastreamento em LandingAnalytics.
// Checkout abre na mesma aba (fluxo de compra contínuo); WhatsApp abre em
// nova aba para o visitante não perder a página.
export function Cta({ kind, section, children, variant, size = 'md', className }: Props) {
  const v = variant ?? (kind === 'purchase' ? 'primary' : 'secondary')
  const external = kind !== 'purchase'
  return (
    <a
      href={DESTINO[kind]}
      className={[s.btn, s[`btn_${v}`], s[`btn_${size}`], className].filter(Boolean).join(' ')}
      data-cta={kind}
      data-section={section}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {kind !== 'purchase' && <IconWhatsApp className={s.btnIcon} />}
      <span>{children}</span>
      {external && <span className={s.srOnly}> (abre o WhatsApp em nova aba)</span>}
    </a>
  )
}
