import './globals.scss'
import type { Metadata } from 'next'
import Providers from '@/store/Providers'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'MINGO APP',
  description: 'ონლაინ ბილეთები',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
