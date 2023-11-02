import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Menu from '../../components/Menu/Menu'
import "./style.css"
import Axios from 'axios'
import Vlibras from '../../components/Vlibras/Vlibras'
import { translate } from '../../translate/translate'

const CadastroReview = () => {
  const [game, setGame] = useState(); 
  const [review, setReview] = useState({
    rating:5,
    descripition:"",
  })
  const {name} = useParams();
  const navigate = useNavigate();

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
      <Vlibras/>
      <Acessibilidade/>
      <div className="cadastro-review">
        <div className="cadastro-review__title__name">
          <i className="fa-solid fa-book-bookmark "></i>
          <h1>{translate("Cadastrar Review")}</h1>
        </div>
        <div className="cadastro-review__form">
          <img src={game?.background_image} alt="" />
          <h2>{game?.name}</h2>
          <div className="cadastro-review__avaliacao">
            {translate("Avaliação")}
            <div>
            {[1,2,3,4,5].map((num, index)=>(
              <i class={`fa-${num <= review?.rating ? 'solid':'regular'} fa-star`} key={index} onClick={() => setReview({...review, rating: num})}></i>
            ))}
            <p>{review?.rating}/5</p>
            </div>
          </div>
          <label htmlFor="review">{translate("Review")}:</label>
          <textarea name="review" id="review" cols="30" rows="10"></textarea>
          <div className="cadastro-review__btns">
            <button className='cadastro-review__btns-voltar' onClick={()=> navigate("/meus-jogos")}>
              <i class="fa-solid fa-arrow-rotate-left" ></i>{translate("Voltar")}
            </button>
            <div className="cadastro-review__btns-actions">
              <button className='cadastro-review__btns-excluir'>
                <i class="fa-regular fa-trash-can"></i>{translate("Excluir")}
              </button>
              <button className='cadastro-review__btns-salvar'>
                <i class="fa-regular fa-floppy-disk"></i>{translate("Salvar")}
              </button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default CadastroReview