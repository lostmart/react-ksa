import style from './Accordion.module.scss'
import txtData from '../data/aboutData.json'

const Accordion = () => {
	const handleClick = (e) => {
		let panel = e.target.parentElement.nextElementSibling
		panel.style.maxHeight
			? (panel.style.maxHeight = null)
			: (panel.style.maxHeight = panel.scrollHeight + 'px')
	}

	return (
		<>
			{txtData.map((panel, index) => (
				<div key={index} className={style.accordion_item}>
					<h2>
						<button onClick={handleClick}>{panel.title}</button>
					</h2>
					<div className={style.accordion_body}>{panel.text}</div>
				</div>
			))}
		</>
	)
}

export default Accordion
