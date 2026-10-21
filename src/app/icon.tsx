import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#10233a',
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        border: '1.5px solid #f7822a',
      }}
    >
      <span
        style={{
          color: '#f7822a',
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
