/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { selectGame } from '../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({games, game, dispatch}) => {
  const handleClickAdd = (game) => {
    dispatch(selectGame(games[game]));
  };

  return (
    <div className="border__card">
    <div className="card">
      <Link to={`/jogos/${game}`} key={game?.id}>
        <div className="card__image">
          <img src={games[game]?.background_image} alt={games[game]?.name} />
        </div>
      </Link>
      <Link to={`/jogos/${game}`} key={game?.id}>
        <h2>{games[game]?.name}</h2>
      </Link>
      <div className="card__genres">
        {games[game]?.genres.map((genres) => 
        <Link to={`/categorias/category=${genres?.name}`} key={genres?.id}>
          <p key={genres?.id}>{genres?.name}</p>
        </Link>
        )}
      </div>
      <div className="border__price">
        <div className="price">
          <h2>R${games[game]?.rating}</h2>
          <i className="fa-solid fa-cart-shopping" onClick={() => handleClickAdd(game)}></i>
        </div>
      </div>
    </div>
  </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Card);