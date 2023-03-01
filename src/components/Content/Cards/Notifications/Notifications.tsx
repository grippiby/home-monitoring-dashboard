import style from './Notifications.module.css'

const Notifications = ({ title, content }) => {
	return (
		<div className={style.container}>
			<div className={style.content}>{content}</div>
			<div>hdslds;l</div>
		</div>
	)
}

export default Notifications
