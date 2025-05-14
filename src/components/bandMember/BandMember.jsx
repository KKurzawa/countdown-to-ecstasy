import './BandMember.css'
import memberInfo from '../../Utils/BandMemberInfo'
import { useState } from 'react'
import MemberModal from '../memberModal/MemberModal'

const BandMember = () => {
    const [memberId, setMemberId] = useState('')
    const [openMemberModal, setOpenMemberModal] = useState(false)

    function handleMemberClick(id) {
        setMemberId(id)
        setOpenMemberModal(true)
    }

    return (
        <section className='flex flex-col gap-5'>

            {/* large */}
            <article className="band-member-border hidden lg:flex relative py-5">
                {memberInfo.map((member) => member.id < 3 && (
                    <article key={member.id} className='flex flex-col items-center justify-center gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-3'>
                            <h2 className="member-name md:text-3xl lg:text-4xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists md:text-xs lg:text-sm">{member.credits}</p>
                        <section className='flex gap-3 text-3xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>
            <article className="band-member hidden lg:flex relative py-5">
                {memberInfo.map((member) => member.id > 2 && (
                    <article key={member.id} className='flex flex-col items-center justify-center gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-3'>
                            <h2 className="member-name md:text-3xl lg:text-4xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists">{member.credits}</p>
                        <section className='flex gap-3 text-3xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>

            {/* medium */}
            <article className="band-member-border hidden md:flex lg:hidden relative py-5">
                {memberInfo.map((member) => member.id < 2 && (
                    <article key={member.id} className='flex flex-col items-center justify-center gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-3'>
                            <h2 className="member-name md:text-3xl lg:text-4xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists text-xs">{member.credits}</p>
                        <section className='flex gap-3 text-2xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>
            <article className="band-member-border hidden md:flex lg:hidden relative py-5">
                {memberInfo.map((member) => member.id > 1 && member.id < 4 && (
                    <article key={member.id} className='flex flex-col items-center justify-center gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-3'>
                            <h2 className="member-name md:text-3xl lg:text-4xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists text-xs">{member.credits}</p>
                        <section className='flex gap-3 text-2xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>
            <article className="band-member hidden md:flex lg:hidden relative py-5">
                {memberInfo.map((member) => member.id > 3 && (
                    <article key={member.id} className='flex flex-col items-center justify-center gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-3'>
                            <h2 className="member-name md:text-3xl lg:text-4xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists text-xs">{member.credits}</p>
                        <section className='flex gap-3 text-2xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>

            {/* small */}
            <article className="flex flex-col md:hidden gap-2">
                {memberInfo.map((member) => (
                    <article key={member.id} className='band-member-small flex flex-col items-center justify-center py-5 relative gap-1'>
                        <button onClick={() => handleMemberClick(member.id)} className='flex flex-col items-center gap-1'>
                            <h2 className="member-name text-2xl">{member.name}</h2>
                            <img src={member.pic} className='member-pic w-[80%]' />
                        </button>
                        <p className="artists relative text-xs">{member.credits}</p>
                        <section className='flex relative gap-3 text-2xl'>
                            <i className={member.websiteIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.websiteLink, '_blank')
                            }, 500)}>{member.websiteIcon}</button></i>
                            <i className={member.appleMusicIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.appleMusicLink, '_blank')
                            }, 500)}>{member.appleMusicIcon}</button></i>
                            <i className={member.spotifyIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.spotifyLink, '_blank')
                            }, 500)}>{member.spotifyIcon}</button></i>
                            <i className={member.facebookIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.facebookLink, '_blank')
                            }, 500)}>{member.facebookIcon}</button></i>
                            <i className={member.instagramIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.instagramLink, '_blank')
                            }, 500)}>{member.instagramIcon}</button></i>
                            <i className={member.soundCloudLink === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.soundCloudLink, '_blank')
                            }, 500)}>{member.soundCloundIcon}</button></i>
                            <i className={member.youtubeIcon === false ? 'hidden' : 'media-icon'}><button onClick={() => setTimeout(() => {
                                window.open(member.youtubeLink, '_blank')
                            }, 500)}>{member.youtubeIcon}</button></i>
                        </section>
                    </article>
                ))}
            </article>
            {openMemberModal && <MemberModal props={{ memberId, setOpenMemberModal }} />}
        </section>
    )
}

export default BandMember