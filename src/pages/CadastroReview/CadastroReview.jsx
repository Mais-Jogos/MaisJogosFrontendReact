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
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modal/Modal'

const CadastroReview = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const [game, setGame] = useState(); 
  const [modal, setModal] = useState(null)
  const [loading, setLoading] = useState(<Loading/>)
  const { idJogo } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    notaReview:5,
    descricaoReview:"",
    dataReview:null,
    tituloReview:"",
    idUser: id,
    idJogo: 8,
  })


  useEffect(() => {  
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/review/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log(response.data);
        const newReview = response.data.filter(review => (review.idJogo == idJogo && review?.idUser == id))[0]
        if(newReview){
          setReview(newReview);
        }
    }).catch((error) => { console.log(error); });
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarJogo/${idJogo}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) =>{
      console.log("Game", response.data);
        setGame(response.data)
        setLoading(null)
    }).catch((error) => { 
      console.log(error); 
      setLoading(null)
    }); 

  }, []); 

  function cadastrarReview(){
    if(review.id){
      Axios.put(`https://backendmaisjogos-production.up.railway.app/api/review/alterarReview/${review.id}`, review,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        setModal(<Modal message={"Sua review foi alterada com sucesso!"} type={true}/>)
        setTimeout(() =>{
          navigate("/review")
        }, 3000)
      })
      .catch((error) => {
        setModal(<Modal message={"Sua review não foi alterada!"} type={true}/>)
        setTimeout(() =>{
          setModal(null)
        }, 3000)
        console.log("Erro: ", error)
      })
    }
    var data = new Date(),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'),
      ano  = data.getFullYear();
    const dataReview =  dia+"/"+mes+"/"+ano;
    const newReview = {...review, dataReview:dataReview}
    Axios.post('https://backendmaisjogos-production.up.railway.app/api/review/salvar', newReview,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      setModal(<Modal message={"Sua review foi cadastrada com sucesso!"} type={true}/>)
      setTimeout(() =>{
        navigate("/review")
      }, 3000)
    })
    .catch((error) => {
      setModal(<Modal message={"Sua review não foi cadastrada!"} type={true}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
      console.log("Erro: ", error)
    })
    console.log(newReview);
  }

  function deletarReview(){
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/review/deletarReview/${review?.id}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response);
      setModal(<Modal message={"Sua review foi deletada com sucesso!"} type={true}/>)
      setTimeout(() =>{
        navigate("/review")
      }, 3000)
    }).catch((error) => {
      setModal(<Modal message={"Sua review não foi deletada!"} type={true}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
      console.log("Erro: ", error)
    })
  }
  return (
    <div id='container-page'>
      <Menu/>
      <Vlibras/>
      <Acessibilidade/>
      <TextToSpeech />
      {modal}
      {loading}

      <div className="cadastro-review">
        <div className="cadastro-review__title__name">
          <i className="fa-solid fa-book-bookmark "></i>
          <h1>{translate("Cadastrar Review")}</h1>
        </div>
        <div className="cadastro-review__form">
          <img src={`data:image/png;base64, ${game?.bannerUm}`} alt="" />
          <h2>{game?.titulo}</h2>
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
              <button className='cadastro-review__btns-excluir' onClick={deletarReview}>
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