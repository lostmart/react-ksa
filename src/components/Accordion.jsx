import style from './Accordion.module.scss'
const Accordion = () => {
	return (
		<div className={style.accordion_item}>
			<h2>
				<button>Ahora</button>
			</h2>
			<div className={style.accordion_body}>
				La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
				comportement discriminatoire ou de perturbation du voisinage entraînera
				une exclusion de notre plateforme.
			</div>
		</div>
	)
}

export default Accordion
