import './Show.css'
import showInfo from '../../Utils/ShowInfo'

const Show = () => {
    function notYetAvailable() {
        setTimeout(() =>
            alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
            , 500)
    }

    function noCover() {
        setTimeout(() =>
            alert("This is a free show!")
            , 500)
    }
    return (
        <article className=''>
            {showInfo.map((show) => (
                <article key={show.date} className="show-container relative flex flex-col items-center py-5 md:gap-1 md:text-3xl lg:text-4xl">
                    <section className="date-time flex gap-3">
                        <h2 className="date">{show.date}</h2>
                        <h2 className="time">{show.time}</h2>
                    </section>
                    <button onClick={() => setTimeout(() =>
                        window.open(show.venueLink, 'blank'), 500
                    )} className='venue'>{show.venue}</button>
                    <button onClick={() => setTimeout(() =>
                        window.open(show.cityLink, '_blank'), 500
                    )} className='city'>{show.city}</button>
                    <article className="ticket-container">
                        {show.ticketLink === 1 ? (
                            <button onClick={notYetAvailable} className='ticket-link'>Get Tickets</button>
                        ) :
                            show.ticketLink === 2 ? (
                                <button onClick={noCover} className='ticket-link'>Get Tickets</button>
                            ) :
                                (
                                    <button onClick={() => setTimeout(() =>
                                        window.open(show.ticketLink, '_blank'), 500
                                    )} className='ticket-link'>Get Tickets</button>
                                )
                        }
                    </article>
                </article>
            ))}
        </article>
    )
}

export default Show