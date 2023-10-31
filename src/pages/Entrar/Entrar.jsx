/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import CadastroGamer from './Gamer/CadastroGamer'
import LoginGamer from './Gamer/LoginGamer'
import CadastroDev from './Dev/CadastroDev'
import LoginDev from './Dev/LoginDev'
import Axios from 'axios'
import Vlibras from '../../components/Vlibras/Vlibras';
import { translate } from '../../translate/translate'



const Entrar = () => {
  const [userType, setUserType] = useState('')
  const [login, setLogin] = useState(true)
  const [data, setData] = useState({})
  const [msg, setMsg] = useState('')
  const cadastrar = () =>{
    if(login){
      if(data.email !== '' && data.password !== ''){
        Axios.post('http://localhost:8080/auth/login', { data })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        setMsg('')
      }else{
        console.log(data);
        setMsg('Preencha todos os campos!')
      }
    }else{
      if(userType === 'Gamer'){
        if(data?.password !== '' && data?.email !== '' && data?.nome !== '' && data?.sobrenome !== '' && data?.dataNasc !== '' && data?.confirmaSenha !== ''){
          console.log(data);
          if(data?.password === data?.confirmaSenha){
            Axios.post('http://localhost:8080/auth/cadastro', {
              ...data,
              ROLE: userType === 'Gamer' ? 'CLIENTE' : 'DEV',
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
            setMsg('')
          }else{
            setMsg('Senhas diferentes')
          }
        }else{
          setMsg('Preencha todos os campos!')
        }
      }else{
        if(data?.password !== '' && data?.email !== '' && data?.nomeDev !== '' && data?.dataNasc !== '' && data?.confirmaSenha !== '' ){
          if(data?.password === data?.confirmaSenha){
            Axios.post('', {
              ...data,
              ROLE: userType === 'Gamer' ? 'CLIENTE' : 'DEV',
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
            setMsg('')
          }else{
            setMsg('Senhas diferentes')
          }
        }else{
          setMsg('Preencha todos os campos!')
        }
      }
    }
  }
  return (
    <div id='container-page'>
      <Menu/>
      <Vlibras/>
      <Acessibilidade/>
      <div className="signin__title">
        <i className="fa-solid fa-caret-left"></i>
        <h2>{translate("SELECIONAR JOGADOR")}</h2>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="signin__images" style={{display: userType === '' ? "flex" : "none"}}>
        <div className="signin__gamer" onClick={()=> setUserType('Gamer')}>
          <img src="/imgs/girlgamer.png" alt="Gamer" />
          <p>{translate("Gamer")}</p>
        </div>
        <div className="signin__dev" onClick={()=> setUserType('Dev')}>
          <img src="/imgs/animais/1.png" alt="Desenvolvedor" />
          <p>{translate("Desenvolvedor")}</p>
        </div>
      </div>
      <div className='page__cad' style={{display: userType !== '' ? "flex" : "none"}}>
        <div className="page__cad__user">
          <div className="signin__img">
            {userType === 'Gamer' ? <img src="/imgs/girlgamer.png" alt="Gamer" />:
            <img src="/imgs/animais/1.png" alt="Desenvolvedor" />}
          </div>
          <button onClick={()=> {setUserType(''); setData({}); setMsg('')}}>{translate("Trocar jogador")}</button>
        </div>
        <div className="form__signin">
          <h2 style={{display: login ? "block" : "none"}}>{translate('Faça Login')}</h2>
          <h2 style={{display: !login ? "block" : "none"}}>{translate('Cadastre-se')}</h2>
          <p style={{color:'#fff'}}>{msg}</p>
          {!login && userType === 'Gamer' && <CadastroGamer data={data} setData={setData}/>}
          {login && userType === 'Gamer' && <LoginGamer data={data} setData={setData}/>}
          {!login && userType === 'Dev' && <CadastroDev data={data} setData={setData}/>}
          {login && userType === 'Dev' && <LoginDev data={data} setData={setData}/>}
          <button onClick={cadastrar} style={{display: login ? "block" : "none"}}>{translate('Entrar')}</button>
          <button onClick={cadastrar} style={{display: !login ? "block" : "none"}}>{translate('Cadastre-se')}</button>
          <p style={{display: login ? "block" : "none"}}>{translate("Não possui conta")}
            <a onClick={()=> {setLogin(false); setData({}); setMsg('')}}>{translate("Cadastre-se")}</a>
          </p>
          <p style={{display: !login ? "block" : "none"}}>{translate("Já possui uma conta")}
            <a onClick={()=> {setLogin(true); setData({}); setMsg('')}}>{translate("Faça Login")}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Entrar