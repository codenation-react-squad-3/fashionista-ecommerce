import React from 'react'

import { FiArrowLeft} from 'react-icons/fi'

import './Modal.scss'

const Modal = ({children, title}) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header">
                    <button className="modal__btn">
                        <FiArrowLeft/>
                    </button>
                    <div className="modal__title">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;