/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { selectGame, showAlert } from '../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({game, dispatch, cart}) => {
  var carrinho = cart.cart.every(c => c?.id !== game?.id)
  const handleClickAdd = (game) => {
    if(carrinho){
      dispatch(selectGame(game));
    }
  };

  return (
  <>
    <div className="border__card">
    <div className="card">
      <Link to={`/jogos/${game?.name?.toLowerCase().replace(/ /g,"-")}`} key={game?.id}  aria-tts={game?.name?.toLowerCase().replace(/ /g,"-")}>
        <div className="card__image">
          <img src={game?.background_image} alt={game?.name} />
        </div>
      </Link>
      <Link to={`/jogos/${game}`} key={game?.id} aria-tts={game?.name?.toLowerCase().replace(/ /g,"-")}> 
        <h2>{game?.name}</h2>
      </Link>
      <div className="card__genres">
        {game?.genres?.map((genres) => 
        <Link to={`/categorias/category=${genres?.name}`} key={genres?.id} aria-tts={genres?.name}>
          <p key={genres?.id}>{genres?.name}</p>
        </Link>
        )}
      </div>
      <div className="border__price">
        <div className="price">
          <h2>R${game?.rating.toFixed(2)}</h2>
          <i className="fa-solid fa-cart-shopping" onClick={() => handleClickAdd(game)}></i>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Card);