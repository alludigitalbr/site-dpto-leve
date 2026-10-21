import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cta } from '@/components/landing/Cta'
import { DeviceMockup } from '@/components/landing/DeviceMockup'
import { LandingAnalytics } from '@/components/landing/LandingAnalytics'
import { StickyCta } from '@/components/landing/StickyCta'
import { VideoEmbed } from '@/components/landing/VideoEmbed'
import {
  IconCalendar,
  IconCheck,
  IconFileCheck,
  IconGraduation,
  IconInfo,
  IconLayers,
  IconScale,
  IconSearch,
  IconSeedling,
  IconShield,
  IconSparkle,
  IconTrendUp,
  IconZap,
  IconBuilding,
  IconEye,
  IconUsers,
  IconBarChart,
  IconFlag,
  IconTarget,
  IconHardHat,
} from '@/components/landing/Icons'
import { CASES, MENSALIDADE, MENTOR, SALARIO_ANALISTA, RESULT_STATS, SALARIO_FONTE, SHOW_PLACEHOLDERS, TESTIMONIALS } from '@/components/landing/content'
import { KIWIFY_URL, LOGIN_URL, PRIVACY_URL, SITE_URL, TERMS_URL, WHATSAPP_GERAL_URL, YOUTUBE_VIDEO_ID } from '@/components/landing/links'
import s from '@/components/landing/landing.module.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const TITLE = 'Departamento Leve | Inteligência Artificial para Licitações Públicas'
const DESCRIPTION =
  'Encontre oportunidades de licitações, analise editais com inteligência artificial, prepare declarações e conheça ferramentas e treinamento para sua empresa.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Departamento Leve',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
}

const VIDEO_TITLE = 'Apresentação oficial do Departamento Leve'

const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

// Atividades de uma equipe de licitações que a plataforma ajuda a executar.
const ATIVIDADES = [
  {
    icon: IconSearch,
    title: 'Pesquisa',
    text: 'Busca de oportunidades de licitação alinhadas ao perfil e aos interesses da sua empresa.',
  },
  {
    icon: IconSparkle,
    title: 'Análise',
    text: 'Leitura do edital com inteligência artificial para destacar requisitos, condições e prazos importantes.',
  },
  {
    icon: IconFileCheck,
    title: 'Documentação',
    text: 'Preparação de declarações com apoio da plataforma, para você revisar e aprovar antes de usar.',
  },
  {
    icon: IconShield,
    title: 'Certidões',
    text: 'Controle das certidões da empresa com alerta visual de validade: em dia, atenção ou vencida.',
  },
  {
    icon: IconScale,
    title: 'Impugnação, esclarecimento e recurso',
    text: 'Três assistentes de IA que ajudam a estruturar minutas de impugnações, pedidos de esclarecimento e recursos administrativos.',
  },
  {
    icon: IconCalendar,
    title: 'Acompanhamento',
    text: 'Painel de negócios e agenda para acompanhar as datas e o andamento das oportunidades da sua empresa.',
  },
]

const TRILHAS = [
  {
    icon: IconFlag,
    title: 'Licitações',
    text: 'Fundamentos e procedimentos para participar de licitações públicas com mais segurança.',
  },
  {
    icon: IconTarget,
    title: 'Estratégias',
    text: 'Como escolher as oportunidades certas e posicionar sua empresa nas disputas.',
  },
  {
    icon: IconTrendUp,
    title: 'Vendas',
    text: 'Como transformar o mercado público em um canal de vendas para o seu negócio.',
  },
  {
    icon: IconHardHat,
    title: 'Engenharia',
    text: 'Conteúdo voltado a empresas que disputam obras e serviços de engenharia.',
  },
]

const VANTAGENS = [
  { icon: IconEye, text: 'Maior visibilidade para sua empresa' },
  { icon: IconUsers, text: 'Você escolhe seus clientes' },
  { icon: IconLayers, text: 'Vendas e serviços em grande escala' },
  { icon: IconTrendUp, text: 'Aumento do faturamento' },
  { icon: IconBarChart, text: 'Previsibilidade de faturamento' },
  { icon: IconBuilding, text: 'Venda para o maior cliente do Brasil' },
]

const PUBLICO = [
  {
    icon: IconSeedling,
    title: 'Para quem está começando',
    text: 'MEIs e pequenas empresas que querem entender como funciona a participação em licitações públicas.',
  },
  {
    icon: IconFileCheck,
    title: 'Para quem já participa',
    text: 'Empresas que desejam organizar melhor a análise de editais e a preparação de documentos.',
  },
  {
    icon: IconZap,
    title: 'Para quem busca mais eficiência',
    text: 'Empresários que querem utilizar tecnologia e inteligência artificial para apoiar tarefas do processo de licitação.',
  },
]

const FAQ = [
  {
    q: 'O que é o Departamento Leve?',
    a: 'É uma plataforma que combina inteligência artificial, treinamento e apoio especializado para ajudar empresas a encontrar oportunidades de licitação, analisar editais e preparar documentos.',
  },
  {
    q: 'Para quem é a plataforma?',
    a: 'É voltada especialmente para MEIs, microempresas e pequenas empresas que desejam começar ou melhorar sua participação em licitações públicas.',
  },
  {
    q: 'O que é o Método LEVE?',
    a: 'É o conteúdo de capacitação que acompanha a plataforma, organizado em quatro trilhas — Licitações, Estratégias, Vendas e Engenharia — com mais de 30 aulas de conteúdo bônus.',
  },
  {
    q: 'Preciso entender de inteligência artificial para utilizar a plataforma?',
    a: 'A proposta é reunir recursos de tecnologia em uma experiência prática, complementada por treinamento. O usuário deve conhecer as informações de sua empresa e revisar os materiais gerados.',
  },
  {
    q: 'A plataforma gera documentos automaticamente?',
    a: 'Ela auxilia na preparação de declarações e disponibiliza assistentes de IA para apoiar a elaboração de minutas administrativas. As informações precisam ser revisadas e aprovadas pelo usuário.',
  },
  {
    q: 'O Departamento Leve garante que minha empresa ganhará uma licitação?',
    a: 'Não. Nenhuma ferramenta pode garantir a vitória em uma licitação. O Departamento Leve oferece recursos de apoio e treinamento para ajudar na organização e na preparação da empresa.',
  },
  {
    q: 'Como funciona o teste de 7 dias?',
    a: 'Você fala com um consultor pelo WhatsApp, tira suas dúvidas e solicita o acesso gratuito por 7 dias. O acesso é liberado pelo consultor, não automaticamente pela página.',
  },
  {
    q: 'Preciso falar com um consultor para comprar?',
    a: 'Não. Você pode comprar diretamente pela Kiwify, sem precisar conversar com um consultor. Se preferir, também pode entrar em contato pelo WhatsApp antes de decidir.',
  },
  {
    q: 'Quanto custa o Departamento Leve?',
    a: `A assinatura custa ${brl(MENSALIDADE)} por mês. O valor e as condições atualizadas ficam no checkout oficial da Kiwify.`,
  },
]

// Dados estruturados só com fatos reais: nome, site e as perguntas da página.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'Departamento Leve', url: `${SITE_URL}/` },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      name: 'Departamento Leve',
      url: `${SITE_URL}/`,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

function SectionHead({ id, eyebrow, title, intro, center }: { id: string; eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`${s.sectionHead} ${center ? s.center : ''}`}>
      {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={s.h2}>
        {title}
      </h2>
      {intro && <p className={s.lead}>{intro}</p>}
    </div>
  )
}

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`${s.placeholder} ${className ?? ''}`}>
      <span>{label}</span>
    </div>
  )
}

export default function Home() {
  const year = new Date().getFullYear()
  const hasMentor = Boolean(MENTOR.name && MENTOR.photo)
  const showCases = CASES.length > 0 || SHOW_PLACEHOLDERS

  return (
    <div className={`${s.page} ${inter.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>

      {/* HEADER */}
      <header className={s.header}>
        <div className={`${s.container} ${s.headerInner}`}>
          <a href="#inicio" className={s.brand} aria-label="Departamento Leve — início">
            <span className={s.brandMark} aria-hidden="true">
              DL
            </span>
            <span className={s.brandName}>Departamento Leve</span>
          </a>
          <nav className={s.nav} aria-label="Navegação principal">
            <a href="#plataforma">A plataforma</a>
            <a href="#metodo">Método LEVE</a>
            <a href="#investimento">Investimento</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <div className={s.headerActions}>
            {LOGIN_URL && (
              <a href={LOGIN_URL} className={s.loginLink}>
                Entrar
              </a>
            )}
            <Cta kind="purchase" section="header" size="sm">
              Quero comprar
            </Cta>
          </div>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO — foco no resultado */}
        <section id="inicio" className={`${s.section} ${s.dark} ${s.hero}`} aria-labelledby="hero-title">
          <div className={`${s.container} ${s.heroCenter}`}>
            <p className={s.badge}>
              <span>Inteligência artificial</span>
              <span className={s.dot} aria-hidden="true">
                •
              </span>
              <span>Gestão de licitações</span>
              <span className={s.dot} aria-hidden="true">
                •
              </span>
              <span className={s.badgeStrong}>Método LEVE</span>
            </p>
            <h1 id="hero-title" className={s.h1}>
              Um departamento inteiro de licitações <span className={s.accent}>dentro da sua empresa.</span>
            </h1>
            <p className={s.heroLead}>
              Encontre oportunidades, analise editais com IA, automatize a preparação de documentos e capacite sua equipe. Tudo em uma única plataforma.
            </p>
            <div className={`${s.ctaRow} ${s.ctaCenter}`}>
              <Cta kind="trial" section="hero" size="lg" variant="primary">
                Experimente por 7 dias
              </Cta>
              <a href="#plataforma" className={`${s.btn} ${s.btn_white} ${s.btn_lg}`}>
                Conheça a plataforma
              </a>
            </div>
            <p className={s.trialNote}>
              <IconInfo className={s.noteIcon} />
              <span>
                O acesso de teste é liberado por um consultor pelo WhatsApp. Prefere começar agora?{' '}
                <a href={KIWIFY_URL} data-cta="purchase" data-section="hero_link">
                  Compre direto pela Kiwify
                </a>
                .
              </span>
            </p>
          </div>
          <div className={`${s.container} ${s.heroDevice}`}>
            <DeviceMockup />
          </div>
        </section>

        {/* FAIXA DE DESTAQUE — ensino + IA */}
        <section className={s.band} aria-labelledby="faixa-title">
          <div className={s.container}>
            <h2 id="faixa-title" className={s.srOnly}>
              Treinamento e inteligência artificial para licitações
            </h2>
            <div className={s.bandPair}>
              <p className={s.bandItem}>
                <span className={s.bandAsk}>Não sabe fazer licitações?</span>
                <strong className={s.bandAnswer}>Nós ensinamos.</strong>
              </p>
              <span className={s.bandDivider} aria-hidden="true" />
              <p className={s.bandItem}>
                <span className={s.bandAsk}>Já sabe?</span>
                <strong className={s.bandAnswer}>Nossa IA ajuda você a ganhar produtividade.</strong>
              </p>
            </div>
            <div className={s.bandFoot}>
              <p className={s.bandSub}>O Departamento LEVE capacita sua empresa a disputar contratos públicos com mais eficiência!</p>
              <div className={s.bandActions}>
                <p className={s.bandBadge}>
                  <IconGraduation className={s.bandBadgeIcon} />
                  Treinamento completo em licitações
                  <span className={s.bandIncluso}>Incluso</span>
                </p>
                <Cta kind="purchase" section="faixa" size="lg" variant="white">
                  Quero comprar
                </Cta>
              </div>
            </div>
          </div>
        </section>

        {/* SEU DEPARTAMENTO DE LICITAÇÕES COM IA */}
        <section id="plataforma" className={`${s.section} ${s.light}`} aria-labelledby="plataforma-title">
          <div className={s.container}>
            <SectionHead
              id="plataforma-title"
              eyebrow="A plataforma"
              title="Seu departamento de licitações com IA."
              intro="As atividades que uma equipe de licitações executa no dia a dia, reunidas em um só lugar e apoiadas por inteligência artificial."
            />
            <div className={`${s.grid} ${s.grid3}`}>
              {ATIVIDADES.map(({ icon: Icon, title, text }) => (
                <article key={title} className={s.card}>
                  <span className={`${s.iconBox} ${s.iconOrange}`}>
                    <Icon />
                  </span>
                  <h3 className={s.h3}>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className={s.notice}>
              <IconInfo className={s.noteIcon} />
              <span>
                A IA apoia a análise e a preparação dos materiais. A decisão de participar e a validação final dos documentos continuam com a sua empresa.
              </span>
            </p>
            <div className={s.ctaRow}>
              <Cta kind="purchase" section="plataforma" size="lg">
                Quero comprar
              </Cta>
              <Cta kind="whatsapp" section="plataforma" size="lg" variant="secondaryLight">
                Quero falar com um consultor
              </Cta>
            </div>
          </div>
        </section>

        {/* MÉTODO LEVE — área valorizada */}
        <section id="metodo" className={`${s.section} ${s.dark} ${s.metodo}`} aria-labelledby="metodo-title">
          <div className={s.container}>
            <div className={s.metodoHead}>
              <div>
                <p className={s.eyebrow}>Método LEVE</p>
                <h2 id="metodo-title" className={s.h2}>
                  Conhecimento para crescer.
                </h2>
                <p className={s.lead}>
                  Ferramenta sem método não leva longe. O Método LEVE organiza o aprendizado em quatro trilhas de desenvolvimento para sua empresa evoluir no mercado
                  público.
                </p>
              </div>
              <div className={s.stats}>
                <div className={s.statCard}>
                  <p className={s.statNum}>+200</p>
                  <p className={s.statLabel}>alunos formados em licitação</p>
                </div>
                <div className={s.statCard}>
                  <p className={s.statNum}>+30</p>
                  <p className={s.statLabel}>aulas de conteúdo bônus</p>
                  <p className={s.statSub}>em videoaulas, incluídas na plataforma</p>
                </div>
              </div>
            </div>

            <ol className={s.trilhas}>
              {TRILHAS.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className={s.trilha}>
                  <span className={s.trilhaNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`${s.iconBox} ${s.iconOrange}`}>
                    <Icon />
                  </span>
                  <h3 className={s.h3}>
                    <span className={s.srOnly}>Trilha {i + 1}: </span>
                    {/* As iniciais formam L-E-V-E */}
                    <span className={s.leveLetter}>{title[0]}</span>
                    {title.slice(1)}
                  </h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>

            {hasMentor && (
              <div className={s.mentor}>
                {/* eslint-disable-next-line @next/next/no-img-element -- foto estática em /public */}
                <img src={MENTOR.photo} alt={`Foto de ${MENTOR.name}`} className={s.mentorPhoto} width={720} height={960} loading="lazy" />
                <div>
                  <p className={s.eyebrow}>Quem ministra o Treinamento LEVE?</p>
                  <h3 className={s.mentorName}>Conheça {MENTOR.name}</h3>
                  <p className={s.mentorRole}>{MENTOR.role}</p>
                  {MENTOR.bio.map((p) => (
                    <p key={p} className={s.mentorBio}>
                      {p}
                    </p>
                  ))}
                  <p className={s.mentorClosing}>{MENTOR.closing}</p>
                </div>
              </div>
            )}

            <div className={s.ctaRow}>
              <Cta kind="purchase" section="metodo" size="lg">
                Quero comprar
              </Cta>
            </div>
          </div>
        </section>

        {/* SUA OPERAÇÃO SOB CONTROLE */}
        <section id="video" className={`${s.section} ${s.light}`} aria-labelledby="operacao-title">
          <div className={s.container}>
            <SectionHead
              id="operacao-title"
              eyebrow="Na prática"
              title="Sua operação sob controle."
              intro="Veja no vídeo como o Departamento Leve organiza a participação da sua empresa em licitações, da oportunidade aos documentos."
              center
            />
            <div className={s.narrowBlock}>
              <VideoEmbed videoId={YOUTUBE_VIDEO_ID} title={VIDEO_TITLE} />
            </div>

            <h3 className={`${s.h3} ${s.vantagensTitle}`}>Algumas vantagens de ganhar contratos públicos</h3>
            <ul className={`${s.grid} ${s.grid3} ${s.vantagens}`}>
              {VANTAGENS.map(({ icon: Icon, text }) => (
                <li key={text} className={s.vantagem}>
                  <span className={`${s.iconBox} ${s.iconOrange}`}>
                    <Icon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className={`${s.ctaRow} ${s.ctaCenter}`}>
              <Cta kind="purchase" section="operacao" size="lg">
                Quero comprar
              </Cta>
              <Cta kind="whatsapp" section="operacao" size="lg" variant="secondaryLight">
                Tenho dúvidas. Quero falar com um consultor
              </Cta>
            </div>
          </div>
        </section>

        {/* COMPARATIVO DE CUSTO */}
        <section id="investimento" className={`${s.section} ${s.dark}`} aria-labelledby="custo-title">
          <div className={s.container}>
            <SectionHead
              id="custo-title"
              eyebrow="Investimento"
              title="Quanto custa estruturar um departamento de licitações?"
              intro="Compare o salário base de uma equipe de analistas com a mensalidade do Departamento Leve."
              center
            />
            <div className={s.compare}>
              <div className={s.compareCol}>
                <p className={s.compareLabel}>Equipe própria</p>
                <div className={s.compareRow}>
                  <span>2 analistas de licitação</span>
                  <strong>{brl(SALARIO_ANALISTA * 2)}/mês</strong>
                </div>
                <div className={s.compareRow}>
                  <span>3 analistas de licitação</span>
                  <strong>{brl(SALARIO_ANALISTA * 3)}/mês</strong>
                </div>
                <p className={s.compareNote}>Somente salário base. Encargos trabalhistas, benefícios, treinamento e ferramentas aumentam esse valor.</p>
              </div>
              <div className={`${s.compareCol} ${s.compareHi}`}>
                <p className={s.compareLabel}>Departamento Leve</p>
                <p className={s.comparePrice}>
                  {brl(MENSALIDADE)}
                  <span>/mês</span>
                </p>
                <ul className={s.checks}>
                  {['Oportunidades e análise de editais com IA', 'Declarações e controle de certidões', 'Três assistentes de IA', 'Método LEVE com +30 aulas bônus'].map((t) => (
                    <li key={t}>
                      <IconCheck className={s.checkIcon} />
                      {t}
                    </li>
                  ))}
                </ul>
                <Cta kind="purchase" section="investimento" size="lg" className={s.compareBtn}>
                  Quero comprar
                </Cta>
              </div>
            </div>
            <p className={`${s.small} ${s.center}`}>
              Referência salarial: {SALARIO_FONTE}. A plataforma apoia as atividades de licitação; a decisão e a validação continuam com a empresa. Valor da
              mensalidade conforme o checkout oficial da Kiwify.
            </p>
          </div>
        </section>

        {/* RESULTADOS — depoimentos e cases reais e autorizados */}
        <section className={`${s.section} ${s.light}`} aria-labelledby="resultados-title">
          <div className={s.container}>
            <SectionHead
              id="resultados-title"
              eyebrow="Resultados"
              title="Quem usa, conquista contratos."
              intro="Empresas que usam o Departamento Leve para participar de licitações."
            />
            <ul className={s.results}>
              {RESULT_STATS.map((r) => (
                <li key={r.label} className={s.result}>
                  <p className={s.resultNum}>{r.value}</p>
                  <p className={s.resultLabel}>{r.label}</p>
                  {r.detail && <p className={s.resultDetail}>{r.detail}</p>}
                </li>
              ))}
            </ul>
            <div className={s.testimonials}>
              {TESTIMONIALS.map((d) => (
                <figure key={d.author} className={s.testimonial}>
                  <span className={s.quoteMark} aria-hidden="true">
                    “
                  </span>
                  <blockquote>
                    <p>{d.quote}</p>
                  </blockquote>
                  <figcaption>
                    <span className={s.testimonialAuthor}>{d.author}</span>
                    {d.role && <span className={s.testimonialRole}>{d.role}</span>}
                  </figcaption>
                  {d.logo && (
                    // eslint-disable-next-line @next/next/no-img-element -- logomarca estática em /public
                    <img src={d.logo} alt={`Logomarca ${d.author}`} className={s.testimonialLogo} loading="lazy" />
                  )}
                </figure>
              ))}
            </div>
            {showCases && (
              <>
                <h3 className={`${s.h3} ${s.casesTitle}`}>Contratos conquistados com o Departamento Leve</h3>
                <div className={`${s.grid} ${s.grid3}`}>
                  {CASES.length > 0
                    ? CASES.map((c) => (
                        <article key={c.title} className={`${s.card} ${s.caseCard}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element -- foto estática em /public */}
                          <img src={c.photo} alt={c.title} className={s.casePhoto} loading="lazy" />
                          <div className={s.caseBody}>
                            <h4 className={s.h3}>{c.title}</h4>
                            <p className={s.caseOrg}>{c.org}</p>
                            {c.description && <p>{c.description}</p>}
                          </div>
                        </article>
                      ))
                    : [1, 2, 3].map((n) => (
                        <article key={n} className={`${s.card} ${s.caseCard}`}>
                          <Placeholder label={`Foto da obra ${n} (substituir)`} className={s.casePhoto} />
                          <div className={s.caseBody}>
                            <h4 className={s.h3}>[Objeto do contrato]</h4>
                            <p className={s.caseOrg}>[Órgão / cidade]</p>
                          </div>
                        </article>
                      ))}
                </div>
                {CASES.length === 0 && <p className={s.small}>Cases visíveis só em preview até as fotos reais serem adicionadas em content.ts.</p>}
              </>
            )}
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className={`${s.section} ${s.dark}`} aria-labelledby="publico-title">
          <div className={s.container}>
            <SectionHead id="publico-title" eyebrow="Para quem é" title="Uma solução para empresas que querem ampliar suas oportunidades." />
            <div className={`${s.grid} ${s.grid3}`}>
              {PUBLICO.map(({ icon: Icon, title, text }) => (
                <article key={title} className={s.card}>
                  <span className={s.iconBox}>
                    <Icon />
                  </span>
                  <h3 className={s.h3}>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTE GRATUITO */}
        <section id="teste-gratuito" className={`${s.section} ${s.light} ${s.sectionTight}`} aria-labelledby="teste-title">
          <div className={s.container}>
            <div className={s.trialBox}>
              <div>
                <h2 id="teste-title" className={s.h2}>
                  Prefere conhecer a plataforma antes de decidir?
                </h2>
                <p className={s.lead}>
                  Converse com nossa equipe, esclareça suas dúvidas e entenda como o Departamento Leve pode ajudar sua empresa. Se fizer sentido para você,
                  solicite ao consultor acesso gratuito à plataforma por 7 dias.
                </p>
                <p className={s.small}>O acesso de teste depende do contato com o consultor e da liberação correspondente. Não é automático pela página.</p>
              </div>
              <Cta kind="trial" section="teste_gratuito" size="lg" variant="white">
                Experimente por 7 dias
              </Cta>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className={`${s.section} ${s.dark}`} aria-labelledby="faq-title">
          <div className={`${s.container} ${s.narrow}`}>
            <SectionHead id="faq-title" eyebrow="Dúvidas frequentes" title="Tire suas dúvidas sobre o Departamento Leve." center />
            <div className={s.faq}>
              {FAQ.map((f) => (
                <details key={f.q} className={s.faqItem}>
                  <summary>
                    <h3 className={s.faqQ}>{f.q}</h3>
                    <span className={s.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className={`${s.section} ${s.dark} ${s.final}`} aria-labelledby="final-title">
          <div className={`${s.container} ${s.narrow} ${s.center}`}>
            <h2 id="final-title" className={s.h2}>
              Tenha um departamento de licitações completo, fácil e acessível!
            </h2>
            <p className={s.lead}>Oportunidades, inteligência artificial e o Método LEVE em uma única plataforma.</p>
            <div className={`${s.ctaRow} ${s.ctaCenter}`}>
              <Cta kind="purchase" section="cta_final" size="lg">
                Quero comprar
              </Cta>
              <Cta kind="whatsapp" section="cta_final" size="lg">
                Quero falar com um consultor
              </Cta>
            </div>
            <p className={s.small}>
              Prefere conhecer antes? <a href="#teste-gratuito">Consulte com nossa equipe</a> a possibilidade de acesso gratuito por 7 dias.
            </p>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className={s.footer}>
        <div className={`${s.container} ${s.footerGrid}`}>
          <div>
            <p className={s.brand}>
              <span className={s.brandMark} aria-hidden="true">
                DL
              </span>
              <span className={s.brandName}>Departamento Leve</span>
            </p>
            <p className={s.footerText}>Inteligência artificial, gestão de licitações e o Método LEVE em um só lugar para MEIs, microempresas e pequenas empresas.</p>
          </div>
          <nav aria-label="Links do rodapé" className={s.footerLinks}>
            <a href={WHATSAPP_GERAL_URL} data-cta="whatsapp" data-section="rodape" target="_blank" rel="noopener noreferrer">
              Atendimento pelo WhatsApp<span className={s.srOnly}> (abre em nova aba)</span>
            </a>
            {LOGIN_URL && <a href={LOGIN_URL}>Já sou cliente: acessar a plataforma</a>}
            {PRIVACY_URL && <a href={PRIVACY_URL}>Política de privacidade</a>}
            {TERMS_URL && <a href={TERMS_URL}>Termos de uso</a>}
          </nav>
        </div>
        <div className={`${s.container} ${s.copy}`}>© {year} Departamento Leve. Todos os direitos reservados.</div>
      </footer>

      <StickyCta />
      <LandingAnalytics />
    </div>
  )
}
