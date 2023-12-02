import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import "./style.css";
import { translate } from '../../translate/translate';
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import Modal from '../../components/Modal/Modal';

const LoginAdmin = () => {
    const [data, setData] = useState({
        password: '',
        email: '',
    })

    const [msg, setMsg] = useState('')
    const [modal, setModal] = useState(null)

    const navigate = useNavigate()

    const cadastrar = () => {
        if (data.email !== '' && data.password !== '') {
            setMsg('')

            Axios.post('https://backendmaisjogos-production.up.railway.app/api/adm/login', { ...data })
                .then((response) => {

                    let responseAPI = response.data;
                    if (responseAPI == "Credenciais inválidas") {
                        throw new Error(responseAPI);
                    }
                    console.log(response)

                    window.localStorage.setItem("type", "admin")

                    setModal(<Modal message={"Você está logado!"} type={true} />)

                    setTimeout(() => {
                        navigate('/gerenciamento-admin')
                    }, 3000)
                })

                .catch((error) => {
                    console.log(error)

                    setModal(<Modal message={"Você não está logado!"} type={false} />)

                    setTimeout(() => {
                        setModal(null)
                    }, 3000)
                })

        } else {
            setMsg('Preencha todos os campos!')
        }
    }

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            <TextToSpeech />
            {modal}

            <div className="signin__title__admin">
                <i className="fa-solid fa-caret-left"></i>
                <h2>{translate("Admin")}</h2>
                <i className="fa-solid fa-caret-right"></i>
            </div>
            <div className='page__cad__admin'>
                <div className="page__cad__aside__admin">
                    <div className="signin__img__admin">
                        <img src="/imgs/animais/2.png" alt="Desenvolvedor" />
                    </div>
                </div>
                <div className="form__signin__admin">
                    <h2>{translate("Bem vindo de volta")}</h2>
                    <p style={{ color: '#fff' }}>{msg}</p>

                    <input type="email" placeholder='E-mail' onChange={(e) => { setData({ ...data, email: e.target.value }); setMsg("") }} aria-label="email" />
                    <input type="password" placeholder='Senha' onChange={(e) => { setData({ ...data, password: e.target.value }); setMsg("") }} aria-label="senha" />
                    <button onClick={cadastrar} aria-label="entrar">{translate("Entrar")}</button>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin