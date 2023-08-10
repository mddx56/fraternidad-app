export const CalendarEvent = ({ event }) => {
    const { title } = event;
    return (
        <>
            <div>Event</div>
            <span>{title}</span>
        </>
    );
}