import './index.scss';
import LogoJ from '../../../assets/images/logo-j.png'

const Logo = () => {
	return (
		<div className='logo-container'>
			<img className='solid-logo' src={LogoJ} alt='J' />
			<h1 className='name'>ADEN</h1>
		</div>
	)
}
export default Logo;
