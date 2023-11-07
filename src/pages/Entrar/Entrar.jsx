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



const Entrar = () => {
  const [userType, setUserType] = useState('')
  const [login, setLogin] = useState(true)
  const [data, setData] = useState({})
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const cadastrar = () => {
    if (login) {
      if (data.email !== '' && data.password !== '') {
        Axios.post('http://localhost:8080/auth/login', { data })
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
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
            Axios.post('http://localhost:8080/auth/cadastro', {
              ...data,
              ROLE: userType === 'Gamer' ? 'CLIENTE' : 'DEV',
            })
              .then((response) => console.log(response))
              .catch((error) => console.log(error))
            setMsg('')
            navigate("/perfil-user")
          } else {
            setMsg('Senhas diferentes')
          }
        } else {
          setMsg('Preencha todos os campos!')
        }
      } else {
        if (data?.password !== '' && data?.login !== '' && data?.nome !== '' && data?.dataNasc !== '' && data?.confirmarSenha !== '') {
          if (data?.password === data?.confirmarSenha) {
            Axios.post('http://localhost:8080/auth/cadastro/dev', {
              ...data,
              ROLE: userType === 'Gamer' ? 'CLIENTE' : 'DEV',
            })
              .then((response) => console.log(response))
              .catch((error) => console.log(error))
            setMsg('')
            navigate("/perfil-dev")
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
          <img src="/imgs/animais/1.png" alt="Desenvolvedor" />
          <p>{translate("Desenvolvedor")}</p>
        </div>
      </div>
      <div className='page__cad' style={{ display: userType !== '' ? "flex" : "none" }}>
        <div className="page__cad__user">
          <div className="signin__img">
            {userType === 'Gamer' ? <img src="/imgs/girlgamer.png" alt="Gamer" /> :
              <img src="/imgs/animais/1.png" alt="Desenvolvedor" />}
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