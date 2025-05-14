import './MemberModal.css'
import memberInfo from '../../Utils/BandMemberInfo'
import { IoMdClose } from "react-icons/io"
import { useRef } from 'react'

const MemberModal = ({ props: { memberId, setOpenMemberModal } }) => {
    const modalRef = useRef()

    function handleClick() {
        setOpenMemberModal(false)
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            handleClick()
        }
    }

    const id = memberId === 0 ? 'michael' :
        memberId === 1 ? 'kris' :
            memberId === 2 ? 'laura' :
                memberId === 3 ? 'dale' :
                    memberId === 4 ? 'dave' :
                        'adam'

    console.log(id)

    return (
        <article ref={modalRef} onClick={closeModal} className='member-modal fixed inset-0 bg-opacity-10 backdrop-blur-md flex justify-center items-center'>
            <section className='modal-info-container flex flex-col items-end gap-5 w-[90%] h-fit'>
                <button onClick={handleClick}><IoMdClose className='modal-x text-4xl' /></button>
                <article className='relative w-full z-50 h-full'>
                    <section id={id} className='member-modal-message flex flex-col gap-2 relative p-10 w-full h-full'>
                        <h2 className='text-3xl font-bold md:text-5xl'>{memberInfo[memberId].name}</h2>
                        <h2 className='text-lg md:text-4xl'>{memberInfo[memberId].bio}</h2>
                        <section className='flex relative gap-3 text-2xl'>
                            <i className={memberInfo[memberId].websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].websiteLink, '_blank')
                            }, 500)}>{memberInfo[memberId].websiteIcon}</button></i>
                            <i className={memberInfo[memberId].appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].appleMusicLink, '_blank')
                            }, 500)}>{memberInfo[memberId].appleMusicIcon}</button></i>
                            <i className={memberInfo[memberId].spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].spotifyLink, '_blank')
                            }, 500)}>{memberInfo[memberId].spotifyIcon}</button></i>
                            <i className={memberInfo[memberId].facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].facebookLink, '_blank')
                            }, 500)}>{memberInfo[memberId].facebookIcon}</button></i>
                            <i className={memberInfo[memberId].instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].instagramLink, '_blank')
                            }, 500)}>{memberInfo[memberId].instagramIcon}</button></i>
                            <i className={memberInfo[memberId].soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].soundCloudLink, '_blank')
                            }, 500)}>{memberInfo[memberId].soundCloundIcon}</button></i>
                            <i className={memberInfo[memberId].youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(memberInfo[memberId].youtubeLink, '_blank')
                            }, 500)}>{memberInfo[memberId].youtubeIcon}</button></i>
                        </section>
                    </section>
                </article>
            </section>

        </article>
    )
}

export default MemberModal