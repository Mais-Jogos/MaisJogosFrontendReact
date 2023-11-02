// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'
import JogodaVelha from '../../games/JogodaVelha/JogodaVelha'
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Jokenpo from '../../games/Jokenpo/Jokenpo'
import Quiz from '../../games/Quiz/Quiz'
import Vlibras from '../../components/Vlibras/Vlibras';
import { addCoins } from '../../redux/actions'
import { connect } from 'react-redux'
import {translate} from '../../translate/translate'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const Joguinhos = ({dispatch}) => {
  const [jogo, setJogo] = useState('')
  const [coins, setCoins] = useState(0)
  function saveGame(){
    if(coins > 0){
      dispatch(addCoins(coins))
    }
    setJogo('');
    setCoins(0);
  }
  return (
    <div id='container-page'>
      <Menu/>
      <Vlibras/>
      <Acessibilidade/>
      <div className="back__menu" style={{display: jogo ? 'flex' : 'none'}}>
        <button onClick={saveGame}>
          {translate("Salvar e sair")}
        </button>
      </div>
      <div className="title__page__game">
        <h2>{translate("Jogue para ganhar moedas")}</h2>
      </div>
      <div className="container__games" style={{display: !jogo ? 'flex' : 'none'}}>
        <div className="border__card__game" onClick={()=> setJogo('JogodaVelha')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'/imgs/jogos/jogoDaVelha.jpeg'} alt={'JogodaVelha'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>{translate("Jogo da Velha")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="border__card__game" onClick={()=> setJogo('Jokenpo')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'/imgs/jogos/jokenpo.jpeg'} alt={'Jokenpo'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>{translate("Jokenpo")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="border__card__game" onClick={()=> setJogo('Quiz')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'/imgs/jogos/quiz.jpeg'} alt={'Quiz'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>{translate("Quiz de jogos")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {jogo === 'Jokenpo' ? 
      <Jokenpo coins={coins} setCoins={setCoins}/> : jogo === 'JogodaVelha' ?
      <JogodaVelha coins={coins} setCoins={setCoins}/>: jogo === 'Quiz' ?
      <Quiz coins={coins} setCoins={setCoins}/> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  coins: state.coins,
});

export default connect(mapStateToProps)(Joguinhos);
