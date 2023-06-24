import EventCard from '@/components/EventCard'
import Link from 'next/link'
import React from 'react'
import events from "../../../../public/json/events.json";

const Events = () => {
  return (
    <section className="text-gray-600 body-font mt-16">
      <div className="flex flex-col text-center w-full">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-5 font-semibold"
        >Upcoming Events</h1>
        <hr
          className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        />
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            events.map((event, index) => {
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
            )
          }
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
          >No more events.</span>
        </div>
      </div>
    </section >
  )
}

export default Events