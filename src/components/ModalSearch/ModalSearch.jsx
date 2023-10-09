import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"

const ModalSearch = (props) => {
    const { search } = props;
    const [games, setGames] = useState()
    useEffect(()=>{
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then((response) =>{
          setGames(response.data.results);
        }).catch((error) => { console.log(error); }); 
    }, [])
    const generos = games ? []?.concat(...games?.map((game) => game?.genres)) : []
    const plataformas = games ? []?.concat(...games?.map((game) => game?.parent_platforms)) : []
    const plataformas2 = games ? []?.concat(...plataformas?.map((game) => game?.platform)) : []
  return (
    <div className="modal__search">
        <ul>
            <h3>Jogos</h3>
            {games?.map((game, index) => game?.name.toLowerCase().includes(search.toLowerCase()) && (
            <Link key={index} to={`/jogos/${index}`}>{game?.name}</Link>
            ))}
        </ul>
        <ul>
            <h3>Gêneros</h3>
            {generos && 
            [...new Set(generos.map((game) => game.name))]
            .map(genero =>  genero.toLowerCase().includes(search.toLowerCase()) && (
                <Link key={genero} to={`/categorias/category=${genero}`}>{genero}</Link>
            ))}
        </ul>
        <ul>
            <h3>Plataformas</h3>
            {plataformas2 && 
            [...new Set(plataformas2?.map((game) => game.name))]
            .map(plataforma => plataforma.toLowerCase().includes(search.toLowerCase()) && (
            <Link key={plataforma} to={`/categorias/category=${plataforma}`}>{plataforma}</Link>
            ))}
        </ul>
    </div>
  )
}

export default ModalSearch