/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import { selectGame } from '../../redux/actions'
import { favoriteGame } from '../../redux/actions';
import { connect } from 'react-redux'
import './style.css';
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Vlibras from '../../components/Vlibras/Vlibras';
import { translate } from '../../translate/translate';
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const Jogo = ({ dispatch, listadesejos, cart }) => {
  const [game, setGame] = useState();
  const [image, setImage] = useState(0);
  const { name } = useParams();

  // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
  const [leitor, setLeitor] = useState(false);

  useEffect(() => {
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGame(response.data.results.filter(jogo => jogo.name.toLowerCase().replace(/ /g, "-") === name)[0])
        setLeitor(true);
      }).catch((error) => { console.log(error); });
  }, []);
  var carrinho = cart.cart.every(c => c?.id !== game?.id)
  var listaDeDesejos = listadesejos.listadesejos.every(l => l?.id !== game?.id)
  const handleClickAdd = (game) => {
    if (carrinho) {
      dispatch(selectGame(game));
    }
  };
  const handleClickFavorite = (game) => {
    if (listaDeDesejos) {
      dispatch(favoriteGame(game));
    }
  };
  const choosePlataform = (plataform) => {
    if (plataform !== undefined) {
      if (plataform?.toLowerCase() === 'pc') {
        return 'fa-solid fa-laptop'
      } else {
        return `fa-brands fa-${plataform?.toLowerCase()}`
      }
    }
  }
  return (
    <div id='container-page'>
      <Menu />
      <Acessibilidade />
      <Vlibras />
      {leitor ? (<TextToSpeech />) : ""}


      <div>
        <div className="game__page">
          <div className="game__page__image">
            <p onClick={() => setImage(image === 0 ? game?.short_screenshots.length - 1 : image - 1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <img src={game?.short_screenshots[image].image} alt="" />
            <p onClick={() => setImage(image === game?.short_screenshots.length - 1 ? 0 : image + 1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div className="game__page__images">
            {game?.short_screenshots.map((image, index) =>
              <img
                src={image.image}
                key={image.id}
                onClick={() => setImage(index)}
              />
            )}
          </div>
          <div className="gameinfo__game__page">
            <div className="text__game__page">
              <div className="title__game__page">
                <h2>{game?.name}</h2>
                <div className="classif__game__page">
                  <p className="rating__game__page">{game?.rating}/{game?.rating_top}</p>
                  <p className="classification__game__page">L</p>
                </div>
              </div>
              <div className="game__page__genres">
                {game?.genres.map((genres) =>
                  <span key={genres?.id}>{genres?.name}</span>
                )}
              </div>
              <p className='description__game__page'>{translate("Descrição")}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi quod nihil, et consequuntur aut rem unde laborum quasi nesciunt. Quaerat, dignissimos voluptate. Perferendis, ex commodi eius in blanditiis tenetur?</p>
              <div className="comments__game__page">
                <h2>{translate("Avaliações")}</h2>
                <div className="comment__game__page">
                  <div className="usercomment__game__page">
                    <div className="avatar__user">
                    </div>
                    <div className="info__user">
                      <p className="username">User user<p className="usernick">@User</p></p>
                      <p className='time__comment'>Há um mês</p>
                    </div>
                  </div>
                  <div className="text__comment">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis ut quasi non, nemo quas ad beatae at eligendi rerum accusantium amet molestias ea voluptatum, consequuntur ullam praesentium dolores explicabo.
                  </div>
                </div>
              </div>
            </div>
            <div className="info__game__page">
              <div className="addcart__game__page">
                <h2>R$0{game?.rating}</h2>
                <button onClick={() => handleClickAdd(game)} style={{ display: !carrinho ? 'flex' : 'none' }}>
                  {translate('Adicionado ao carrinho')}
                </button>
                <button onClick={() => handleClickAdd(game)} style={{ display: carrinho ? 'flex' : 'none' }}>
                  {translate('Adicionar ao carrinho')}
                </button>
                <div className="favorite__game__page" onClick={() => handleClickFavorite(game)}>
                  <img src="/imgs/icons/heart_icon.png" alt="" />
                  <p style={{ display: !listaDeDesejos ? 'flex' : 'none' }}>{translate('Adicionado a lista de desejos')}</p>
                  <p style={{ display: listaDeDesejos ? 'flex' : 'none' }}>{translate('Adicionar a lista de desejos')}</p>
                </div>
              </div>
              <div className="about__game__page">
                <h3>{translate("Sobre o jogo")}</h3>
                <p>{translate("Desenvolvedor")}: <Link to={'/dev'} aria-label="desenvolvedor">{game?.name}</Link></p>
                <p>{translate("Gênero")}: {game?.genres.map((genres, index) =>
                  <Link to={`/categorias/category=${genres?.name}`} key={genres?.id}  aria-label={genres?.name}>
                    <p key={genres?.id}>{genres?.name}{index === game?.genres.length - 1 ? ' ' : ','}</p>
                  </Link>
                )}</p>
                <p>{translate("Data de lançamento")}: {new Date(game?.released).toLocaleDateString()}</p>
              </div>
              <div className="system__game__page">
                <div className="title__system">
                  <h3>{translate("Requisitos do sistema")}</h3>
                  <div className="platforms">
                    {game?.parent_platforms.map(plataform => (
                      <Link to={`/categorias/platform=${plataform.platform?.name}`} key={plataform.platform?.id}  aria-label={plataform.platform?.name}>
                        <i className={choosePlataform(plataform.platform?.name)}></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <p><b>{translate("Mínimos")}</b><br />
                  * SO: Windows 1 <br />
                  * Processador5 Intel Core i3 21 or AMD Phenom II
                  X4 968 <br />
                  * Memória5 4 GB de RA <br />
                  * Placa de vídeon N+IDIA GeForce GTS 25
                  1 GB or
                  AMD Radeon R7 24, 2 G, <br />
                  * Direct<br />
                  * Armazenamento5 2 GB de espaço disponível <br />


                  <b>{translate("Recomendados")}</b><br />
                  * SO5 Windows 1 <br />
                  * Processador5 Intel Core i3 413 or AMD Ryzen 3
                  12 <br />
                  * Memória5 6 GB de RA <br />
                  * Placa de vídeo5 N+IDIA GeForce GTX 46), 1 GB or
                  AMD Radeon HD 777, 1 G, <br />
                  * Direct <br />
                  * Armazenamento5 3 GB de espaço disponível <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  listadesejos: state.listadesejos,
});
export default connect(mapStateToProps)(Jogo)