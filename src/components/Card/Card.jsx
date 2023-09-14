/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { selectGame } from '../../redux/actions'
import { connect } from 'react-redux'

const Card = ({games, game}) => {
  const handleClickAdd = (game) => {
    selectGame(game);
  };

  return (
    <div className="border__card">
    <div className="card">
      <div className="card__image">
        <img src={games[game]?.background_image} alt={games[game]?.name} />
      </div>
      <h2>{games[game]?.name}</h2>
      <div className="card__genres">
        {games[game]?.genres.map((genres) => 
        <p key={genres?.id}>{genres?.name}</p>
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