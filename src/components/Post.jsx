import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import getEventStatus from '@/utils/getEventStatus'

const Post = (props) => {
    let statusObj = {}
    if (props.type === 'events') {
        props.arr.map((elem) => {
            if (elem.id === props.id) {
                statusObj = getEventStatus(elem.eventDate, elem.eventTime)
            }
        })

    }
    return (
        <div class="container mx-auto flex flex-wrap py-6 mt-16 max-w-6xl">
            <section class="w-full md:w-2/3 flex flex-col items-center px-3">
                {props.arr.map((elem) => {
                    if (elem.id === props.id) {
                        return (
                            <>
                                <article class="flex flex-col shadow my-4">
                                    {
                                        statusObj.status &&
                                        <span
                                            class="bg-red-100 text-red-800 text-base uppercase z-20 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 rounded-tl-none rounded-br-none rounded-tr-lg rounder-bl-lg absolute">
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
                                    <div class="bg-white flex flex-col justify-start p-6">
                                        {
                                            statusObj.status === "completed" ? "Happened" : "Happening"} On: {props.eventDate} {props.eventTime} {statusObj.daysLeft && `| ${statusObj.daysLeft} days Left`
                                        }
                                        <h2 class="text-3xl font-bold hover:text-gray-700 pb-4">{elem.title}</h2>
                                        <p class="text-sm pb-8">
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
            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5 uppercase">Recent {props.type}</p>
                    <div class="flex flex-wrap items-center justify-evenly gap-2">
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
                    <Link href="/notices"
                        class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        Know More
                    </Link>
                </div>

            </aside>

        </div>
    )
}

export default Post