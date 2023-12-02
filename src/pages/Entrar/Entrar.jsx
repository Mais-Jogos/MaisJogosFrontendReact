/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
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
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'



const Entrar = () => {
  const [userType, setUserType] = useState('')
  const [login, setLogin] = useState(true)
  const [data, setData] = useState({})
  const [msg, setMsg] = useState('')
  const [modal, setModal] = useState(null)

  const navigate = useNavigate()
  const cadastrar = () => {
    if (login) {
      if (data.login !== '' && data.password !== '') {
        Axios.post(`https://backendmaisjogos-production.up.railway.app/login`, { ...data })
          .then((response) => {
            console.log(response)
            window.localStorage.setItem("token", response.data)
            setModal(<Modal message={"Você está logado!"} type={true}/>)
            setTimeout(() =>{
              if(userType === "Gamer"){
                navigate("/perfil-user")
              }else if(userType === "Dev"){
                navigate("/perfil-dev")
              }
            },3000)
          })
          .catch((error) => {
            console.log(error)
            console.log("data err", error.config.data);
            setModal(<Modal message={"Você não foi logado!"} type={false}/>)
            setTimeout(() =>{
              setModal(null)
            }, 3000)
          })
        setMsg('')
      } else {
        console.log(data);
        setMsg('Preencha todos os campos!')
      }
    } else {
      if (userType === 'Gamer') {
        if (data?.password !== '' && data?.email !== '' && data?.nome !== '' && data?.sobrenome !== '' && data?.dataNasc !== '' && data?.confirmarSenha !== '') {
          console.log(data);
          if (data?.password === data?.confirmarSenha) {
            Axios.post('https://backendmaisjogos-production.up.railway.app/api/usuario/salvar', {
                ...data,
                moeda: 10,
                idAvatar: 1,
            })
            .then((response) => {
              console.log(response)
              setMsg('')
              window.localStorage.setItem("type", "user")
              window.localStorage.setItem("id", response.data.id)
              setModal(<Modal message={"Você foi cadastrado!"} type={true}/>)
              setTimeout(() =>{
                setLogin(true)
                setModal(null)
              }, 3000)
            })
            .catch((error) => { 
                console.log(error)
                console.log("Data", error.config.data);
                setModal(<Modal message={"Você não foi cadastrado!"} type={false}/>)
                setTimeout(() =>{
                  setModal(null)
                }, 3000)
            })
          } else {
            setMsg('Senhas diferentes')
          }
        } else {
          setMsg('Preencha todos os campos!')
        }
      } else {
        if (data?.password !== '' && data?.login !== '' && data?.nome !== '' && data?.dataNasc !== '' && data?.confirmarSenha !== '') {
          if (data?.password === data?.confirmarSenha) {
            Axios.post('https://backendmaisjogos-production.up.railway.app/api/usuario/salvar', {
              ...data,
              valorVendas: 0.0,
            })
              .then((response) => {
                console.log(response)
                setMsg('')
                window.localStorage.setItem("type", "dev")
                window.localStorage.setItem("id", response.data.id)
                setModal(<Modal message={"Você foi cadastrado!"} type={true}/>)
                setTimeout(() =>{
                  setLogin(true)
                  setModal(null)
                }, 3000)
              })
              .catch((error) =>{ 
                console.log(error)
                setModal(<Modal message={"Você não foi cadastrado!"} type={false}/>)
                setTimeout(() =>{
                  setModal(null)
                }, 3000)
              })
          } else {
            setMsg('Senhas diferentes')
          }
        } else {
          console.log(data);
          setMsg('Preencha todos os campos!')
        }
      }
    }
  }


  // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
  const initialized = useRef(false);
  let htmlRootValue = document.querySelector("#root").attributes[1].nodeValue === "false" ? false : true
  const [clickIcon, setClickIcon] = useState(htmlRootValue);

  function switchStateIcon() {
    if (clickIcon) {
      setClickIcon(false)
      $("#root").attr("aria-label", "false");
    } else {
      setClickIcon(true)
      $("#root").attr("aria-label", "true");
    }
  }

  useEffect(_ => {

    if (!initialized.current) {
      initialized.current = true

      $(document).ready(function () {
        $('a').keyup(function (e) {
          var code = e.keyCode || e.which;
          if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
            responsiveVoice.cancel();
            setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
          }

          e.preventDefault();
          e.stopPropagation();
        });

        $('button').keyup(function (e) {
          var code = e.keyCode || e.which;
          if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
            setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
          }

          e.preventDefault();
          e.stopPropagation();
        });

      })
    }
  }, [])



  return (
    <div id='container-page'>
      <Menu />
      <Vlibras />
      <Acessibilidade />
      {modal}

      {/* Leitor de tela */}
      <div className="textToSpeech__container" onClick={_ => switchStateIcon()} accessKey="q">
        <img src={!clickIcon ? "/imgs/icons/textToSpeech_icon-open.svg" : "/imgs/icons/textToSpeech_icon-remove.svg"}></img>
        <div className="textToSpeech__hover"><p>Leitor de tela</p></div>
        <div></div>
      </div>

      <div className="signin__title">
        <i className="fa-solid fa-caret-left"></i>
        <h2>{translate("SELECIONAR JOGADOR")}</h2>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="signin__images" style={{ display: userType === '' ? "flex" : "none" }}>
        <div className="signin__gamer" onClick={() => setUserType('Gamer')}>
          <img src="/imgs/girlgamer.png" alt="Gamer" />
          <p>{translate("Gamer")}</p>
        </div>
        <div className="signin__dev" onClick={() => setUserType('Dev')}>
          <img src="/imgs/devBoy.png" alt="Desenvolvedor" />
          <p>{translate("Desenvolvedor")}</p>
        </div>
      </div>
      <div className='page__cad' style={{ display: userType !== '' ? "flex" : "none" }}>
        <div className="page__cad__user">
          <div className="signin__img">
            {userType === 'Gamer' ? <img src="/imgs/girlgamer.png" alt="Gamer" /> :
              <img src="/imgs/devBoy.png" alt="Desenvolvedor" />}
          </div>
          <button onClick={() => { setUserType(''); setData({}); setMsg('') }}>{translate("Trocar jogador")}</button>
        </div>
        <div className="form__signin">
          <h2 style={{ display: login ? "block" : "none" }}>{translate('Faça Login')}</h2>
          <h2 style={{ display: !login ? "block" : "none" }}>{translate('Cadastre-se')}</h2>
          <p style={{ color: '#fff' }}>{msg}</p>
          {!login && userType === 'Gamer' && <CadastroGamer data={data} setData={setData} />}
          {login && userType === 'Gamer' && <LoginGamer data={data} setData={setData} />}
          {!login && userType === 'Dev' && <CadastroDev data={data} setData={setData} />}
          {login && userType === 'Dev' && <LoginDev data={data} setData={setData} />}
          <button onClick={cadastrar} style={{ display: login ? "block" : "none" }}>{translate('Entrar')}</button>
          <button onClick={cadastrar} style={{ display: !login ? "block" : "none" }}>{translate('Cadastre-se')}</button>
          <p style={{ display: login ? "block" : "none" }}>{translate("Não possui conta")}
            <a onClick={() => { setLogin(false); setData({}); setMsg('') }} aria-label="cadastrar-se">{translate("Cadastre-se")}</a>
          </p>
          <p style={{ display: !login ? "block" : "none" }}>{translate("Já possui uma conta")}
            <a onClick={() => { setLogin(true); setData({}); setMsg('') }} aria-label="login">{translate("Faça Login")}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Entrar