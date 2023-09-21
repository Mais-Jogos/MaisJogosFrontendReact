import React, { useState, useEffect } from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Axios from 'axios';
import './style.css'
import Footer from '../../components/Footer/Footer';

const ListadeDesejos = () => {
    const [games, setGames] = useState([]); 
    useEffect(()=>{
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then((response) =>{
          setGames(response.data.results);
        }).catch((error) => { console.log(error); }); 
    }, [])
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <div id="games__desire">
            <h2><i className="fa-solid fa-heart"></i> Lista de desejos</h2>
            <div className="section__games__desire">
                {games?.map((game, index)=>(
                    <Card games={games} game={index} key={game?.id}/>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ListadeDesejos