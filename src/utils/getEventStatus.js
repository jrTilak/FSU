const getEventStatus = (event_date, event_time) => {
    // Convert date and time strings to Date objects
    const currentDatetime = new Date();
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

export default getEventStatus;