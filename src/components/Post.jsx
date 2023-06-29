import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import getEventStatus from '@/utils/getEventStatus'

const Post = (props) => {
    let eventObj = {}
    let statusObj = {}
    if (props.type === 'events') {
        props.arr.map((elem) => {
            if (elem.id === props.id) {
                statusObj = getEventStatus(elem.eventDate, elem.eventTime)
                eventObj = elem
            }
        })
    }
    return (
        <div className="container mx-auto flex flex-wrap py-6 max-w-6xl">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                {props.arr.map((elem) => {
                    if (elem.id === props.id) {
                        return (
                            <>
                                <article key={elem.id} className="flex flex-col shadow my-4">
                                    {
                                        statusObj.status &&
                                        <span
                                            className="bg-red-100 text-red-800 text-base uppercase z-20 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 rounded-tl-none rounded-br-none rounded-tr-lg rounder-bl-lg absolute">
                                            {statusObj.status}
                                        </span>
                                    }
                                    <div className="imageContainer">
                                        <Image
                                            alt=''
                                            src={elem.img}
                                            className="rounded-lg"
                                            height={300}
                                            width={800} />
                                    </div>
                                    <div className="bg-white flex flex-col justify-start p-6">
                                        {
                                            statusObj.status &&
                                            <>
                                                {
                                                    statusObj.status === "completed" ? "Happened" : "Happening"
                                                }
                                                &nbsp;
                                                On:
                                                &nbsp;
                                                {eventObj.eventDate}
                                                &nbsp;&nbsp;
                                                {eventObj.eventTime}
                                                {
                                                    statusObj.daysLeft &&
                                                    <>
                                                        &nbsp;| {statusObj.daysLeft} days Left
                                                    </>
                                                }
                                            </>
                                        }
                                        <h2 className="text-3xl font-bold hover:text-gray-700 pb-4">{elem.title}</h2>
                                        <p className="text-sm pb-8">
                                            Published on {elem.date} | {elem.time}
                                        </p>
                                        <p>
                                            {elem.desc}
                                        </p>
                                    </div>
                                </article>
                            </>
                        )
                    }
                })}

            </section>

            {/* <!-- Sidebar Section --> */}
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5 uppercase">Recent {props.type}</p>
                    <div className="flex flex-wrap items-center justify-evenly gap-2">
                        {
                            props.arr.map((elem) => {
                                return (
                                    <div
                                        key={elem.id}
                                        className="imageContainer relative h-32 w-32 rounded-md">
                                        <Link href={`/${props.type}/${elem.id}`}>
                                            <Image
                                                className='absolute hover:opacity-75'
                                                alt=''
                                                fill="cover"
                                                src={elem.img}
                                            />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Link href={`/${props.type}`}
                        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        Know More
                    </Link>
                </div>

            </aside>

        </div>
    )
}

export default Post