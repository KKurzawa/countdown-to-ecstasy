import './TestimonialModal.css'
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';

const TestimonialModal = ({ props: { closeModal, modalMessage } }) => {
    const testModalRef = useRef()

    function handleClick() {
        closeModal(false)
    }

    const closeModalTwo = (e) => {
        if (testModalRef.current === e.target) {
            handleClick()
        }
    }

    return (
        <article ref={testModalRef} onClick={closeModalTwo} className="test-modal fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <section className="modal-info-container flex flex-col items-end gap-5">
                <button><IoMdClose onClick={handleClick} className='modal-x mx-10 text-4xl' /></button>
                <h2 className='form-modal-message mx-10 p-5 md:p-10 text-center text-3xl md:text-5xl'>{modalMessage}</h2>
            </section>
        </article>
    )
}

export default TestimonialModal