import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import './style.css'
import { Link, useParams } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import Footer from '../../components/Footer/Footer'

const Categorias = () => {
    const { category } = useParams();
    const [games, setGames] = useState([]); 
    const [game, setGame] = useState(0)
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

      const filterCategories = category.split('=');
      setFilter({...filter, [filterCategories[0]]:  [...filter[filterCategories[0]], filterCategories[1]]});
    }, [])
    console.log("filter", filter);
  
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
      console.log(jogosFiltrados);
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
                <input type="checkbox" name="Categorias" id={category} defaultChecked={filter.category !== 'Todos' && filter.category.some((filterCategory) => filterCategory === category)} onClick={(e) => changeFilter(e, 'category', category)}/>
                <label key={category} htmlFor={category} >{category}</label>
              </div>
            ))
          }
          <h2>Plataformas</h2>
          {              
            [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
              <div className='home__categorias'>
                <input type="checkbox" name="Plataformas" id={platform} defaultChecked={filter.platform !== 'Todos' && filter?.platform?.some((filterPlatform) => filterPlatform === platform)} onClick={(e) => changeFilter(e, 'platform', platform)}/>
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
            Categorias
          </h1>
        </div>
        <div id="games__home">
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
            }).map((game, index)=>(
              <Card games={games} game={index}/>
            ))}
          </div>
        </div>
      </div>      
    </div>
    <Footer/>
  </div>
  )
}

export default Categorias