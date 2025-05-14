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
                <h2 className='shows-modal-message p-5 md:p-10 text-4xl md:text-5xl text-center'>{content}</h2>
            </section>
        </article>
    )
}

export default ShowsModal