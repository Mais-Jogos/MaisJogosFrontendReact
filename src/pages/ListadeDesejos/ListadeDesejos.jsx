import './style.css'
import React from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import HeaderWithFilter from '../../components/HeaderWithFiilter/HeaderWithFilter';
import Vlibras from '../../components/Vlibras/Vlibras'

const ListadeDesejos = () => {

  return (
    <div id='container-page'>
      <Menu />
      <Vlibras/>
      <Acessibilidade />
      <main className='listaDeDesejos__main'>
        <HeaderWithFilter name="Lista de Desejos" imgIcon="../../../public\imgs\icons\heart_icon.png" />

        <section className='listaDeDesejos__cards'>
          <div className='listaDeDesejos__cards__contain'>
            <div className='listaDeDesejos__card'>
              <div className='listaDeDesejos__card__image'>
                <img src="../../../public/imgs/jogos/meusjogos_01.png" alt="imagem do jogo" />
              </div>

              <div className='listaDeDesejos__card__info'>
                <div className='listaDeDesejos__card__info__title'>
                  <h2>Celeste</h2>
                  <p>R$ 8,00</p>
                </div>

                <div className='listaDeDesejos__card__info__actions'>
                  <div>
                    <img src="../../../public/imgs/icons/detalhes__icon.svg" alt="ícone de olho representando mais detalhes do jogo" />
                    <p>Detalhes</p>
                  </div>
                  <img src="../../../public/imgs/icons/cart__icon.svg" alt="ícone de carrinho" />
                </div>
              </div>
            </div>

            <div className='listaDeDesejos__trash'>
              <img src="../../../public/imgs/icons/trash_icon.svg" alt="ícone de carrinho" />
            </div>
          </div>



          <div className='listaDeDesejos__cards__contain'>
            <div className='listaDeDesejos__card'>
              <div className='listaDeDesejos__card__image'>
                <img src="../../../public/imgs/jogos/meusjogos_02.png" alt="imagem do jogo" />
              </div>

              <div className='listaDeDesejos__card__info'>
                <div className='listaDeDesejos__card__info__title'>
                  <h2>A lenda do herói</h2>
                  <p>R$ 15,00</p>
                </div>

                <div className='listaDeDesejos__card__info__actions'>
                  <div>
                    <img src="../../../public/imgs/icons/detalhes__icon.svg" alt="ícone de olho representando mais detalhes do jogo" />
                    <p>Detalhes</p>
                  </div>
                  <img src="../../../public/imgs/icons/cart__icon.svg" alt="ícone de carrinho" />
                </div>
              </div>
            </div>

            <div className='listaDeDesejos__trash'>
              <img src="../../../public/imgs/icons/trash_icon.svg" alt="ícone de carrinho" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ListadeDesejos