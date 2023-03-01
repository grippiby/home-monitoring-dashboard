import style from './Button.module.css'
import lights from '../../../assets/ico/Icon - Lights.svg'
const Button = (props) => {
	return (
		<div className={style.container}>
			<div className={style.image}>
				<img src={lights} alt="img" className={style.image_logo} />
			</div>
			<p className={style.text}>This Button</p>
		</div>
	)
}

export default Button
