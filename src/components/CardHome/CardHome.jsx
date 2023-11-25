/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { selectGame, showAlert } from '../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CardHome = ({game, dispatch, cart}) => {
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
      <Link to={`/jogos/${game?.titulo}`} key={game?.id}  aria-label={game?.titulo}>
        <div className="card__image">
          <img src={`http://localhost:8080${game?.bannerUm}`} alt={game?.titulo} />
        </div>
      </Link>
      <Link to={`/jogos/${game?.titulo}`} key={game?.id} aria-label={game?.titulo}> 
        <h2>{game?.titulo}</h2>
      </Link>
      <div className="card__genres">
        <Link to={`/categorias/category=${game?.genero}`} aria-label={game?.genero}>
          <p key={game?.genero}>{game?.genero}</p>
        </Link>
      </div>
      <div className="border__price">
        <div className="price">
          <h2>R${"100"}</h2>
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

export default connect(mapStateToProps)(CardHome);