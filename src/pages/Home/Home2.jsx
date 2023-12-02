// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { translate } from '../../translate/translate'
import { AnimatePresence, motion } from 'framer-motion'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import CardHome from '../../components/CardHome/CardHome'

const Home2 = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(1);
  const [games, setGames] = useState([]);
  const [check, setCheck] = useState();
  const [jogos, setJogos] = useState([])
  const [game, setGame] = useState(0)
  const [numberGames, setNumberGames] = useState(6)
  const [direction, setDirection] = useState('left');
  const token = window.localStorage.getItem("token")
  
  // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
  const [leitor, setLeitor] = useState(false);

  var filteredGames;
  const [openFilter, setOpenFilter] = useState({
    category: false,
    platform: false,
    rating: false,
  })
  const [filter, setFilter] = useState({
    category: 'Todos',
    platform: 'Todos',
    rating: 0,
  })

  useEffect(() => {
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGames(response.data.results);
        setLeitor(true);
      }).catch((error) => { console.log(error); });
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data);
      setJogos(response.data)
      console.log("jogos", mapjogos);
    }).catch((error) => console.log(error))
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/check/listarTodos')
    .then((response) => {
      console.log("Check", response.data);
      setCheck(response.data)
    }).catch((error) => console.log(error))

    filteredGames = games?.filter(jogo => {
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
    })
    console.log(filteredGames);
  }, [filter])
  const slideVariants = {
    enter: {
      x: direction === 'left' ? -1000 : 1000,
      opacity: 1,
      transition: { duration: 0.2 },
      zIndex: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
      zIndex: 1,
    },
    exit: {
      x: direction === 'left' ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.2 },
      zIndex: 0,
    },
  };

  const generos = [].concat(...games.map((game) => game.genres))
  const plataformas = [].concat(...games.map((game) => game.parent_platforms))
  const plataformas2 = [].concat(...plataformas.map((game) => game.platform))
  const changeFilter = (e, filterName, value) => {
    if (filterName !== 'rating') {
      if (filter[filterName] !== 'Todos') {
        if (!e.target.checked) {
          const updtFilter = filter[filterName].filter((valueFilter) => valueFilter !== value)
          console.log(updtFilter);
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
    console.log(filter);
  }

  return (
    <div id='container-page' className='home'>
      <Menu />
      <Vlibras />
      <Acessibilidade />
      {leitor ? (<TextToSpeech />) : ""}

      <div id="container">
        <div className="section__categories">
          <h2>{translate("Categorias")}</h2>
          {
            [...new Set(generos?.map((game) => game.name))].map(category => (
              <div className='home__categorias'>
                <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)} aria-label={category} />
                <label key={category} htmlFor={category} >{category}</label>
              </div>
            ))
          }
          <h2>{translate("Plataformas")}</h2>
          {
            [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
              <div className='home__categorias'>
                <input type="checkbox" name="Plataformas" id={platform} onClick={(e) => changeFilter(e, 'platform', platform)} aria-label={platform} />
                <label key={platform} htmlFor={platform} >{platform}</label>
              </div>
            ))
          }
          <h2>{translate('Classificação')}</h2>
          <div className='home__ratings'>
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
          <button className="visitantes" onClick={() => navigate("/visitantes")}>{translate("Visitantes")}</button>
        </div>
        <div className="container__home__right">
          <div className="section__title">
            <h1>
              {translate('Loja nacional de jogos indie')}
            </h1>
          </div>
          <div className="section__banner">
            <p onClick={() => { setGame(game === 0 ? games.length - 1 : game - 1); setDirection('right') }}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <AnimatePresence>
              <motion.img src={games[game]?.background_image}
                alt=""
                key={game}
                variants={slideVariants}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 25 },
                  opacity: { duration: 1 }
                }}
                initial={"enter"}
                animate="visible"
                exit="exit" />
            </AnimatePresence>
            <p onClick={() => { setGame(game === games.length - 1 ? 0 : game + 1); setDirection('left') }}>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div id="games__home">
            <h2>{translate("Novidades")}</h2>
            <div className="home__filter">
              <div className="home__filter-categorias">
                <p>{translate("Categorias")}:</p>
                <div className="home__select-categorias" onClick={() => setOpenFilter({ ...openFilter, category: !openFilter.category })}>
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
                      className="home__options-categorias"
                      animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                      exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                      transition={{ duration: 0.5 }}
                    >
                      {
                        [...new Set(generos?.map((game) => game.name))].map(category => (
                          <div className='home__categorias' key={category}>
                            <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)} />
                            <label key={category} htmlFor={category} >{category}</label>
                          </div>
                        ))
                      }
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
              <div className="home__filter-plataforma">
                <p>{translate("Plataformas")}:</p>
                <div className="home__select-plataforma" onClick={() => setOpenFilter({ ...openFilter, platform: !openFilter.platform })}>
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
                      className="home__options-plataforma"
                      animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                      exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                      transition={{ duration: 0.5 }}
                    >
                      {
                        [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
                          <div className='home__categorias' key={platform}>
                            <input type="checkbox" name="Plataformas" id={platform} onClick={(e) => changeFilter(e, 'platform', platform)} />
                            <label key={platform} htmlFor={platform} >{platform}</label>
                          </div>
                        ))
                      }
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
              <div className="home__filter-classificacao">
                <p>{translate("Classificação")}:</p>
                <div className="home__select-classificacao" onClick={() => setOpenFilter({ ...openFilter, rating: !openFilter.rating })}>
                  {filter.rating !== 'Todos' ?
                    <p>
                      <div>
                        {filter.rating === 0 ?
                          [1, 2, 3, 4, 5].map(rating => (
                            <i className={`fa-regular fa-star`} key={rating}></i>
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
                      className="home__options-classificacao"
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
            <div className="section__games">
              {jogos?.map(jogo =>(
                <CardHome game={jogo} key={jogo?.id}/>
              ))}
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
              })
                ?.slice(0, numberGames).map((game) => (
                  <Card game={game} key={game?.id} />
                ))}
              {filteredGames == [] &&
                <div className='home__nenhum-jogo'>
                  {translate("Nenhum jogo foi encontrado")}...
                </div>
              }
            </div>
            <p onClick={() => setNumberGames(numberGames === 6 ? games.length : 6)}>{numberGames === 6 ? translate('Ver mais') : translate('Ver menos')}</p>
          </div>
          <div id="publish__games">
            <h2>{translate('Publique seus jogos')}</h2>
            <div className="border__card__publish">
              <div className="card__publish">
                <div className="text__publish">
                  <h2>{translate("Publique já")}!</h2>
                  <p>{translate('Cadastre seus jogos na nossa plataforma')}:</p>
                  <button onClick={() => navigate("/entrar")}>{translate("Publicar")}</button>
                </div>
                <div className="image__publish">
                  <img src="/imgs/animais/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="newsletter__games">
            <div className="border__card__newsletter">
              <div className="card__newsletter">
                <div className="image__newsletter">
                  <img src="/imgs/animais/2.png" alt="" />
                </div>
                <div className="text__newsletter">
                  <h2>{translate("Fique por dentro dos lançamentos")}!</h2>
                  <label htmlFor='newsletter'>{translate("Digite seu melhor e mail")}: </label>
                  <input type="text" id='newsletter' aria-label="newsletter" />
                  <button>{translate("Assinar")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2