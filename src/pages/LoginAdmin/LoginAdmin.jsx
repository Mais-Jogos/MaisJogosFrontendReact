import React, { useState} from 'react'
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import "./style.css";

const LoginAdmin = () => {
    const [data, setData] = useState({
        password:'',
        email:'',
    })
    const [msg, setMsg] = useState('')
    const cadastrar = () =>{
        if(data.email !== '' && data.password !== ''){
            setMsg('')
        }else{
            console.log(data);
            setMsg('Preencha todos os campos!')
        }
    }

  return (
    <div id='container-page'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <div className="signin__title__admin">
        <i className="fa-solid fa-caret-left"></i>
        <h2>ADMIN</h2>
        <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className='page__cad__admin'>
            <div className="page__cad__aside__admin">
                <div className="signin__img__admin">
                    <img src="../public/imgs/animais/2.png" alt="Desenvolvedor" />
                </div>
            </div>
            <div className="form__signin__admin">
                <h2>Bem vindo de volta</h2>
                <input type="email" placeholder='E-mail' onChange={(e)=> setData({...data, email:e.target.value})}/>
                <input type="password" placeholder='Senha' onChange={(e)=> setData({...data, password:e.target.value})}/>
                <button onClick={cadastrar}>Entrar</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginAdmin