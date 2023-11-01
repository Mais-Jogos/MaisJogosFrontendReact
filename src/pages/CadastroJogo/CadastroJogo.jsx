import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";
import React, { useReducer } from "react";
import { translate } from "../../translate/translate";
import InputsRequirements from "./InputsRequirements";

function reducerCheckboxRequirements(state, action) {
    switch (action.type) {
        case "windows":
            return { ...state, windows: action.windows }
        case "macos":
            return { ...state, macos: action.macos }
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


function reducerCheckErrorMessage(state, action) {
    switch (action.type) {
        case "titulo":
            return { ...state, titulo: action.titulo }
        case "descricao":
            return { ...state, descricao: action.descricao }
        case "generos":
            return { ...state, generos: action.generos }
        default:
            return state;
    }
}

function reducerChangeValuesRequirements(state, action) {
    let atributeSo = action.so
    let typeMinOuRec = action.minOrRecSo
    let typeOfSistema = action.atributeSO
    let stateModificado = { ...state }

    if (typeOfSistema != 'memoria' && typeOfSistema != "armazenamento") {
        stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = action.target
    }

    switch (action.type) {
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}SO`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Processador`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Placa`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaQtd`:
            let stateModificadoMemoriaQtdMin = { ...state };
            stateModificadoMemoriaQtdMin[atributeSo][typeMinOuRec]['memoria'] = [action.target, stateModificadoMemoriaQtdMin[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificadoMemoriaQtdMin
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaFormato`:
            let stateModificadoMemoriaFormatoMin = { ...state };
            stateModificadoMemoriaFormatoMin[atributeSo][typeMinOuRec]['memoria'] = [stateModificadoMemoriaFormatoMin[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificadoMemoriaFormatoMin
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoQtd`:
            let stateModificadoArmazenamentoQtdMin = { ...state };
            stateModificadoArmazenamentoQtdMin[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificadoArmazenamentoQtdMin[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificadoArmazenamentoQtdMin
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoFormato`:
            let stateModificadoArmazenamentoFormatoMin = { ...state };
            stateModificadoArmazenamentoFormatoMin[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificadoArmazenamentoFormatoMin[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificadoArmazenamentoFormatoMin
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}SO`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Processador`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Placa`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaQtd`:
            let stateModificadoMemoriaQtdRec = { ...state };
            stateModificadoMemoriaQtdRec[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificadoMemoriaQtdRec[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificadoMemoriaQtdRec
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaFormato`:
            let stateModificadoMemoriaFormatoRec = { ...state };
            stateModificadoMemoriaFormatoRec[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificadoMemoriaFormatoRec[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificadoMemoriaFormatoRec
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoQtd`:
            let stateModificadoArmazenamentoQtdRec = { ...state };
            stateModificadoArmazenamentoQtdRec[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificadoArmazenamentoQtdRec[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificadoArmazenamentoQtdRec
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoFormato`:
            let stateModificadoArmazenamentoFormatoRec = { ...state };
            stateModificadoArmazenamentoFormatoRec[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificadoArmazenamentoQtdRec[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificadoArmazenamentoFormatoRec
        default:
            return state;
    }
}


function setData(state, setState) {
    if (state == 3) {
        console.log("Cadastra jogo!");
    } else {
        setState(e => e + 1)
    }
}

function secondStepFormStyle(state, type) {
    if (type == "div") {
        if (state == 1) {
            return "cadastroJogo__menu__block__circle"
        } else if (state == 2) {
            return "cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select"
        } else {
            return "cadastroJogo__menu__block__circle cadastroJogo__menu__block__text--selected"
        }
    } else if (type == "p") {
        if (state == 1) {
            return "cadastroJogo__menu__block__text"
        } else if (state == 2) {
            return "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--select"
        } else {
            return "cadastroJogo__menu__block__text cadastroJogo__menu__block__text--selected"
        }
    }
}

function setGenerosInState(state, setState, value) {
    const index = state.indexOf(value)

    if (index != -1) {
        setState([
            ...state.slice(0, index),
            ...state.slice(index + 1, state.length)
        ]);
    } else {
        setState([...state, value])
    }
}

export default props => {

    const [stepForm, setSteapForm] = useState(1)

    const [checkboxRequirements, dispatch] = useReducer(reducerCheckboxRequirements, {
        windows: false,
        macos: false,
        linux: false,
        android: false,
        ios: false
    });

    const [errorMessage, dispatchError] = useReducer(reducerCheckErrorMessage, {
        titulo: false,
        descricao: false,
        generos: false,
    });


    // Dados do jogo
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [genero, setGenero] = useState([])
    const [requisitos, dispatchRequisitos] = useReducer(reducerChangeValuesRequirements, {
        windows: {
            minimos: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            }
        },
        macos: {
            minimos: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            }
        },
        linux: {
            minimos: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            }
        },
        android: {
            minimos: {
                so: "",
                processador: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            },
            recomendados: {
                so: "",
                processador: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            }
        },
        ios: {
            minimos: {
                so: "",
                processador: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            },
            recomendados: {
                so: "",
                processador: "",
                memoria: [1, ""],
                armazenamento: [1, ""],
            }
        },
    });

    function checkInputs(step) {
        let retorno;
        if (step == 1) {
            if (titulo.trim() == "") {
                dispatchError({ type: 'titulo', titulo: true })
                retorno = true;
            }
            if (descricao.trim() == "") {
                dispatchError({ type: 'descricao', descricao: true })
                retorno = true;
            }
            if (genero.length == 0) {
                dispatchError({ type: 'generos', generos: true })
                retorno = true;
            }

            if (retorno) {
                return true
            } else {
                return false
            }
        }
    }


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

                    <h1>{translate("Cadastre seu jogo")}</h1>

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

                            <input
                                type="text"
                                id="cadastroJogo__content__title"
                                value={titulo}
                                onChange={e => { dispatchError({ type: 'titulo', titulo: false }); setTitulo(e.target.value) }}
                                className={errorMessage.titulo ? "cadastroJogo__content__body--erroMessage" : ""}>

                            </input>
                            {errorMessage.titulo ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Digite o título</p>) : ""}
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__textarea" className="cadastroJogo__content__label">Descrição</label>
                            <textarea
                                id="cadastroJogo__content__textarea"
                                value={descricao}
                                onChange={e => { dispatchError({ type: 'descricao', descricao: false }); setDescricao(e.target.value) }}
                                className={errorMessage.descricao ? "cadastroJogo__content__body--erroMessage" : ""}>

                            </textarea>
                            {errorMessage.descricao ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Digite a descrição</p>) : ""}
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label className="cadastroJogo__content__label">Gêneros</label>
                            <div className="cadastroJogo__content__Bodybuttons">
                                <button
                                    className={genero.indexOf("Ação") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Ação
                                </button>
                                <button className={genero.indexOf("Arcade") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Arcade
                                </button>
                                <button
                                    className={genero.indexOf("Aventura") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Aventura
                                </button>
                                <button
                                    className={genero.indexOf("Casual") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Casual
                                </button>
                                <button
                                    className={genero.indexOf("Corrida") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Corrida
                                </button>
                                <button
                                    className={genero.indexOf("Esporte") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Esporte
                                </button>
                                <button
                                    className={genero.indexOf("Estratégia") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Estratégia
                                </button>
                                <button
                                    className={genero.indexOf("Luta") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Luta
                                </button>
                                <button
                                    className={genero.indexOf("Puzzle") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Puzzle
                                </button>
                                <button
                                    className={genero.indexOf("RPG") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    RPG
                                </button>
                                <button
                                    className={genero.indexOf("Shooter") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Shooter
                                </button>
                                <button
                                    className={genero.indexOf("Terror") != -1 ? "cadastroJogo__content__buttons cadastroJogo__content__buttons--select" : "cadastroJogo__content__buttons"}
                                    onClick={e => { setGenerosInState(genero, setGenero, e.target.innerText); dispatchError({ type: 'generos', generos: false }) }}>
                                    Terror
                                </button>
                                {errorMessage.generos ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Selecione no mímino um gênero</p>) : ""}
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
                                <label htmlFor="macos">
                                    <input type="checkbox" id="macos" name="macos" checked={checkboxRequirements.macos}
                                        onChange={e => { dispatch({ type: 'macos', macos: !checkboxRequirements.macos }) }} />
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

                        {checkboxRequirements.windows ?
                            (<div className="cadastroJogo__content__requirements">
                                <h2>Requisitos Windows</h2>
                                <InputsRequirements typeOfSO="Windows" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.windows.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} />
                                <InputsRequirements typeOfSO="Windows" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.windows.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} />
                            </div>
                            ) : ""}

                        {checkboxRequirements.macos ? (
                            <div className="cadastroJogo__content__requirements">
                                <h2>Requisitos MacOs</h2>
                                <InputsRequirements typeOfSO="MacOs" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.macos.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} />
                                <InputsRequirements typeOfSO="MacOs" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.macos.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} />
                            </div>
                        ) : ""}

                        {checkboxRequirements.linux ? (
                            <div className="cadastroJogo__content__requirements">
                                <h2>Requisitos Linux</h2>
                                <InputsRequirements typeOfSO="Linux" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.linux.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} />
                                <InputsRequirements typeOfSO="Linux" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.linux.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} />
                            </div>
                        ) : ""}

                        {checkboxRequirements.android ? (
                            <div className="cadastroJogo__content__requirements">
                                <h2>Requisitos Android</h2>
                                <InputsRequirements typeOfSO="Android" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.android.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={true} />
                                <InputsRequirements typeOfSO="Android" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.android.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={true} />
                            </div>) : ""}

                        {checkboxRequirements.ios ? (
                            <div className="cadastroJogo__content__requirements">
                                <h2>Requisitos IOS</h2>
                                <InputsRequirements typeOfSO="Ios" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.ios.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={true} />
                                <InputsRequirements typeOfSO="Ios" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.ios.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={true} />
                            </div>) : ""}

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
                                            <input type="file" accept=".zip" id="windows" className="cadastroJogo__content__uploadContent__fileUpload--changeText"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="android">Android</label>
                                        <div>
                                            <input type="file" accept=".zip" id="android" className="cadastroJogo__content__uploadContent__fileUpload--changeText"></input>
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
                                            <input type="file" accept=".png,.jpeg,.jpg" id="fotos" multiple className="cadastroJogo__content__uploadContent__fileUpload--changeText"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="videos">Vídeos</label>
                                        <div>
                                            <input type="file" accept=".mp4,.mov,.mkv" id="videos" multiple className="cadastroJogo__content__uploadContent__fileUpload--changeText"></input>
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
                                            <input type="file" accept=".png,.jpeg,.jpg,.pdf" id="doc" className="cadastroJogo__content__uploadContent__fileUpload--changeText">
                                            </input>
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
                        <div className="cadastroJogo__termos">
                            <div>
                                <input type="checkbox" id="termos"></input>
                                <label htmlFor="termos">Aceito os termos e condições</label>
                            </div>
                        </div>
                    </div>) : ""}
                </section>

                <section className="cadastroJogo__step">
                    {stepForm != 1 ? (<button className="cadastroJogo__step__button cadastroJogo__step__buttonBack" onClick={_ => setSteapForm(e => e - 1)}>Voltar</button>) : ""}

                    <button className="cadastroJogo__step__button cadastroJogo__step__buttonNext" style={stepForm == 1 ? { gridColumn: "2 / 3" } : {}}
                        onClick={_ => { !checkInputs(stepForm) ? setData(stepForm, setSteapForm) : "" }}
                    >{stepForm != 3 ? "Proxímo" : "Cadastrar"}</button>
                </section>
            </main>
        </div>
    )
}