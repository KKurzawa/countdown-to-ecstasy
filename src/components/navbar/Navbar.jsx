import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar hidden md:flex gap-10 lg:gap-20 md:text-3xl lg:text-4xl'>
            <button className='nav-btn' onClick={() => setTimeout(() => {
                const element = document.querySelector('#band');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>Band</button>
            <button className='nav-btn' onClick={() => setTimeout(() => {
                const element = document.querySelector('#shows');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>Shows</button>
            <button className='nav-btn' onClick={() => setTimeout(() => {
                const element = document.querySelector('#testimonials');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>Testimonials</button>
            <button className='nav-btn' onClick={() => setTimeout(() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>Contact</button>
        </nav>
    )
}

export default Navbar