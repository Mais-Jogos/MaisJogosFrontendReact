import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        <div className="meusjogos__jogos__card">
            <div className="meusjogos__jogos__card__info">
                <div className="meusjogos__jogos__card__info__title">
                    <p>{props.title || "Nome do jogo"}</p>
                </div>
                <div className="meusjogos__jogos__card__info__image">
                    <img src={props.scrImage} alt="imagem do jogo comprado" />
                </div>
            </div>

            <div className="meusjogos__jogos__card__actions">
                <div className="meusjogos__jogos__card__actions__dateInfo">
                    <p>Data da compra</p>
                    <p>{props.diaCompra || "1 de Jan 2023"}</p>
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
    )
}