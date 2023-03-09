import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
export const Sidebar = () => {
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img src={LogoSubtitle} alt='jaden' />
        </Link>
    </div>
}
