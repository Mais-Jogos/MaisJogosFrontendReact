import React from 'react'
import { useEffect } from 'react'

const CadastroDev = ({data, setData}) => {
  useEffect(() =>{
    setData({
      nomeDev:'',
      dataNasc:'',
      password:'',
      email:'',
      confirmaSenha:'',
      sobre:'',
    })
  }, [])
  return (
    <>
        <input type="text" placeholder='Nome do desenvolvedor/Equipe' onChange={(e)=> setData({...data, nomeDev:e.target.value})}/>
        <input type="date" placeholder='Data de nascimento' onChange={(e)=> setData({...data, dataNasc:e.target.value})}/>
        <input type="email" placeholder='E-mail' onChange={(e)=> setData({...data, email:e.target.value})}/>
        <input type="password" placeholder='Senha' onChange={(e)=> setData({...data, password:e.target.value})}/>
        <input type="password" placeholder='Confirmar senha' onChange={(e)=> setData({...data, confirmaSenha:e.target.value})}/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Sobre você' onChange={(e)=> setData({...data, sobre:e.target.value})}></textarea>
    </>
  )
}

export default CadastroDev