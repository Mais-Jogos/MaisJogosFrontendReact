import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const GoBack = () => {
    const navigate = useNavigate()
    function back(){
        navigate(-1);
    }
  return (
    <>
        <img src="\imgs\icons\goBack__icon.svg" 
        alt="ícone de voltar para a página anterior" 
        className='goBack'
        onClick={back}></img>
    </>
  )
}

export default GoBack