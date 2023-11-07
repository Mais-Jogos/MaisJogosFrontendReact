import React, { useEffect } from 'react'
import '../style.css'
import { useRef } from 'react'

const CadastroGamer = ({ data, setData }) => {
  useEffect(() => {
    setData({
      nome: '',
      sobrenome: '',
      dataNasc: '',
      password: '',
      email: '',
      confirmarSenha: '',
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
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"),1000);
                }

                  e.preventDefault();
                  e.stopPropagation();
              });

              $('input').keyup(function (e) {
                  var code = e.keyCode || e.which;
                  if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"),1000);
                }

                  e.preventDefault();
                  e.stopPropagation();
              });
          })
      }
  }, [])


  return (
    <>
      <input type="text" placeholder='nome' onChange={(e) => setData({ ...data, nome: e.target.value })} aria-label="nome" />
      <input type="text" placeholder='sobrenome' onChange={(e) => setData({ ...data, sobrenome: e.target.value })} aria-label="sobrenome" />
      <input type="date" placeholder='Data de nascimento' onChange={(e) => setData({ ...data, dataNasc: e.target.value })} aria-label="data de nascimento" />
      <input type="email" placeholder='E-mail' onChange={(e) => setData({ ...data, email: e.target.value })} aria-label="email" />
      <input type="password" placeholder='Senha' onChange={(e) => setData({ ...data, password: e.target.value })} aria-label="senha" />
      <input type="password" placeholder='Confirmar senha' onChange={(e) => setData({ ...data, confirmarSenha: e.target.value })} aria-label="confirmar senha" />
    </>
  )
}

export default CadastroGamer