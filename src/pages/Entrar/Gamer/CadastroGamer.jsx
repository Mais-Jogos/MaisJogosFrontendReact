import React from 'react'
import '../style.css'

const CadastroGamer = () => {
  return (
    <>
        <input type="text" placeholder='Username'/>
        <input type="date" placeholder='Data de nascimento'/>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Confirmar senha'/>
    </>
  )
}

export default CadastroGamer