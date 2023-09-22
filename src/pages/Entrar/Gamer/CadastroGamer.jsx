import React, { useEffect } from 'react'
import '../style.css'

const CadastroGamer = ({data, setData}) => {
  useEffect(() =>{
    setData({
      nome:'',
      sobrenome:'',
      dataNasc:'',
      password:'',
      email:'',
      confirmaSenha:'',
    })
  }, [])
  return (
    <>
        <input type="text" placeholder='nome' onChange={(e)=> setData({...data, nome:e.target.value})}/>
        <input type="text" placeholder='sobrenome' onChange={(e)=> setData({...data, sobrenome:e.target.value})}/>
        <input type="date" placeholder='Data de nascimento' onChange={(e)=> setData({...data, dataNasc:e.target.value})}/>
        <input type="email" placeholder='E-mail' onChange={(e)=> setData({...data, email:e.target.value})}/>
        <input type="password" placeholder='Senha' onChange={(e)=> setData({...data, password:e.target.value})}/>
        <input type="password" placeholder='Confirmar senha' onChange={(e)=> setData({...data, confirmaSenha:e.target.value})}/>
    </>
  )
}

export default CadastroGamer