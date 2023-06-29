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
          <link
            rel="shortcut icon"
            href="./favicon.ico"
            type="image/x-icon"
          />
          <link
            href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
            rel='stylesheet'
          />
          <meta property="og:type" content="Website of FSU ERC" />
          <meta
            property="og:title"
            content="FSU - Free Student Union IOE ERC"
          />
          <meta
            property="og:description"
            content="The Free Student Union (FSU) is a prominent organization dedicated to advocating for the rights and welfare of students at IOE Purwanchal Campus Dharan. Established with the vision of ensuring a free and inclusive educational environment, we operate as an independent body, separate from political affiliations, aiming to represent the interests of students within the campus. We play a vital role in addressing issues related to education, student rights, and social justice. We actively engage in promoting academic freedom, fostering student empowerment, and safeguarding democratic values within IOE Purwanchal Campus Dharan."
          />
          <meta property="og:image" content={'../../public/images/allMembers.jpg'} />
        </head>
        <body
          className={inter.className}>
          <Navbar />
          <div className='mt-[3.6rem]'>
            <Alert />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </GlobalContext>
  )
}
