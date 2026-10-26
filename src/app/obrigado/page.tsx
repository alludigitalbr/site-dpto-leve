import type { Metadata } from 'next'
import Link from 'next/link'
import { Cta } from '@/components/landing/Cta'
import { IconCheck } from '@/components/landing/Icons'
import { ThankYouConversion } from '@/components/landing/ThankYouConversion'
import { LOGIN_URL } from '@/components/landing/links'
import s from '@/components/landing/landing.module.css'

// Página de obrigado configurada na Kiwify. Fora do Google e do sitemap.
export const metadata: Metadata = {
  title: { absolute: 'Boas-vindas | Departamento Leve' },
  description: 'Próximos passos para acessar o Departamento Leve.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

const PASSOS = [
  {
    title: 'Confira seu e-mail',
    text: 'A Kiwify envia a confirmação da compra para o e-mail informado no pagamento. Se não encontrar, verifique a caixa de spam.',
  },
  {
    title: 'Receba seu acesso à plataforma',
    text: 'Nossa equipe libera seu login e senha. Para agilizar, chame o suporte no WhatsApp e informe o e-mail usado na compra.',
  },
  {
    title: 'Configure o perfil da sua empresa',
    text: 'No primeiro acesso, preencha o Perfil da Empresa para a plataforma encontrar oportunidades compatíveis com o seu negócio.',
  },
  {
    title: 'Comece pelo Treinamento LEVE',
    text: 'Assista às aulas e use os assistentes de IA para preparar sua participação nas licitações.',
  },
]

export default function Obrigado() {
  const year = new Date().getFullYear()

  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={`${s.container} ${s.headerInner}`}>
          <Link href="/" className={s.brand} aria-label="Departamento Leve — página inicial">
            <span className={s.brandMark} aria-hidden="true">
              DL
            </span>
            <span className={s.brandName}>Departamento Leve</span>
          </Link>
        </div>
      </header>

      <main className={`${s.section} ${s.dark} ${s.thanks}`}>
        <div className={`${s.container} ${s.thanksInner}`}>
          <span className={s.thanksCheck} aria-hidden="true">
            <IconCheck />
          </span>
          <p className={s.eyebrow}>Boas-vindas</p>
          <h1 className={s.h1}>
            Seja bem-vindo ao <span className={s.accent}>Departamento LEVE!</span>
          </h1>
          <p className={s.heroLead}>
            Obrigado pela confiança. Agora sua empresa conta com oportunidades, inteligência artificial e o Treinamento LEVE para disputar contratos públicos
            com mais eficiência.
          </p>

          <h2 className={s.thanksStepsTitle}>Próximos passos para acessar</h2>
          <ol className={s.thanksSteps}>
            {PASSOS.map((p, i) => (
              <li key={p.title} className={s.thanksStep}>
                <span className={s.thanksNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={s.h3}>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={`${s.ctaRow} ${s.ctaCenter}`}>
            <Cta kind="support" section="obrigado" size="lg" variant="primary">
              Falar com o suporte no WhatsApp
            </Cta>
            {LOGIN_URL && (
              <a href={LOGIN_URL} className={`${s.btn} ${s.btn_white} ${s.btn_lg}`}>
                Acessar a plataforma
              </a>
            )}
          </div>
          <p className={s.small}>Nosso suporte atende pelo WhatsApp e ajuda você a dar os primeiros passos.</p>
        </div>
      </main>

      <footer className={`${s.footer} ${s.footerPlain}`}>
        <div className={`${s.container} ${s.copy}`}>© {year} Departamento Leve. Todos os direitos reservados.</div>
      </footer>

      <ThankYouConversion />
    </div>
  )
}
