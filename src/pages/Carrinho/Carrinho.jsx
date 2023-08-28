/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card';
import './style.css'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';

const Carrinho = ({cart}) => {
  const [total, setTotal] = useState(0)
  useEffect(() =>{
    setTotal(cart?.cart.map(game => game?.rating).reduce((prev, curr) => prev + curr, 0))
    console.log(cart.cart);
  }, [])
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <div id="cart">
          <h2>Carrinho</h2>
          <div className="cart__games">
            {cart?.cart.map((game, index) =>(
              <Card games={cart.cart} game={index} key={game?.id}/>
            ))}
          </div>
          <div className="cart__total">
          <div className="cart__border__price">
            <div className="cart__price">
            <h2>Total: R${total}</h2>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Carrinho);