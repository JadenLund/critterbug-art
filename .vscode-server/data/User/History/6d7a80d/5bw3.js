import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="S" />
        </div>
    )
}

export default Logo;
