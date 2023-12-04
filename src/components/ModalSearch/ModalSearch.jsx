import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"

const ModalSearch = (props) => {
    const { search } = props;
    const [games, setGames] = useState()
    useEffect(()=>{
        Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos`).then((response) => {
            setGames(response.data);
        }).catch((error) => { console.log(error); });
    }, [])
    const generos = ["Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror"]
    const plataformas = ["Windows", "MacOs", "Linux", "Android", "IOS"]
  return (
    <div className="modal__search">
        <ul>
            <h3 aria-label="Buscar jogos">Jogos</h3>
            {games?.map((game, index) => game?.titulo.toLowerCase().includes(search.toLowerCase()) && (
            <Link key={index} to={`/jogos/${game?.titulo?.toLowerCase().replace(/ /g,"-")}`}  aria-label={game?.titulo}>{game?.titulo}</Link>
            ))}
        </ul>
        <ul>
            <h3 aria-label="Buscar gêneros">Gêneros</h3>
            {generos?.map(genero =>  genero.toLowerCase().includes(search.toLowerCase()) && (
                <Link key={genero} to={`/categorias/category=${genero}`}  aria-label={genero}>{genero}</Link>
            ))}
        </ul>
        <ul>
            <h3 aria-label="Buscar plataformas">Plataformas</h3>
            {plataformas?.map(plataforma => plataforma.toLowerCase().includes(search.toLowerCase()) && (
            <Link key={plataforma} to={`/categorias/category=${plataforma}`}  aria-label={plataforma}>{plataforma}</Link>
            ))}
        </ul>
    </div>
  )
}

export default ModalSearch