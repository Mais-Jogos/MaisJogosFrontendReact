import React from 'react'
import "./style.css"

const Modal = ({type, message}) => {
  return (
    <div className='background-modal'>
        <div className='modal-border'>
            <div className='modal'>
            {type ? <div class="wrapper"> 
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div> : 
            <div class="svg-icon-error is-animated">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.27 90.27">
                    <circle class="circle-2" cx="45.14" cy="45.14" r="45.14"/>
                    <g class="x">
                    <rect class="x-single" x="21.77" y="43.49" width="46.74" height="3.36" transform="translate(-18.72 45.15) rotate(-45)"/>
                    <rect class="x-single" x="43.47" y="21.81" width="3.36" height="46.74" transform="translate(-18.72 45.16) rotate(-45)"/>
                    </g>
                </svg>
            </div>}
            <h3>{message}</h3>
            </div>
        </div>
    </div>
  )
}

export default Modal