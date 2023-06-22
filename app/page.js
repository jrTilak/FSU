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
      <script src="https://use.fontawesome.com/03f8a0ebd4.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
    </>
  )
}
