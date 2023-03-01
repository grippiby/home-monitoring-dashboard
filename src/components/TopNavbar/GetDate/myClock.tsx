import { useState, useEffect } from 'react'
import style from './myClock.module.css'
const MyClock = () => {
	const [dateState, setDateState] = useState(new Date())
	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000)
	}, [])
	//getClock
	const myClock = dateState.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		/* second: 'numeric', */
		hour12: true,
	})
	// getDate

	const myDate = dateState.toLocaleDateString('ru', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	//Capitalize the first letter of each word in a string
	const arr = myDate.split(' ')

	for (let i = 0; i < arr.length - 2; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}
	const date = arr.join(' ')
	return (
		<div className={style.container}>
			<div className={style.time}>{myClock}</div>
			<div className={style.date}>{date}</div>
		</div>
	)
}

export default MyClock
