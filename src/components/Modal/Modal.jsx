import React from 'react'

import './Modal.css'

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header">
                    <button className="modal__btn">
                        <span> {"<-"} </span>
                    </button>
                    <div className="modal__title">
                        <h1>Title goes here</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;