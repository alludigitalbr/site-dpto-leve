// Conteúdo que o cliente fornece ou atualiza. Só entra na página o que for
// real: depoimento, foto de pessoa e cases nunca são inventados.

// Espaços reservados (mentor, cases) aparecem tracejados em dev e nos
// previews da Vercel, e somem em produção enquanto não forem preenchidos.
export const SHOW_PLACEHOLDERS = process.env.VERCEL_ENV !== 'production'

// Preço vigente no checkout da Kiwify (conferido em out/2026). Se mudar lá, mudar aqui.
export const MENSALIDADE = 289

// Base do comparativo: salário médio de analista de licitações, sem encargos
// nem benefícios. Fonte: Vagas.com.br, mapa de carreiras (consulta out/2026).
export const SALARIO_ANALISTA = 3000
export const SALARIO_FONTE = 'Vagas.com.br, média salarial de analista de licitações (consulta em out/2026)'

export type Mentor = {
  name: string
  role: string
  // Um parágrafo por item
  bio: string[]
  // Frase de fechamento em destaque
  closing: string
  // Caminho em /public, ex.: '/img/mentor.jpg'
  photo: string
}

// Apresentação de quem ministra o Treinamento LEVE (texto e foto enviados pelo cliente).
export const MENTOR: Mentor = {
  name: 'Eliézer Dias',
  role: 'Fundador do Departamento LEVE e criador do Método LEVE.',
  bio: [
    'Engenheiro civil, empresário, palestrante e especialista em licitações públicas, Eliézer construiu sua trajetória transformando oportunidades em contratos e resultados reais.',
    'Em mais de 18 anos de atuação, já conquistou contratos públicos em 16 estados do Brasil para sua própria empresa, além de atender empresas clientes, acumulando experiência prática em todas as etapas do processo licitatório.',
    'Segundo dados da própria companhia, em junho de 2026, em apenas um semestre o Departamento LEVE conquistou R$ 20 milhões em contratos públicos e já atendeu mais de 200 empresas em seu curso.',
    'Casado e pai de três filhos, é apaixonado por empreendedorismo e acredita que o conhecimento é uma das ferramentas mais poderosas para o crescimento empresarial.',
    'Atualmente ocupa a presidência da empresa e oferece soluções empresariais e tecnológicas para pequenas e médias empresas, ajudando empreendedores a conquistar seu espaço no mercado público.',
    'Sua missão é simples: mostrar que vencer licitações não precisa ser complicado e ajudar mais empresas brasileiras a transformarem oportunidades em faturamento.',
  ],
  closing: 'No Treinamento LEVE, você aprende com quem vive as licitações na prática há mais de 18 anos!',
  photo: '/img/eliezer-dias.jpg',
}

export type ResultStat = {
  value: string
  label: string
  detail?: string
}

// Números informados pelo cliente (out/2026). Atualizar quando ele enviar novos dados.
export const RESULT_STATS: ResultStat[] = [
  {
    value: '+R$ 20 milhões',
    label: 'em contratos ganhos com o Departamento Leve em 2026',
  },
  {
    value: '6x',
    label: 'mais rápido para montar a licitação',
  },
  {
    value: '~450',
    label: 'oportunidades por dia só na construção civil',
    detail: 'Projetos, demolição, reforma, construção, instalação e manutenção.',
  },
]

export type Testimonial = {
  quote: string
  author: string
  // Profissão ou tipo de empresa, opcional
  role?: string
  // Logomarca do cliente em /public, opcional
  logo?: string
}

// Depoimentos reais e autorizados de clientes.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Com o Departamento LEVE, consegui ganhar contratos que antes achava serem impossíveis. Ficou muito mais simples e fácil!',
    author: 'Larini Arquitetura',
    logo: '/img/logos/larini-arquitetura.png',
  },
  {
    quote: 'Através do Depto LEVE, a construtora já ganhou mais de 16 milhões de reais em contratos!',
    author: 'Construtora Gomes Gonçalves',
    logo: '/img/logos/construtora-gomes-goncalves.png',
  },
  {
    quote: 'Com apenas algumas aulas, venci minha primeira licitação. Recomendo a todos os profissionais e estudantes que querem aprender sobre o assunto.',
    author: 'Fernando Henrique',
    role: 'Engenheiro civil',
  },
  {
    quote: 'Este treinamento em licitações superou minhas expectativas. Objetivo, prático e com conteúdo aplicável ao dia a dia. Em poucas aulas já consegui colocar em prática e obter resultados reais.',
    author: 'Jeferson Carvalho',
    role: 'Engenheiro civil',
  },
]

export type Case = {
  // Foto real da obra/entrega, em /public, ex.: '/img/cases/ponte.jpg'
  photo: string
  title: string
  // Órgão contratante e/ou cidade, como o cliente autorizar divulgar
  org: string
  description?: string
}

// Contratos conquistados com o Departamento Leve (somente com autorização).
export const CASES: Case[] = []
