import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D9488',
          borderRadius: '6px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Top-left finder */}
          <rect x="1" y="1" width="7" height="7" rx="1" fill="white"/>
          <rect x="2.5" y="2.5" width="4" height="4" fill="#0D9488"/>
          <rect x="3.5" y="3.5" width="2" height="2" fill="white"/>
          
          {/* Top-right finder */}
          <rect x="16" y="1" width="7" height="7" rx="1" fill="white"/>
          <rect x="17.5" y="2.5" width="4" height="4" fill="#0D9488"/>
          <rect x="18.5" y="3.5" width="2" height="2" fill="white"/>
          
          {/* Bottom-left finder */}
          <rect x="1" y="16" width="7" height="7" rx="1" fill="white"/>
          <rect x="2.5" y="17.5" width="4" height="4" fill="#0D9488"/>
          <rect x="3.5" y="18.5" width="2" height="2" fill="white"/>
          
          {/* Data dots */}
          <rect x="10" y="3" width="2" height="2" fill="white"/>
          <rect x="10" y="7" width="2" height="2" fill="white"/>
          <rect x="3" y="10" width="2" height="2" fill="white"/>
          <rect x="7" y="10" width="2" height="2" fill="white"/>
          <rect x="10" y="10" width="2" height="2" fill="white"/>
          <rect x="14" y="10" width="2" height="2" fill="white"/>
          <rect x="18" y="10" width="2" height="2" fill="white"/>
          <rect x="10" y="14" width="2" height="2" fill="white"/>
          <rect x="14" y="14" width="2" height="2" fill="white"/>
          <rect x="10" y="18" width="2" height="2" fill="white"/>
          <rect x="14" y="18" width="2" height="2" fill="white"/>
          <rect x="18" y="18" width="2" height="2" fill="white"/>
          <rect x="18" y="14" width="2" height="2" fill="white"/>
        </svg>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}
