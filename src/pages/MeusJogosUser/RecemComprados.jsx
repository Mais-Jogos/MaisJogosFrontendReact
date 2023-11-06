import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRef } from "react";

export default props => {
    const [games, setGames] = useState([]);
    const [leitor, setLeitor] = useState(false);


    useEffect(() => {
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
            .then((response) => {
                setGames(response.data.results);
                setLeitor(true);

            }).catch((error) => { console.log(error); });
    }, [])


    // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
    const initialized = useRef(false);

    useEffect(_ => {
        if (!initialized.current && leitor) {
            initialized.current = true

            $(document).ready(function () {
                $('.meusjogos__jogos__links').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [leitor])


    { props.sortData ? games.sort((a, b) => a.slug[0] > b.slug[0] ? 1 : -1) : "" }
    { !props.sortData ? games.sort((a, b) => b.slug[0] > a.slug[0] ? 1 : -1) : "" }

    
    return (
        <>
            {
                games?.slice(0, 3).map((jogo) => (
                    <div className="meusjogos__jogos__card">
                        <div className="meusjogos__jogos__card__info">
                            <div className="meusjogos__jogos__card__info__title">
                                <p>{jogo?.name}</p>
                            </div>
                            <div className="meusjogos__jogos__card__info__image">
                                <img src={jogo?.background_image} alt="imagem do jogo comprado" />
                            </div>
                        </div>

                        <div className="meusjogos__jogos__card__actions">
                            <div className="meusjogos__jogos__card__actions__dateInfo">
                                <p>Data da compra</p>
                                <p>19 de Out 2023</p>
                            </div>
                            <div className="meusjogos__jogos__card__actions__action">
                                <Link aria-tts="download" className="meusjogos__jogos__links">
                                    <img src="/imgs/icons/download_icon.svg" alt="icone de download" />
                                    <p>Download</p>
                                </Link>
                                <Link to={`/cadastro-review/${jogo?.name?.toLowerCase().replace(/ /g, "-")}`} aria-tts={"cadastro review " + jogo?.name?.toLowerCase().replace(/ /g, "-")}
                                    className="meusjogos__jogos__links">
                                    <img src="/imgs/icons/review_icon.svg" alt="icone de livro para fazer um review do jogo" />
                                    <p>Cadastro review</p>
                                </Link>
                            </div>
                        </div>
                    </div>))
            }
        </>

    )
}