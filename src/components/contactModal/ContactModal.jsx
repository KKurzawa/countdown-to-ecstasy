import './ContactModal.css'
import { useRef } from 'react'
import { IoMdClose } from "react-icons/io";

const ContactModal = ({ props: { closeContactModal, modalMessage } }) => {
    const contactModalRef = useRef()

    const closeModal = (e) => {
        if (contactModalRef.current === e.target) {
            closeContactModal(false)
        }
    }

    return (
        <article ref={contactModalRef} onClick={closeModal} className='error-modal fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <section className='err-modal-info-container flex flex-col items-end flex-wrap gap-5 w-[70%]'>
                <button><IoMdClose onClick={closeContactModal} className='modal-x text-4xl' /></button>
                <h2 className='form-modal-message p-10 text-3xl md:text-5xl text-center'>{modalMessage}</h2>
            </section>
        </article>
    )
}

export default ContactModal