import './Landing.css'


const Landing = () => {
    return (
        <article className='landing w-screen h-screen'>
            <article className='landing-content flex flex-col justify-center items-center w-full h-full text-center gap-10'>
                <section className="landing-title flex gap-2 md:gap-5 text-2xl md:text-5xl lg:text-8xl">
                    <h2 className="countdown">Countdown</h2>
                    <h2 className="to">To</h2>
                    <h2 className="ecstasy">Ecstasy</h2>
                </section>
                <article className='circle flex justify-center items-center w-[22rem] h-[22rem] lg:w-[30rem] lg:h-[30rem] rounded-full text-[12rem] lg:text-[18rem]'>
                    <h2 className="c relative bottom-[1.85rem] left-[3rem] lg:bottom-[3.5rem] lg:left-[5rem]">C</h2>
                    <h2 className="e relative top-[2rem] right-[3rem] lg:top-[2.25rem] lg:right-[5rem]">E</h2>
                </article>
                <section className="landing-subtitle flex gap-2 md:gap-5 text-xl md:text-4xl lg:text-7xl">
                    <h2 className="an">An</h2>
                    <h2 className="exploration">Exploration</h2>
                    <h2 className="into">Into</h2>
                    <h2 className="steely">Steely</h2>
                    <h2 className="dan">Dan</h2>
                </section>
            </article>
        </article>
    )
}

export default Landing