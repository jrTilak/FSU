import Card from '@/components/Card'
import React from 'react'
import notices from "../../../../public/json/notices.json"

const Notices = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full">
          <h1
            className="sm:text-3xl text-2xl title-font text-gray-900 mt-5 font-semibold"
          >
            Recent News and Posts
          </h1>
          <hr
            className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 md:mb-8  dark:bg-gray-700"
          />
        </div>
        <div
          id="news"
          className="container px-5 py-6 mx-auto"
        >
          <div
            className="flex flex-wrap -m-4"
          >
            {notices.map((notice) => {
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
            )}
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span
              className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
            >
              No more posts.
            </span>
          </div>
        </div>
      </section >
    </>
  )
}

export default Notices