import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { translate } from "../../translate/translate";
import "./style2.css"

const CadastroJogo2 = () => {
  const [jogo, setJogo] = useState({
    titulo: null,
    descricao: null,
    genero: null,
    plataforma: null,
    requisitos: {},
    jogo: null,
    classificacao: null,
    midia: null,
  });
  const onChangeGame = (type, value) => {
    setJogo({ ...jogo, [type]: value });
  };
  const [step, setStep] = useState(0);
  const steps = [
    <Step1 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step2 jogo={jogo} onChangeGame={onChangeGame} />,
    <Step3 jogo={jogo} onChangeGame={onChangeGame} />,
  ];
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
      {steps[step]}
      <section className="cadastroJogo__step">
        {step !== 0 && <button onClick={() => setStep(step - 1)} className="cadastroJogo__step__button cadastroJogo__step__buttonBack">Voltar</button>}
        {step !== 2 && <button onClick={() => setStep(step + 1)} className="cadastroJogo__step__button cadastroJogo__step__buttonNext">Próximo</button>}
        <button onClick={() => console.log("Jogo", jogo)}>Mostrar</button>
      </section>
    </div>
  );
};

export default CadastroJogo2;
