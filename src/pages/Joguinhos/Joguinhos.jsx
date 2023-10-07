// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'
import JogodaVelha from '../../games/JogodaVelha/JogodaVelha'
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Jokenpo from '../../games/Jokenpo/Jokenpo'
import Quiz from '../../games/Quiz/Quiz'
import Footer from '../../components/Footer/Footer'

const Joguinhos = () => {
  const [jogo, setJogo] = useState('')
  return (
    <div id='container-page'>
      <Menu/>
      <Acessibilidade/>
      {jogo !== '' ? 
      <div className="back__menu">
        <button onClick={()=> setJogo('')}>
          Salvar e sair
        </button>
      </div>:null}
      <div className="title__page__game">
        <h2>Jogue para ganhar moedas</h2>
      </div>
      {jogo === '' ?
      <div className="container__games">
        <div className="border__card__game" onClick={()=> setJogo('JogodaVelha')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'../../public/imgs/jogos/jogoDaVelha.jpeg'} alt={'JogodaVelha'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>Jogo da Velha</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="border__card__game" onClick={()=> setJogo('Jokenpo')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'../../public/imgs/jogos/jokenpo.jpeg'} alt={'Jokenpo'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>Jokenpo</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="border__card__game" onClick={()=> setJogo('Quiz')}>
          <div className="card__game">
            <div className="card__image__game">
              <img src={'../../public/imgs/jogos/quiz.jpeg'} alt={'Quiz'} />
            </div>
            <div className="border__title__game">
              <div className="title__game">
              <h2>Quiz</h2>
              </div>
            </div>
          </div>
        </div>
      </div> : 
      jogo === 'Jokenpo' ? 
      <Jokenpo/> : jogo === 'JogodaVelha' ?
      <JogodaVelha />:
      <Quiz/>}
      <Footer/>
    </div>
  )
}

export default Joguinhos