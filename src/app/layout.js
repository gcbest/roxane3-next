import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Practical Psychology Consultancy',
  description: 'Providing focused solutions to improve and enhance workers’ well-being performance, and productivity; as well as effective organisational functionality.',
  metadataBase: new URL('https://www.practicalpsychologyconsultancy.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
