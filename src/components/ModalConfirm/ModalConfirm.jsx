import React from 'react'
import "./style.css"

const ModalConfirm = ({type, message, simClick, nãoClick}) => {

  return (
    <div className='background-modal__confirm'>
        <div className='modal__confirm-border'>
            <div className='modal__confirm'>
                <i class="fa-solid fa-question"></i>
                <h3>{message}</h3>
                <div className="modal__confirm-btns">
                    <button className={!type ? 'true-btn' : 'false-btn'} onClick={nãoClick}>Não</button>
                    <button className={type ? 'true-btn' : 'false-btn'} onClick={simClick}>Sim</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirm