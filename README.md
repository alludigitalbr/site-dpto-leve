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
| `NEXT_PUBLIC_GA4_ID`                              | Carrega o GA4 direto (gtag.js) após consentimento.                         |
| `NEXT_PUBLIC_META_PIXEL_ID`                       | Carrega o Meta Pixel após consentimento.                                   |
| `NEXT_PUBLIC_PRIVACY_URL` / `NEXT_PUBLIC_TERMS_URL` | Exibem os links de política de privacidade e termos de uso no rodapé.      |
| `NEXT_PUBLIC_APP_LOGIN_URL`                       | Exibe o link "Entrar" para clientes acessarem a plataforma.                |

Sem nenhum ID de rastreamento, nenhum script de terceiros é carregado e o aviso de cookies não aparece.

## Eventos de conversão

Todos vão para o `dataLayer` (e para GA4/Pixel, se carregados): `page_view`, `video_start`, `video_complete`, `cta_click`, `purchase_click`, `whatsapp_click`, `trial_request_click`.

`purchase_click` é apenas o clique que leva ao checkout da Kiwify, não uma venda. A compra concluída deve vir da integração da própria Kiwify. Os parâmetros `utm_*`, `gclid` e `fbclid` da visita são repassados aos links do checkout.

Links oficiais (checkout, WhatsApp, vídeo) ficam em `src/components/landing/links.ts`.
