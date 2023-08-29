/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import { selectGame } from '../../redux/actions'
import { connect } from 'react-redux'
import './style.css';
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';

const Game = ({dispatch}) => {
    const [games, setGames] = useState([]); 
    useEffect(() => {  
      const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
      Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) =>{
        setGames(response.data.results);
      }).catch((error) => { console.log(error); }); 
    }, []); 
    const handleClickAdd = (game) => {
      dispatch(selectGame(game));
    };
    const {id} = useParams();
    console.log(games[id]);
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <div>
          <div className="game__page">
            <img src={games[id]?.background_image} alt="" />
            <div className="text__game__page">
              <h2>{games[id]?.name}</h2>
              <p>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi quod nihil, et consequuntur aut rem unde laborum quasi nesciunt. Quaerat, dignissimos voluptate. Perferendis, ex commodi eius in blanditiis tenetur?</p>
              <div className="game__page__genres">
                {games[id]?.genres.map((genres) => 
                  <span key={genres?.id}>{genres?.name}</span>
                )}
              </div>
              <button onClick={() => handleClickAdd(games[id])}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Game)