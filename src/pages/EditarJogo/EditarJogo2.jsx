import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Modal from "../../components/Modal/Modal";
import { translate } from "../../translate/translate";
import "./style.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Platform from "./Platform";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const EditarJogo = () => {
  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const { idJogo } = useParams();
  const [jogo, setJogo] = useState({});
  const [newGame, setNewGame] = useState({})
  const [leitor, setLeitor] = useState(false);
  useEffect(() => {
    Axios.get(
      `https://backendmaisjogos-production.up.railway.app/api/jogo/listarJogo/${idJogo}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        setJogo(response.data);
        console.log(response.data);
        setLeitor(true);
      })
      .catch((error) => console.log(error));
  }, []);
  const onChangeGame = (type, value) => {
    //setJogo({ ...jogo, [type]: value });
    setNewGame({ ...newGame, [type]: value });
    console.log(newGame);
  };
  const [erro, setErro] = useState(false);
  const [step, setStep] = useState(2);
  const [modal, setModal] = useState(null);
  const steps = [
    <Step1 jogo={jogo} onChangeGame={onChangeGame} erro={erro} />,
    <Step2 jogo={jogo} onChangeGame={onChangeGame} erro={erro} />,
    <Step3 jogo={jogo} onChangeGame={onChangeGame} />,
  ];

  function criarJogo() {
      const jogoInfo = {
        idDev: jogo?.idDev,
        titulo: jogo?.titulo,
        valorJogo: parseFloat(jogo?.valorJogo),
        descricao: jogo?.descricao,
        genero: jogo?.genero,
        plataforma: jogo?.plataforma,
        so: jogo?.so,
        processador: jogo?.processador,
        placaDeVideo: jogo?.placaDeVideo,
        quantMemoria: jogo?.quantMemoria,
        tipoMemoria: jogo?.tipoMemoria,
        quantArmazenamento: jogo?.quantArmazenamento,
        tipoArmazenamento: jogo?.tipoArmazenamento,
      };
      const jogoFiles = {
        jogoWin: jogo?.jogoWin,
        bannerUm: jogo?.bannerUm,
        bannerDois: jogo?.bannerDois,
        bannerTres: jogo?.bannerTres,
        bannerQuatro: jogo?.bannerQuatro,
        bannerCinco: jogo?.bannerCinco,
        licenca: jogo?.licenca,
      };
      const todoJogo = {
        idDev: id,
        titulo: jogo?.titulo,
        valorJogo: parseFloat(jogo?.valorJogo),
        descricao: jogo?.descricao,
        genero: jogo?.genero,
        plataforma: jogo?.plataforma,
        processador: jogo?.processador,
        placaDeVideo: jogo?.placaDeVideo,
        quantMemoria: jogo?.quantMemoria,
        tipoMemoria: jogo?.tipoMemoria,
        quantArmazenamento: jogo?.quantArmazenamento,
        tipoArmazenamento: jogo?.tipoArmazenamento,
        jogoWin: jogo?.jogoWin,
        bannerUm: jogo?.bannerUm,
        bannerDois: jogo?.bannerDois,
        bannerTres: jogo?.bannerTres,
        bannerQuatro: jogo?.bannerQuatro,
        bannerCinco: jogo?.bannerCinco,
        licenca: jogo?.licenca,
      };

      const formData = new FormData();

      formData.append("jogoWin", jogoFiles?.jogoWin);
      formData.append("bannerUm", jogoFiles?.bannerUm);
      formData.append("bannerDois", jogoFiles?.bannerDois);
      formData.append("bannerTres", jogoFiles?.bannerTres);
      formData.append("bannerQuatro", jogoFiles?.bannerQuatro);
      formData.append("bannerCinco", jogoFiles?.bannerCinco);
      formData.append("licenca", jogoFiles?.licenca);

      Axios.put(
        `https://backendmaisjogos-production.up.railway.app/api/jogo/alterarJogo/${jogo?.id}`,
        newGame,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response) => {
          console.log("Response jogos info", response.data);
          console.log("Response jogos todo", todoJogo);
          console.log("Response jogos files", newGame);
          setModal(<Modal message={"Seu jogo foi alterado!"} type={true} />);
          setTimeout(() => {
            navigate("/jogos-dev");
          }, 3000);
      }).catch((error) => {
          console.log(error);
          setModal(
            <Modal message={"Seu jogo não foi alterado!"} type={false} />
          );
          setTimeout(() => {
            setModal(null);
          }, 3000);
      });
  }

  const generos = [
    "Ação",
    "Arcade",
    "Aventura",
    "Casual",
    "Corrida",
    "Esportes",
    "Estratégia",
    "Luta",
    "Puzzle",
    "Rpg",
    "Shooter",
    "Terror",
  ];
  const SOCel = ["Android", "IOS"];
  const SOPc = ["Windows", "MacOs", "Linux"];
  const SO = ["Windows", "MacOs", "Linux", "Android", "IOS"];
  const platforms = ["Computador", "Celular"];
  const [mapSO, setMapSO] = useState(SO);

  const imgs = [
    "bannerUm",
    "bannerDois",
    "bannerTres",
    "bannerQuatro",
    "bannerCinco",
  ];
  return (
    <div id="container-page">
      <Menu />
      <Acessibilidade />
      {leitor && <TextToSpeech />}
      {modal}
      <main className="cadastroJogo__main">
        <div className="cadastroJogo__title">
          <i className="fa-solid fa-caret-left"></i>
          <h1>{translate("Cadastre seu jogo")}</h1>
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <section className="cadastroJogo__menu">
          <div className="cadastroJogo__menu__block">
            <div
              className={
                step == 0
                  ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select"
                  : step > 0
                  ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__text--selected"
                  : "cadastroJogo__menu__block__circle"
              }
            >
              <p>1</p>
            </div>
            <div className={"cadastroJogo__menu__block__text"}>
              <p>Dados</p>
            </div>
          </div>

          <div className="cadastroJogo__menu__block">
            <div
              className={
                step == 1
                  ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select"
                  : step > 1
                  ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__text--selected"
                  : "cadastroJogo__menu__block__circle"
              }
            >
              <p>2</p>
            </div>
            <div className={"cadastroJogo__menu__block__text"}>
              <p>Requisitos</p>
            </div>
          </div>

          <div className="cadastroJogo__menu__block">
            <div
              className={
                step == 2
                  ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select"
                  : "cadastroJogo__menu__block__circle"
              }
            >
              <p>3</p>
            </div>
            <div className={"cadastroJogo__menu__block__text"}>
              <p>Uploads</p>
            </div>
          </div>
        </section>
      </main>
      {erro && (
        <div className="cadastroJogo--erroMessage-border">
          <p className="cadastroJogo--errorMessage">
            <i className="fa-solid fa-xmark"></i>
            Preencha todas as informações
          </p>
        </div>
      )}
      <section className="cadastroJogo__content">
        <label htmlFor="titulo" className={`cadastroJogo__content__label`}>
          Titulo
        </label>
        <input
          type="text"
          id="titulo"
          defaultValue={jogo?.titulo}
          onChange={(e) => onChangeGame("titulo", e.target.value)}
          className={`${erro && "cadastroJogo__content__body--erroMessage"}`}
        />
        <label htmlFor="descrição" className={`cadastroJogo__content__label`}>
          Descrição
        </label>
        <textarea
          name="descrição"
          id="descrição"
          cols="30"
          rows="10"
          defaultValue={jogo?.descricao}
          className={`${erro && "cadastroJogo__content__body--erroMessage"}`}
          onChange={(e) => onChangeGame("descricao", e.target.value)}
        ></textarea>
        <label htmlFor="gêneros" className="cadastroJogo__content__label">
          Gêneros
        </label>
        <div className="cadastroJogo__content__Bodybuttons">
          {generos.map((genero) => (
            <>
              <button
                className={
                  jogo?.genero?.some((g) => g === genero)
                    ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select"
                    : "cadastroJogo__content__buttons"
                }
                onClick={() => {
                  const newGeneros = !jogo?.genero?.some((g) => g === genero)
                    ? [...jogo?.genero, genero]
                    : jogo?.genero?.filter((g) => g !== genero);
                  const generoFiltrado = newGeneros.filter((genero) =>
                    generos.includes(genero)
                  );
                  console.log(jogo?.genero);
                  onChangeGame("genero", generoFiltrado);
                }}
              >
                {genero}
              </button>
            </>
          ))}
        </div>
        <div className="cadastroJogo__content__plataforms">
          <h2>Plataforma</h2>
          {platforms.map((platform) => (
            <div className="cadastroJogo__content__plataforms__checkboxs">
              <label
                htmlFor={platform}
                className="cadastroJogo__content__label"
              >
                <input
                  type="radio"
                  name="platform"
                  id={platform}
                  className={`cadastroJogo__content__steps--inputTTS ${
                    erro && "cadastroJogo__content__body--erroMessage"
                  }`}
                  defaultChecked={jogo?.plataforma == platform}
                  onClick={() => {
                    onChangeGame("plataforma", platform);
                    if (platform === "Celular") {
                      setMapSO(SOCel);
                    } else {
                      setMapSO(SOPc);
                    }
                  }}
                />
                {platform}
              </label>
            </div>
          ))}
          <h2>Sistema Operacional</h2>
          {mapSO.map((platform) => (
            <div className="cadastroJogo__content__plataforms__checkboxs">
              <label
                htmlFor={platform}
                className="cadastroJogo__content__label"
              >
                <input
                  type="radio"
                  name="SO"
                  id={platform}
                  className={`cadastroJogo__content__steps--inputTTS ${
                    erro && "cadastroJogo__content__body--erroMessage"
                  }`}
                  defaultChecked={jogo?.["so"] == platform}
                  onClick={() => {
                    onChangeGame("so", platform);
                  }}
                />
                {platform}
              </label>
            </div>
          ))}
        </div>

        <div className="cadastroJogo__content__requirements">
          <h2 className="cadastroJogo__content__h3">
            Requisitos {jogo.plataforma}
          </h2>
          <div className="cadastroJogo__content__requirements__forms">
            <div className="cadastroJogo__content__requirements__selected">
              <div className="cadastroJogo__content__requirements__inputs">
                <label
                  htmlFor="MinProcessador"
                  className="cadastroJogo__content__label"
                >
                  Processador
                </label>
                <input
                  type="text"
                  id="MinProcessador"
                  defaultValue={jogo["processador"]}
                  onChange={(e) => onChangeGame("processador", e.target.value)}
                />
              </div>
              <div className="cadastroJogo__content__requirements__inputs">
                <label
                  htmlFor="MinPlaca de video"
                  className="cadastroJogo__content__label"
                >
                  Placa de video
                </label>
                <input
                  type="text"
                  id="MinPlaca de video"
                  defaultValue={jogo["placaDeVideo"]}
                  onChange={(e) => onChangeGame("placaDeVideo", e.target.value)}
                />
              </div>
              <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                <div>
                  <label htmlFor="MinMemoria">Memória</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="memoria"
                    id="MinMemoria"
                    defaultValue={jogo["quantMemoria"]}
                    onChange={(e) =>
                      onChangeGame("quantMemoria", e.target.value)
                    }
                  />
                  <select
                    name="memoria"
                    id="Minmemoriatam"
                    defaultValue={jogo["tipoMemoria"]}
                    className="cadastroJogo__content__select"
                    onChange={(e) =>
                      onChangeGame("tipoMemoria", e.target.value)
                    }
                  >
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                  </select>
                </div>
              </div>
              <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                <div>
                  <label htmlFor="MinArmazenamento">Armazenamento</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="armazenamento"
                    id="MinArmazenamento"
                    defaultValue={jogo["quantArmazenamento"]}
                    onChange={(e) =>
                      onChangeGame("quantArmazenamento", e.target.value)
                    }
                  />
                  <select
                    name="armazenamento"
                    id="MinArmazenamentotam"
                    className="cadastroJogo__content__select"
                    defaultValue={jogo["tipoArmazenamento"]}
                    onChange={(e) =>
                      onChangeGame("tipoArmazenamento", e.target.value)
                    }
                  >
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="jogo" className="cadastroJogo__content__label">
          Jogo
        </label>
        <div className="cadastroJogo__content__uploadContent__fileUpload">
          <input
            type="file"
            id="jogo"
            onChange={(e) => onChangeGame("jogo", e.target.files[0])}
            className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}
          />
        </div>
        <h3 className="cadastroJogo__content__h3">Midia</h3>
        <label htmlFor="fotos" className="cadastroJogo__content__label">
          Fotos
        </label>
        <div className="cadastroJogo__content__uploadContent__fileUpload content_imgs-edit">
          {imgs?.map((img) => (
            <div className="content_img-edit">
              <img src={`data:image/png;base64, ${jogo?.[img]}`} alt={"img"} />
              <input
                type="file"
                id={img}
                onChange={(e) => onChangeGame(img, e.target.files)}
                className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}
              />
            </div>
          ))}
        </div>
        <label htmlFor="licenca" className="cadastroJogo__content__label">
          Licença
        </label>
        <div className="cadastroJogo__content__uploadContent__fileUpload">
          <input
            type="file"
            id="licenca"
            onChange={(e) => onChangeGame("licenca", e.target.files[0])}
            className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}
          />
        </div>
        <label htmlFor="classificacao" className="cadastroJogo__content__label">
          Classificação Indicativa
        </label>
        <select
          name="classificacao"
          id="classificacao"
          className="cadastroJogo__content__select"
          onChange={(e) => onChangeGame("classificacao", e.target.value)}
        >
          <option selected disabled value="Selecione">
            Selecione
          </option>
          <option value="Livre">Livre</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>
        <label
          htmlFor="valorJogo"
          className={`cadastroJogo__content__label label__valorJogo`}
        >
          Valor do Jogo
          <i
            class="fa-solid fa-info"
            title="Para mantermos a plataforma nós da +Jogos recebemos uma taxa de 10% do valor do jogo após a compra"
          ></i>
        </label>
        <input
          type="number"
          id="valorJogo"
          defaultValue={jogo?.valorJogo}
          onChange={(e) => onChangeGame("valorJogo", e.target.value)}
        />
      </section>
      <section className="cadastroJogo__step">
        <button
          onClick={criarJogo}
          className="cadastroJogo__step__button cadastroJogo__step__buttonNext"
        >
          Editar
        </button>
      </section>
    </div>
  );
};

export default EditarJogo;
