import React, { useEffect } from 'react'

const LoginDev = ({data, setData}) => {
  useEffect(() =>{
    setData({
      password:'',
      email:'',
    })
  }, [])
  return (
    <>
        <input type="email" placeholder='E-mail' onChange={(e)=> setData({...data, email:e.target.value})}/>
        <input type="password" placeholder='Senha' onChange={(e)=> setData({...data, password:e.target.value})}/>
    </>
  )
}

export default LoginDev