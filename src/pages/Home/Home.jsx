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
import Loading from '../../components/Loading/Loading'

const Home = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(1);
  const [games, setGames] = useState([]);
  const [check, setCheck] = useState([]);
  const [jogos, setJogos] = useState([])
  const [game, setGame] = useState(0)
  const [numberGames, setNumberGames] = useState(6)
  const [loading, setLoading] = useState(<Loading/>)
  const [direction, setDirection] = useState('left');
  const generos = ["Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror"]
  const plataformas = ["Windows", "MacOs", "Linux", "Android", "IOS"]
  const token = window.localStorage.getItem("token")
  
  // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
  const [leitor, setLeitor] = useState(false);

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
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos', {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data);
      setJogos(response.data)
      setLoading(null)
      setLeitor(true);
    }).catch((error) => {
      console.log(error)
      setLoading(null)
    })
    
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/check/listarTodos')
    .then((response) => {
      console.log("Check", response.data);
      setCheck(response.data)
    }).catch((error) => console.log(error))

  }, [filter])
  const filterJogos = jogos?.filter(jogo => {
    var plataformasSelecionadas;
    var categoriasSelecionadas;
    var notasSelecionadas;
    if (filter.platform !== "Todos") {
      plataformasSelecionadas = filter.platform.some(platforma => platforma === jogo.plataforma);
    } else {
      plataformasSelecionadas = jogo;
    }
    if (filter.category !== "Todos") {
      categoriasSelecionadas = jogo.genero.some(categoria => filter.category.includes(categoria));
    } else {
      categoriasSelecionadas = jogo;
    }
    /* if (filter.rating !== 0) {
      notasSelecionadas = jogo.rating >= filter.rating;
    } else {
      notasSelecionadas = jogo;
    } */
    return plataformasSelecionadas && categoriasSelecionadas;
  })
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
      {loading}

      <div id="container">
        <div className="section__categories">
          <h2>{translate("Categorias")}</h2>
          {
            generos?.map(category => (
              <div className='home__categorias'>
                <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)} aria-label={category} />
                <label key={category} htmlFor={category} >{category}</label>
              </div>
            ))
          }
          <h2>{translate("Plataformas")}</h2>
          {
            plataformas?.map(platform => (
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
          <div className="visitors">
            <p className="num-home">{check?.length}</p>
            <p>Pessoas visitaram nossa loja fisica</p>
          </div>
        </div>
        <div className="container__home__right">
          <div className="section__title">
            <h1>
              {translate('Loja nacional de jogos indie')}
            </h1>
          </div>
          <div className="section__banner" style={{display: jogos.length === 0 ? 'none' : "flex"}}>
            <p onClick={() => { setGame(game === 0 ? jogos.length - 1 : game - 1); setDirection('right') }}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <AnimatePresence>
              <motion.img src={`data:image/png;base64, ${jogos[game]?.bannerUm}`}
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
            <p onClick={() => { setGame(game === jogos.length - 1 ? 0 : game + 1); setDirection('left') }}>
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
                        generos?.map(category => (
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
                        plataformas?.map(platform => (
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
              {filterJogos?.slice(0, numberGames).map((game) => (
                  <CardHome game={game} key={game?.id} />
                ))}
              {filterJogos.length === 0 &&
                <div className='home__nenhum-jogo'>
                  
                  Nenhum jogo foi encontrado
                  ...
                  <img src="imgs/control-home.gif" alt="Control" className='control-notfound'/>
                </div>
              }
            </div>
            <p onClick={() => setNumberGames(numberGames === 6 ? jogos.length : 6)}>{numberGames === 6 ? translate('Ver mais') : translate('Ver menos')}</p>
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

export default Home