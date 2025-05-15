import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../../Utils/EmailValidator'
import ContactModal from '../contactModal/ContactModal'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [openContactModal, setOpenContactModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setModalMessage("You must enter your name, a valid email, a subject, and a message.")
            setOpenContactModal(true)
            console.log(openContactModal)
            return
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setModalMessage("Thank you for email!  We'll get back soon!")
                console.log('Email sent successfully!', response);
                setOpenContactModal(true)
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })

    }

    const closeContactModal = () => {
        setOpenContactModal(false)
    }

    return (
        <article id='contact' className="contact-main flex flex-col items-center mb-10">
            <h2 className="section-title w-full text-center py-5 text-3xl md:text-4xl lg:text-5xl">Contact</h2>
            <form onSubmit={handleSubmit} action="" className="email-form flex flex-col items-start pt-10 w-[80%] md:w-[60%] lg:w-[40%] text-base md:text-xl">
                <article className="flex flex-col gap-2 w-full">
                    <input
                        type="text"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='input px-3 py-1' />
                    <input
                        type="text"
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input px-3 py-1' />
                    <input
                        type="text"
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className='input px-3 py-1' />
                    <textarea
                        rows='5'
                        cols='10'
                        type="text"
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='input px-3 py-1' />
                </article>
                <button type='submit' className='btn my-3 px-3'>Submit</button>
            </form>
            {openContactModal && <ContactModal props={{ closeContactModal, modalMessage }} />}
        </article>
    )
}

export default Contact