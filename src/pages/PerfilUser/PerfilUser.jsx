import "./style.css"
import React from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';

export default props => {

    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />
            <main className="perfilUser__main">

                <section className="perfilUser__titlePage">
                    <h1>Meu perfil</h1>
                </section>

                <section className="perfilUser__userData">
                    <div className="perfilUser__userData__avatar">
                        <div className="perfilUser__userData__avatar__image"></div>

                        <div className="perfilUser__userData__avatar__capCoins">
                            <img src="../../../public/imgs/icons/Kapicoin_icon.png" alt="icons da moeda da loja" />
                            <span>30.000</span>
                        </div>
                    </div>
                    <div className="perfilUser__userData__inputs">
                        <div className="perfilUser__userData__input">
                            <label for="username">Username</label>
                            <input type="text" id="username"></input>
                        </div>
                        <div className="perfilUser__userData__input">
                            <label for="nascimento">Nascimento</label>
                            <input type="date" id="nascimento"></input>
                        </div>
                        <div className="perfilUser__userData__input">
                            <label for="email">Email</label>
                            <input type="email" id="email"></input>
                        </div>
                        <div className="perfilUser__userData__input">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha"></input>
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
                        <img src="../../../public/imgs/icons/review_icon.png" alt="icone de Livro que redireciona para a página descrita" />
                        <p>Review de jogos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/capivara_icon.png" alt="icone da Capivara que redireciona para a página descrita" />
                        <p>Avatares comprados</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/eventos_icon.png" alt="icone de Eventos que redireciona para a página descrita" />
                        <p>Eventos</p>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}