import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Vlibras from '../../components/Vlibras/Vlibras'


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
        default:
            return state;
    }
}


export default props => {
    const [userData, dispatch] = useReducer(reducerUserData, {
        username: "",
        dataNascimento: "",
        email: "",
        senha: ""
    });

    const [editButton, setEditButton] = useState(false);


    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <main className="perfilUser__main">

                <section className="perfilUser__titlePage">
                    <h1>Meu perfil</h1>
                </section>

                <section className="perfilUser__userData">
                    <div className="perfilUser__userData__avatar">
                        <div className="perfilUser__userData__avatar__image">
                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__avatar__image__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__avatar__capCoins">
                            <img src="../../../public/imgs/icons/Kapicoin_icon.png" alt="icons da moeda da loja" />
                            <span>30.000</span>
                        </div>
                    </div>

                    <div className="perfilUser__userData__inputs">
                        <div className="perfilUser__userData__input">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={userData.username} onChange={e => dispatch({ type: 'change_username', username: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="nascimento">Nascimento</label>
                            <input type="date" id="nascimento" value={userData.dataNascimento} onChange={e => dispatch({ type: 'change_nascimento', nascimento: e.target.value })}></input>
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={userData.email} onChange={e => dispatch({ type: 'change_email', email: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" value={userData.senha} onChange={e => dispatch({ type: 'change_senha', senha: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <input type="button" id="editar" value={editButton ? "Salvar" : "Editar"} onClick={_ => {
                                editButton ? setEditButton(false) : setEditButton(true)
                            }}>
                            </input>
                        </div>
                    </div>
                </section>

                <section className="perfilUser__actions">
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/mais_icon.png" alt="icone de Mais que redireciona para a página descrita" />
                        <p>Meus jogos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/heart_icon.png" alt="icone de Coração que redireciona para a página descrita" />
                        <p>Lista de desejos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/review_icon.svg" alt="icone de Livro que redireciona para a página descrita" />
                        <p>Review de jogos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/capivara_icon.svg" alt="icone da Capivara que redireciona para a página descrita" />
                        <p>Avatares comprados</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/eventos_icon.svg" alt="icone de Eventos que redireciona para a página descrita" />
                        <p>Eventos</p>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}