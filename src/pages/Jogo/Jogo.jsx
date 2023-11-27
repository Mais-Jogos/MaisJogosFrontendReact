/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { selectGame } from "../../redux/actions";
import { favoriteGame } from "../../redux/actions";
import { connect } from "react-redux";
import "./style.css";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const Jogo = ({ dispatch, listadesejos, cart }) => {
  const [game, setGame] = useState();
  const [jogo, setJogo] = useState();
  const [image, setImage] = useState(0);
  const [dev, setDev] = useState();
  const { name } = useParams();
  const token = window.localStorage.getItem("token");
  const imgs = [
    "bannerUm",
    "bannerDois",
    "bannerTres",
    "bannerQuatro",
    "bannerCinco",
  ];

  // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
  const [leitor, setLeitor] = useState(false);

  useEffect(() => {
    const apiKey = "bb8e5d1e0b2e44d9ac172e791e20ff23";
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGame(
          response.data.results.filter(
            (jogo) => jogo.name.toLowerCase().replace(/ /g, "-") === name
          )[0]
        );
        setLeitor(true);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get("http://localhost:8080/api/jogo/listarTodos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        const game = response.data.filter(
          (jogo) => jogo.titulo.toLowerCase().replace(/ /g, "-") === name
        )[0];
        setJogo(game);

        Axios.get(`http://localhost:8080/api/usuario/listarCliente/${game?.idDev}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => {
            console.log(response.data);
            setDev(response.data);
          })
          .catch((error) => console.log(error));

      })
      .catch((error) => console.log(error));
  }, []);
  var carrinho = cart.cart.every((c) => c?.id !== game?.id);
  var listaDeDesejos = listadesejos.listadesejos.every(
    (l) => l?.id !== game?.id
  );
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
      if (plataform?.toLowerCase() === "pc") {
        return "fa-solid fa-laptop";
      } else {
        return `fa-brands fa-${plataform?.toLowerCase()}`;
      }
    }
  };
  return (
    <div id="container-page">
      <Menu />
      <Acessibilidade />
      <Vlibras />
      {leitor ? <TextToSpeech /> : ""}

      <div>
        <div className="game__page">
          <div className="game__page__image">
            <p
              onClick={() =>
                setImage(image === 0 ? imgs.length - 1 : image - 1)
              }
            >
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <img src={`data:image/png;base64, ${jogo?.[imgs[image]]}`} alt="" />
            <p
              onClick={() =>
                setImage(image === imgs.length - 1 ? 0 : image + 1)
              }
            >
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div className="game__page__images">
            {imgs.map((image, index) => (
              <img
                src={`data:image/png;base64, ${jogo?.[image]}`}
                key={image.id}
                onClick={() => setImage(index)}
              />
            ))}
          </div>
          <div className="gameinfo__game__page">
            <div className="text__game__page">
              <div className="title__game__page">
                <h2>{jogo?.titulo}</h2>
                <div className="classif__game__page">
                  <p className="rating__game__page">{game?.rating}/5</p>
                  <p className="classification__game__page">Livre</p>
                </div>
              </div>
              <div className="game__page__genres">
                <span>{jogo?.genero}</span>
              </div>
              <p className="description__game__page">
                {translate("Descrição")}: {jogo?.descricao}
              </p>
              <div className="comments__game__page">
                <h2>{translate("Avaliações")}</h2>
                <div className="comment__game__page">
                  <div className="usercomment__game__page">
                    <div className="avatar__user"></div>
                    <div className="info__user">
                      <p className="username">
                        User user<p className="usernick">@User</p>
                      </p>
                      <p className="time__comment">Há um mês</p>
                    </div>
                  </div>
                  <div className="text__comment">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, nobis ut quasi non, nemo quas ad beatae at
                    eligendi rerum accusantium amet molestias ea voluptatum,
                    consequuntur ullam praesentium dolores explicabo.
                  </div>
                </div>
              </div>
            </div>
            <div className="info__game__page">
              <div className="addcart__game__page">
                <h2>R$0{game?.rating}</h2>
                <button
                  onClick={() => handleClickAdd(game)}
                  style={{ display: !carrinho ? "flex" : "none" }}
                >
                  {translate("Adicionado ao carrinho")}
                </button>
                <button
                  onClick={() => handleClickAdd(game)}
                  style={{ display: carrinho ? "flex" : "none" }}
                >
                  {translate("Adicionar ao carrinho")}
                </button>
                <div
                  className="favorite__game__page"
                  onClick={() => handleClickFavorite(game)}
                >
                  <img src="/imgs/icons/heart_icon.png" alt="" />
                  <p>
                    {!listaDeDesejos && translate("Adicionado a lista de desejos")}
                    {listaDeDesejos && translate("Adicionar a lista de desejos")}
                  </p>
                </div>
              </div>
              <div className="about__game__page">
                <h3>{translate("Sobre o jogo")}</h3>
                <p>
                  {translate("Desenvolvedor")}: 
                  <Link to={`/dev/${dev?.nome.toLowerCase().replace(/ /g, "-")}`} aria-label="desenvolvedor">
                    {dev?.nome}
                  </Link>
                </p>
                <p>
                  {translate("Gênero")}:{" "}
                    <Link
                      to={`/categorias/category=${jogo?.genero}`}
                      aria-label={jogo?.genero}
                    >
                      <p>
                        {jogo?.genero}
                      </p>
                    </Link>
                </p>
                <p>
                  {translate("Data de lançamento")}:{" "}
                  {new Date(game?.released).toLocaleDateString()}
                </p>
              </div>
              <div className="system__game__page">
                <div className="title__system">
                  <h3>{translate("Requisitos do sistema")}</h3>
                  <div className="platforms">
                    {game?.parent_platforms.map((plataform) => (
                      <Link
                        to={`/categorias/platform=${plataform.platform?.name}`}
                        key={plataform.platform?.id}
                        aria-label={plataform.platform?.name}
                      >
                        <i
                          className={choosePlataform(plataform.platform?.name)}
                        ></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <p>
                  <b>{translate("Mínimos")}</b>
                  <br />
                  <ul>
                    <li>SO: {jogo?.["SO"]}</li>
                    <li>Processador: {jogo?.processador}</li>
                    <li>Placa de vídeo: {jogo?.placaDeVideo}</li>
                    <li>Memória: {jogo?.quantMemoria} {jogo?.tipoMemoria}</li>
                    <li>Armazenamento: {jogo?.quantArmazenamento} {jogo?.tipoArmazenamento}</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  listadesejos: state.listadesejos,
});
export default connect(mapStateToProps)(Jogo);
