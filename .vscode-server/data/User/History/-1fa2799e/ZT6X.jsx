import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='jaden' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faPhone} color='#4d4d4de' />
                </NavLink>

                <div className='links'>
                    <a target='_blank' className='resume' rel='noreferrer' href='https://docs.google.com/document/d/e/2PACX-1vQ8IWlnrFXAny90vVemPIf9Oj8-iuwY-oeJIeeIWvaTBXi_Y1iWGk_T_YEI_5u-6STodHn2FHO_yXtq/pub'>
                        <FontAwesomeIcon icon={faNewspaper} color='#99738e' />
                    </a>
                    <a target='_blank' className='linkedin' rel='noreferrer' href='https://www.linkedin.com/in/jaden-lund/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#99738e' />
                    </a>
                    <a target='_blank' className='github' rel='noreferrer' href='https://github.com/JadenLund'>
                        <FontAwesomeIcon icon={faGithub} color='#99738e' />
                    </a>
                    <a target='_blank' className='medium' rel='noreferrer' href='https://medium.com/@lundjaden'>
                        <FontAwesomeIcon icon={faMedium} color='#99738e' />
                    </a>
                </div>
            </nav>
        </div>
    )
}
