/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { offContrastTheme, contrastTheme, changeLanguage } from '../../redux/actions';
import PropTypes from 'prop-types';
import './style.css'

const Acessibilidade = ({ theme, offContrastTheme, contrastTheme }) => {
  const [hoverSettings, setHoverSettings] = useState(false)
  const [fontSize, setFontSize] = useState(document.querySelector('#htmlRoot').style.fontSize == "" ? 16 : parseInt(document.querySelector('#htmlRoot').style.fontSize.slice(0,2)))
  const dispatch = useDispatch();

  function changeLang(lang){
    dispatch(changeLanguage(lang));
  }

  function fonte(fonte) {
    $(document).ready(function () {
      
      $('#aumentar').click(function () {
        if (fonte < 20) {
          fonte++
          $('#htmlRoot').css({ 'font-size': fonte + 'px' })
          setFontSize(fonte)
        }
      })
      $('#diminuir').click(function () {
        if (fonte > 10) {
          fonte--
          $('#htmlRoot').css({ 'font-size': fonte + 'px' })
          setFontSize(fonte)
        }
      })
    })
  }

  return (
    <Link className='settings' onClick={() => setHoverSettings(!hoverSettings)} title='Configurações'>
      <i className="fa-solid fa-universal-access"></i>
      {hoverSettings &&
        <ul>
          <li onClick={fonte(fontSize)} id='aumentar'>
            Aumentar fonte
          </li>

          <li onClick={fonte(fontSize)} id='diminuir'>
            Diminuir fonte
          </li>

          <Link to={'/acessibilidade'}><li>Acessibilidade</li></Link>
          <li onClick={theme === 'contrast' ? offContrastTheme : contrastTheme}>{theme === 'contrast' ? 'Desativar' : 'Ativar'} contraste</li>
          <li className='acess-language'>
            Idioma 
            <img src="/imgs/icons/pt.png" title={"pt-br"} onClick={(e) => changeLang("pt")}/> 
            <img src="/imgs/icons/en.png" title={"eng"} onClick={(e) => changeLang("en")}/>
          </li>
        </ul>
      }
    </Link>
  )
}
Acessibilidade.propTypes = {
  theme: PropTypes.string.isRequired,
  offContrastTheme: PropTypes.func.isRequired,
  contrastTheme: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  return {
    theme: state.theme.theme,
    language: state.language,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, {
  contrastTheme: contrastTheme,
  offContrastTheme: offContrastTheme,
  changeLanguage: changeLanguage
})(Acessibilidade);

