import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Menu from '../../components/Menu/Menu'
import "./style.css"
import Axios from 'axios'

const CadastroReview = () => {
  const [game, setGame] = useState(); 
  const [review, setReview] = useState({
    rating:0,
    descripition:"",
  })
  const {name} = useParams();

  useEffect(() => {  
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then((response) =>{
      setGame(response.data.results.filter(jogo => jogo.name.toLowerCase().replace(/ /g, "-") === name)[0])
    }).catch((error) => { console.log(error); }); 
  }, []); 
  return (
    <div id='container-page'>
      <Menu/>
      <Acessibilidade/>
      <div className="cadastro-review">
        <div className="cadastro-review__title__name">
          <img src="src\components\ReviewComp\review_icon.svg" alt="icone de controle de botões" />
          <h1>Cadastro Review</h1>
        </div>
        <div className="cadastro-review__form">
          <img src={game?.background_image} alt="" />
          {Array(5).map((num, index)=>(
            <i key={index} className={`fa-${rating <= filter.rating ? 'solid':'regular'} fa-star`} onClick={(e) => changeFilter(e, 'rating', rating)}></i>
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default CadastroReview