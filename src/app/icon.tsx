import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#0D1B2A',
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        border: '1.5px solid #F97316',
      }}
    >
      <span
        style={{
          color: '#F97316',
          fontWeight: 900,
          fontSize: 13,
          letterSpacing: -0.5,
          fontFamily: 'sans-serif',
        }}
      >
        DL
      </span>
    </div>,
    { ...size }
  )
}
