import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Sidebar from '../Sidebar';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {//took out the return
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                </div>
            </div>
            <Loader type='pacman' />
            <Sidebar />
        </>
    )
};

export default Contact;
