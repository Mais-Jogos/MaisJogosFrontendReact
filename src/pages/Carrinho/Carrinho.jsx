/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import { connect } from 'react-redux'
import './style.css'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import CardCart from '../../components/CardCart/CardCart';
import Footer from '../../components/Footer/Footer';

const Carrinho = ({cart}) => {
  const [total, setTotal] = useState(0)
  useEffect(() =>{
    setTotal(cart?.cart.map(game => game?.rating).reduce((prev, curr) => prev + curr, 0))
    console.log(cart?.cart);
  }, [cart.cart])
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <div id="cart">
          <div className="title__cart">
            <img src="imgs/icons/cart.png" alt="" />
            <h2>Seu Carrinho</h2>
          </div>
          <div className="cart__games">
            {cart?.cart.map((game, index) =>(
              <CardCart games={cart.cart} game={index} key={game?.id}/>
            ))}
            {cart?.cart.length === 0 && <p style={{height:'150px'}}>a</p>}
          </div>
          <div className="cart__total">
            <div className="cart__price">
              <h2>SubTotal <b>R${total}</b></h2>
            </div>
            <button className="finalizar__pedido">
              Finalizar pedido
            </button>
          </div>
          <button className="continuar__comprando">
            Continuar comprando
          </button>
        </div>
        <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Carrinho);