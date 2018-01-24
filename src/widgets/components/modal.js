import React from 'react'
import './modal.css'

function Modal (props) {
  return (
    <div className="Modal">
      esto es un modal
      {props.children}
      <button onClick={props.handleModalClick}>Cerrar</button>
    </div>
  )
}

export default Modal