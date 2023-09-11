/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'
import { connect } from 'react-redux'; 
import { changeTheme } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = ({changeTheme, theme, cart}) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dispatch = useDispatch();

  if ((defaultDark && theme === 'light') || (!defaultDark && theme === 'dark')) {
    dispatch(changeTheme());
  }
  return (
    <div id='full-menu'>
        <Link to="/">
          <img src="../public/imgs/logoTextoPositiva.png" alt="" className='logo'/>
        </Link>
        <div id="menu">
            <Link className='menu__search'>
              <input type="text" placeholder='Buscar jogo'/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to="#">Categoria</Link>
            <Link to="/jogos"
           >+Joguinhos</Link>
            <Link to="/entrar">Entrar</Link>
            <Link to="/carrinho">
              {cart.cart.length} 
              <i className="fa-solid fa-cart-shopping"
             ></i>
            </Link>
            <Link to="#">
            0 
              <i className="fa-brands fa-bitcoin"
             ></i>
            </Link>
            <Link onClick={changeTheme}>
              {theme === 'dark' ? 
              <i className="fa-solid fa-moon"
             ></i>
              :
              <i className="fa-solid fa-sun"
             ></i>}
            </Link>
        </div>
    </div>
  )
}
Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  cart: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  return {
    theme: state.theme.theme,
    cart: state.cart,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, {
  changeTheme: changeTheme,
})(Menu);

