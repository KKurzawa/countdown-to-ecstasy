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
            <section className='err-modal-info-container flex flex-col items-end flex-wrap gap-5'>
                <button><IoMdClose onClick={closeContactModal} className='modal-x mx-10 text-4xl' /></button>
                <article className='form-modal-message text-center mx-10 p-5 md:p-10'>
                    <h2 className='text-3xl md:text-5xl pb-5'>{modalMessage}</h2>
                    <button onClick={closeContactModal} className='btn px-5 py-2 text-xl md:text-3xl'>Ok</button>
                </article>
            </section>
        </article>
    )
}

export default ContactModal