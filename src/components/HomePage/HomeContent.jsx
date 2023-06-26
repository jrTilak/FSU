import React from 'react'
import Gallery from '../Gallery'
import Link from 'next/link'
import EventCard from '../EventCard'
import Card from '../Card'
import MissionAndVision from '../MissionAndVision'
import Contact from '../Contact'
import ComponentSection from './ComponentSection'
import { ButtonOrNot } from './ButtonOrNot'

const HomeContent = ({
  missions,
  notices,
  events,
  gallery
}) => {
  return (
    <>
      <ComponentSection title="Missions and Visions">
        <div
          id="news"
          className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4"></div>
          <MissionAndVision
            missions={missions}
          />
        </div>
      </ComponentSection>
      <ComponentSection title="Recent Notices and Posts">
        <div
          id="news"
          className="container px-5 py-6 mx-auto"
        >
          <div
            className="flex flex-wrap -m-4"
          >
            {notices.map((notice, index) => {
              if (index < 3) {
                return (
                  <Card
                    key={notice.id}
                    title={notice.title}
                    desc={notice.desc}
                    date={notice.date}
                    time={notice.time}
                    img={notice.img}
                    slug={notice.id}
                  />
                )
              }

            })}
          </div>
          <ButtonOrNot
            len={notices.length}
            btnText="More news and posts..."
            altText="No more posts"
          />
        </div>
      </ComponentSection>
      <ComponentSection title="Events">
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
          <ButtonOrNot
            len={events.length}
            btnText="Explore more events..."
            altText="No more events"
          />
        </div>
      </ComponentSection>
      <ComponentSection title="Gallery">
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
      </ComponentSection>
      <ComponentSection title="Contact Us">
        <div className="flex flex-wrap -m-4  justify-center">
          <Contact />
        </div>
      </ComponentSection>
    </>
  )
}

export default HomeContent