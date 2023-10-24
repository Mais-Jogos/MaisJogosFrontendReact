import './style.css'
import React from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import HeaderWithFilter from '../../components/HeaderWithFiilter/HeaderWithFilter';
import Vlibras from '../../components/Vlibras/Vlibras'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deletefavoriteGame } from '../../redux/actions';
import { selectGame } from '../../redux/actions';

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
      <main className='listaDeDesejos__main'>
        <HeaderWithFilter name="Lista de Desejos" imgIcon="../../../public\imgs\icons\heart_icon.png" />

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
                    <img src="../../../public/imgs/icons/detalhes__icon.svg" alt="ícone de olho representando mais detalhes do jogo" />
                    <p>Detalhes</p>
                  </div>
                  <img src="../../../public/imgs/icons/cart__icon.svg" alt="ícone de carrinho" onClick={() => addGameCart(jogo)}/>
                </div>
              </div>
            </div>
            <div className='listaDeDesejos__trash'>
              <img src="../../../public/imgs/icons/trash_icon.svg" alt="ícone de carrinho" onClick={() => deleteGame(jogo)}/>
            </div>
          </div>))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
const mapStateToProps = (state) => ({
  listadesejos: state.listadesejos,
});

export default connect(mapStateToProps)(ListadeDesejos)