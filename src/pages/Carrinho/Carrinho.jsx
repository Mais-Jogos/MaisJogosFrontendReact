/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import { connect } from 'react-redux'
import './style.css'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import CardCart from '../../components/CardCart/CardCart';
import Vlibras from '../../components/Vlibras/Vlibras';
import { useNavigate } from 'react-router-dom';
import { translate } from '../../translate/translate';
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const Carrinho = ({ cart }) => {
  const [total, setTotal] = useState(0)
  const [selectedGames, setSelectedGames] = useState(cart.cart)
  const navigate = useNavigate()
  useEffect(() => {
    setSelectedGames(cart.cart.map((game) => {
      if(selectedGames === cart.cart){
        return {
          ...game,
          selected: true,
        }
      }else{
        const oldGame = selectedGames.filter(g => g.id === game.id)
        if(oldGame.selected === false){
          return oldGame
        }
      }
    }))
    setTotal(selectedGames.map(game => game?.rating).reduce((prev, curr) => prev + curr, 0))

  }, [cart.cart])

  const onChangeSelected = (game, selected) =>{
    const newGames = selectedGames.map(mapGames => {
      if(mapGames === game){
        return{
          ...mapGames,
          selected: selected,
        }
      }
      return mapGames;
    })
    setSelectedGames(newGames)
    console.log(newGames);
  }
  const deleteGames = (game) =>{
    const deleteGame = selectedGames.filter(mapGames => mapGames === game)
    setSelectedGames(deleteGame)
    console.log(deleteGame);
  }
  return (
    <div id='container-page'>
      <Menu />
      <Vlibras />
      <Acessibilidade />
      <TextToSpeech />

      <div id="cart">
        <div className="title__cart">
          <img src="/imgs/icons/cart.png" alt="" />
          <h2>{translate("Seu Carrinho")}</h2>
        </div>
        <div className="cart__games">
          {cart?.cart.map((game, index) => (
            <CardCart game={game} key={game?.id}/>
          ))}
          {cart?.cart.length === 0 && <p style={{ height: '150px' }}></p>}
        </div>
        <div className="cart__total">
          <div className="cart__price">
            <h2>{translate("SubTotal")} <b>R${total.toFixed(2)}</b></h2>
          </div>
          <button className="finalizar__pedido">
            {translate("Finalizar pedido")}
          </button>
        </div>
        <button className="continuar__comprando" onClick={() => navigate("/")}>
          {translate("Continuar comprando")}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Carrinho);