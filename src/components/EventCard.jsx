import getEventStatus from "@/utils/getEventStatus";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ title, desc, img, date, time, eventDate, eventTime, slug }) => {
    const { status, daysLeft } = getEventStatus(eventDate, eventTime)
    return (
        <div className="p-4 md:w-1/3 relative">
            <span
                className="uppercase bg-red-100 text-red-800 text-xs z-20 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 rounded-tl-lg rounded-br-lg rounded-tr-none rounder-bl-none absolute"
            >{status}</span>
            <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-slate-100"
            >
                <Link
                    href={`/events/${slug}`}
                >
                    <div className="imageContainer relative lg:h-48 md:h-36 h-48 w-full object-cover object-center">
                        <Image
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={img}
                            fill="cover"
                            alt={title}
                        />
                    </div>
                    <div className="p-6">
                        <h2
                            className="tracking-widest text-xs title-font text-rose-600 mb-1 font-semibold uppercase"
                        >
                            {status === "completed" ? "Happened" : "Happening"} On: {eventDate.slice(5)} {eventTime} {daysLeft && `| ${daysLeft} days Left`}
                        </h2>
                        <h1
                            className="title-font text-lg font-medium text-gray-900 mb-3"
                        >{title}</h1>
                        <p className="leading-relaxed mb-3">
                            {desc.length <= 150 ? desc : `${desc.slice(0, 150)}...`}
                        </p>
                        <div className="flex items-center flex-wrap ">
                            <span
                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                                Know More
                                <svg
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </span>
                            <span
                                className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                {date}
                            </span>
                            <span
                                className="text-gray-400 inline-flex items-center leading-none text-sm">
                                {time}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default EventCard