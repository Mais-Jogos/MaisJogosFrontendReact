/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'
import { connect } from 'react-redux'; 
import { changeTheme } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalSearch from '../ModalSearch/ModalSearch';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = ({changeTheme, theme, cart}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [modalSearch, setModalSearch] = useState(false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dispatch = useDispatch();

  if ((defaultDark && theme === 'light') || (!defaultDark && theme === 'dark')) {
    dispatch(changeTheme());
  }
  return (
    <div id='full-menu'>
        <Link to="/">
          <img src="../public/imgs/logo/logoTextoPositiva.png" alt="" className='logo'/>
        </Link>
        <label htmlFor="openMenu" id='label__openMenu'>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="openMenu" id="openMenu" />
        <div id="menu">
            <Link to="#">Acessibilidade</Link>
            <Link to="#">Sobre</Link>
            <Link to="#">Suporte</Link>
            <Link className='menu__search' >
              <input 
                type="text" 
                placeholder='Buscar jogo' 
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setModalSearch(!modalSearch)}
              />
              {modalSearch && search !== '' && 
              <i 
              className="fa-solid fa-circle-xmark" 
              onClick={() => setModalSearch(false)}
              ></i>}
              <i className="fa-solid fa-magnifying-glass"></i>
              {modalSearch && search !== '' && <ModalSearch search={search}/>}
            </Link>
            <Link to="/entrar">Entrar</Link>
            <Link to="/carrinho">
              {cart.cart.length} 
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="#">
              0 
              <i className="fa-brands fa-bitcoin"></i>
            </Link>
            <Link onClick={changeTheme}>
              {theme === 'dark' ? 
              <i className="fa-solid fa-moon"></i>
              :
              <i className="fa-solid fa-sun"></i>}
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

