import Head from 'next/head'
import './globals.css' 
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FSU - Free Student Union IOE ERC Dharan',
  description: 'FSU - Free Student Union IOE ERC Dharan',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body className={`${inter.className} app`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
      </body>
    </>
  )
}
