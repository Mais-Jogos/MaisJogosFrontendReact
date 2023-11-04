import React, { useEffect } from 'react'
import { useRef } from 'react';

const LoginDev = ({data, setData}) => {
  useEffect(() =>{
    setData({
      password:'',
      email:'',
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
                setTimeout(console.log('Input ' + $(':focus').attr('aria-tts')), 1000);
              }
    
              e.preventDefault();
              e.stopPropagation();
            });
    
            $('input').keyup(function (e) {
              var code = e.keyCode || e.which;
              if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                setTimeout(console.log('Input ' + $(':focus').attr('aria-tts')), 1000);
              }
    
              e.preventDefault();
              e.stopPropagation();
            });
          })
        }
      }, [])

  return (
    <>
        <input type="email" placeholder='E-mail' onChange={(e)=> setData({...data, email:e.target.value})} aria-tts="email"/>
        <input type="password" placeholder='Senha' onChange={(e)=> setData({...data, password:e.target.value})} aria-tts="senha"/>
    </>
  )
}

export default LoginDev