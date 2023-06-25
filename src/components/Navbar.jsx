"use client"
import Image from 'next/image';
import logo from '../app/favicon.ico'
import Link from 'next/link';
const Navbar = () => {

    const toggleNavbar = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    }
 

    return (
        <nav class="bg-gray-900 fixed w-full z-50 top-0 left-0 border-b  border-gray-600 ">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div>
                        <Link
                            href="./"
                            className="flex items-center"
                        >
                            <Image
                                src={logo} className="h-12 mr-3 rounded-full"
                                alt="fsu logo"
                                width={50}
                            />
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                FSU
                            </span>
                        </Link>
                    </div>
                    <div class="hidden md:flex items-center space-x-1 gap-8">
                        <Link href="/"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            About
                        </Link>
                        <Link
                            href="/notices"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Events
                        </Link>
                        <Link
                            href="/notices"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/notices"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Contact
                        </Link>
                    </div>
                    <div class="hidden md:flex items-center space-x-3 ">
                        <Link href="/ask">
                            <button
                                type="button"
                                className="text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                            >
                                Ask?
                            </button>
                        </Link>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button onClick={toggleNavbar} class="outline-none mobile-menu-button">
                            <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden mobile-menu">
                <ul class="">
                    <li
                        class="active">
                        <Link href="/"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/notices"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Notices
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/events"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/gallery"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/ask"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Ask?
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
