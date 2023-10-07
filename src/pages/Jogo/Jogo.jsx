/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react'
import Axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import { selectGame } from '../../redux/actions'
import { connect } from 'react-redux'
import './style.css';
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade';
import Footer from '../../components/Footer/Footer';

const Jogo = ({dispatch}) => {
    const [games, setGames] = useState([]); 
    const [image, setImage] = useState(0);
    const {id} = useParams();

    useEffect(() => {  
      const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
      Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) =>{
        setGames(response.data.results);
        console.log(response.data.results[id]);
      }).catch((error) => { console.log(error); }); 
    }, []); 
    const handleClickAdd = (game) => {
      dispatch(selectGame(game));
    };
    const choosePlataform = (plataform) =>{
      if(plataform !== undefined){
        if(plataform?.toLowerCase() === 'pc'){
          return 'fa-solid fa-laptop'
        }else{
          return `fa-brands fa-${plataform?.toLowerCase()}`
        }
      }
    }
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <div>
          <div className="game__page">
            <div className="game__page__image">
              <p onClick={()=>setImage(image === 0 ? games[id]?.short_screenshots.length-1 : image-1)}>
                <i className="fa-solid fa-chevron-left"></i>
              </p>
              <img src={games[id]?.short_screenshots[image].image} alt="" />
              <p onClick={()=>setImage(image === games[id]?.short_screenshots.length-1 ? 0 : image+1)}>
                <i className="fa-solid fa-chevron-right"></i>
              </p>
            </div>
            <div className="game__page__images">
              {games[id]?.short_screenshots.map((image, index) =>
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
                  <h2>{games[id]?.name}</h2>
                  <div className="classif__game__page">
                    <p className="rating__game__page">{games[id]?.rating}/{games[id]?.rating_top}</p>
                    <p className="classification__game__page">L</p>
                  </div>
                </div>
                <div className="game__page__genres">
                  {games[id]?.genres.map((genres) => 
                    <span key={genres?.id}>{genres?.name}</span>
                  )}
                </div>
                <p className='description__game__page'>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi quod nihil, et consequuntur aut rem unde laborum quasi nesciunt. Quaerat, dignissimos voluptate. Perferendis, ex commodi eius in blanditiis tenetur?</p>
                <div className="comments__game__page">
                  <h2>Avaliações</h2>
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
                  <h2>R$0{games[id]?.rating}</h2>
                  <button onClick={() => handleClickAdd(games[id])}>
                    Add ao carrinho
                  </button>
                  <div className="favorite__game__page">
                    <img src="/imgs/icons/heart_icon.png" alt="" />
                    <p>Lista de desejos</p>
                  </div>
                </div>
                <div className="about__game__page">
                  <h3>Sobre o jogo</h3>
                  <p>DESENVOLVEDOR: {games[id]?.name}</p>
                  <p>GÊNERO: {games[id]?.genres.map((genres, index) => 
                  <Link to={`/categorias/category=${genres?.name}`} key={genres?.id}>
                    <p key={genres?.id}>{genres?.name}{index === games[id]?.genres.length-1 ? ' ':','}</p>
                  </Link>
                  )}</p>
                  <p>DATA DE LANÇAMENTO: {new Date(games[id]?.released).toLocaleDateString()}</p>
                </div>
                <div className="system__game__page">
                  <div className="title__system">
                    <h3>Requisitos do sistema</h3>
                    <div className="platforms">
                      {games[id]?.parent_platforms.map(plataform =>(
                        <Link to={`/categorias/platform=${plataform.platform?.name}`} key={plataform.platform?.id}>
                          <i className={choosePlataform(plataform.platform?.name)}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p>MÍNIMOS
                    * SO: Windows 1 <br />
                    * Processador5 Intel Core i3 21 or AMD Phenom II 
                    X4 968 <br />
                    * Memória5 4 GB de RA <br />
                    * Placa de vídeon N+IDIA GeForce GTS 25
                    1 GB or 
                    AMD Radeon R7 24, 2 G, <br />
                    * Direct<br />
                    * Armazenamento5 2 GB de espaço disponível <br />


                    RECOMENDADOS
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
        <Footer/>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Jogo)