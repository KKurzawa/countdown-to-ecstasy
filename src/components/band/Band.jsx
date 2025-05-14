import './Band.css'
import BandMember from '../bandMember/BandMember'

const Band = () => {
    return (
        <article id='band' className='band flex flex-col items-center h-full'>
            <h2 id='band-title' className="section-title w-full py-5 text-3xl text-center md:text-4xl lg:text-5xl">Band</h2>
            <BandMember />
        </article>
    )
}

export default Band