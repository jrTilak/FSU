import Card from "@/components/Card";
import Contact from "@/components/Contact";
import EventCard from "@/components/EventCard";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MissionAndVision from "@/components/MissionAndVision";
import Link from "next/link";
import missions from "../../public/json/missions.json";
import events from "../../public/json/events.json";
import posts from "../../public/json/posts.json";
import gallery from "../../public/json/gallery.json";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1
            className="sm:text-3xl text-2xl title-font text-gray-900 mt-5 font-semibold "
          >Missions and Visions</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div
          id="news"
          className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4"></div>
          <MissionAndVision
            missions={missions}
          />
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1
            className="sm:text-3xl text-2xl title-font text-gray-900 mt-5 font-semibold"
          >Recent News and Posts</h1>
          <hr
            className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
          />
        </div>
        <div
          id="news"
          className="container px-5 py-6 mx-auto"
        >
          <div
            className="flex flex-wrap -m-4"
          >
            {posts.map((post, index) => {
              if (index < 3) {
                return (
                  <Card
                    key={index}
                    title={post.title}
                    desc={post.desc}
                    date={post.date}
                    time={post.time}
                    img={post.img}
                    slug={index}
                  />
                )
              }

            })}
          </div>
          {
            posts.length > 3
              ?
              <div className="flex items-center justify-center mt-4">
                <Link href="/events">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >More news and posts...</button>
                </Link>
              </div>
              :
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span
                  className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
                >No more posts.</span>
              </div>
          }
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1
            className="sm:text-3xl text-2xl title-font text-gray-900 mt-5 font-semibold"
          >Upcoming Events</h1>
          <hr
            className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
          />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              events.map((event, index) => {
                if (index < 3) {
                  return (
                    <EventCard
                      key={index}
                      title={event.title}
                      desc={event.desc}
                      date={event.date}
                      time={event.time}
                      img={event.img}
                      eventDate={event.eventDate}
                      eventTime={event.eventTime}
                      slug={index}
                    />
                  )
                }
              })
            }
          </div>
          {
            events.length > 3
              ?
              <div className="flex items-center justify-center mt-4">
                <Link href="/notices">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >Explore more events...</button>
                </Link>
              </div>
              :
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span
                  className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
                >No more events.</span>
              </div>
          }
        </div>
      </section >
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl title-font text-gray-900 mt-5 font-semibold">Gallery</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Gallery gallery={gallery} />

          </div>
          <div className="flex items-center justify-center mt-8">
            <Link href="/events">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >More photos...</button>
            </Link>
          </div>
        </div>
      </section >
      <section id="contact" className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl  title-font text-gray-900 mt-5 font-semibold">Contact Us</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4  justify-center">
            <Contact />
          </div>
        </div>
      </section >
    </>
  )
}
