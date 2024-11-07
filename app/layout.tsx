import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'

import './globals.css'
import { Providers } from './providers'
import ThemeSwitcher from './components/ThemeSwitcher'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Link from 'next/link'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '500', '700', '900'], variable: '--font-roboto' })
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '500', '700', '900'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Gopalakrishnan (gkcodez)',
  description: 'Portfolio website by Gopalakrishnan (gkcodez)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <div className="absolute top-5 right-5">
            <ThemeSwitcher />
          </div>
          <div className="flex min-h-screen flex-col items-center justify-start py-10">
            <h1 className="text-3xl md:text-5xl font-bold p-2">Gopalakrishnan</h1>
            <h3 className="text-lg text-gray-500">Web Developer & Bug Bounty Hunter</h3>
            <div className="social flex justify-center align-middle mt-3">
              <a href="https://www.github.com/gkcodez" target="_blank"><IoLogoGithub className="text-6xl p-2" /></a>
              <a href="https://www.linkedin.com/in/gkcodez" target="_blank"><IoLogoLinkedin className="text-sky-700 text-6xl p-2" /></a>
              <a href="mailto:gopalakrishnan.work@gmail.com" target="_blank"><IoMail className="text-amber-700 text-6xl p-2" /></a>
            </div>
            <nav className="my-5 flex items-center justify-center w-full">
              <Link href="project" className="text-xl px-2 mr-2 border-r-2 border-gray-200">Projects</Link>
              <Link href="about" className="text-xl px-2 mr-2">About</Link>
            </nav>
            <div className="px-5">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
