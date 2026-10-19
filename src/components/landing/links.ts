// Destinos oficiais da landing page. Não trocar por páginas intermediárias.
export const SITE_URL = 'https://departamentoleve.com.br'

export const KIWIFY_URL = 'https://pay.kiwify.com.br/MpcE1Lz'

export const WHATSAPP_GERAL_URL =
  'https://wa.me/5511991760897?text=Ol%C3%A1%21%20Conheci%20o%20Departamento%20Leve%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20a%20plataforma.'

export const WHATSAPP_TESTE_URL =
  'https://wa.me/5511991760897?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20o%20Departamento%20Leve%20e%20entender%20como%20funciona%20o%20teste%20gratuito%20de%207%20dias.'

export const YOUTUBE_VIDEO_ID = 'reXqjKz9Yh8'

// Páginas legais só aparecem no rodapé quando as URLs oficiais forem configuradas.
export const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_URL || ''
export const TERMS_URL = process.env.NEXT_PUBLIC_TERMS_URL || ''

// Login da plataforma (hospedada à parte). Sem valor, o link "Entrar" não aparece.
export const LOGIN_URL = process.env.NEXT_PUBLIC_APP_LOGIN_URL || ''
