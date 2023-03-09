import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { useRef, useEffect } from 'react';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap-trial'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solitLogoRef = useRef();

    useEffect(() => {
        faGasPump.registerPlugin(DrawSVGPlugin)

        faGasPump.timeline()
        toString(bgRef.current, {
            duration: 1,
            opacity: 1
        })
    }, [])
    return (

        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="S" />
            <svg width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg" >
                <g
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                </g>
            </svg>
        </div>
    )
}

export default Logo;
