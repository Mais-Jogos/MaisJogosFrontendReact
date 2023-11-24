import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { translate } from "../../translate/translate";
import "./style2.css";
import Axios from 'axios'

const CadastroJogo2 = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const [jogo, setJogo] = useState({
    titulo: null,
    descricao: null,
    genero: [],
    plataforma: null,
    SO: null,
    processador: null,
    placaDeVideo: null,
    quantMemoria: null,
    tipoMemoria: null,
    quantArmazenamento: null,
    tipoArmazenamento: null,
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
  const steps = [
    <Step1 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step2 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step3 jogo={jogo} onChangeGame={onChangeGame} />,
  ];

  function criarJogo(){
    const jogoInfo = {
      titulo: jogo?.titulo,
      descricao: jogo?.descricao,
      genero: jogo?.genero[0],
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
      bannerDois: jogo?.fotos[2],
      bannerTres: jogo?.fotos[3],
      bannerQuatro: jogo?.fotos[4],
      bannerCinco: jogo?.fotos[5],
      licenca: jogo?.licenca
    }
    console.log("NewJogo", jogoInfo);
    console.log("Jogo", jogo);
    console.log("foto1", jogo?.fotos[0]);
    Axios.post("http://localhost:8080/api/jogo/salvar", jogoInfo, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      Axios.patch(`http://localhost:8080/api/jogo/atualizaFile/${response.data.id}`, jogoFiles, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
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

export default CadastroJogo2;
