import { Footer, Header } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test title',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-12'>
        
        <Header/>
          {children}
        <Footer />

      </body>
    </html>
  )
}
