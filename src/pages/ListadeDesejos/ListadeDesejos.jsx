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

const ListadeDesejos = ({listadesejos, dispatch}) => {
  const navigate = useNavigate()
  const addGameCart = (game) =>{
    dispatch(selectGame(game))
  }
  const deleteGame = (game) =>{
    dispatch(deletefavoriteGame(game))
  }

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
          {listadesejos?.listadesejos?.map((jogo) => (<div className='listaDeDesejos__cards__contain'>
            <div className='listaDeDesejos__card'>
              <div className='listaDeDesejos__card__image'>
                <img src={jogo?.background_image} alt="imagem do jogo" />
              </div>

              <div className='listaDeDesejos__card__info'>
                <div className='listaDeDesejos__card__info__title'>
                  <h2>{jogo?.name}</h2>
                  <p>R${jogo?.rating.toFixed(2)}</p>
                </div>

                <div className='listaDeDesejos__card__info__actions'>
                  <div onClick={()=> navigate(`/jogos/${jogo?.name.toLowerCase().replace(/ /g, "-")}`)}>
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