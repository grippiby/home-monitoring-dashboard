import style from './CardTemplate.module.css'

const CardTemplate = ({ title, content }) => {
	return (
		<div className={style.container}>
			<div className={style.container__elements}>
				<div className={style.title}>{title}</div>
				<div className={style.button}>
					<>&#62;</>
				</div>
				<div className={style.content}>{content}</div>
			</div>
		</div>
	)
}

export default CardTemplate
