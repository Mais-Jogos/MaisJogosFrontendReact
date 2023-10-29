import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Vlibras from '../../components/Vlibras/Vlibras'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

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


    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />
            <main className="perfilDev__main">

                <section className="perfilDev__titlePage">
                    <h1>Meu perfil</h1>
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
                            <input type="text" id="username" value={userData.username} onChange={e => dispatch({ type: 'change_username', username: e.target.value })} aria-label="Digite o username"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="nascimento">Nascimento</label>
                            <input type="date" id="nascimento" value={userData.dataNascimento} onChange={e => dispatch({ type: 'change_nascimento', nascimento: e.target.value })} aria-label="Digite sua data de nascimento"></input>
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={userData.email} onChange={e => dispatch({ type: 'change_email', email: e.target.value })} aria-label="Digite seu email"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" value={userData.senha} onChange={e => dispatch({ type: 'change_senha', senha: e.target.value })} aria-label="Digite sua senha"></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilDev__userData__descr">
                            <div className="perfilDev__userData__input">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea id="descricao" value={userData.descricao} onChange={e => dispatch({ type: 'change_descricao', descricao: e.target.value })} aria-label="Digite sua descrição"></textarea>

                                {editButton ? <img src="/imgs/icons/edit_icon.png" alt="Ícone de edição dos inputs" className="perfilDev__userData__input__editImg" /> : false}
                            </div>
                            
                            <div className="perfilDev__userData__input">
                                <input type="button" id="editar" value={editButton ? "Salvar" : "Editar"} onClick={_ => {
                                    editButton ? setEditButton(false) : setEditButton(true)
                                }} aria-label="Botão de editar as informações">
                                </input>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="perfilDev__actions">
                    <Link className="perfilDev__action" to="/">
                        <img src="/imgs/icons/mais_icon.png" alt="Ícone de Mais que redireciona para a página de Meus jogos do desesenvolvedor" />
                        <p>Meus jogos</p>
                    </Link>
                    <Link className="perfilDev__action" to="/">
                        <img src="/imgs/icons/eventos_icon.svg" alt="Ícone de Eventos que redireciona para a página de eventos" />
                        <p>Eventos</p>
                    </Link>
                    <Link className="perfilDev__action" to="/relatorios-dev">
                        <img src="/imgs/icons/dashboard__icon.png" alt="Ícone de um gráfico que redireciona para a página de relatórios do desenvolvedor" />
                        <p>Dashboard</p>
                    </Link>
                    <Link className="perfilDev__action" to="/cadastro-jogo">
                        <img src="/imgs/icons/controler__icon.png" alt="Ícone de um controle que redireciona para a página cadastramento de jogo" />
                        <p>Cadastrar Jogo</p>
                    </Link>
                </section>
            </main>
        </div>
    )
}