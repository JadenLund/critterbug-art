import 'index.scss';
import AnimatedLetters from '../AnimatedLetters';

export default function About() {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 't', ' ', 'M', 'e']} idx={15} />
                </h1>
            </div>
        </div>
    )
}
