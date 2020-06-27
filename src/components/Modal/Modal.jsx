import React from 'react'

import { FiArrowLeft} from 'react-icons/fi'

import './Modal.scss'

const Modal = ({ isShowing, hide }) => {
	const app = document.querySelector('body')

	if (isShowing) {
		app.setAttribute('class', 'app--is-drawer-visible')
	}
	//isShowing ? app.setAttribute('class', 'app--is-drawer-visible') : '';

	return (
		<div className={`Drawer__Container ${isShowing && "Drawer__Container--isOpen"}`}>
			<div className="DrawerContents__Container">
				<div className="modal__header">
					<button className="modal__btn" onClick={hide}>
							<FiArrowLeft/>
					</button>
					<div className="modal__title">
							<h1>conteudo do seu modal</h1>
					</div>	
				</div>
			</div>
		</div>
	)
}


/*<button className="modal__btn" onClick={hide}>
<FiArrowLeft/>
</button>
*/

export default Modal;