import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import ActiveSectionContextProvider from '../context/active-section'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from './components/ThemeSwitch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Norana Portfolio',
  description: 'Norana is react and nextjs fullstack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-green-50 text-green-950 relative h-[5000px] pt-28 dark:bg-gray-900 dark:text-gray-50 dark:opacity-90`}>
      <div className='absolute -z-10 mt-12 bg-[#fbe2e3] top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68-75rem] dark:bg-[#946263]'></div>
      <div className='absolute -z-10 mt-12 bg-[#dbd7fb] top-[-1rem] left[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68-75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
      

      <ThemeContextProvider>
      <ActiveSectionContextProvider>
          <Header />
           
           <main className='flex justify-center items-center'>{children}</main>
           <Footer />

           <Toaster position="top-right"/>
           
           <ThemeSwitch />
      </ActiveSectionContextProvider>
      </ThemeContextProvider>
        
     
      </body>
    </html>
  )
}
