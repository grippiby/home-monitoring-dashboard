import { useState } from 'react'
import style from '../Toggle/Toggle.module.css'

export const Toggle = ({ label, toggled, onClick }) => {
	const [isToggled, toggle] = useState(toggled)

	const callback = () => {
		toggle(!isToggled)
		onClick(!isToggled)
	}

	return (
		<div className={style.container}>
			<label className={style.label}>
				<input
					className={style.input}
					type="checkbox"
					defaultChecked={isToggled}
					onClick={callback}
				/>
				<span className={style.span} />
				<strong className={style.strong}>{/* {label} */}</strong>
			</label>
		</div>
	)
}
