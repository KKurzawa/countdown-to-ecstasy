import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer relative flex flex-col items-center md:gap-2 py-2 md:py-5">
            <button className='top-btn mb-1 md:mb-0 text-base md:text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
            <article className="footer-icons flex gap-5 text-3xl md:text-5xl">
                <i><button className='media-icon' onClick={() => setTimeout(() => {
                    window.open('http://facebook.com', '_blank')
                }, 500)}><FaFacebookSquare /></button></i>
                <i><button className='media-icon' onClick={() => setTimeout(() => {
                    window.open('http://instagram.com', '_blank')
                }, 500)}><FaInstagramSquare /></button></i>
            </article>
            <a href="mailto:kurzawa1@yahoo.com" className='email text-base md:text-2xl'>Email Us</a>
            <a href="tel:+12485682806" className='phone text-base md:text-2xl'>Call Us</a>
            <button onClick={() => setTimeout(() => {
                window.open('https://www.kriskurzawadev.com/', '_blank')
            }, 500)} className='dev-link text-base md:text-2xl'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer