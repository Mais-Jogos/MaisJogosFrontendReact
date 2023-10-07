// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import './style.css'
import { Link } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [image, setImage] = useState(1);
  const [games, setGames] = useState([]); 
  const [game, setGame] = useState(0)
  const [numberGames, setNumberGames] = useState(6)
  const [filter, setFilter] = useState({
    category: 'Todos',
    platform: 'Todos',
    rating: 0,
  })

  useEffect(()=>{
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then((response) =>{
      setGames(response.data.results);
    }).catch((error) => { console.log(error); }); 
  }, [])

  const generos = [].concat(...games.map((game) => game.genres))
  const plataformas = [].concat(...games.map((game) => game.parent_platforms))
  const plataformas2 = [].concat(...plataformas.map((game) => game.platform))
  const changeFilter = (e, filterName, value) =>{
    if(filterName !== 'rating'){
      if(filter[filterName] !== 'Todos'){
        if(!e.target.checked){
          const updtFilter = filter[filterName].filter((valueFilter) => valueFilter !== value)
          if(!updtFilter){
            setFilter({...filter, [filterName]: updtFilter});
          }else{
            setFilter({...filter, [filterName]: "Todos"});
          }
        }else{
          setFilter({...filter, [filterName]: [...filter[filterName], value]})
        }
      }else{
        setFilter({...filter, [filterName]: [value]})
      }
    }else{
      setFilter({...filter, [filterName]: value})
    }
  }

  useEffect(()=>{
    const jogosFiltrados = games?.filter(jogo => {
      var plataformasSelecionadas;
      var categoriasSelecionadas;
      var notasSelecionadas;
      if(filter.platform !== "Todos"){
        plataformasSelecionadas = jogo.platforms.some(platforma => filter.platform.includes(platforma.platform.name));
      }else{
        plataformasSelecionadas = jogo;
      }
      if(filter.category !== "Todos"){
        categoriasSelecionadas = jogo.genres.some(categoria => filter.category.includes(categoria.name));
      }else{
        categoriasSelecionadas = jogo;
      }
      if(filter.rating !== "Todos"){
        notasSelecionadas = jogo.rating >= filter.rating;
      }else{
        notasSelecionadas = jogo;
      }
      return plataformasSelecionadas && categoriasSelecionadas && notasSelecionadas;

    })
  },[filter])
  return (
    <div id='container-page' className='home'>
      <Menu/>
      <Vlibras/>
      <Acessibilidade/>
      <div id="container">
        <div className="section__categories">
            {/* <div className='home__categorias'>
              <input type="checkbox" name="Categorias" id={'Todos'} />
              <label htmlFor={'Todos'} onClick={() => setCategory('Todos')}>Todos</label>
            </div> */}
            <h2>Categorias</h2>
            {
              [...new Set(generos?.map((game) => game.name))].map(category => (
                <div className='home__categorias'>
                  <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)}/>
                  <label key={category} htmlFor={category} >{category}</label>
                </div>
              ))
            }
            <h2>Plataformas</h2>
            {              
              [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
                <div className='home__categorias'>
                  <input type="checkbox" name="Plataformas" id={platform} onClick={(e) => changeFilter(e, 'platform', platform)}/>
                  <label key={platform} htmlFor={platform} >{platform}</label>
                </div>
              ))
            }
            <h2>Classificação</h2>
            <div className='home__ratings'>
            {
              [1,2,3,4,5].map(rating => (
                <div key={rating}>
                  {[...Array(rating)].map((_, index) => (
                    <i key={index} className={`fa-${rating <= filter.rating ? 'solid':'regular'} fa-star`} onClick={(e) => changeFilter(e, 'rating', rating)}></i>
                  ))}
                </div>
              ))
            }
            </div>
        </div>
        <div className="container__home__right">
          <div className="section__title">
            <h1>
              Loja nacional de jogos indie
            </h1>
{/*             <img src={`../../public/imgs/animais/${image}.png`} alt="" />
 */}          </div>
          <div className="section__banner">
            <p onClick={()=>setGame(game === 0 ? games.length-1 : game-1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <img src={games[game]?.background_image} alt="" />
            <p onClick={()=>setGame(game === games.length-1 ? 0 : game+1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div id="games__home">
            <h2>Novidades</h2>
            <div className="section__games">
              {games?.filter(jogo => {
                var plataformasSelecionadas;
                var categoriasSelecionadas;
                var notasSelecionadas;
                if(filter.platform !== "Todos"){
                  plataformasSelecionadas = jogo.platforms.some(platforma => filter.platform.includes(platforma.platform.name));
                }else{
                  plataformasSelecionadas = jogo;
                }
                if(filter.category !== "Todos"){
                  categoriasSelecionadas = jogo.genres.some(categoria => filter.category.includes(categoria.name));
                }else{
                  categoriasSelecionadas = jogo;
                }
                if(filter.rating !== 0){
                  notasSelecionadas = jogo.rating >= filter.rating;
                }else{
                  notasSelecionadas = jogo;
                }
                return plataformasSelecionadas && categoriasSelecionadas && notasSelecionadas;
              }).slice(0,numberGames).map((game, index)=>(
                <Card games={games} game={index}/>
              ))}
            </div>
            <p onClick={() => setNumberGames(numberGames === 6 ? games.length : 6)}>{numberGames === 6 ?  'Ver mais': 'Ver menos'}</p>
          </div>
          <div id="publish__games">
            <h2>Publique seus jogos</h2>
            <div className="border__card__publish">
              <div className="card__publish">
                <div className="text__publish">
                  <h2>Publique já!</h2>
                  <p>Cadastres seus jogos na nossa plataforma:</p>
                  <button>Publicar</button>
                </div>
                <div className="image__publish">
                  <img src="imgs/animais/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="newsletter__games">
            <div className="border__card__newsletter">
              <div className="card__newsletter">
                <div className="image__newsletter">
                  <img src="imgs/animais/2.png" alt="" />
                </div>
                <div className="text__newsletter">
                  <h2>Fique por dentro dos lançamentos!</h2>
                  <label htmlFor='newsletter'>Digite seu melhor e mail: </label>
                  <input type="text" id='newsletter'/>
                  <button>Assinar</button>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
      <Footer/>
    </div>
  )
}

export default Home