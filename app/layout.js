import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FSU - Free Student Union IOE ERC Dharan',
  description: 'FSU - Free Student Union IOE ERC Dharan',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
