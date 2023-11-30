/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import { deleteGame } from '../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CardCart = ({game, dispatch}) => {
  const handleClickAdd = (game) => {
    dispatch(deleteGame(game));
  };
  const choosePlataform = (plataform) =>{
    if(plataform !== undefined){
      if(plataform?.toLowerCase() === 'pc'){
        return 'fa-solid fa-laptop'
      }else{
        return `fa-brands fa-${plataform?.toLowerCase()}`
      }
    }
  }

  return (
    <div className="border__card__cart">
        <div className="card__cart">
            <div className="card__cart__image">
                <img src={`data:image/png;base64,${game?.bannerUm}`} alt={game?.titulo} />
            </div>
            <div className="info__card__cart">
                <Link to={`/jogos/${game.toLowerCase().replace(/ /g, "-")}`} key={game?.id} aria-label={game?.titulo}>
                    <h2>{game?.titulo}</h2>
                </Link>
                <div className="card__cart__platforms">
                    <i className={choosePlataform(game?.plataforma)}></i>
                    <p className="classification__cart">L</p>
                </div>
                <div className="price">
                    <h2>R${game?.rating}</h2>
                </div>
                <div className="actions">
                    <i className="fa-solid fa-trash" onClick={() => handleClickAdd(game)}></i>
                    <input type="checkbox" name="cart" id={game?.titulo} aria-label="Remover jogo" defaultChecked={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CardCart);