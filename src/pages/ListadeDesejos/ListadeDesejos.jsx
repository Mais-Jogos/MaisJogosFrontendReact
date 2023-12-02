import './style.css'
import React from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Menu from '../../components/Menu/Menu';
import HeaderWithFilter from '../../components/HeaderWithFiilter/HeaderWithFilter';
import Vlibras from '../../components/Vlibras/Vlibras'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deletefavoriteGame } from '../../redux/actions';
import { selectGame } from '../../redux/actions';
import GoBack from '../../components/GoBack/GoBack';
import { translate } from '../../translate/translate';
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useEffect } from 'react';
import Axios from "axios";
import { useState } from 'react';


const ListadeDesejos = ({listadesejos, dispatch}) => {
  const navigate = useNavigate()
  const [favs, setFavs] = useState()
  const [favoritos, setFavoritos] = useState([])
  const token = window.localStorage.getItem("token")
  const id = window.localStorage.getItem("id")
  const addGameCart = (game) =>{
    dispatch(selectGame(game))
  }
  const deleteGame = (game) =>{
    dispatch(deletefavoriteGame(game))
    const favoritoSelecionado = favoritos?.filter((favoritos) => favoritos?.idJogo == game?.id)[0]
    console.log(favoritoSelecionado);
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/favorito/deletarUser/${favoritoSelecionado?.id}`, {
    headers:{
      Authorization: `Bearer ${token}`
    }}).then((response) =>{
      console.log(response.data);
    })
    setFavoritos(favoritos.some(
      (favoritos) => (favoritos?.idJogo === game?.id && favoritos?.id != favoritoSelecionado?.id)
    ))
  }

  useEffect(() =>{
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/favorito/listarTodos', {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log("Favoritos", response.data);
      const favs = response.data.filter(
        (favoritos) => (favoritos?.idUser == id)
      )
      setFavs(favs)
      console.log("Favs", favs);
      Axios.get('https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos')
      .then((res) =>{
        setFavoritos(res.data?.filter(jogo =>
          favs?.some(fav => fav?.idJogo == jogo?.id)
        ))
      })

    }).catch((error) => console.log(error));
  }, [])

  return (
    <div id='container-page'>
      <Menu />
      <Vlibras/>
      <Acessibilidade />
      <TextToSpeech />
      
      <main className='listaDeDesejos__main'>
        <GoBack/>
        <HeaderWithFilter name={translate("Lista de desejos")} imgIcon="\imgs\icons\heart_icon.png" />

        <section className='listaDeDesejos__cards'>
          {favoritos?.map((jogo) => (<div className='listaDeDesejos__cards__contain'>
            <div className='listaDeDesejos__card'>
              <div className='listaDeDesejos__card__image'>
                <img src={`data:image/png;base64, ${jogo?.bannerUm}`} alt="imagem do jogo" />
              </div>

              <div className='listaDeDesejos__card__info'>
                <div className='listaDeDesejos__card__info__title'>
                  <h2>{jogo?.titulo}</h2>
                  <p>R$100,00</p>
                </div>

                <div className='listaDeDesejos__card__info__actions'>
                  <div onClick={()=> navigate(`/jogos/${jogo?.titulo.toLowerCase().replace(/ /g, "-")}`)}>
                    <img src="/imgs/icons/detalhes__icon.svg" alt="ícone de olho representando mais detalhes do jogo" />
                    <p>{/* {translate("Detalhes")} */}Detalhes</p>
                  </div>
                  <i class="fa-solid fa-cart-shopping" alt="ícone de carrinho" onClick={() => addGameCart(jogo)}></i>
                </div>
              </div>
            </div>
            <div className='listaDeDesejos__trash'>
            <i class="fa-regular fa-trash-can" alt="ícone de carrinho" onClick={() => deleteGame(jogo)}></i>
            </div>
          </div>))}
        </section>
      </main>
    </div>
  )
}
const mapStateToProps = (state) => ({
  listadesejos: state.listadesejos,
});

export default connect(mapStateToProps)(ListadeDesejos)
