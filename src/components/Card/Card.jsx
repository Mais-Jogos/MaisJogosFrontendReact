/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { selectGame } from '../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({games, game, dispatch}) => {
  const handleClickAdd = (game) => {
    dispatch(selectGame(game));
  };

  return (
    <div className="border__card">
    <div className="card">
      <Link to={`/jogos/${game}`}>
        <div className="card__image">
          <img src={games[game]?.background_image} alt={games[game]?.name} />
        </div>
        <h2>{games[game]?.name}</h2>
      </Link>
      <div className="card__genres">
        {games[game]?.genres.map((genres) => 
        <p key={genres?.id}>{genres?.name}</p>
        )}
      </div>
      <div className="border__price">
        <div className="price">
          <Link to={`/jogos/${game}`}>
            <h2>R${games[game]?.rating}</h2>
          </Link>
          {window.location.pathname !== "/carrinho" ?
          <i className="fa-solid fa-cart-shopping" onClick={() => handleClickAdd(games[game])}></i>:
          <i className="fa-solid fa-trash"></i>}
          {window.location.pathname !== "/lista-de-desejos" ?
          <i className="fa-solid fa-heart"></i>:
          <i className="fa-solid fa-heart-crack"></i>}
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