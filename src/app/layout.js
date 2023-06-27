import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Alert from '@/components/Alert'
import GlobalContext from './GlobalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FSU - Free Student Union IOE ERC',
  description: 'FSU - Free Student Union IOE ERC',
}

export default function RootLayout({ children }) {
  return (
    <GlobalContext>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </head>
        <body className={inter.className}>
          <Navbar />
          <Alert />
          {children}
          <Footer />
        </body>
      </html>
    </GlobalContext>
  )
}
