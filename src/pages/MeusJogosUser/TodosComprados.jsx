import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        <>
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
                        <p>Data da compra</p>
                        <p>19 de Out 2023</p>
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

            <div className="meusjogos__jogos__card">
                <div className="meusjogos__jogos__card__info">
                    <div className="meusjogos__jogos__card__info__title">
                        <p>A Lenda do Herói</p>
                    </div>
                    <div className="meusjogos__jogos__card__info__image">
                        <img src="../../../public/imgs/jogos/meusjogos_02.png" alt="imagem do jogo comprado" />
                    </div>
                </div>

                <div className="meusjogos__jogos__card__actions">
                    <div className="meusjogos__jogos__card__actions__dateInfo">
                        <p>Data da compra</p>
                        <p>01 de Out 2023</p>
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

            <div className="meusjogos__jogos__card">
                <div className="meusjogos__jogos__card__info">
                    <div className="meusjogos__jogos__card__info__title">
                        <p>Guns N' Runs</p>
                    </div>
                    <div className="meusjogos__jogos__card__info__image">
                        <img src="../../../public/imgs/jogos/meusjogos_03.png" alt="imagem do jogo comprado" />
                    </div>
                </div>

                <div className="meusjogos__jogos__card__actions">
                    <div className="meusjogos__jogos__card__actions__dateInfo">
                        <p>Data da compra</p>
                        <p>22 de Set 2023</p>
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

            <div className="meusjogos__jogos__card">
                <div className="meusjogos__jogos__card__info">
                    <div className="meusjogos__jogos__card__info__title">
                        <p>Pocket Bravery</p>
                    </div>
                    <div className="meusjogos__jogos__card__info__image">
                        <img src="../../../public/imgs/jogos/meusjogos_04.png" alt="imagem do jogo comprado" />
                    </div>
                </div>

                <div className="meusjogos__jogos__card__actions">
                    <div className="meusjogos__jogos__card__actions__dateInfo">
                        <p>Data da compra</p>
                        <p>17 de Ago 2023</p>
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
        </>


    )
}