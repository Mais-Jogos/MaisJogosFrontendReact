import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";
import React, { useReducer } from "react";

function reducerCheckboxRequirements(state, action) {
    switch (action.type) {
        case "windows":
            return { ...state, windows: action.windows }
        case "macOs":
            return { ...state, macOs: action.macOs }
        case "linux":
            return { ...state, linux: action.linux }
        case "android":
            return { ...state, android: action.android }
        case "ios":
            return { ...state, ios: action.ios }
        default:
            return state;
    }
}

function setData(state, setState) {
    if(state == 3){
        console.log("Cadastra jogo!");
    }else{
        setState(e => e + 1)
    }
}

function secondStepFormStyle(state, type) {
    if(type == "div"){
        if(state == 1){
            return "cadastroJogo__menu__block__circle"
        }else if(state == 2){
            return "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select"
        }else{
            return "cadastroJogo__menu__block__circle cadastroJogo__menu__block__text--selected"
        }
    }else if(type == "p"){
        if(state == 1){
            return "cadastroJogo__menu__block__text"
        }else if(state == 2){
            return "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--select"
        }else{
            return "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--selected"
        }
    }
}

export default props => {
    const [stepForm, setSteapForm] = useState(1)

    const [checkboxRequirements, dispatch] = useReducer(reducerCheckboxRequirements, {
        windows: false,
        macOs: false,
        linux: false,
        android: false,
        ios: false
    });

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />

            <main className="cadastroJogo__main">
                <section className="cadastroJogo__title">

                    <div class="cadastroJogo__title__setas">
                        <div class="cadastroJogo__title__seta esquerda"></div>
                    </div>

                    <h1>Cadastre seu jogo</h1>

                    <div class="cadastroJogo__title__setas">
                        <div class="cadastroJogo__title__seta direita"></div>
                    </div>
                </section>

                <section className="cadastroJogo__menu">
                    <div className="cadastroJogo__menu__block">
                        <div className={stepForm == 1 ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select" : "cadastroJogo__menu__block__circle cadastroJogo__menu__block__text--selected"}>
                            <p>1</p>
                        </div>
                        <div className={stepForm == 1 ? "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--select" : "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--selected"}>
                            <p>Dados</p>
                        </div>
                    </div>

                    <div className="cadastroJogo__menu__block">
                        <div className={stepForm != 0 ? secondStepFormStyle(stepForm, "div") : ""}>
                            <p>2</p>
                        </div>
                        <div className={stepForm != 0 ? secondStepFormStyle(stepForm, "p") : ""}>
                            <p>Requisitos</p>
                        </div>
                    </div>

                    <div className="cadastroJogo__menu__block">
                        <div className={stepForm == 3 ? "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select" : "cadastroJogo__menu__block__circle"}>
                            <p>3</p>
                        </div>
                        <div className={stepForm == 3 ? "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--select" : "cadastroJogo__menu__block__text"}>
                            <p>Uploads</p>
                        </div>
                    </div>
                </section>
                <section className="cadastroJogo__content">
                    {/* Etapa 1 */}
                    {stepForm == 1 ? (<div className="cadastroJogo__content__descriptionGame">
                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__title" className="cadastroJogo__content__label">Título</label>
                            <input type="text" id="cadastroJogo__content__title"></input>
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__textarea" className="cadastroJogo__content__label">Descrição</label>
                            <textarea id="cadastroJogo__content__textarea"></textarea>
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label className="cadastroJogo__content__label">Gêneros</label>
                            <div className="cadastroJogo__content__Bodybuttons">
                                <button className="cadastroJogo__content__buttons cadastroJogo__content__buttons--select">Ação</button>
                                <button className="cadastroJogo__content__buttons">Arcade</button>
                                <button className="cadastroJogo__content__buttons">Aventura</button>
                                <button className="cadastroJogo__content__buttons">Casual</button>
                                <button className="cadastroJogo__content__buttons">Corrida</button>
                                <button className="cadastroJogo__content__buttons">Esporte</button>
                                <button className="cadastroJogo__content__buttons">Estratégia</button>
                                <button className="cadastroJogo__content__buttons">Luta</button>
                                <button className="cadastroJogo__content__buttons">Puzzle</button>
                                <button className="cadastroJogo__content__buttons">RPG</button>
                                <button className="cadastroJogo__content__buttons">Shooter</button>
                                <button className="cadastroJogo__content__buttons">Terror</button>
                            </div>
                        </div>
                    </div>) : ""}

                    {/* Etapa 2 */}
                    {stepForm == 2 ? (<div className="cadastroJogo__content__step2">
                        <div className="cadastroJogo__content__plataforms">
                            <h2>Plataformas</h2>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="windows">
                                    <input type="checkbox" id="windows" name="windows" checked={checkboxRequirements.windows}
                                        onChange={e => { dispatch({ type: 'windows', windows: !checkboxRequirements.windows }) }} />
                                    Windows
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="macOs">
                                    <input type="checkbox" id="macOs" name="macOs" checked={checkboxRequirements.macOs}
                                        onChange={e => { dispatch({ type: 'macOs', macOs: !checkboxRequirements.macOs }) }} />
                                    MacOs
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="linux">
                                    <input type="checkbox" id="linux" name="linux" checked={checkboxRequirements.linux} 
                                        onChange={e => { dispatch({ type: 'linux', linux: !checkboxRequirements.linux }) }}
                                    />
                                    Linux
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="android">
                                    <input type="checkbox" id="android" name="android" checked={checkboxRequirements.android} 
                                        onChange={e => { dispatch({ type: 'android', android: !checkboxRequirements.android }) }}
                                    />
                                    Android
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="ios">
                                    <input type="checkbox" id="ios" name="ios" checked={checkboxRequirements.ios} 
                                        onChange={e => { dispatch({ type: 'ios', ios: !checkboxRequirements.ios }) }}
                                    />
                                    IOS
                                </label>
                            </div>
                        </div>

                        {checkboxRequirements.windows ? (<div className="cadastroJogo__content__requirements">
                            <h2>Requisitos Windows</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        ) : ""}

                        {checkboxRequirements.macOs ? (<div className="cadastroJogo__content__requirements">
                            <h2>Requisitos MacOs</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        ) : ""}

                        {checkboxRequirements.linux ? (<div className="cadastroJogo__content__requirements">
                            <h2>Requisitos Linux</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        ) : ""}

                        {checkboxRequirements.android ? (<div className="cadastroJogo__content__requirements">
                            <h2>Requisitos Android</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>

                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>

                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>): ""}

                        {checkboxRequirements.ios ? (<div className="cadastroJogo__content__requirements">
                            <h2>Requisitos IOS</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>

                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>

                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1} min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>): ""}

                        {/* {
                            Object.keys(checkboxRequirements).filter((key) => {
                                if(checkboxRequirements[key]){
                                    return checkboxRequirements
                                }
                            })
                        } */}

                    </div>) : ""}

                    {/* Etapa 3 */}
                    {stepForm == 3 ? (<div className="cadastroJogo__content__step3">
                        <div className="cadastroJogo__content__uploads">
                            <h2>Uploads</h2>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Jogo</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    <div>
                                        <label htmlFor="windows">Windows</label>
                                        <div>
                                            <input type="file" accept=".zip" id="windows"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="android">Android</label>
                                        <div>
                                            <input type="file" accept=".zip" id="android"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Mídia</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    <div>
                                        <label htmlFor="fotos">Fotos</label>
                                        <div>
                                            <input type="file" accept=".png,.jpeg,.jpg" id="fotos" multiple></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="videos">Vídeos</label>
                                        <div>
                                            <input type="file" accept=".mp4,.mov,.mkv" id="videos" multiple></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Classificação indicativa</h3>
                                <div className="cadastroJogo__content__uploadContent__fileUpload cadastroJogo__content__uploadContent--flexRight">
                                    <div>
                                        <label htmlFor="doc">Documento</label>
                                        <div>
                                            <input type="file" accept=".png,.jpeg,.jpg,.pdf" id="doc"></input>
                                        </div>
                                    </div>
                                    <select name="classificacao" id="classificacao">
                                        <option value="Livre" selected>Livre</option>
                                        <option value="menores_10">10</option>
                                        <option value="menores_12">12</option>
                                        <option value="menores_14">14</option>
                                        <option value="menores_16">16</option>
                                        <option value="menores_18">18</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>) : ""}
                </section>

                <section className="cadastroJogo__step">
                    {stepForm != 1 ?  (<button className="cadastroJogo__step__button cadastroJogo__step__buttonBack" onClick={_=>setSteapForm(e => e - 1)}>Voltar</button>) : ""}
                    
                    <button className="cadastroJogo__step__button cadastroJogo__step__buttonNext" style={stepForm == 1 ? { gridColumn: "2 / 3"}: {}}
                    onClick={_=> setData(stepForm, setSteapForm)}
                    >{stepForm != 3 ? "Proxímo" : "Cadastrar"}</button>
                </section>
            </main>
            <Footer />
        </div>
    )
}