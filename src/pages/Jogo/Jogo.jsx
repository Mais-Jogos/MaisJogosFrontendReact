/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { selectGame } from "../../redux/actions";
import { favoriteGame, deletefavoriteGame } from "../../redux/actions";
import { connect } from "react-redux";
import "./style.css";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import Loading from "../../components/Loading/Loading"

const Jogo = ({ dispatch, listadesejos, cart }) => {
  const [jogo, setJogo] = useState({});
  const [image, setImage] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(<Loading/>)
  const [reviews, setReviews] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [rating, setRating] = useState(0)
  const [dev, setDev] = useState();
  const { name } = useParams();
  const token = window.localStorage.getItem("token");
  const id = window.localStorage.getItem("id");
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
    Axios.get("https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos").then((response) => {
        console.log("Jogos", response.data);
        const game = response.data.filter(
          (jogo) => jogo.titulo.toLowerCase().replace(/ /g, "-") === name
        )[0];
        setJogo(game);

        Axios.get(`https://backendmaisjogos-production.up.railway.app/api/usuario/listarCliente/${game?.idDev}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then((response) => {
            console.log("Dev", response.data);
            setDev(response.data);
        }).catch((error) => console.log(error));
        Axios.get(`https://backendmaisjogos-production.up.railway.app/api/review/listarTodos`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          setReviews(res.data);
          console.log("Reviews", res.data);
        })
        setLoading(null)
      }).catch((error) =>{
        console.log(error)
        setLoading(null)
      });

      Axios.get('https://backendmaisjogos-production.up.railway.app/api/favorito/listarTodos', {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        console.log("Favoritos", response.data);
        setFavoritos(response.data)
        setFavorito(response.data.some(
          (favoritos) => (favoritos?.idJogo === jogo?.id && favoritos?.idUser === id)
        ))
        console.log(response.data.some(
          (favoritos) => (favoritos?.idJogo === jogo?.id && favoritos?.idUser === id)
        ));
      }).catch((error) => console.log(error));

      Axios.get(`https://backendmaisjogos-production.up.railway.app/api/usuario/listarTodos`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
          setUsuarios(response.data);
          console.log("Usuarios", response.data);
      })
  }, []);
  var carrinho = cart.cart.every((c) => c?.id != jogo?.id);
  const handleClickAdd = (game) => {
    if (!carrinho && token) {
      dispatch(selectGame(game));
    }
  };
  const handleClickFavorite = (game) => {
    if (!favorito && token) {
      Axios.post('https://backendmaisjogos-production.up.railway.app/api/favorito/salvar', {
        idUser: id,
        idJogo: jogo?.id,
      }, {
        headers:{
          Authorization: `Bearer ${token}`
      }}).then((response) =>{
        console.log(response.data);
      })
      dispatch(favoriteGame(game));
    }else if(favorito && token){
      const favoritoSelecionado = favoritos?.filter(
        (favoritos) => favoritos?.idJogo == jogo?.id && favoritos?.idUser == id
      )[0]
        console.log(favoritoSelecionado);
      Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/favorito/deletarUser/${favoritoSelecionado?.id}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }}).then((response) =>{
        console.log(response.data);
      })
      setFavorito(favoritos.some(
        (favoritos) => (favoritos?.idJogo === jogo?.id && favoritos?.idUser === id && favoritos?.id != favoritoSelecionado?.id)
      ))
      dispatch(deletefavoriteGame(game))
    }
  };
  const reviewuser = reviews?.filter((review) => 
                    review?.idJogo == jogo?.id)
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
    <div id="container-page">
      <Menu />
      <Acessibilidade />
      <Vlibras />
      {leitor ? <TextToSpeech /> : ""}
      {loading}
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
                  <p className="rating__game__page">
                    {reviewuser?.reduce((accumulator, currentValue) => 
                    accumulator + currentValue?.notaReview, 0)/reviewuser.length
                    }/5</p>
                  <p className={`classification__game__page class-${jogo?.classficacaoIndicativa}`}>{jogo?.classficacaoIndicativa}</p>
                </div>
              </div>
              <div className="game__page__genres">
                {jogo?.genero?.map(gen => <span>{gen}</span>)}
              </div>
              <p className="description__game__page">
                {translate("Descrição")}: {jogo?.descricao}
              </p>
              <div className="comments__game__page">
                <h2>{translate("Avaliações")}</h2>
                {reviews?.filter((review) => review?.idJogo == jogo?.id)
                ?.map(review =>{
                  const user = usuarios.filter(user => user?.id === review?.idUser)[0]
                  return(
                  <div className="comment__game__page">
                    <div className="usercomment__game__page">
                      <div className="avatar__user"></div>
                      <div className="info__user">
                        <p className="username">
                        {user?.nome} {user?.sobrenome}<p className="usernick">@{user?.nome}</p>
                        </p>
                        <p className="time__comment">{review?.dataReview}</p>
                      </div>
                    </div>
                    <div className="text__comment">
                      {review?.descricaoReview}
                    </div>
                  </div>)
                })}
              </div>
            </div>
            <div className="info__game__page">
              <div className="addcart__game__page">
                <h2>R${jogo?.valorJogo}</h2>
                <button
                  onClick={() => handleClickAdd(jogo)}
                  style={{ display: !carrinho ? "flex" : "none" }}
                >
                  {translate("Adicionado ao carrinho")}
                </button>
                <button
                  onClick={() => handleClickAdd(jogo)}
                  style={{ display: carrinho ? "flex" : "none" }}
                >
                  {translate("Adicionar ao carrinho")}
                </button>
                <div
                  className="favorite__game__page"
                  onClick={() => handleClickFavorite(jogo)}
                >
                  <img src="/imgs/icons/heart_icon.png" alt="" />
                  <p>
                    {favorito && translate("Adicionado a lista de desejos")}
                    {!favorito && translate("Adicionar a lista de desejos")}
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
                    {jogo?.genero?.map(gen => <Link
                      to={`/categorias/category=${gen}`}
                      aria-label={gen}
                    >
                      <p>
                        {gen}
                      </p>
                    </Link>)}
                </p>
                <p>
                  {translate("Data de lançamento")}:{" "}
                  {new Date(jogo?.dataCriacao).toLocaleDateString()}
                </p>
              </div>
              <div className="system__game__page">
                <div className="title__system">
                  <div className="platforms">
                      <Link
                        to={`/categorias/platform=${jogo?.plataforma}`}
                        aria-label={jogo?.plataforma}
                      >
                        <i
                          className={choosePlataform(jogo?.plataforma)}
                        ></i>
                      </Link>
                      <Link
                        to={`/categorias/platform=${jogo?.["so"]}`}
                        aria-label={jogo?.["so"]}
                      >
                        <i
                          className={choosePlataform(jogo?.["so"])}
                        ></i>
                      </Link>
                  </div>
                  <h3>{translate("Requisitos do sistema")}</h3>
                </div>
                <p>
                  <ul>
                    <li>SO: {jogo?.so}</li>
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
