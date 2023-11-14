import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import './style.css'
import { Link, useParams } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { motion, AnimatePresence } from 'framer-motion'
import { translate } from '../../translate/translate'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const Categorias = () => {
  const { category } = useParams();
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(0)

  // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
  const [leitor, setLeitor] = useState(false);

  const [openFilter, setOpenFilter] = useState({
    category: false,
    platform: false,
    rating: false,
  })
  const [filter, setFilter] = useState({
    category: "Todos",
    platform: "Todos",
    rating: 0,
  })

  useEffect(() => {
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGames(response.data.results);
        setLeitor(true);
      }).catch((error) => { console.log(error); });

    const filterCategories = category.split('=');
    setFilter({ ...filter, [filterCategories[0]]: [filterCategories[1]] });
  }, [])
  console.log("filter", filter);

  const generos = [].concat(...games.map((game) => game.genres))
  const plataformas = [].concat(...games.map((game) => game.parent_platforms))
  const plataformas2 = [].concat(...plataformas.map((game) => game.platform))
  const changeFilter = (e, filterName, value) => {
    if (filterName !== 'rating') {
      if (filter[filterName] !== 'Todos') {
        if (!e.target.checked) {
          const updtFilter = filter[filterName].filter((valueFilter) => valueFilter !== value)
          if (updtFilter.length > 0) {
            setFilter({ ...filter, [filterName]: updtFilter });
          } else {
            setFilter({ ...filter, [filterName]: "Todos" });
          }
        } else {
          setFilter({ ...filter, [filterName]: [...filter[filterName], value] })
        }
      } else {
        setFilter({ ...filter, [filterName]: [value] })
      }
    } else {
      setFilter({ ...filter, [filterName]: value })
    }
  }

  useEffect(() => {
    const jogosFiltrados = games?.filter(jogo => {
      var plataformasSelecionadas;
      var categoriasSelecionadas;
      var notasSelecionadas;
      if (filter.platform !== "Todos") {
        plataformasSelecionadas = jogo.platforms.some(platforma => filter.platform.includes(platforma.platform.name));
      } else {
        plataformasSelecionadas = jogo;
      }
      if (filter.category !== "Todos") {
        categoriasSelecionadas = jogo.genres.some(categoria => filter.category.includes(categoria.name));
      } else {
        categoriasSelecionadas = jogo;
      }
      if (filter.rating !== "Todos") {
        notasSelecionadas = jogo.rating >= filter.rating;
      } else {
        notasSelecionadas = jogo;
      }
      return plataformasSelecionadas && categoriasSelecionadas && notasSelecionadas;

    })
    console.log("Jogos",jogosFiltrados);
  }, [filter])
  return (
    <div id='container-page' className='categorias'>
      <Menu />
      <Vlibras />
      <Acessibilidade />
      {leitor ? (<TextToSpeech />) : ""}


      <div id="container">
        <div className="section__categories-categorias">
          <h2>{translate("Categorias")}</h2>
          {
            [...new Set(generos?.map((game) => game.name))].map(category => (
              <div className='categorias__categorias'>
                <input type="checkbox" name="Categorias" id={category} defaultChecked={filter.category !== 'Todos' && filter.category.some((filterCategory) => filterCategory === category)} onClick={(e) => changeFilter(e, 'category', category)}  aria-label={category} />
                <label key={category} htmlFor={category} >{category}</label>
              </div>
            ))
          }
          <h2>{translate("Plataformas")}</h2>
          {
            [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
              <div className='categorias__categorias'>
                <input type="checkbox" name="Plataformas" id={platform} defaultChecked={filter.platform !== 'Todos' && filter?.platform?.some((filterPlatform) => filterPlatform === platform)} onClick={(e) => changeFilter(e, 'platform', platform)} aria-label={platform}  />
                <label key={platform} htmlFor={platform} >{platform}</label>
              </div>
            ))
          }
          <h2>{translate("Classificação")}</h2>
          <div className='categorias__ratings'>
            {
              [1, 2, 3, 4, 5].map(rating => (
                <div key={rating}>
                  {[...Array(rating)].map((_, index) => (
                    <i key={index} className={`fa-${rating <= filter.rating ? 'solid' : 'regular'} fa-star`} onClick={(e) => changeFilter(e, 'rating', rating)}></i>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
        <div className="container__categorias__right">
          <div className="section__title">
            <h1>
              {translate("Categorias")}
            </h1>
          </div>
          <div className="categorias__filter">
            <div className="categorias__filter-categorias">
              <p>{translate("Categorias")}:</p>
              <div className="categorias__select-categorias" onClick={() => setOpenFilter({ ...openFilter, category: !openFilter.category })}>
                {filter.category !== 'Todos' ?
                  <p>
                    {filter.category.map((category, i) => {
                      return i - 1 === filter.category.length || filter.category.length === 1 ?
                        category : category + ", "
                    })}
                    <i class="fa-solid fa-sort-down"></i>
                  </p> :
                  <p>
                    {filter.category}<i class="fa-solid fa-sort-down"></i>
                  </p>}
              </div>
              <AnimatePresence>
                {openFilter.category &&
                  <motion.div
                    className="categorias__options-categorias"
                    animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                    exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      [...new Set(generos?.map((game) => game.name))].map(category => (
                        <div className='categorias__categorias'>
                          <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)} />
                          <label key={category} htmlFor={category} >{category}</label>
                        </div>
                      ))
                    }
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div className="categorias__filter-plataforma">
              <p>{translate("Plataformas")}:</p>
              <div className="categorias__select-plataforma" onClick={() => setOpenFilter({ ...openFilter, platform: !openFilter.platform })}>
                {filter.platform !== 'Todos' ?
                  <p>
                    {filter.platform.map((platform, i) => {
                      return i - 1 === filter.platform.length || filter.platform.length === 1 ?
                        platform : platform + ", "
                    })}
                    <i class="fa-solid fa-sort-down"></i>
                  </p> :
                  <p>
                    {filter.platform}<i class="fa-solid fa-sort-down"></i>
                  </p>}
              </div>
              <AnimatePresence>
                {openFilter.platform &&
                  <motion.div
                    className="categorias__options-plataforma"
                    animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                    exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
                        <div className='categorias__categorias'>
                          <input type="checkbox" name="Plataformas" id={platform} onClick={(e) => changeFilter(e, 'platform', platform)} />
                          <label key={platform} htmlFor={platform} >{platform}</label>
                        </div>
                      ))
                    }
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div className="categorias__filter-classificacao">
              <p>{translate("Classificação")}:</p>
              <div className="categorias__select-classificacao" onClick={() => setOpenFilter({ ...openFilter, rating: !openFilter.rating })}>
                {filter.rating !== 'Todos' ?
                  <p>
                    <div>
                      {filter.rating === 0 ?
                        [1, 2, 3, 4, 5].map(rating => (
                          <i className={`fa-regular fa-star`}></i>
                        ))
                        : [...Array(filter.rating)].map((_, index) => (
                          <i key={index} className={`fa-solid fa-star`} onClick={(e) => changeFilter(e, 'rating', rating)}></i>
                        ))}
                    </div>
                    <i class="fa-solid fa-sort-down"></i>
                  </p> :
                  <p>
                    {filter.rating}<i class="fa-solid fa-sort-down"></i>
                  </p>}
              </div>
              <AnimatePresence>
                {openFilter.rating &&
                  <motion.div
                    className="categorias__options-classificacao"
                    animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                    exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      [1, 2, 3, 4, 5].map(rating => (
                        <div key={rating}>
                          {[...Array(rating)].map((_, index) => (
                            <i key={index} className={`fa-${rating <= filter.rating ? 'solid' : 'regular'} fa-star`} onClick={(e) => changeFilter(e, 'rating', rating)}></i>
                          ))}
                        </div>
                      ))
                    }
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div id="games__categorias">
            <div className="section__games">
              {games?.filter(jogo => {
                var plataformasSelecionadas;
                var categoriasSelecionadas;
                var notasSelecionadas;
                if (filter.platform !== "Todos") {
                  plataformasSelecionadas = jogo.platforms.some(platforma => filter.platform.includes(platforma.platform.name));
                } else {
                  plataformasSelecionadas = jogo;
                }
                if (filter.category !== "Todos") {
                  categoriasSelecionadas = jogo.genres.some(categoria => filter.category.includes(categoria.name));
                } else {
                  categoriasSelecionadas = jogo;
                }
                if (filter.rating !== 0) {
                  notasSelecionadas = jogo.rating >= filter.rating;
                } else {
                  notasSelecionadas = jogo;
                }
                return plataformasSelecionadas && categoriasSelecionadas && notasSelecionadas;
              }).map((game) => (
                <Card game={game} key={game?.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorias