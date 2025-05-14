import './Testimonial.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TestimonialErrorModal from '../testimonialErrorModal/TestimonialErrorModal'
import TestimonialModal from '../testimonialModal/TestimonialModal'

// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const apiBaseUrl = "http://localhost:3001"

const Testimonial = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        experience: '',
    })

    const [comments, setComments] = useState([{
        firstName: '',
        lastName: '',
        experience: ''
    }])

    const [openTestErrModal, setTestErrOpenModal] = useState(false)
    const [openTestModal, setOpenTestModal] = useState(false)

    function validateComment() {
        if (!input.firstName || !input.lastName || !input.experience) {
            setTestErrOpenModal(true)
        }
    }

    useEffect(() => {
        fetch(`${apiBaseUrl}/comments`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes))
        console.log(comments)
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        validateComment()
        const newComment = {
            firstName: input.firstName,
            lastName: input.lastName,
            experience: input.experience
        }
        if (input.firstName && input.lastName && input.experience) {
            setOpenTestModal(true)
            axios.post(`${apiBaseUrl}/create`, newComment).then(result => {
                console.log(result)
            }).catch(error => {
                console.error(error)
            })
        }
    }

    function closeModal() {
        setOpenTestModal(false)
        location.reload()
    }

    return (
        <article className='flex flex-col items-center'>
            <h2 className="section-title w-full text-center py-5 text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
            <section className='flex flex-col items-center gap-3'>
                {comments.map((item) => (
                    <article key={item._id} className='testimonial-container relative flex flex-col gap-2 px-10 md:px-32 lg:px-40 py-5 w-full'>
                        <p className='testimonial md:text-2xl lg:text-4xl'>{item.experience}</p>
                        <section className='testimonial-name flex gap-2 text-xs md:text-base italic'>
                            <h6 className=''>- {item.firstName}</h6>
                            <h6>{item.lastName}</h6>
                        </section>
                    </article>
                ))}
            </section>
            {openTestErrModal && <TestimonialErrorModal closeTestErrModal={() => setTestErrOpenModal(false)} />}
            {openTestModal && <TestimonialModal closeTestModal={() => closeModal()} />}
            <h2 className='section-title w-full py-5 text-center text-3xl md:text-4xl lg:text-5xl'>Tell Us About Your Experience</h2>
            <form onSubmit={handleSubmit} className='flex flex-col items-start pt-10 w-[80%] md:w-[60%] lg:w-[40%] mb-10 text-base md:text-xl'>
                <article className='flex flex-col gap-2 w-full'>
                    <input
                        name='firstName'
                        value={input.firstName}
                        type='text'
                        placeholder='Your First Name'
                        onChange={handleChange}
                        className='input px-3 py-1'
                    />
                    <input
                        name='lastName'
                        value={input.lastName}
                        type='text'
                        placeholder='Your Last Name'
                        onChange={handleChange}
                        className='input px-3 py-1'
                    />
                    <textarea
                        type='text'
                        rows='5'
                        cols='10'
                        placeholder='Your Experience'
                        name='experience'
                        value={input.experience}
                        onChange={handleChange}
                        className='input px-3 py-1'
                    />
                </article>
                <button type='submit' className='btn my-3 px-3'>Add Post</button>
            </form>
        </article>
    )
}

export default Testimonial