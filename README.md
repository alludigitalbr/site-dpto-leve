# Site Departamento Leve

Landing page de vendas do Departamento Leve (https://departamentoleve.com.br), em Next.js.

## Desenvolvimento

```bash
npm install
npm run dev
```

`npm run lint` e `npm run build` validam o projeto.

## Publicação (Vercel)

Importe o repositório na Vercel (framework detectado automaticamente) e aponte o domínio `departamentoleve.com.br`.

Variáveis de ambiente opcionais (ver `.env.example`):

| Variável                                          | Efeito                                                                     |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GTM_ID`                              | Carrega o Google Tag Manager após consentimento.                           |
| `NEXT_PUBLIC_GA4_ID`                              | Tag do Google (gtag.js) carregada após consentimento. Padrão: `G-5VCMWLZHWJ`. |
| `NEXT_PUBLIC_GOOGLE_ADS_ID`                       | Carrega a tag do Google Ads (AW-…) após consentimento, em todas as páginas. |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`         | Rótulo da conversão de compra, disparada uma vez por sessão na /obrigado.   |
| `NEXT_PUBLIC_META_PIXEL_ID`                       | Carrega o Meta Pixel após consentimento.                                   |
| `NEXT_PUBLIC_PRIVACY_URL` / `NEXT_PUBLIC_TERMS_URL` | Exibem os links de política de privacidade e termos de uso no rodapé.      |
| `NEXT_PUBLIC_APP_LOGIN_URL`                       | Exibe o link "Entrar" para clientes acessarem a plataforma.                |

Nenhum script de terceiros carrega antes de o visitante aceitar os cookies.

## Eventos de conversão

Todos vão para o `dataLayer` (e para GA4/Google Ads/Pixel, se carregados): `page_view`, `video_start`, `video_complete`, `cta_click`, `purchase_click`, `whatsapp_click`, `trial_request_click`, `purchase_thank_you_view`.

`purchase_click` é apenas o clique que leva ao checkout da Kiwify, não uma venda. A compra concluída é medida na página `/obrigado` (fora do Google, `noindex`), que deve estar configurada na Kiwify como página de obrigado do produto: ela dispara `purchase_thank_you_view` e, com `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`, a conversão do Google Ads. Com GTM, use esse evento como acionador da tag de conversão. Os parâmetros `utm_*`, `gclid` e `fbclid` da visita são repassados aos links do checkout.

Links oficiais (checkout, WhatsApp, vídeo) ficam em `src/components/landing/links.ts`.
