import "./style.css";
import React from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default props => {
    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />
            <main className="meusjogos__main">
                <section className="meusjogos__title">
                    <div className="meusjogos__title__name">

                    </div>
                    <div className="meusjogos__title__filter">

                    </div>
                </section>

                <section className="meusjogos__menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>

                <section className="meusjogos__jogos">
                    <div className="meusjogos__jogos__card">
                        <div className="meusjogos__jogos__card__info">
                            <div className="meusjogos__jogos__card__info__title">
                                <p>Celeste</p>
                            </div>
                            <div className="meusjogos__jogos__card__info__image">
                                <img src="../../../public/imgs/jogos/meusjogos_01.png" alt="imagem do jogo comprado" />
                            </div>
                        </div>

                        <div className="meusjogos__jogos__card__actions">
                            <div className="meusjogos__jogos__card__actions__dateInfo">
                                <p>Data de compra</p>
                                <p>1 de Jan de 2023</p>
                            </div>
                            <div className="meusjogos__jogos__card__actions__action">
                                 <Link>
                                     <img src="../../../public/imgs/icons/download_icon.png" alt="icone de download" />
                                     <p>Download</p>
                                 </Link>
                                 <Link>
                                     <img src="../../../public/imgs/icons/review_icon.png" alt="icone de livro para fazer um review do jogo" />
                                     <p>Cadastro review</p>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}