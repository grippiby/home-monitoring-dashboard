import { Toggle } from '../../common/Toggle/Toggle'
import CardTemplate from '../Cards/CardTemplate'
import style from './QuickPanel.module.css'
import RowElement from './RowElement/RowElement'

/* const setActive = (navData) =>
	navData.isActive ? style.active : style.sidebar_text */
//toToggle State
const logState = (state) => {
	console.log('Toggled:', state)
}
const QuickPanel = (props) => {
	return (
		<div className={style.container}>
			<div className={style.title}>Quick Panel</div>
			{/* <RowElement></RowElement> */}
			<div className={style.toggle}>
				<RowElement></RowElement>
			</div>
			<div className={style.toggle}>
				<RowElement></RowElement>
			</div>
			<div className={style.toggle}>
				<RowElement></RowElement>
			</div>
			<div className={style.toggle}>
				<RowElement></RowElement>
			</div>
			<div className={style.toggle}>
				<RowElement></RowElement>
			</div>
		</div>
	)
}

export default QuickPanel
