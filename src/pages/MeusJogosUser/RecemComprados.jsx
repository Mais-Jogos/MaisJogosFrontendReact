import "./style.css";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default props => {
    const [games, setGames] = useState([]); 
    useEffect(()=>{
      const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
      Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) =>{
        setGames(response.data.results);
      }).catch((error) => { console.log(error); }); 
    }, [])
    return (
    <>
        {
            games?.slice(0,3).map((jogo) =>(
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
                        <Link>
                            <img src="../../../public/imgs/icons/download_icon.svg" alt="icone de download" />
                            <p>Download</p>
                        </Link>
                        <Link to={`/cadastro-review/${jogo?.name?.toLowerCase().replace(/ /g,"-")}`}>
                            <img src="../../../public/imgs/icons/review_icon.svg" alt="icone de livro para fazer um review do jogo" />
                            <p>Cadastro review</p>
                        </Link>
                    </div>
                </div>
            </div>))
        }
    </>
        
    )
}