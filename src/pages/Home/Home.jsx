// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import './style.css'
import { Link } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'

const Home = () => {
  const [image, setImage] = useState(1);
  const [games, setGames] = useState([]); 
  const [game, setGame] = useState(0)
  const [category, setCategory] = useState('Todos');
  function changeImage(){
    if(image === 3){
      setImage(1)
    }else{
      setImage(image + 1)
    }
  }
  useEffect(()=>{
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then((response) =>{
      setGames(response.data.results);
    }).catch((error) => { console.log(error); }); 
  }, [])
  useEffect(() => {  
    var intervalImage = setInterval(changeImage, 2 * 1000);
    return () => {
      clearInterval(intervalImage);
    };
  }, [changeImage]);  
  const generos = [].concat(...games.map((game) => game.genres))

  return (
    <div id='container-page' className='home'>
      <Menu/>
      <Acessibilidade/>
      <div id="container">
        <div className="section__categories">
            <h2>Categorias</h2>
            <p onClick={() => setCategory('Todos')}>Todos</p>
            {
              [...new Set(generos?.map((game) => game.name))].map(category => (
                <p key={category} onClick={() => setCategory(category)}>{category}</p>
              ))
            }
        </div>
        <div className="container__home__right">
          <div className="section__title">
            <h1>
              Loja nacional de jogos indie
            </h1>
{/*             <img src={`../../public/imgs/animais/${image}.png`} alt="" />
 */}          </div>
          <div className="section__banner">
            <p onClick={()=>setGame(game-1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <img src={games[game]?.background_image} alt="" />
            <p onClick={()=>setGame(game+1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div id="games">
            <h2>Novidades</h2>
            <div className="section__games">
              {games?.filter((game => {
                  if (category === 'Todos') {
                    return true;
                  } else {
                    return game.genres.some(genre => genre.name === category);
                  }
                })).map((game, index)=>(
                <Link to={`/jogos/${index}`} key={game?.id}>
                  <Card games={games} game={index}/>
                </Link>
              ))}
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Home