import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from './store-provider'
import { Sidebar } from '@/app/components/sidebar/sidebar'
import { Header } from '@/app/components/header/header'
import { MainTag } from './components/main-tag/main-tag'
import { SignInModal } from './components/sign-in-modal/sign-in-modal'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['200', '300'] })

export const metadata: Metadata = {
  title: 'ANVERSO',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} font-extralight antialiased`}>
        <StoreProvider>
          <Sidebar />
          <SignInModal />
          <Header />
          <MainTag>{children}</MainTag>
        </StoreProvider>
      </body>
    </html>
  )
}
