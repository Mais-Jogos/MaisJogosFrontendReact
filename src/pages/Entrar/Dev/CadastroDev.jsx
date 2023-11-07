import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const CadastroDev = ({ data, setData }) => {
  useEffect(() => {
    setData({
      nome: '',
      dataNasc: '',
      password: '',
      login: '',
      confirmarSenha: '',
      sobre: '',
    })
  }, [])

  // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
  const initialized = useRef(false);

  useEffect(_ => {
    if (!initialized.current) {
      initialized.current = true

      $(document).ready(function () {
        $('textarea').keyup(function (e) {
          var code = e.keyCode || e.which;
          if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
            responsiveVoice.cancel();
            setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
          }

          e.preventDefault();
          e.stopPropagation();
        });

        $('input').keyup(function (e) {
          var code = e.keyCode || e.which;
          if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
            responsiveVoice.cancel();
            setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
          }
          e.preventDefault();
          e.stopPropagation();
        });
      })
    }
  }, [])
  return (
    <>
      <input type="text" placeholder='Nome do desenvolvedor/Equipe' onChange={(e) => setData({ ...data, nome: e.target.value })} aria-label="nome" />
      <input type="date" placeholder='Data de nascimento' onChange={(e) => setData({ ...data, dataNasc: e.target.value })} aria-label="data de nascimento" />
      <input type="email" placeholder='E-mail' onChange={(e) => setData({ ...data, login: e.target.value })} aria-label="email" />
      <input type="password" placeholder='Senha' onChange={(e) => setData({ ...data, password: e.target.value })} aria-label="senha" />
      <input type="password" placeholder='Confirmar senha' onChange={(e) => setData({ ...data, confirmarSenha: e.target.value })} aria-label="confirmar senha" />
      <textarea name="" id="" cols="30" rows="10" placeholder='Sobre você' onChange={(e) => setData({ ...data, sobre: e.target.value })} aria-label="sobre você"></textarea>
    </>
  )
}

export default CadastroDev