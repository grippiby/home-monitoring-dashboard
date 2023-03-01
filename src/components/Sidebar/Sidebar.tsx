import Button from './Button/Button'
import style from './Sidebar.module.css'

/* const setActive = (navData) =>
	navData.isActive ? style.active : style.sidebar_text */
const Sidebar = (props) => {
	return (
		<div className={style.container}>
			<Button></Button>
			<Button></Button>
		</div>
	)
}

export default Sidebar
