import React from 'react'
//import ReactDOM from 'react-dom';
import { FiArrowLeft} from 'react-icons/fi'
import './Modal.scss'
import SearchBar from '../SearchBar/SearchBar'

const Modal = ({ isShowing, hide }, isSearchModal) => {
	const searchModal = (
		<div>
			<SearchBar/>
		</div>
	)
	
	if (isShowing && isSearchModal) {
		return (
			<div className="modal__overlay">
			<div className="modal__container">
				<div className="modal">
					<div className="modal__header">
						<button className="modal__btn"  aria-label="Close" onClick={hide}>
							<FiArrowLeft/>
						</button>
						<div className="modal__title">
								<h1>Title goes here</h1>
						</div>
					</div>
					{searchModal}
				</div>
			</div>
		</div>
		)
	} else {
		return <div></div>
	}
}

export default Modal;