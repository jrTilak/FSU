import Card from "@/components/Card";
import Contact from "@/components/Contact";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MissionAndVision from "@/components/MissionAndVision";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import missions from "../assets/missions.json";

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <Hero />
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold">Missions and Visions</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div id="news" className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4"></div>
          <MissionAndVision missions={missions} />
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold">Recent News and Posts</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div id="news" className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Card
              title="Thrilled to Announce"
              desc="Thrilled to announce for the upcoming web design competition. The support have been instrumental in bringing  creative design and visions to reveal. Do participate to showcase your  extraordinary web designs that will redefine digital experiences."
              date="2080/03/07"
              time="08:00 PM"
              img="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/355629282_158882263855424_793956214538350733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7mzG_iIQBN8AX-G4eTq&_nc_ht=scontent.fbir1-1.fna&oh=00_AfAXYr42NTXQvm2rfkTY1l0wAYG4-DDxmoKud9GAzLakxg&oe=6498DE19"
            />
            <Card
              title="विद्यार्थीहरुको गुनासोलाई सम्बोधन "
              desc="विद्यार्थीहरुको गुनासोलाई सम्बोधन गर्दै  स्वतन्त्र विध्यार्थी युनियन र निमित्त क्याम्पस प्रमुखद्वारा सम्पुर्ण विभागका ल्यावहरु निरीक्षण गर्दा केही ल्याबहरुमा भएका उपकरणहरु अव्यवस्थित तरिकाले राखिएको र ल्याबको सरसफाईमा ध्यान नदिएको पाइएको छ । विध्यार्थीहरुलाई ल्याव गर्न असहज वातावरण भएकोले उक्त ल्याबमा भएका उपकरणहरु यो हप्ता भरी  व्यवस्थापन गरि सरसफाइमा ध्यान दिन सम्पुर्ण विभागहरुमा  निर्देशन गरिएको छ । ल्याबमा अपुग उपकरणहरुलाई  पुर्ती गर्नकालागि आवश्यक कदम चालिएको  जानकारी गराउदछौ ।"
              date="2080/03/07"
              time="08:00 PM"
              img="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/347584169_157215220688795_5584894170204288875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Uv7EQb4kjcAAX-it5iN&_nc_ht=scontent.fbir1-1.fna&oh=00_AfD0WW1gKdvd0tFu2E9W7k038yYpEewXLPXDUA1IlaJnSg&oe=649A05FE"
            />
            <Card
              title="परिवर्तनलाई अँगाल्दै"
              desc="परिवर्तनलाई अँगाल्दै , गल्रतीलाई आत्मसात गर्दै  शंकालाई तोडेर स्व.वि.यु. ले पूर्ण हृदयले पछ्याउने निर्णय गरेको छ |"
              date="2080/03/07"
              time="08:00 PM"
              img="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/347562461_157946003949050_4212347091184198400_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=1giQHW502nYAX-8SJs2&_nc_ht=scontent.fbir1-1.fna&oh=00_AfDH3Fukp5GxDTgJyJ-w2o6FQZSB36SpEy-L8_9Itu5dAQ&oe=649A1C4A"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <Link href="/notices">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More news and posts...</button>
            </Link>
          </div>
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold">Upcoming Events</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <EventCard
              title="Thrilled to Announce"
              desc="Thrilled to announce for the upcoming web design competition. The support have been instrumental in bringing  creative design and visions to reveal. Do participate to showcase your  extraordinary web designs that will redefine digital experiences."
              date="2080/03/07"
              time="08:00 PM"
              img="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/355629282_158882263855424_793956214538350733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7mzG_iIQBN8AX-G4eTq&_nc_ht=scontent.fbir1-1.fna&oh=00_AfAXYr42NTXQvm2rfkTY1l0wAYG4-DDxmoKud9GAzLakxg&oe=6498DE19"
              eventDate="2080/03/07"
              eventTime="08:00 PM"
              daysLeft="10"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <Link href="/notices">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Events...</button>
            </Link>
          </div>
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold">Gallery</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Gallery />
          </div>
        </div>
      </section >
      <section id="contact" className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold">Contact Us</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4  justify-center">
            <Contact />
          </div>
        </div>
      </section >
      <Footer />
      <script src="https://kit.fontawesome.com/910ed0a25b.js" crossorigin="anonymous" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
    </>
  )
}
