import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/image/logo-s.png'
import LogoSubtitle from '../../assets/image/logo-s.png'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
        </Link>
    </div>

)

export default Sidebar;
