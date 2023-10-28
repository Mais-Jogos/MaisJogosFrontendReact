import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { translate } from '../../translate/translate'
import { AnimatePresence, motion } from 'framer-motion'
import './style.css'
import { useNavigate } from 'react-router-dom'

const PageJogos = () => {
  const navigate = useNavigate()
  const [games, setGames] = useState([])
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
  const [search, setSearch] = useState("")
  useEffect(() => {
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      }).catch((error) => { console.log(error); });
  }, [])

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
  }
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
    <>
      <div className="jogos-admin__filter">
        <div className="jogos-admin__buscar">
          <p>{translate("Buscar")}:</p>
          <div className='jogos-admin__input-search' >
            <input
              type="text"
              placeholder={translate('Buscar jogo')}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {search !== '' &&
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setSearch("")}
              ></i>}
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="jogos-admin__filter-categorias">
          <p>{translate("Categorias")}:</p>
          <div className="jogos-admin__select-categorias" onClick={() => setOpenFilter({ ...openFilter, category: !openFilter.category })}>
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
                className="jogos-admin__options-categorias"
                animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                transition={{ duration: 0.5 }}
              >
                {
                  [...new Set(generos?.map((game) => game.name))].map(category => (
                    <div className='jogos-admin__categorias'>
                      <input type="checkbox" name="Categorias" id={category} onClick={(e) => changeFilter(e, 'category', category)} />
                      <label key={category} htmlFor={category} >{category}</label>
                    </div>
                  ))
                }
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className="jogos-admin__filter-plataforma">
          <p>{translate("Plataformas")}:</p>
          <div className="jogos-admin__select-plataforma" onClick={() => setOpenFilter({ ...openFilter, platform: !openFilter.platform })}>
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
                className="jogos-admin__options-plataforma"
                animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                transition={{ duration: 0.5 }}
              >
                {
                  [...new Set(plataformas2?.map((game) => game.name))].map(platform => (
                    <div className='jogos-admin__categorias'>
                      <input type="checkbox" name="Plataformas" id={platform} onClick={(e) => changeFilter(e, 'platform', platform)} />
                      <label key={platform} htmlFor={platform} >{platform}</label>
                    </div>
                  ))
                }
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className="jogos-admin__filter-classificacao">
          <p>{translate("Classificação")}:</p>
          <div className="jogos-admin__select-classificacao" onClick={() => setOpenFilter({ ...openFilter, rating: !openFilter.rating })}>
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
                className="jogos-admin__options-classificacao"
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
      {games?.filter(jogo => {
        var plataformasSelecionadas;
        var categoriasSelecionadas;
        var notasSelecionadas;
        var filtroBuscar;
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
        if (search !== "") {
          filtroBuscar = jogo?.name.toLowerCase().includes(search.toLowerCase()) ||
            jogo?.genres?.some(genero => genero.name.toLowerCase().includes(search.toLowerCase())) ||
            jogo?.platform?.some(genero => genero.name.toLowerCase().includes(search.toLowerCase()))
          console.log("Search", search);
          console.log("filtro", filtroBuscar);
        } else {
          filtroBuscar = jogo;
        }

        return plataformasSelecionadas && categoriasSelecionadas && notasSelecionadas && filtroBuscar;
      })?.map((game, index) => {
        return (
          <div className="admin__jogo">
            <div className="admin__jogo-title">
              <h2>{game?.name}</h2>
              <div className="admin__jogo-btns">
                <button className="admin__jogo-edit">
                  <i class="fa-solid fa-pen"></i>
                  Editar
                </button>
                <button className="admin__jogo-view" onClick={() => navigate(`/jogos/${game?.name?.toLowerCase().replace(/ /g,"-")}`)}>
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
            <h3>R${game?.rating}</h3>
            <div className='admin__jogo-detalhes'>
              <div className="admin__jogo-genres">
                {game?.genres.map((genres) =>
                  <p key={genres?.id}>{genres?.name}</p>
                )}
              </div>
              <div className="admin__jogo-platforms">
                {game?.parent_platforms.map(plataform => (
                  <i className={choosePlataform(plataform.platform?.name)}></i>
                ))}
              </div>
            </div>
          </div>)
      })}
    </>
  )
}

export default PageJogos