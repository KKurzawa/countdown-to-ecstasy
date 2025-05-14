import './TestimonialErrorModal.css'
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';

const TestimonialErrorModal = ({ closeTestErrModal }) => {
    const testErrModalRef = useRef()

    const closeModal = (e) => {
        if (testErrModalRef.current === e.target) {
            closeTestErrModal()
        }
    }

    return (
        <article ref={testErrModalRef} onClick={closeModal} className='testimonial-error-modal fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <section className='err-modal-info-container flex relative flex-col items-end flex-wrap gap-5 w-[70%]'>
                <button><IoMdClose onClick={closeTestErrModal} className='modal-x text-4xl' /></button>
                <h2 className='form-modal-message p-5 md:p-10 text-4xl md:text-5xl text-center'>You must enter your first name, your last name, and your experience to submit.</h2>
            </section>
        </article>
    )
}

export default TestimonialErrorModal