import './ContactErrorModal.css'
import { useRef } from 'react'
import { IoMdClose } from "react-icons/io";

const ContactErrorModal = ({ closeContactModal }) => {
    const contactErrModalRef = useRef()

    const closeModal = (e) => {
        if (contactErrModalRef.current === e.target) {
            closeContactModal()
        }
    }

    return (
        <article ref={contactErrModalRef} onClick={closeModal} className='testimonial-error-modal fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <section className='err-modal-info-container flex flex-col items-end flex-wrap gap-5 w-[70%]'>
                <button><IoMdClose onClick={closeContactModal} className='modal-x text-4xl' /></button>
                <h2 className='form-modal-message p-5 md:p-10 text-5xl text-center'>You must enter your name, a valid email, a subject, and a message.</h2>
            </section>
        </article>
    )
}

export default ContactErrorModal