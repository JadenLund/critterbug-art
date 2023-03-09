import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                <NavLink exact='true' activeclassname='active' className='resume-link' to='/resume'>
                    <FontAwesomeIcon icon={faNewspaper} color='#4d4d4de' />
                </NavLink>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jaden-lund/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#99738e' />
                </a>
            </nav>
            <ul>
                <li>

                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Specklex'>
                        <FontAwesomeIcon icon={faGithub} color='#99738e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}
