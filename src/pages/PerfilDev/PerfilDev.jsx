import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Vlibras from '../../components/Vlibras/Vlibras'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { translate } from "../../translate/translate";
import { useEffect } from "react";
import Axios from "axios";

function reducerUserData(state, action) {
    switch (action.type) {
        case "change_username":
            return { ...state, username: action.username }
        case "change_nascimento":
            return { ...state, dataNascimento: action.nascimento }
        case "change_email":
            return { ...state, email: action.email }
        case "change_senha":
            return { ...state, senha: action.senha }
        case "change_descricao":
            return { ...state, descricao: action.descricao }
        default:
            return state;
    }
}


export default props => {
    const [userData, dispatch] = useReducer(reducerUserData, {
        username: "",
        dataNascimento: "",
        email: "",
        senha: "",
        descricao: "",
    });

    const [editButton, setEditButton] = useState(false);
    const id = window.localStorage.getItem("Id")
    const [data, setData] = useState({})
useEffect(()=>{
    Axios.get("http://localhost:8080/auth/dev/"+id)
    .then((response) => {
        setData(response.data)
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error)}
    )

},[])
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />
            <main className="perfilDev__main">

                <section className="perfilDev__titlePage">
                    <h1>{translate("Meu perfil")}</h1>
                </section>

                <section className="perfilDev__userData">
                    <div className="perfilDev__userData__avatar">
                        <div className="perfilDev__userData__avatar__image">
                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__avatar__image__editImg" /> : false}
                        </div>
                    </div>


                    <div className="perfilDev__userData__inputs">
                        <div className="perfilDev__userData__input">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={data.nome} onChange={e => dispatch({ type: 'change_username', username: e.target.value })} aria-label="username"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="nascimento">{translate("Nascimento")}</label>
                            <input type="date" id="nascimento" value={data.dataNasc} readOnly aria-label="data de nascimento"></input>
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="email">{translate("Email")}</label>
                            <input type="email" id="email" value={data.login} onChange={e => dispatch({ type: 'change_email', email: e.target.value })} aria-label="email"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="senha">{translate("Senha")}</label>
                            <input type="password" id="senha" value={data.senha} onChange={e => dispatch({ type: 'change_senha', senha: e.target.value })} aria-label="senha"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__descr">
                            <div className="perfilDev__userData__input">
                                <label htmlFor="descricao">{translate("Descrição")}</label>
                                <textarea id="descricao" value={data.sobre} onChange={e => dispatch({ type: 'change_descricao', descricao: e.target.value })} aria-label="descrição"></textarea>

                                {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                            </div>
                            
                            <div className="perfilDev__userData__input">
                                <input type="button" id="editar" value={editButton ? "Salvar" : "Editar"} onClick={_ => {
                                    editButton ? setEditButton(false) : setEditButton(true)
                                }} aria-label="editar">
                                </input>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="perfilDev__actions">
                    <Link className="perfilDev__action" to="/meus-jogos" aria-label="meus Jogos">
                        <img src="/imgs/icons/mais_icon.png" alt="Ícone de Mais que redireciona para a página de Meus jogos do desesenvolvedor" />
                        <p>{translate("Meus jogos")}</p>
                    </Link>
                    <Link className="perfilDev__action" to="/pagamento-dev" aria-label="pagamento Dev">
                        <img src="/imgs/icons/pix__icon.svg" alt="Ícone de Pix que redireciona para a página de Requerimento de pagamento" />
                        <p>{translate("Requerimento de pagamento")}</p>
                    </Link>
                    <Link className="perfilDev__action" to="/relatorios-dev" aria-label="relatórios dev">
                        <img src="/imgs/icons/dashboard__icon.png" alt="Ícone de um gráfico que redireciona para a página de relatórios do desenvolvedor" />
                        <p>{translate("Dashboard")}</p>
                    </Link>
                    <Link className="perfilDev__action" to="/cadastro-jogo" aria-label="cadastro jogo">
                        <img src="/imgs/icons/controler__icon.png" alt="Ícone de um controle que redireciona para a página cadastramento de jogo" />
                        <p>{translate("Cadastrar Jogo")}</p>
                    </Link>
                </section>
            </main>
        </div>
    )
}