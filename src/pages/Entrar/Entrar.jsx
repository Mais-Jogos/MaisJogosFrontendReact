/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'


const Entrar = () => {
  const [userType, setUserType] = useState('')
  const [login, setLogin] = useState(true)
  return (
    <div id='container-page'>
      <Menu/>
      <Acessibilidade/>
      <div className="signin__title">
        <i className="fa-solid fa-caret-left"></i>
        <h2>SELECIONAR JOGADOR</h2>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      {userType === '' ? 
      <div className="signin__images">
        <div className="signin__gamer" onClick={()=> setUserType('Gamer')}>
          <img src="../public/imgs/girlGamer.png" alt="Gamer" />
          <p>Gamer</p>
        </div>
        <div className="signin__dev" onClick={()=> setUserType('Dev')}>
          <img src="../public/imgs/animais/1.png" alt="Desenvolvedor" />
          <p>Desenvolvedor</p>
        </div>
      </div> : 
      <div className='page__cad'>
        <div className="page__cad__user">
          <div className="signin__img">
            {userType === 'Gamer' ? <img src="../public/imgs/girlGamer.png" alt="Gamer" />:
            <img src="../public/imgs/animais/1.png" alt="Desenvolvedor" />}
          </div>
          <button onClick={()=> setUserType('')}>Trocar jogador</button>
        </div>
        <div className="form__signin">
          <h2>{login ? 'Faça Login' : 'Cadastre-se'}</h2>
          {!login && <input type="text" placeholder='Nome'/>}
          {!login && <input type="number" placeholder='Idade'/>}
          <input type="email" placeholder='E-mail'/>
          <input type="password" placeholder='Senha'/>
          <button>{login ? 'Entrar' : 'Cadastrar'}</button>
          {login ? <p>Não possui conta? <a onClick={()=>setLogin(false)}>Cadastre-se</a></p>:
          <p>Já possui uma conta? <a onClick={()=>setLogin(true)}>Faça login</a></p>}
        </div>
      </div>}
    </div>
  )
}

export default Entrar