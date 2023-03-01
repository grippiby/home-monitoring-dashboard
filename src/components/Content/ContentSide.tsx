import { Toggle } from '../common/Toggle/Toggle'
import CardTemplate from './Cards/CardTemplate'
import Notifications from './Cards/Notifications/Notifications'

import style from './ContentSide.module.css'
import News from './News/News'
import QuickPanel from './QuickPanel/QuickPanel'

//toToggle State
const logState = (state) => {
	console.log('Toggled:', state)
}

const ContentSide = (props) => {
	return (
		<div className={style.container}>
			<CardTemplate title="Notifications" />

			<News></News>
			<QuickPanel></QuickPanel>
			<Notifications></Notifications>
			{/* <Toggle label="Toggle me" toggled={true} onClick={logState}></Toggle> */}
		</div>
	)
}

export default ContentSide
