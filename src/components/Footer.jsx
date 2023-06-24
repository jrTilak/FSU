import Image from "next/image"
import logo from '../../public/images/logo.png'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image
                        src={logo} className="h-12 mr-3 rounded-full"
                        alt="fsu logo"
                        width={50}
                    />
                    <span className="ml-3 text-xl">FSU</span>
                </span>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Created by-
                    <span className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@jrTilak @anurag @utsab</span>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link href="https://www.facebook.com/fsu.ioeerc" className="text-gray-500 pr-2">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </Link>
                    <Link href="mailto:fsu.erc@ioepc.edu.np" className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                            <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                        </svg>
                    </Link>

                </span>
            </div>
        </footer>
    )
}
export default Footer