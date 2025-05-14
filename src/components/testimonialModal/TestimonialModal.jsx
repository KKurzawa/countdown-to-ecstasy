import './TestimonialModal.css'
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';

const TestimonialModal = ({ closeTestModal }) => {
    const testModalRef = useRef()

    const closeModal = (e) => {
        if (testModalRef.current === e.target) {
            closeTestModal()
        }
    }

    return (
        <article ref={testModalRef} onClick={closeModal} className="test-modal fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <section className="modal-info-container flex flex-col items-end gap-5">
                <button><IoMdClose onClick={closeTestModal} className='modal-x mx-10 text-4xl' /></button>
                <h2 className='form-modal-message mx-10 p-5 md:p-10 text-center text-4xl md:text-5xl'>Thank you for sharing your experience!</h2>
            </section>
        </article>
    )
}

export default TestimonialModal