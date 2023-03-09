import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    requestAnimationFrame(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={(['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'])}
                        idx={15} />
                    <h1>
                        <p>
                            I'm a very ambitious front-end dev bla bla bla bla bla bla bla bla bla.
                        </p>
                        <p>
                            I'm quietly confident, naturally curious, and perpetually working on improving my software development skills.
                        </p>
                        <p>
                            If i need to define myself in one sentence, it would be that I am a family person, super tech-obsessed and ambitious, and a lover.
                        </p>
                    </h1>

                </h1>
            </div>
        </div>
    )
}

export default About;
