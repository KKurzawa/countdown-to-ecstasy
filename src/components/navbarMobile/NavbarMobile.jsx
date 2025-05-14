import './NavbarMobile.css'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

const NavbarMobile = () => {
    const [isOpen, setOpen] = useState(false)

    function navigateToShows() {
        setTimeout(() => {
            setOpen(false)
            const element = document.getElementById('shows')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToBand() {
        setTimeout(() => {
            setOpen(false)
            const element = document.getElementById('band')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToTestimonials() {
        setTimeout(() => {
            setOpen(false)
            const element = document.getElementById('testimonials')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToContact() {
        setTimeout(() => {
            setOpen(false)
            const element = document.getElementById('contact')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    return (
        <nav className='mobile-nav md:hidden'>
            <i className='hamburger absolute right-0 top-1'>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={20}
                    direction="right"
                    duration={0.5}
                    distance="lg"
                    easing="linear"
                    rounded
                />
            </i>
            <AnimatePresence>
                {isOpen &&
                    <motion.nav
                        transition={{ duration: .5, type: 'spring', stiffness: 50 }}
                        initial={{ top: '-15rem', left: 0, opacity: 0 }}
                        animate={{ top: '4.35rem', opacity: 1 }}
                        exit={{ top: '-15rem', left: 0, opacity: 0 }}
                        className="nav-mobile-dropdown absolute w-full">
                        <ul className="mobile-nav-links flex-col gap-3 w-full p-5 text-lg">
                            <motion.li
                                initial={{ left: '200%', opacity: 0 }}
                                animate={{ left: '0%', opacity: 1 }}
                                exit={{ left: '200%', opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: .5,
                                    delay: .5
                                }}
                                className='mobile-nav-link relative pl-5 px-2'>
                                <button className='flex w-full' onClick={navigateToBand}>Band</button>
                            </motion.li>
                            <motion.li
                                initial={{ left: '200%', opacity: 0 }}
                                animate={{ left: '0%', opacity: 1 }}
                                exit={{ left: '200%', opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: .5,
                                    delay: .7
                                }}
                                className='mobile-nav-link relative pl-5 px-2'>
                                <button className='flex w-full' onClick={navigateToShows}>Shows</button>
                            </motion.li>
                            <motion.li
                                initial={{ left: '200%', opacity: 0 }}
                                animate={{ left: '0%', opacity: 1 }}
                                exit={{ left: '200%', opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: .5,
                                    delay: .9
                                }}
                                className='mobile-nav-link relative pl-5 px-2'>
                                <button className='flex w-full' onClick={navigateToTestimonials}>Testimonials</button>
                            </motion.li>
                            <motion.li
                                initial={{ left: '200%', opacity: 0 }}
                                animate={{ left: '0%', opacity: 1 }}
                                exit={{ left: '200%', opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: .5,
                                    delay: 1
                                }}
                                className='mobile-nav-link relative pl-5 px-2'>
                                <button className='flex w-full' onClick={navigateToContact}>Contact</button>
                            </motion.li>
                        </ul>
                    </motion.nav>
                }
            </AnimatePresence>
        </nav>
    )
}

export default NavbarMobile