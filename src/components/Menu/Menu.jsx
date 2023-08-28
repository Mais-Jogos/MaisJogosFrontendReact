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
            <Link className='menu__search' /* style={{
              backgroundColor: window.location.pathname==='/'?'#ffffff25':null,
            }} */>
              <input type="text" placeholder='Buscar jogo' /* style={{
                color:window.location.pathname==='/'?'#fff': null
              }} *//>
              <i className="fa-solid fa-magnifying-glass" /* style={{
                color:window.location.pathname==='/'?'#fff': null
              }} */></i>
            </Link>
            <Link to="#"/*  style={{color:window.location.pathname==='/'?'#fff': null}} */>Categoria</Link>
            <Link to="/jogos"
           /*  style={{color:window.location.pathname==='/'?'#fff': null}} */>Ganhe moedas</Link>
            <Link to="/entrar"/*  style={{color:window.location.pathname==='/'?'#fff': null}} */>Entrar</Link>
            <Link to="/carrinho"/*  style={{color:window.location.pathname==='/'?'#fff': null}} */>
              {cart.cart.length} 
              <i className="fa-solid fa-cart-shopping"
             /*  style={{color:window.location.pathname==='/'?'#fff': null}} */></i>
            </Link>
            <Link to="#"/*  style={{color:window.location.pathname==='/'?'#fff': null}} */>
            0 
              <i className="fa-brands fa-bitcoin"
             /*  style={{color:window.location.pathname==='/'?'#fff': null}} */></i>
            </Link>
            <Link onClick={changeTheme}/*  style={{color:window.location.pathname==='/'?'#fff': null}} */>
              {theme === 'dark' ? 
              <i className="fa-solid fa-moon"
             /*  style={{color:window.location.pathname==='/'?'#fff': null}} */></i>
              :
              <i className="fa-solid fa-sun"
             /*  style={{color:window.location.pathname==='/'?'#fff': null}} */></i>}
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

