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
  bio: string
  // Caminho em /public, ex.: '/img/mentor.jpg'
  photo: string
}

// Apresentação de quem conduz o Método LEVE. Preencher com dados e foto reais.
export const MENTOR: Mentor = {
  name: '',
  role: '',
  bio: '',
  photo: '',
}

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
