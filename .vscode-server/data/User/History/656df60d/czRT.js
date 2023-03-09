import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import ParticleJS from '../ParticleJS';
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'
import logo6 from '../../assets/images/logo6.png'
// import { CometSpinLoader } from 'react-css-loaders';

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const ourSetTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(ourSetTimeout)
    }, [])

    return (
        <>  <ParticleJS />
            <div className='container about-page'>

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>
                    <p>I am a versatile, hardworking person who can work effectively both in a team and independently. When working in a team, I bring my strong communication and collaboration skills to the table, contributing to the development process and working towards a common goal. I understand the importance of open communication and actively listen to my team members, incorporating their ideas and feedback into my work. At the same time, I am able to take the initiative and work independently when required, taking on tasks and delivering high-quality results without supervision.</p>

                    <p>I have a good foundation in the software development process, including design and deployment. I have a solid technical understanding and competence in several programming languages and software development methodologies. I am able to tackle modest tasks, analyze requirements, and produce effective code that meets quality standards. While still early in my career, I am dedicated to continuously improving my skills and staying informed of industry advancements.</p>

                    <p>Going the extra mile is a trait that I embody in all my work. I am dedicated to delivering high-quality results and always strive to exceed expectations. Whether working on a team project or an individual task, I put in extra effort to ensure that the end result is the best it can be. I take pride in my work and am always willing to put in the extra time and effort to ensure that my contributions make a positive impact. I believe that this approach sets me apart and allows me to consistently deliver exceptional results.</p>



                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <img className='logo1' src={logo1} alt='logo1' />
                        <img className='logo2' src={logo2} alt='logo2' />
                        <img className='logo3' src={logo3} alt='logo3' />
                        <img className='logo4' src={logo4} alt='logo4' />
                        <img className='logo5' src={logo5} alt='logo5' />
                        <img className='logo6' src={logo6} alt='logo6' />
                    </div>
                </div>
                {/* <div> <CometSpinLoader /></div> */}
            </div>
        </>
    )
}
