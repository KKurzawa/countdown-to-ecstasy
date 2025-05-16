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
                <article className='form-modal-message text-center mx-10 p-5 md:p-10'>
                    <h2 className='text-3xl md:text-5xl pb-5'>{modalMessage}</h2>
                    <button onClick={handleClick} className='btn px-5 py-2 text-xl md:text-3xl'>Ok</button>
                </article>

            </section>
        </article>
    )
}

export default TestimonialModal