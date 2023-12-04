import React, { useEffect, useState } from "react";
import Axios from "axios";
import { translate } from "../../translate/translate";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PageJogos = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(<Loading/>)
  const [openFilter, setOpenFilter] = useState({
    category: false,
    platform: false,
    rating: false,
  });
  const [filter, setFilter] = useState({
    category: "Todos",
    platform: "Todos",
    rating: 0,
  });
  const [search, setSearch] = useState("");
  const token = window.localStorage.getItem("token")
  useEffect(() => {
    Axios.get('https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos')
    .then((response) => {
      console.log(response.data);
      setGames(response.data)
      setLoading(null)
    }).catch((error) =>{
      console.log(error);
      setLoading(null)
    })
  }, []);

  const generos = [ "Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror",];
  const plataformas = ["Windows", "MacOs", "Linux", "Android", "IOS"];
  const changeFilter = (e, filterName, value) => {
    if (filterName !== "rating") {
      if (filter[filterName] !== "Todos") {
        if (!e.target.checked) {
          const updtFilter = filter[filterName].filter(
            (valueFilter) => valueFilter !== value
          );
          console.log(updtFilter);
          if (updtFilter.length > 0) {
            setFilter({ ...filter, [filterName]: updtFilter });
          } else {
            setFilter({ ...filter, [filterName]: "Todos" });
          }
        } else {
          setFilter({
            ...filter,
            [filterName]: [...filter[filterName], value],
          });
        }
      } else {
        setFilter({ ...filter, [filterName]: [value] });
      }
    } else {
      setFilter({ ...filter, [filterName]: value });
    }
  };
  const choosePlataform = (plataform) => {
    if (plataform !== undefined) {
      if (plataform?.toLowerCase() === "computador") {
        return "fa-solid fa-laptop";
      }else if(plataform?.toLowerCase() === "celular"){
        return "fa-solid fa-mobile";
      }else if(plataform?.toLowerCase() === "macos"){
        return "fa-brands fa-apple";
      }else if(plataform?.toLowerCase() === "ios"){
        return "fa-solid fa-app-store-ios";
      } else {
        return `fa-brands fa-${plataform?.toLowerCase()}`;
      }
    }
  };
  return (
    <>
      {loading}
      <div className="jogos-admin__filter">
        <div className="jogos-admin__buscar">
          <p>{translate("Buscar")}:</p>
          <div className="jogos-admin__input-search">
            <input
              type="text"
              placeholder={translate("Buscar jogo")}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {search !== "" && (
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setSearch("")}
              ></i>
            )}
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="jogos-admin__filter-categorias">
          <p>{translate("Categorias")}:</p>
          <div
            className="jogos-admin__select-categorias"
            onClick={() =>
              setOpenFilter({ ...openFilter, category: !openFilter.category })
            }
          >
            {filter.category !== "Todos" ? (
              <p>
                {filter.category.map((category, i) => {
                  return i - 1 === filter.category.length ||
                    filter.category.length === 1
                    ? category
                    : category + ", ";
                })}
                <i class="fa-solid fa-sort-down"></i>
              </p>
            ) : (
              <p>
                {filter.category}
                <i class="fa-solid fa-sort-down"></i>
              </p>
            )}
          </div>
          <AnimatePresence>
            {openFilter.category && (
              <motion.div
                className="jogos-admin__options-categorias"
                animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                transition={{ duration: 0.5 }}
              >
                {generos?.map((category) => (
                    <div className="jogos-admin__categorias">
                      <input
                        type="checkbox"
                        name="Categorias"
                        id={category}
                        onClick={(e) => changeFilter(e, "category", category)}
                      />
                      <label key={category} htmlFor={category}>
                        {category}
                      </label>
                    </div>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="jogos-admin__filter-plataforma">
          <p>{translate("Plataformas")}:</p>
          <div
            className="jogos-admin__select-plataforma"
            onClick={() =>
              setOpenFilter({ ...openFilter, platform: !openFilter.platform })
            }
          >
            {filter.platform !== "Todos" ? (
              <p>
                {filter.platform.map((platform, i) => {
                  return i - 1 === filter.platform.length ||
                    filter.platform.length === 1
                    ? platform
                    : platform + ", ";
                })}
                <i class="fa-solid fa-sort-down"></i>
              </p>
            ) : (
              <p>
                {filter.platform}
                <i class="fa-solid fa-sort-down"></i>
              </p>
            )}
          </div>
          <AnimatePresence>
            {openFilter.platform && (
              <motion.div
                className="jogos-admin__options-plataforma"
                animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                transition={{ duration: 0.5 }}
              >
                {plataformas.map((platform) => (
                  <div className="jogos-admin__categorias">
                    <input
                      type="checkbox"
                      name="Plataformas"
                      id={platform}
                      onClick={(e) => changeFilter(e, "platform", platform)}
                    />
                    <label key={platform} htmlFor={platform}>
                      {platform}
                    </label>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="jogos-admin__filter-classificacao">
          <p>{translate("Classificação")}:</p>
          <div
            className="jogos-admin__select-classificacao"
            onClick={() =>
              setOpenFilter({ ...openFilter, rating: !openFilter.rating })
            }
          >
            {filter.rating !== "Todos" ? (
              <p>
                <div>
                  {filter.rating === 0
                    ? [1, 2, 3, 4, 5].map((rating) => (
                        <i className={`fa-regular fa-star`}></i>
                      ))
                    : [...Array(filter.rating)].map((_, index) => (
                        <i
                          key={index}
                          className={`fa-solid fa-star`}
                          onClick={(e) => changeFilter(e, "rating", rating)}
                        ></i>
                      ))}
                </div>
                <i class="fa-solid fa-sort-down"></i>
              </p>
            ) : (
              <p>
                {filter.rating}
                <i class="fa-solid fa-sort-down"></i>
              </p>
            )}
          </div>
          <AnimatePresence>
            {openFilter.rating && (
              <motion.div
                className="jogos-admin__options-classificacao"
                animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
                exit={{ opacity: [1, 0], scale: [1, 1.2, 0.5] }}
                transition={{ duration: 0.5 }}
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <div key={rating}>
                    {[...Array(rating)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa-${
                          rating <= filter.rating ? "solid" : "regular"
                        } fa-star`}
                        onClick={(e) => changeFilter(e, "rating", rating)}
                      ></i>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="admin-games">
        {games?.filter((jogo) => {
            var plataformasSelecionadas;
            var categoriasSelecionadas;
            var filtroBuscar;
          
            if (filter.platform !== "Todos") {
              plataformasSelecionadas = filter.platform.some(
                (platforma) => platforma === jogo?.so
              );
            } else {
              plataformasSelecionadas = jogo;
            }
            if (filter.category !== "Todos") {
              categoriasSelecionadas = jogo?.genero?.some((categoria) =>
                filter.category.includes(categoria)
              );
            } else {
              categoriasSelecionadas = jogo;
            }
            if (search !== "") {
              filtroBuscar =
                jogo?.titulo.toLowerCase().includes(search.toLowerCase()) ||
                jogo?.genero?.some((genero) =>
                  genero.toLowerCase().includes(search.toLowerCase())
                ) ||
                jogo?.plataforma?.includes(search.toLowerCase());
            } else {
              filtroBuscar = jogo;
            }

            return (
              plataformasSelecionadas && categoriasSelecionadas && filtroBuscar
            );
          })?.map((game, index) => {
            return (
              <div className="admin__jogo">
                <div className="admin__jogo-title">
                  <h2>{game?.titulo}</h2>
                  <div className="admin__jogo-btns">
                    <button
                      className="admin__jogo-view"
                      onClick={() =>
                        navigate(
                          `/jogos/${game?.titulo
                            ?.toLowerCase()
                            .replace(/ /g, "-")}`
                        )
                      }
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
                <h3>R${game?.valorJogo}</h3>
                <div className="admin__jogo-detalhes">
                  <div className="admin__jogo-genres">
                    {game?.genero?.map((genero) => (
                      <p key={genero}>{genero}</p>
                    ))}
                  </div>
                  <div className="admin__jogo-platforms">
                      <i
                        className={choosePlataform(game?.plataforma)}
                      ></i>
                      <i
                        className={choosePlataform(game?.so)}
                      ></i>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PageJogos;
