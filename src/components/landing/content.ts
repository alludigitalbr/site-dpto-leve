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
  // Caminho em /public, ex.: '/img/mentor.jpg'
  photo: string
}

// Apresentação de quem conduz o Método LEVE (texto e foto enviados pelo cliente).
export const MENTOR: Mentor = {
  name: 'Eliézer Dias',
  role: 'Engenheiro Civil, empresário, palestrante e especialista em licitações públicas.',
  bio: [
    'Casado e pai de três filhos, Eliézer Dias é apaixonado por empreendedorismo e por transformar oportunidades em resultados.',
    'Com experiência no mercado de obras públicas, dedica-se a compartilhar conhecimento e ajudar empresas de todos os portes a conquistarem contratos com o governo.',
    'Sua missão é simplificar as licitações, tornando o mercado público mais acessível, estratégico e lucrativo para os empreendedores brasileiros.',
  ],
  photo: '/img/eliezer-dias.jpg',
}

export type Testimonial = {
  quote: string
  author: string
}

// Depoimentos reais e autorizados de clientes.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Com o Departamento LEVE, consegui ganhar contratos que antes achava serem impossíveis. Ficou muito mais simples e fácil!',
    author: 'Larini Arquitetura',
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
