import Card from "@/components/Card";
import Contact from "@/components/Contact";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <Hero />
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5">News and Notices</h1>
        </div>
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      </section >
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5">Upcoming Events</h1>
        </div>
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-wrap -m-4">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      </section >
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5">Gallery</h1>
        </div>
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Gallery />
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      </section >
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5">Contact Us</h1>
        </div>
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Contact/>
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      </section >
      <Footer/>

      <script src="https://use.fontawesome.com/03f8a0ebd4.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
    </>
  )
}
