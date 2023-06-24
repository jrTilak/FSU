import Image from "next/image";

const EventCard = ({ title, desc, img, date, time, eventDate, eventTime }) => {
    const getEventStatus = (date, time, event_date, event_time) => {
        // Convert date and time strings to Date objects
        const currentDatetime = new Date(`${date} ${time}`);
        const eventDatetime = new Date(`${event_date} ${event_time}`);

        // Check if the event has already happened
        if (currentDatetime > eventDatetime) {
            return {
                status: "completed",
                daysLeft: null
            };
        }

        // Calculate the number of days left until the event
        const timeDiff = eventDatetime.getTime() - currentDatetime.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

        // Determine the status based on the current date
        const today = new Date().setHours(0, 0, 0, 0);
        const eventDate = eventDatetime.setHours(0, 0, 0, 0);

        if (eventDate === today) {
            return {
                status: "today",
                daysLeft: null
            };
        }

        return {
            status: "upcoming",
            daysLeft: daysLeft
        };
    };
    const { status, daysLeft } = getEventStatus(date, time, eventDate, eventTime);
    return (
        <div className="p-4 md:w-1/3">
            <span
                className="bg-red-100 text-red-800 text-xs z-20 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 rounded-tl-none rounded-br-none rounded-tr-lg rounder-bl-lg absolute"
            >{status}</span>
            <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
                <div className="imageContainer relative lg:h-48 md:h-36 w-full object-cover object-center">
                <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img}
                    fill="cover"
                    alt={title}
                />
                </div>
                <div className="p-6">
                    <h2
                        className="tracking-widest text-xs title-font font-medium text-rose-600 mb-1 font-semibold"
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
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Know More
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
                        </a>
                        <span
                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            {date.slice(5)}
                        </span>
                        <span
                            className="text-gray-400 inline-flex items-center leading-none text-sm">
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventCard