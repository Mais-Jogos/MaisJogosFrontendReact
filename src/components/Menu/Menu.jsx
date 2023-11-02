import React, { useState, useReducer } from 'react'
import './style.css'
import { connect } from 'react-redux'; 
import { changeTheme } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalSearch from '../ModalSearch/ModalSearch';
import { translate } from '../../translate/translate.js';

const Menu = ({changeTheme, theme, cart, coins, userRedux }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [modalSearch, setModalSearch] = useState(false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dispatch = useDispatch();
  const user = true;
  const admin = true;

  if ((defaultDark && theme === 'light') || (!defaultDark && theme === 'dark')) {
    dispatch(changeTheme());
  }
  return (
    <div id='full-menu'>
        <Link to="/" aria-tts="ínicio">
          <img src={'/imgs/LogoTextoPositiva.png'} alt="" className='logo'/>
        </Link>
        <label htmlFor="openMenu" id='label__openMenu'>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="openMenu" id="openMenu" />
        <div id="menu">
            <Link to="/acessibilidade" aria-tts="acessibilidade">{translate("Acessibilidade")}</Link>
            <Link to="/sobre" aria-tts="sobre">{translate("Sobre")}</Link>
            <Link to="/faq" aria-tts="faq"> {translate("Suporte")}</Link>
            {user && <Link to="/joguinhos" aria-tts="joguinhos">{translate("Joguinhos")}</Link>}
            <Link className='menu__search' aria-tts="busca">
              <input 
                type="text" 
                placeholder={translate('Buscar jogo')} 
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setModalSearch(!modalSearch)}
                aria-tts="buscar jogo"
              />
              {modalSearch && search !== '' && 
              <i 
              className="fa-solid fa-circle-xmark" 
              onClick={() => setModalSearch(false)}
              ></i>}
              <i className="fa-solid fa-magnifying-glass"></i>
              {modalSearch && search !== '' && <ModalSearch search={search}/>}
            </Link>
            <Link to="/entrar" aria-tts="entrar">{translate("Entrar")}</Link>
            <Link to="/carrinho" aria-tts="carrinho">
              {cart.cart.length} 
              <img src={'/imgs/icons/cart.png'} />
            </Link>
            <Link to="/avatares" aria-tts="avatares">
              {coins.coins}
              <img src={'/imgs/icons/Kapicoin_icon.png'} />
            </Link>
            <Link onClick={changeTheme} aria-tts="tema">
              {theme === 'dark' ? 
              <i className="fa-solid fa-moon"></i>
              :
              <i className="fa-solid fa-sun"></i>}
            </Link>
            <Link to="/perfil-user" aria-tts="perfil">
              <img src={`/imgs/animais/${userRedux.avatar.id}-face.png`} className='perfil-menu' style={{backgroundColor:userRedux.colorCard}}/>
            </Link>
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

