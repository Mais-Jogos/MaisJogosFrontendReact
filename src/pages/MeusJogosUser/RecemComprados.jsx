import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRef } from "react";
import Loading from "../../components/Loading/Loading";

export default props => {
    const [games, setGames] = useState([]);
    const token = window.localStorage.getItem("token")
    const [loading, setLoading] = useState(<Loading/>)
    const [leitor, setLeitor] = useState(false);

    useEffect(() => {
        Axios.get("https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos", {
            headers:{
              Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("Jogos", response.data);
            setGames(response.data);
            setLeitor(true);
            setLoading(null)
        }).catch((error) => { console.log(error); setLoading(null)});
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
                        setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [leitor])


    { props.sortData ? games.sort((a, b) => a.id[0] > b.id[0] ? 1 : -1) : "" }
    { !props.sortData ? games.sort((a, b) => b.id[0] > a.id[0] ? 1 : -1) : "" }

    
    return (
        <>
        {loading}
            {
                games?.slice(0, 3).map((jogo) => (
                    <div className="meusjogos__jogos__card">
                        <div className="meusjogos__jogos__card__info">
                            <div className="meusjogos__jogos__card__info__title">
                                <p>{jogo?.titulo}</p>
                            </div>
                            <div className="meusjogos__jogos__card__info__image">
                                <img src={`data:imga/png;base64, ${jogo?.bannerUm}`} alt="imagem do jogo comprado" />
                            </div>
                        </div>

                        <div className="meusjogos__jogos__card__actions">
                            <div className="meusjogos__jogos__card__actions__dateInfo">
                                <p>Data da compra</p>
                                <p>19 de Out 2023</p>
                            </div>
                            <div className="meusjogos__jogos__card__actions__action">
                                <Link aria-label="download" className="meusjogos__jogos__links">
                                    <img src="/imgs/icons/download_icon.svg" alt="icone de download" />
                                    <p>Download</p>
                                </Link>
                                <Link to={`/cadastro-review/${jogo?.id}`} aria-label={"cadastro review " + jogo?.titulo?.toLowerCase().replace(/ /g, "-")} className="meusjogos__jogos__links">
                                    <img src="/imgs/icons/review_iconw.svg" alt="icone de livro para fazer um review do jogo" />
                                    <p>Cadastro review</p>
                                </Link>
                            </div>
                        </div>
                    </div>))
            }
        </>

    )
}