import { Toggle } from '../../../common/Toggle/Toggle'
import lights from '../../../../assets/ico/Icon - Lights.svg'
import style from './RowElement.module.css'

//toToggle State
const logState = (state) => {
	console.log('Toggled:', state)
}

const RowElement = (props) => {
	return (
		<div className={style.container}>
			<div className={style.logo}>
				<img src={lights} alt="img" className={style.image_logo} />
			</div>
			<div className={style.text}>Lights</div>
			<div className={style.toggle}>
				<Toggle label="Toggle me" toggled={true} onClick={logState}></Toggle>
			</div>
		</div>
	)
}

export default RowElement
