import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Vlibras from "../../components/Vlibras/Vlibras"
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Modal from "../../components/Modal/Modal"
import { translate } from "../../translate/translate";
import "./style.css";
import Axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

const EditarJogo = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()
  const {idJogo} = useParams();
  const [jogo, setJogo] = useState({});
  useEffect(() =>{
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarJogo/${idJogo}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setJogo(response.data);
      console.log(response.data);
    }).catch((error) => console.log(error))
  }, [])
  const onChangeGame = (type, value) => {
    setJogo({ ...jogo, [type]: value });
  };
  const [erro, setErro] = useState(false);
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState(null)
  const steps = [
    <Step1 jogo={jogo} onChangeGame={onChangeGame} erro={erro}/>,
    <Step2 jogo={jogo} onChangeGame={onChangeGame} erro={erro}/>,
    <Step3 jogo={jogo} onChangeGame={onChangeGame} />,
  ];

  function criarJogo(){
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
    }
    const jogoFiles = {
      jogoWin: jogo?.jogoWin,
      bannerUm: jogo?.bannerUm,
      bannerDois: jogo?.bannerDois,
      bannerTres: jogo?.bannerTres,
      bannerQuatro: jogo?.bannerQuatro,
      bannerCinco: jogo?.bannerCinco,
      licenca: jogo?.licenca
    }
    const todoJogo = {
      idDev: parseInt(jogo?.idDev),
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
      licenca: jogo?.licenca
    }

    const formData = new FormData();

    formData.append('jogoWin', jogoFiles?.jogoWin);
    formData.append('bannerUm', jogoFiles?.bannerUm);
    formData.append('bannerDois', jogoFiles?.bannerDois);
    formData.append('bannerTres', jogoFiles?.bannerTres);
    formData.append('bannerQuatro', jogoFiles?.bannerQuatro);
    formData.append('bannerCinco', jogoFiles?.bannerCinco);
    formData.append('licenca', jogoFiles?.licenca);

    Axios.put(`https://backendmaisjogos-production.up.railway.app/api/jogo/alterarJogo/${jogo?.id}`, todoJogo, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      console.log("Response jogos info", response);
      console.log("Response jogos files", todoJogo);
      setModal(<Modal message={"Seu jogo foi alterado!"} type={true}/>)
      setTimeout(() =>{
        navigate("/jogos-dev")
      }, 3000)
      /* Axios.patch(`https://backendmaisjogos-production.up.railway.app/api/jogo/atualizaFile/${response.data.id}`, formData, {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log("Response jogos files", response);
      })
      .catch((error) => {
        console.log(error);
        setModal(<Modal message={"Seu jogo não foi alterado!"} type={false}/>)
        setTimeout(() =>{
          setModal(null)
        }, 3000)
      }) */
    })
    .catch((error) => {
      console.log(error);
      setModal(<Modal message={"Seu jogo não foi alterado!"} type={false}/>)
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
        (jogo.plataforma === null || jogo.so === null || 
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
      <Vlibras/>
      <Acessibilidade />
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

export default EditarJogo;
