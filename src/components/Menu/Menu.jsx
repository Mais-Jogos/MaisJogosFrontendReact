import React, { useState, useReducer } from 'react'
import './style.css'
import { connect } from 'react-redux'; 
import { changeTheme } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalSearch from '../ModalSearch/ModalSearch';
import { translate } from '../../translate/translate.js';
import { useEffect } from 'react';

const Menu = ({changeTheme, theme, cart, coins, userRedux }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [modalSearch, setModalSearch] = useState(false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dispatch = useDispatch();
  const type = window.localStorage.getItem("type");
  const token = window.localStorage.getItem("token");

  if ((defaultDark && theme === 'light') || (!defaultDark && theme === 'dark')) {
    dispatch(changeTheme());
  }
  return (
    <div id='full-menu'>
        <Link to="/" aria-label="início">
          <img src={'/imgs/LogoTextoPositiva.png'} alt="" className='logo'/>
        </Link>
        <label htmlFor="openMenu" id='label__openMenu'>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="openMenu" id="openMenu" />
        <div id="menu">
            <Link to="/acessibilidade" aria-label="acessibilidade">{translate("Acessibilidade")}</Link>
            <Link to="/sobre" aria-label="sobre">{translate("Sobre")}</Link>
            <Link to="/faq" aria-label="suporte"> {translate("Suporte")}</Link>
            {<Link to="/joguinhos" aria-label="joguinhos">{translate("Joguinhos")}</Link>}
            <Link className='menu__search' aria-label="busca">
              <input 
                type="text" 
                placeholder={translate('Buscar jogo')} 
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setModalSearch(!modalSearch)}
                aria-label="buscar jogo"
              />
              {modalSearch && search !== '' && 
              <i 
              className="fa-solid fa-circle-xmark" 
              onClick={() => setModalSearch(false)}
              ></i>}
              <i className="fa-solid fa-magnifying-glass"></i>
              {modalSearch && search !== '' && <ModalSearch search={search}/>}
            </Link>
            {(!type || !token) && 
            <Link to="/entrar" aria-label="entrar">
              {translate("Entrar")}
            </Link>}

            {token &&  type === "user" && <Link to="/carrinho" aria-label="carrinho">
              {cart.cart.length} 
              <img src={'/imgs/icons/cart.png'} />
            </Link>}
            {token && type === "user" && <Link to="/avatares" aria-label="avatares">
              {coins.coins}
              <img src={'/imgs/icons/Kapicoin_icon.png'} />
            </Link>}
            <Link onClick={changeTheme} aria-label="tema">
              {theme === 'dark' ? 
              <i className="fa-solid fa-moon"></i>
              :
              <i className="fa-solid fa-sun"></i>}
            </Link>
            {token && type === "user" && <Link to="/perfil-user" aria-label="perfil usuário">
              <img src={`/imgs/animais/${userRedux.avatar.id}-face.png`} className='perfil-menu' style={{backgroundColor:userRedux.colorCard}}/>
            </Link>}
            {token && type === "admin" && <Link to="/gerenciamento-admin" aria-label="perfil admin">
              <img src={`/imgs/animais/2-face.png`} className='perfil-menu' style={{backgroundColor:'var(purple)'}}/>
            </Link>}
            {token && type === "dev" && <Link to="/perfil-dev" aria-label="perfil desenvolvedor">
              <img src={`/imgs/animais/1-face.png`} className='perfil-menu' style={{backgroundColor:'var(purple)'}}/>
            </Link>}
        </div>
    </div>
  )
}
Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  cart: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  userRedux:PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  return {
    theme: state.theme.theme,
    cart: state.cart,
    coins: state.coins,
    userRedux: state.userRedux
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, {
  changeTheme: changeTheme,
})(Menu);

