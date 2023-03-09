import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import ParticleJS from '../ParticleJS';


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
            <ParticleJS />
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
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
                    <h2>Fullstack Developer | JavaScript | Ruby on Rails</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default Home;
