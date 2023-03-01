import style from './Logo.module.css'
import logo from '../../../assets/logos/appLogo.svg'
const Logo = () => {
	return (
		<>
			<div className={style.container}>
				<img src={logo} alt="appLogo" />
			</div>
		</>
	)
}
export default Logo
