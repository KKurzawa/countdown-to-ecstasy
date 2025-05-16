import './ShowsModal.css'
import { IoMdClose } from "react-icons/io"
import { useRef } from 'react'

const ShowsModal = ({ props: { content, setOpenShowsModal } }) => {
    const modalRef = useRef()

    function handleClick() {
        setOpenShowsModal(false)
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            handleClick()
        }
    }

    return (
        <article ref={modalRef} onClick={closeModal} className='shows-modal fixed inset-0 bg-opacity-10 backdrop-blur-md flex justify-center items-center'>
            <section className='modal-info-container flex flex-col items-end gap-5 w-[90%] h-fit'>
                <button onClick={handleClick}><IoMdClose className='modal-x text-4xl' /></button>
                <article className='shows-modal-message p-5 md:p-10 text-center'>
                    <h2 className='pb-5 text-3xl md:text-5xl'>{content}</h2>
                    <button onClick={handleClick} className='btn px-5 py-2 text-xl md:text-3xl'>Ok</button>
                </article>
            </section>
        </article>
    )
}

export default ShowsModal