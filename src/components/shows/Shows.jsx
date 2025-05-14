import './Shows.css'
import Show from '../show/Show'

const Shows = () => {
    return (
        <article id='shows' className="shows flex flex-col items-center h-full">
            <h2 className="section-title w-full text-center text-3xl md:text-4xl lg:text-5xl py-5">Shows</h2>
            <Show />
        </article>
    )
}

export default Shows