import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import ParticleJS from '../ParticleJS';
import profile_picture from '../../assets/images/profile_picture.png'


const Contact = () => {
    const contactArray = 'CONTACT ME'.split('');
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const ourSetTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(ourSetTimeout)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_8huif3k',
                'template_w6notlp',
                refForm.current,
                'oBZpW8_gp7gNZ5jBF'
            )
            .then(
                () => {
                    alert('Message Sent!')
                },
                () => {
                    alert("Failed to send message.")
                }
            )
    }

    return (
        <>
            <ParticleJS />
            <div className='contact-page'>

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={15} />
                    </h1>
                    <p className='contact-me-bio'>
                        I am a software developer with a broad range of technical skills, including proficiency in React JS, Ruby on Rails, HTML, CSS and experience working with APIs. My passion for coding and problem-solving drive me to constantly improve my skills and stay up to date with the latest technology trends. If you would like to contact me, please use the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>

                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>

                            </ul>
                        </form>

                    </div>
                    <form />
                </div>
            </div>
            <div className='profile-picture-cont'>
                <img className='profile-picture' src={profile_picture} alt='profile_picture' />
            </div>
        </>
    )
}

export default Contact;
