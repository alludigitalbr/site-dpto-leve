import { ImageResponse } from 'next/og'

export const alt = 'Departamento Leve — inteligência artificial para licitações públicas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#10233a',
        color: '#F0F4F8',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 72,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            border: '3px solid #f7822a',
            color: '#f7822a',
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          DL
        </div>
        <div style={{ fontSize: 34, fontWeight: 800 }}>Departamento Leve</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Um departamento inteiro de licitações dentro da sua empresa.
        </div>
        <div style={{ fontSize: 30, color: '#7E97B0', maxWidth: 960 }}>
          Inteligência artificial • Gestão de licitações • Método LEVE
        </div>
      </div>
      <div style={{ display: 'flex', height: 8, width: 160, borderRadius: 4, background: '#f7822a' }} />
    </div>,
    { ...size }
  )
}
