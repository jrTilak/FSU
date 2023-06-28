const getEventStatus = (event_date, event_time) => {
    // Convert date and time strings to Date objects
    const currentDatetime = new Date();
    const eventDatetime = new Date(`${event_date} ${event_time}`);

    // Calculate the number of days left until the event
    const timeDiff = eventDatetime.getTime() - currentDatetime.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(daysLeft);

    if (daysLeft === 0) {
        return {
            status: "today",
            daysLeft: null
        };
    }
    else if (currentDatetime > eventDatetime) {
        return {
            status: "completed",
            daysLeft: null
        };
    }

    return {
        status: "upcoming",
        daysLeft: daysLeft
    };
};

export default getEventStatus;