import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Menu from '../../components/Menu/Menu'
import "./style.css"
import Axios from 'axios'
import Vlibras from '../../components/Vlibras/Vlibras'
import { translate } from '../../translate/translate'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import authenticated from '../../api/authenticated';
import api from '../../api/api';

const CadastroReview = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const [game, setGame] = useState(); 
  const [review, setReview] = useState({
    notaReview:5,
    descricaoReview:"",
    dataReview:null,
    tituloReview:"",
    idUser: id,
    idJogo: 1,
  })
  const {name} = useParams();
  const navigate = useNavigate();


  useEffect(() => {  
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then((response) =>{
      setGame(response.data.results.filter(jogo => jogo.name.toLowerCase().replace(/ /g, "-") === name)[0])
    }).catch((error) => { console.log(error); }); 
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/review/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log(response.data);
        if(response.data.filter(review => review.jogo.toLowerCase().replace(/ /g, "-") === name).length > 0){
          setReview(response.data.filter(review => review.jogo.toLowerCase().replace(/ /g, "-") === name)[0]);

        }else{
          setReview({...review, jogo: game?.name})
        }
        console.log(review);
    }).catch((error) => { console.log(error); });
  }, []); 

  function cadastrarReview(){
    if(review.id){
      Axios.put(`https://backendmaisjogos-production.up.railway.app/api/review/${review.id}`, review,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        navigate("/review")
      })
      .catch((error) => console.log("Erro: ", error))
    }
    var data = new Date(),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'),
      ano  = data.getFullYear();
    const dataReview =  dia+"/"+mes+"/"+ano;
    const newReview = {...review, dataReview:dataReview, jogo:game?.name}
    Axios.post('https://backendmaisjogos-production.up.railway.app/api/review/salvar', newReview,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      navigate("/review")
    })
    .catch((error) => console.log("Erro: ", error))
    console.log(newReview);
  }
  return (
    <div id='container-page'>
      <Menu/>
      <Vlibras/>
      <Acessibilidade/>
      <TextToSpeech />

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
              <i class={`fa-${num <= review?.notaReview ? 'solid':'regular'} fa-star`} key={index} onClick={() => setReview({...review, notaReview: num})}></i>
            ))}
            <p>{review?.notaReview}/5</p>
            </div>
          </div>
          <label htmlFor="titulo">{translate("TituloReview")}:</label>
          <input type="text" defaultValue={review?.tituloReview} name="titulo" id="titulo" aria-label="titulo review" onChange={(e) =>setReview({...review, tituloReview:e.target.value})}/>
          <label htmlFor="review">{translate("Review")}:</label>
          <textarea defaultValue={review?.descricaoReview} name="review" id="review" cols="30" rows="10" aria-label="review" onChange={(e) =>setReview({...review, descricaoReview:e.target.value})}></textarea>
          <div className="cadastro-review__btns">
            <button className='cadastro-review__btns-voltar' onClick={()=> navigate("/meus-jogos")}>
              <i class="fa-solid fa-arrow-rotate-left" ></i>{translate("Voltar")}
            </button>
            <div className="cadastro-review__btns-actions">
              <button className='cadastro-review__btns-excluir'>
                <i class="fa-regular fa-trash-can"></i>{translate("Excluir")}
              </button>
              <button className='cadastro-review__btns-salvar' onClick={cadastrarReview}>
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