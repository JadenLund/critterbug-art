import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
            </Link>
            <nav>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jaden-lund/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Specklex">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Sidebar;
