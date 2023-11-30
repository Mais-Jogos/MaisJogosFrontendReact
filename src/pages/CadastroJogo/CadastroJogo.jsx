import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Modal from "../../components/Modal/Modal"
import { translate } from "../../translate/translate";
import "./style.css";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import Vlibras from "../../components/Vlibras/Vlibras";

const CadastroJogo = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()
  const [jogo, setJogo] = useState({
    titulo: null,
    descricao: null,
    genero: [],
    plataforma: null,
    SO: null,
    processador: null,
    placaDeVideo: null,
    quantMemoria: null,
    tipoMemoria: "MB",
    quantArmazenamento: null,
    tipoArmazenamento: "MB",
    jogo: null,
    classificacao: null,
    fotos: null,
    videos: null,
    idDev: id,
    licenca: null,
  });
  const onChangeGame = (type, value) => {
    setJogo({ ...jogo, [type]: value });
  };
  const [erro, setErro] = useState(false);
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState(null)
  const steps = [
    <Step1 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step2 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step3 jogo={jogo} onChangeGame={onChangeGame} />,
  ];

  function criarJogo(){
    const jogoInfo = {
      idDev: jogo?.idDev,
      titulo: jogo?.titulo,
      descricao: jogo?.descricao,
      genero: jogo?.genero,
      plataforma: jogo?.plataforma,
      SO: jogo["SO"],
      processador: jogo?.processador,
      placaDeVideo: jogo?.placaDeVideo,
      quantMemoria: jogo?.quantMemoria,
      tipoMemoria: jogo?.tipoMemoria,
      quantArmazenamento: jogo?.quantArmazenamento,
      tipoArmazenamento: jogo?.tipoArmazenamento,
    }
    const jogoFiles = {
      jogoWin: jogo?.jogo,
      jogoAndroid: jogo?.jogo,
      bannerUm: jogo?.fotos[0],
      bannerDois: jogo?.fotos[1],
      bannerTres: jogo?.fotos[2],
      bannerQuatro: jogo?.fotos[3],
      bannerCinco: jogo?.fotos[4],
      licenca: jogo?.licenca
    }

    const formData = new FormData();

    formData.append('jogoWin', jogoFiles?.jogoWin);
    formData.append('jogoAndroid', jogoFiles?.jogoAndroid);
    formData.append('bannerUm', jogoFiles?.bannerUm);
    formData.append('bannerDois', jogoFiles?.bannerDois);
    formData.append('bannerTres', jogoFiles?.bannerTres);
    formData.append('bannerQuatro', jogoFiles?.bannerQuatro);
    formData.append('bannerCinco', jogoFiles?.bannerCinco);
    formData.append('licenca', jogoFiles?.licenca);

    Axios.post("http://localhost:8080/api/jogo/salvar", jogoInfo, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      console.log("Response jogos info", response);
      Axios.patch(`http://localhost:8080/api/jogo/atualizaFile/${response.data.id}`, formData, {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log("Response jogos files", response);
        setModal(<Modal message={"Seu jogo foi cadastrado!"} type={true}/>)
        setTimeout(() =>{
          navigate("/jogos-dev")
        }, 3000)
      })
      .catch((error) => {
        console.log(error);
        setModal(<Modal message={"Seu jogo não foi cadastrado!"} type={false}/>)
        setTimeout(() =>{
          setModal(null)
        }, 3000)
      })
    })
    .catch((error) => {
      console.log(error);
      setModal(<Modal message={"Seu jogo não foi cadastrado!"} type={false}/>)
        setTimeout(() =>{
          setModal(null)
        }, 3000)
    })
  }
  const nextStep = () => {
    if (
      (step === 0 &&
      (jogo.titulo === null || jogo.descricao === null || jogo.genero.length === 0)) || 
      (step === 1 && 
        (jogo.plataforma === null || jogo.SO === null || 
          jogo.processador === null || jogo.placaDeVideo === null || jogo.quantMemoria === null ||
          jogo.tipoMemoria === null || jogo.quantArmazenamento === null || jogo.tipoArmazenamento === null)
      ) ||
      (step === 2 &&
        (jogo.jogo === null ||
          jogo.fotos === null ||
          jogo.videos === null ||
          jogo.licenca === null ||
          jogo.classificacao === null))
    ) {
      setErro(true);
      setTimeout(() => {
        setErro(false);
      }, 3000);
    } else {
      setErro(false);
      if(step === 2){
        criarJogo()
        console.log(jogo);
      }else{
        setStep(step + 1);
      }
    }
  };
  const previousStep = () =>{
    if(step === 2){
      setJogo({...jogo, requisitos: [], plataformas: []})
    }
    setStep(step - 1);
  }
  return (
    <div id="container-page">
      <Menu />
      <Acessibilidade />
      <Vlibras/>
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
      {steps[step]}
      <section className="cadastroJogo__step">
        {step !== 0 && (
          <button
            onClick={previousStep}
            className="cadastroJogo__step__button cadastroJogo__step__buttonBack"
          >
            Voltar
          </button>
        )}
        {step !== 2 &&<button
            onClick={nextStep}
            className="cadastroJogo__step__button cadastroJogo__step__buttonNext"
          >
            Próximo
          </button>}
        {step === 2 && <button
            onClick={criarJogo}
            className="cadastroJogo__step__button cadastroJogo__step__buttonNext"
          >
            Cadastrar
          </button>}
      </section>
    </div>
  );
};

export default CadastroJogo;
