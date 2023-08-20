// import Navbar from '@/components/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smart-Ed-Forge',
  description: 'A New Age Learning Platform',
}

export default function RootLayout({ children } : {
  children : React.ReactNode
}) {
  return (
    <ClerkProvider >
      <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body className={`${inter.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
