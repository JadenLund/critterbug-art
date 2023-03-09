import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Particles from 'react-particles';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'aden,'.split('');
    const jobArray = 'web developer.'.split('');


    useEffect(() => {
        const ourSetTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(ourSetTimeout)
    }, [])

    //NOITA NOTE - so when you use a useEffect with setTimeout, make sure you clear the timeout on the useEffect termination. You do this by returning a function that destroys the timeout.
    //Also when you use useEffect, the dependency array(second arguement to useEffect) should be [] not {}!

    //The 'tear down' function (return)- removes the memory that isn't needed anymore?

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1><Particles
                        options={{
                            background: {
                                color: 'white',
                            },
                            fpsLimit: 60,
                            interactivity: {
                                detect_on: 'canvas',
                                events: {
                                    resize: true
                                },

                            },
                            particles: {
                                color: {
                                    value: "9fafca"
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1080
                                    },
                                    limit: 0,
                                    value: 400,
                                },
                                opacity: {
                                    animation: {
                                        enable: true,
                                        minimumValue: 0.05,
                                        speed: 1,
                                        sync: false
                                    },
                                    random: {
                                        enable: true,
                                        minimumValue: 0.05,
                                    },
                                    value: 1
                                },
                                shape: {
                                    type: 'circle',
                                },
                                size: {
                                    random: {
                                        enable: true,
                                        minimumValue: 0.5
                                    },
                                    value: 1,
                                }
                            }
                        }} />
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                        <br />
                    </h1>
                    <h2>Fullstack Developer</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default Home;
