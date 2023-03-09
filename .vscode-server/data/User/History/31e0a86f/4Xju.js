import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'aden'.split('');
    const jobArray = 'web developer.'.split('');

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm</h1>
                <h1> <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    web developer</h1>
                <h2>Fullstack Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;
