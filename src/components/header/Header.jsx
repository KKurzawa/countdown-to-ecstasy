import './Header.css'
import Navbar from '../navbar/Navbar'
import NavbarMobile from '../navbarMobile/NavbarMobile'

const Header = () => {
    return (
        <header id='top' className='header relative flex flex-col justify-center items-center md:gap-3 py-3'>
            <h1 className="title dark-bg-ts text-2xl md:text-6xl lg:text-7xl">Countdown To Ecstasy</h1>
            <h2 className="sub-title dark-bg-ts text-xl md:text-4xl lg:text-5xl">An Exploration Into Steely Dan</h2>
            <Navbar />
            <NavbarMobile />
        </header>
    )
}

export default Header
