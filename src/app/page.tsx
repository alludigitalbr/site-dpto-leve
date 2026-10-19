import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cta } from '@/components/landing/Cta'
import { LandingAnalytics } from '@/components/landing/LandingAnalytics'
import { StickyCta } from '@/components/landing/StickyCta'
import { VideoEmbed } from '@/components/landing/VideoEmbed'
import {
  IconCheck,
  IconClock,
  IconDocSearch,
  IconFileArrow,
  IconFileCheck,
  IconGraduation,
  IconHelp,
  IconInfo,
  IconLayers,
  IconMessageQuestion,
  IconPlay,
  IconScale,
  IconSearch,
  IconSeedling,
  IconSparkle,
  IconTarget,
  IconZap,
} from '@/components/landing/Icons'
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

const PROBLEMAS = [
  {
    icon: IconSearch,
    title: 'Encontrar oportunidades relevantes',
    text: 'Identificar licitações compatíveis com o perfil da empresa pode consumir tempo e dificultar a rotina.',
  },
  {
    icon: IconDocSearch,
    title: 'Entender os editais',
    text: 'Editais extensos e cheios de requisitos exigem atenção para identificar condições, prazos e documentos necessários.',
  },
  {
    icon: IconFileCheck,
    title: 'Preparar a documentação',
    text: 'Organizar declarações e outros documentos demanda cuidado e pode tornar o processo mais trabalhoso.',
  },
  {
    icon: IconHelp,
    title: 'Saber como agir diante de dúvidas',
    text: 'Entender como solicitar esclarecimentos, questionar exigências ou preparar um recurso administrativo pode ser um desafio para quem não domina os procedimentos.',
  },
]

const SOLUCAO = [
  {
    icon: IconTarget,
    title: 'Oportunidades alinhadas ao perfil da empresa',
    text: 'Identifique oportunidades de licitação que correspondam ao perfil e aos interesses do seu negócio.',
  },
  {
    icon: IconSparkle,
    title: 'Análise de editais com inteligência artificial',
    text: 'Utilize a IA para agilizar a leitura do edital, compreender requisitos importantes e apoiar sua decisão sobre participar ou não.',
  },
  {
    icon: IconFileCheck,
    title: 'Preparação de declarações e documentos',
    text: 'Gere declarações com auxílio da plataforma, revise as informações e aprove o conteúdo antes de utilizá-lo.',
  },
  {
    icon: IconLayers,
    title: 'Assistentes de IA para etapas administrativas',
    text: 'Conte com ferramentas que ajudam a estruturar pedidos de esclarecimento, impugnações e recursos administrativos.',
  },
]

const ETAPAS = [
  {
    title: 'Encontre oportunidades',
    text: 'Consulte oportunidades de licitação compatíveis com o perfil da sua empresa.',
  },
  {
    title: 'Analise o edital com IA',
    text: 'Utilize os recursos de inteligência artificial para agilizar a leitura e identificar informações relevantes para sua avaliação.',
  },
  {
    title: 'Prepare a documentação',
    text: 'Apoie a preparação das declarações e de outros materiais necessários. Revise os dados e valide os documentos antes de utilizá-los.',
  },
  {
    title: 'Aprenda e avance com mais segurança',
    text: 'Acesse o treinamento em videoaulas e utilize os assistentes de IA para apoiar etapas específicas do processo.',
  },
]

const ASSISTENTES = [
  {
    icon: IconScale,
    title: 'Assistente de Impugnação',
    text: 'Ajuda a organizar argumentos e preparar minutas de impugnação com base nas informações fornecidas e nos pontos do edital que precisam ser avaliados.',
  },
  {
    icon: IconMessageQuestion,
    title: 'Assistente de Esclarecimentos',
    text: 'Ajuda a formular pedidos de esclarecimento para apresentar dúvidas sobre requisitos, condições ou disposições do edital.',
  },
  {
    icon: IconFileArrow,
    title: 'Assistente de Recursos Administrativos',
    text: 'Ajuda a estruturar minutas de recursos administrativos, organizando os argumentos e as informações relevantes para revisão.',
  },
]

const TREINAMENTO = [
  'Aprendizado sobre licitações.',
  'Conteúdo em videoaulas.',
  'Conhecimento combinado com ferramentas tecnológicas.',
  'Apoio para quem deseja começar ou organizar melhor sua atuação.',
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

const BENEFICIOS = [
  { icon: IconClock, text: 'Agilize a leitura de editais com apoio da IA.' },
  { icon: IconTarget, text: 'Organize melhor a avaliação das oportunidades.' },
  { icon: IconFileCheck, text: 'Apoie a preparação de declarações.' },
  { icon: IconScale, text: 'Estruture minutas de pedidos de esclarecimento, impugnações e recursos.' },
  { icon: IconGraduation, text: 'Aprenda com treinamento em videoaulas.' },
  { icon: IconLayers, text: 'Reúna ferramentas e conhecimento em uma única solução.' },
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
    q: 'Preciso entender de inteligência artificial para utilizar a plataforma?',
    a: 'A proposta é reunir recursos de tecnologia em uma experiência prática, complementada por treinamento. O usuário deve conhecer as informações de sua empresa e revisar os materiais gerados.',
  },
  {
    q: 'A inteligência artificial analisa os editais?',
    a: 'Sim. A plataforma utiliza recursos de IA para apoiar a leitura e a análise dos editais, ajudando o usuário a identificar informações relevantes para sua decisão.',
  },
  {
    q: 'A plataforma gera documentos automaticamente?',
    a: 'Ela auxilia na preparação de declarações e disponibiliza assistentes de IA para apoiar a elaboração de minutas administrativas. As informações precisam ser revisadas e aprovadas pelo usuário.',
  },
  {
    q: 'Quais são os assistentes de IA disponíveis?',
    a: 'A solução inclui assistentes para impugnações, pedidos de esclarecimento e recursos administrativos.',
  },
  {
    q: 'O Departamento Leve garante que minha empresa ganhará uma licitação?',
    a: 'Não. Nenhuma ferramenta pode garantir a vitória em uma licitação. O Departamento Leve oferece recursos de apoio e treinamento para ajudar na organização e na preparação da empresa.',
  },
  {
    q: 'Posso conhecer a plataforma gratuitamente?',
    a: 'Você pode entrar em contato com um consultor para esclarecer dúvidas e solicitar acesso gratuito por 7 dias. O acesso não é liberado automaticamente pela landing page.',
  },
  {
    q: 'Preciso falar com um consultor para comprar?',
    a: 'Não. Você pode comprar diretamente pela Kiwify, sem precisar conversar com um consultor. Se preferir, também pode entrar em contato pelo WhatsApp antes de decidir.',
  },
  {
    q: 'Quanto custa o Departamento Leve?',
    a: 'O valor e as condições comerciais estão disponíveis no checkout oficial da Kiwify. Se tiver dúvidas antes de comprar, você também pode falar com um consultor.',
  },
  {
    q: 'Como faço para começar?',
    a: 'Você pode clicar em “Quero comprar” para acessar o checkout ou falar com um consultor pelo WhatsApp.',
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

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <div className={`${s.page} ${inter.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>

      {/* 1 — HEADER */}
      <header className={s.header}>
        <div className={`${s.container} ${s.headerInner}`}>
          <a href="#inicio" className={s.brand} aria-label="Departamento Leve — início">
            <span className={s.brandMark} aria-hidden="true">
              DL
            </span>
            <span className={s.brandName}>Departamento Leve</span>
          </a>
          <nav className={s.nav} aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#o-que-esta-incluido">O que está incluído</a>
            <a href="#duvidas">Dúvidas frequentes</a>
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
        {/* 2 — HERO */}
        <section id="inicio" className={`${s.section} ${s.dark} ${s.hero}`} aria-labelledby="hero-title">
          <div className={`${s.container} ${s.heroGrid}`}>
            <div className={s.heroCopy}>
              <p className={s.badge}>
                <IconSparkle className={s.badgeIcon} />
                Inteligência artificial para licitações públicas
              </p>
              <h1 id="hero-title" className={s.h1}>
                Mais oportunidades de vender para o governo. <span className={s.accent}>Menos tempo perdido com editais e burocracia.</span>
              </h1>
              <p className={s.heroLead}>
                O Departamento Leve combina inteligência artificial, treinamento e apoio especializado para ajudar sua empresa a encontrar oportunidades de
                licitação, analisar editais e preparar documentos com mais agilidade e organização.
              </p>
              <p className={s.heroSub}>
                Uma solução pensada para MEIs, microempresas e pequenas empresas que querem entender melhor as licitações públicas e aproveitar novas oportunidades
                de negócio.
              </p>
              <div className={s.ctaRow}>
                <Cta kind="purchase" section="hero" size="lg">
                  Quero comprar
                </Cta>
                <Cta kind="whatsapp" section="hero" size="lg">
                  Quero falar com um consultor
                </Cta>
              </div>
              <p className={s.trialNote}>
                <IconInfo className={s.noteIcon} />
                <span>
                  Prefere conhecer antes de decidir? <a href="#teste-gratuito">Consulte as condições</a> para solicitar 7 dias de acesso gratuito com um consultor.
                </span>
              </p>
            </div>

            {/* Ilustração conceitual (não é captura de tela do produto). Trocar por capturas reais quando disponíveis. */}
            <div className={s.heroArt} aria-hidden="true">
              <div className={s.artGlow} />
              <div className={s.artDoc}>
                <div className={s.artDocHead}>
                  <span className={s.artDocIcon}>
                    <IconDocSearch />
                  </span>
                  <span className={s.artBar} style={{ width: '46%' }} />
                </div>
                <span className={s.artLine} style={{ width: '92%' }} />
                <span className={s.artLine} style={{ width: '84%' }} />
                <span className={`${s.artLine} ${s.artHi}`} style={{ width: '70%' }} />
                <span className={s.artLine} style={{ width: '88%' }} />
                <span className={s.artLine} style={{ width: '60%' }} />
                <span className={`${s.artLine} ${s.artHi}`} style={{ width: '78%' }} />
                <span className={s.artLine} style={{ width: '90%' }} />
                <span className={s.artLine} style={{ width: '52%' }} />
              </div>
              <div className={`${s.artChip} ${s.chipA}`}>
                <IconSparkle /> Leitura com IA
              </div>
              <div className={`${s.artChip} ${s.chipB}`}>
                <IconCheck /> Requisitos
              </div>
              <div className={`${s.artChip} ${s.chipC}`}>
                <IconClock /> Prazos
              </div>
              <div className={`${s.artChip} ${s.chipD}`}>
                <IconFileCheck /> Declarações
              </div>
            </div>
          </div>
        </section>

        {/* 3 — VÍDEO */}
        <section id="video" className={`${s.section} ${s.light}`} aria-labelledby="video-title">
          <div className={`${s.container} ${s.narrow}`}>
            <SectionHead
              id="video-title"
              eyebrow="Vídeo de apresentação"
              title="Conheça o Departamento Leve na prática"
              intro="Veja como a tecnologia e a inteligência artificial podem ajudar sua empresa a organizar a participação em licitações públicas."
              center
            />
            <VideoEmbed videoId={YOUTUBE_VIDEO_ID} title={VIDEO_TITLE} />
            <div className={`${s.ctaRow} ${s.ctaCenter}`}>
              <Cta kind="purchase" section="video" size="lg">
                Quero comprar
              </Cta>
              <Cta kind="whatsapp" section="video" size="lg" variant="secondaryLight">
                Tenho dúvidas. Quero falar com um consultor
              </Cta>
            </div>
          </div>
        </section>

        {/* 4 — PROBLEMA */}
        <section className={`${s.section} ${s.dark}`} aria-labelledby="problema-title">
          <div className={s.container}>
            <SectionHead
              id="problema-title"
              title="Participar de licitações não precisa ser um processo tão complicado."
              intro="Muitas empresas deixam de aproveitar oportunidades de vender para o governo porque não sabem por onde começar ou encontram dificuldades para lidar com editais, documentos e procedimentos."
            />
            <div className={`${s.grid} ${s.grid4}`}>
              {PROBLEMAS.map(({ icon: Icon, title, text }) => (
                <article key={title} className={s.card}>
                  <span className={s.iconBox}>
                    <Icon />
                  </span>
                  <h3 className={s.h3}>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className={s.closing}>
              O Departamento Leve reúne ferramentas de IA, treinamento e apoio especializado para ajudar você a enfrentar essas etapas com mais organização.
            </p>
          </div>
        </section>

        {/* 5 — SOLUÇÃO */}
        <section id="o-que-esta-incluido" className={`${s.section} ${s.light}`} aria-labelledby="solucao-title">
          <div className={s.container}>
            <SectionHead
              id="solucao-title"
              eyebrow="O que está incluído"
              title="Tecnologia e conhecimento trabalhando juntos para sua empresa."
              intro="Com o Departamento Leve, você conta com recursos que apoiam diferentes etapas da participação em licitações, desde a identificação de oportunidades até a preparação de documentos."
            />
            <div className={`${s.grid} ${s.grid2}`}>
              {SOLUCAO.map(({ icon: Icon, title, text }, i) => (
                <article key={title} className={`${s.card} ${s.cardRow}`}>
                  <span className={`${s.iconBox} ${s.iconOrange}`}>
                    <Icon />
                  </span>
                  <div>
                    <h3 className={s.h3}>
                      <span className={s.num}>{i + 1}.</span> {title}
                    </h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className={s.notice}>
              <IconInfo className={s.noteIcon} />
              <span>
                A decisão de participar e a validação final dos documentos continuam sob responsabilidade da empresa. A tecnologia é uma ferramenta de apoio para
                tornar o trabalho mais organizado e eficiente.
              </span>
            </p>
          </div>
        </section>

        {/* 6 — COMO FUNCIONA */}
        <section id="como-funciona" className={`${s.section} ${s.dark}`} aria-labelledby="como-title">
          <div className={s.container}>
            <SectionHead id="como-title" eyebrow="Como funciona" title="Da oportunidade à preparação para participar." />
            <ol className={s.steps}>
              {ETAPAS.map((e, i) => (
                <li key={e.title} className={s.step}>
                  <span className={s.stepNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className={s.h3}>
                    <span className={s.srOnly}>Etapa {i + 1}: </span>
                    {e.title}
                  </h3>
                  <p>{e.text}</p>
                </li>
              ))}
            </ol>
            <p className={`${s.closing} ${s.center}`}>Tudo em um só lugar, com tecnologia e conhecimento para ajudar sua empresa a se organizar melhor.</p>
            <div className={`${s.ctaRow} ${s.ctaCenter}`}>
              <Cta kind="purchase" section="como_funciona" size="lg">
                Quero comprar
              </Cta>
            </div>
          </div>
        </section>

        {/* 7 — ASSISTENTES DE IA */}
        <section className={`${s.section} ${s.light}`} aria-labelledby="assistentes-title">
          <div className={s.container}>
            <SectionHead
              id="assistentes-title"
              eyebrow="Diferencial"
              title="Assistentes de IA para ajudar você em etapas importantes da licitação."
              intro="Ferramentas para apoiar a elaboração de documentos administrativos, economizando tempo na organização das informações e na preparação dos textos."
            />
            <div className={`${s.grid} ${s.grid3}`}>
              {ASSISTENTES.map(({ icon: Icon, title, text }) => (
                <article key={title} className={`${s.card} ${s.cardAccent}`}>
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
                As respostas geradas por IA devem ser revisadas e validadas antes de qualquer utilização. A adequação jurídica e procedimental depende das
                circunstâncias de cada licitação.
              </span>
            </p>
          </div>
        </section>

        {/* 8 — TREINAMENTO */}
        <section className={`${s.section} ${s.dark}`} aria-labelledby="treinamento-title">
          <div className={`${s.container} ${s.split}`}>
            <div>
              <SectionHead
                id="treinamento-title"
                eyebrow="Treinamento em videoaulas"
                title="Não basta ter a ferramenta. É importante saber como utilizá-la."
                intro="O Departamento Leve também oferece treinamento em licitações por meio de videoaulas, para ajudar você a compreender melhor os procedimentos e aproveitar os recursos disponíveis."
              />
              <ul className={s.checks}>
                {TREINAMENTO.map((t) => (
                  <li key={t}>
                    <IconCheck className={s.checkIcon} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className={s.ctaRow}>
                <Cta kind="purchase" section="treinamento" size="lg">
                  Quero conhecer o Departamento Leve
                </Cta>
              </div>
            </div>
            {/* Ilustração conceitual de aulas em vídeo — sem títulos, módulos ou durações inventados. */}
            <div className={s.lessonArt} aria-hidden="true">
              <div className={s.lessonScreen}>
                <span className={s.lessonPlay}>
                  <IconPlay />
                </span>
                <span className={s.lessonProgress}>
                  <span />
                </span>
              </div>
              {[72, 58, 64].map((w, i) => (
                <div key={i} className={s.lessonRow}>
                  <span className={s.lessonDot}>{i === 0 ? <IconCheck /> : <IconGraduation />}</span>
                  <span className={s.artBar} style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 — PARA QUEM É */}
        <section className={`${s.section} ${s.light}`} aria-labelledby="publico-title">
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
            <p className={s.closing}>
              Independentemente do estágio em que sua empresa esteja, o primeiro passo é conhecer os recursos disponíveis e avaliar como eles se encaixam na sua
              rotina.
            </p>
          </div>
        </section>

        {/* 10 — BENEFÍCIOS */}
        <section className={`${s.section} ${s.dark}`} aria-labelledby="beneficios-title">
          <div className={s.container}>
            <SectionHead id="beneficios-title" eyebrow="Benefícios" title="Menos trabalho operacional. Mais organização para avaliar oportunidades." />
            <ul className={`${s.grid} ${s.grid3} ${s.benefits}`}>
              {BENEFICIOS.map(({ icon: Icon, text }) => (
                <li key={text} className={s.benefit}>
                  <span className={`${s.iconBox} ${s.iconOrange}`}>
                    <Icon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11 — CREDIBILIDADE
            Sem provas sociais fornecidas, a seção apresenta caminhos reais para
            conhecer o produto. Depoimentos, estudos de caso ou capturas reais
            entram aqui somente quando autorizados e documentados. */}
        <section className={`${s.section} ${s.light}`} aria-labelledby="conheca-title">
          <div className={s.container}>
            <SectionHead
              id="conheca-title"
              title="Conheça a solução antes de tomar sua decisão."
              intro="Veja a apresentação oficial, tire suas dúvidas com a equipe e consulte as condições diretamente no checkout."
            />
            <div className={`${s.grid} ${s.grid3}`}>
              <article className={s.card}>
                <span className={s.iconBox}>
                  <IconPlay />
                </span>
                <h3 className={s.h3}>Assista à apresentação</h3>
                <p>O vídeo oficial mostra como a plataforma reúne oportunidades, análise de editais com IA e treinamento.</p>
                <a href="#video" className={s.textLink}>
                  Ver o vídeo
                </a>
              </article>
              <article className={s.card}>
                <span className={s.iconBox}>
                  <IconMessageQuestion />
                </span>
                <h3 className={s.h3}>Converse com um consultor</h3>
                <p>Explique o momento da sua empresa e entenda se os recursos fazem sentido para a sua rotina.</p>
                <a href={WHATSAPP_GERAL_URL} className={s.textLink} data-cta="whatsapp" data-section="conheca" target="_blank" rel="noopener noreferrer">
                  Falar pelo WhatsApp<span className={s.srOnly}> (abre em nova aba)</span>
                </a>
              </article>
              <article className={s.card}>
                <span className={s.iconBox}>
                  <IconInfo />
                </span>
                <h3 className={s.h3}>Consulte valor e condições</h3>
                <p>Preço e condições comerciais ficam disponíveis no checkout oficial da Kiwify, sem cadastro prévio.</p>
                <a href={KIWIFY_URL} className={s.textLink} data-cta="purchase" data-section="conheca">
                  Ir para o checkout
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 12 — TESTE GRATUITO */}
        <section id="teste-gratuito" className={`${s.section} ${s.dark} ${s.sectionTight}`} aria-labelledby="teste-title">
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
              <Cta kind="trial" section="teste_gratuito" size="lg">
                Quero conhecer a plataforma
              </Cta>
            </div>
          </div>
        </section>

        {/* 13 — FAQ */}
        <section id="duvidas" className={`${s.section} ${s.light}`} aria-labelledby="faq-title">
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

        {/* 14 — CTA FINAL */}
        <section id="cta-final" className={`${s.section} ${s.dark} ${s.final}`} aria-labelledby="final-title">
          <div className={`${s.container} ${s.narrow} ${s.center}`}>
            <h2 id="final-title" className={s.h2}>
              Sua empresa pode dar o próximo passo nas licitações públicas.
            </h2>
            <p className={s.lead}>
              Conheça uma solução que reúne oportunidades, inteligência artificial e treinamento para ajudar você a participar de licitações com mais organização.
            </p>
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

      {/* 15 — RODAPÉ */}
      <footer className={s.footer}>
        <div className={`${s.container} ${s.footerGrid}`}>
          <div>
            <p className={s.brand}>
              <span className={s.brandMark} aria-hidden="true">
                DL
              </span>
              <span className={s.brandName}>Departamento Leve</span>
            </p>
            <p className={s.footerText}>Inteligência artificial, oportunidades de licitação e treinamento em um só lugar para MEIs, microempresas e pequenas empresas.</p>
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
