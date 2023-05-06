import style from './Accordion.module.scss'
import arrow from '../assets/arrow_back.svg'
import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Accordion = ({ title, body, extraClass }) => {
	let location = useLocation()

	// console.log(location.pathname)

	const bodyRef = useRef(null)
	const arrowRef = useRef(null)

	const [active, setActive] = useState(false)

	const handleClick = () => {
		const panel = bodyRef.current
		const arrow = arrowRef.current

		if (active) {
			setActive(!active)
			panel.style.maxHeight = '0'
			panel.style.padding = '0 16px 0 16px'
			arrow.style.rotate = '0deg'
		} else {
			setActive(!active)
			panel.style.maxHeight = panel.scrollHeight + 'px'
			panel.style.padding = '18px 16px 12px 16px'
			arrow.style.rotate = '180deg'
		}
	}

	return (
		<div
			className={
				location.pathname === '/about'
					? style.about_item + ' ' + style.accordion_item
					: style.accordion_item
			}>
			<h2 onClick={handleClick}>
				<button>
					{title}
					<img ref={arrowRef} src={arrow} alt="arrow" />
				</button>
			</h2>
			<div ref={bodyRef} className={style.accordion_body}>
				{Array.isArray(body) ? (
					<ul>
						{body.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				) : (
					<>{body}</>
				)}
			</div>
		</div>
	)
}

Accordion.propTypes = {
	title: PropTypes.string,
	body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	extraClass: PropTypes.string,
}

export default Accordion
