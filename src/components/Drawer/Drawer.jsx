import React from 'react'

import { FiArrowLeft} from 'react-icons/fi'

import './Drawer.scss'

const Drawer = ({ isShowing, hide, title, children }) => {

	return (
		<div className={isShowing ? 'drawer' : ''}>
			<div className={`drawer__container ${isShowing && "drawer__container--is-open"}`}>
				<div className="drawer__header">
					<button className="close__btn" onClick={() => hide(false)}>
							<FiArrowLeft/>
					</button>
					<span className="drawer__title">
							<h1>{title}</h1>
					</span>	
				</div>
				<div className="drawer__content">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Drawer;