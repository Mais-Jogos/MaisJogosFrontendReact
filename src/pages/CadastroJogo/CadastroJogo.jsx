import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";
import React, { useReducer } from "react";
import { translate } from "../../translate/translate";
import InputsRequirements from "./InputsRequirements";
import UploadJogo from "./UploadJogo";
import { Link } from "react-router-dom";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useEffect } from "react";
import { useRef } from "react";

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
        case "requisitos":
            return { ...state, requisitos: action.requisitos }
        case "upload":
            return { ...state, upload: action.upload }
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
            stateModificado[atributeSo][typeMinOuRec]['memoria'] = [action.target, stateModificado[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaFormato`:
            stateModificado[atributeSo][typeMinOuRec]['memoria'] = [stateModificado[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoQtd`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificado[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoFormato`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificado[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}SO`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Processador`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}Placa`:
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaQtd`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificado[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}MemoriaFormato`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificado[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoQtd`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [action.target, stateModificado[atributeSo][typeMinOuRec][typeOfSistema][1]]
            return stateModificado
        case `${action.buildTextCase[1]}${action.buildTextCase[0]}ArmazenamentoFormato`:
            stateModificado[atributeSo][typeMinOuRec][typeOfSistema] = [stateModificado[atributeSo][typeMinOuRec][typeOfSistema][0], action.target]
            return stateModificado
        default:
            return state;
    }
}


function setData(state, setState) {
    setState(e => e + 1)
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


function loopRequisitosObject(so, object) {
    for (const MinimoRec in object[so]) {
        for (const [ChaveValor, value] of Object.entries(object[so][MinimoRec])) {
            if (value == "") {
                return true
            }
        }
    }
    return false
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
        requisitos: false,
        upload: false,
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
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            }
        },
        macos: {
            minimos: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            }
        },
        linux: {
            minimos: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            },
            recomendados: {
                so: "",
                processador: "",
                placaDeVideo: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            }
        },
        android: {
            minimos: {
                so: "",
                processador: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            },
            recomendados: {
                so: "",
                processador: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            }
        },
        ios: {
            minimos: {
                so: "",
                processador: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            },
            recomendados: {
                so: "",
                processador: "",
                memoria: [1, "mb"],
                armazenamento: [1, "gb"],
            }
        },
    });
    const [uploadJogoWindows, setUploadJogoWindows] = useState("")
    const [uploadJogoMacos, setUploadJogoMacos] = useState("")
    const [uploadJogoLinux, setUploadJogoLinux] = useState("")
    const [uploadJogoAndroid, setUploadJogoAndroid] = useState("")
    const [uploadJogoIos, setUploadJogoIos] = useState("")
    const [uploadFotos, setUploadFotos] = useState("")
    const [uploadVideos, setUploadVideos] = useState("")
    const [uploadClassificacao, setUploadClassificacao] = useState("")
    const [selectValueClassificacao, setUploadValueClassificacao] = useState("Livre")
    const [aceitarTermosJogo, setAceitarTermosJogo] = useState(false)


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

        } else if (step == 2) {

            // Se voltar para etapa anteror zera tudo
            setUploadJogoWindows("")
            setUploadJogoMacos("")
            setUploadJogoLinux("")
            setUploadJogoLinux("")
            setUploadJogoAndroid("")
            setUploadJogoIos("")
            setUploadFotos("")
            setUploadVideos("")
            setUploadClassificacao("")

            let retornoSO = []

            if (checkboxRequirements.windows) {
                retornoSO.push(loopRequisitosObject('windows', requisitos))
            }
            if (checkboxRequirements.macos) {
                retornoSO.push(loopRequisitosObject('macos', requisitos))
            }
            if (checkboxRequirements.linux) {
                retornoSO.push(loopRequisitosObject('linux', requisitos))
            }
            if (checkboxRequirements.android) {
                retornoSO.push(loopRequisitosObject('android', requisitos))
            }
            if (checkboxRequirements.ios) {
                retornoSO.push(loopRequisitosObject('ios', requisitos))
            }

            retorno = retornoSO.length > 0 ? retornoSO.find(bool => bool == true) : false;

            retorno ? dispatchError({ type: 'requisitos', requisitos: true }) : ""

            if (!checkboxRequirements.windows
                && !checkboxRequirements.macos
                && !checkboxRequirements.linux
                && !checkboxRequirements.android
                && !checkboxRequirements.ios) {
                dispatchError({ type: 'requisitos', requisitos: true });
                retorno = true;
            }
        } else if (step == 3) {
            let retornoSO = []

            if (checkboxRequirements.windows) {
                if (!(uploadJogoWindows.length > 0)) {
                    retornoSO.push(true)
                }
            }
            if (checkboxRequirements.macos) {
                if (!(uploadJogoMacos.length > 0)) {
                    retornoSO.push(true)
                }
            }
            if (checkboxRequirements.linux) {
                if (!(uploadJogoLinux.length > 0)) {
                    retornoSO.push(true)
                }
            }
            if (checkboxRequirements.android) {
                if (!(uploadJogoAndroid.length > 0)) {
                    retornoSO.push(true)
                }
            }
            if (checkboxRequirements.ios) {
                if (!(uploadJogoIos.length > 0)) {
                    retornoSO.push(true)
                }
            }

            if (!(uploadFotos.length > 0)) {
                retornoSO.push(true)
            }

            if (!(uploadVideos.length > 0)) {
                retornoSO.push(true)
            }

            if (!(uploadClassificacao.length > 0)) {
                retornoSO.push(true)
            }

            if (selectValueClassificacao == "") {
                retornoSO.push(true)
            }

            if (!aceitarTermosJogo) {
                retornoSO.push(true)
            }

            retorno = retornoSO.length > 0 ? retornoSO.find(bool => bool == true) : false;

            retorno ? dispatchError({ type: 'upload', upload: true }) : ""
        }

        if (retorno) {
            return true
        }

        return false

    }

    // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
    const initialized = useRef(false);
    const goBackButtonTTS = useRef(false);

    useEffect(_ => {
        if (initialized.current) {

            $(document).ready(function () {

                $('.cadastroJogo__content__steps--inputTTS').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });


                $('.cadastroJogo__content__buttons').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                if(stepForm == 2 && !goBackButtonTTS.current){
                    $('.cadastroJogo__step__button.cadastroJogo__step__buttonBack').keyup(function (e) {
                        var code = e.keyCode || e.which;
                        if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                            setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"),1000);
                        }
    
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }
                
                $('.cadastroJogo__content__uploadContent__fileUpload--changeText').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('#classificacao').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('#termos').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                if(stepForm == 4){
                    $('.modal__meusJogosRedirect').keyup(function (e) {
                        var code = e.keyCode || e.which;
                        if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                            responsiveVoice.cancel();
                            setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                        }
    
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }
                
            })
        }
    }, [stepForm])

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            <TextToSpeech />

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
                                className={errorMessage.titulo ? "cadastroJogo__content__body--erroMessage cadastroJogo__content__steps--inputTTS" : "cadastroJogo__content__steps--inputTTS"} aria-tts="título" >

                            </input>
                            {errorMessage.titulo ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Digite o título</p>) : ""}
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__textarea" className="cadastroJogo__content__label">Descrição</label>
                            <textarea
                                id="cadastroJogo__content__textarea"
                                value={descricao}
                                onChange={e => { dispatchError({ type: 'descricao', descricao: false }); setDescricao(e.target.value) }}
                                className={errorMessage.descricao ? "cadastroJogo__content__body--erroMessage cadastroJogo__content__steps--inputTTS" : " cadastroJogo__content__steps--inputTTS"} aria-tts="descrição">

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
                    {stepForm == 2 ? (
                        <div className="cadastroJogo__content__step2">
                            <div className="cadastroJogo__content__plataforms">
                                <h2>Plataformas</h2>
                                <div className="cadastroJogo__content__plataforms__checkboxs">
                                    <label htmlFor="windows">
                                        <input type="checkbox" id="windows" name="windows" checked={checkboxRequirements.windows}
                                            onChange={e => { dispatch({ type: 'windows', windows: !checkboxRequirements.windows }) }} className="cadastroJogo__content__steps--inputTTS" aria-tts="checkbox windows"/>
                                        Windows
                                    </label>
                                </div>
                                <div className="cadastroJogo__content__plataforms__checkboxs">
                                    <label htmlFor="macos">
                                        <input type="checkbox" id="macos" name="macos" checked={checkboxRequirements.macos}
                                            onChange={e => { dispatch({ type: 'macos', macos: !checkboxRequirements.macos }) }} className="cadastroJogo__content__steps--inputTTS" aria-tts="checkbox macos"/>
                                        MacOs
                                    </label>
                                </div>
                                <div className="cadastroJogo__content__plataforms__checkboxs">
                                    <label htmlFor="linux">
                                        <input type="checkbox" id="linux" name="linux" checked={checkboxRequirements.linux}
                                            onChange={e => { dispatch({ type: 'linux', linux: !checkboxRequirements.linux }) }}
                                            className="cadastroJogo__content__steps--inputTTS"  aria-tts="checkbox linux"/>
                                        Linux
                                    </label>
                                </div>
                                <div className="cadastroJogo__content__plataforms__checkboxs">
                                    <label htmlFor="android">
                                        <input type="checkbox" id="android" name="android" checked={checkboxRequirements.android}
                                            onChange={e => { dispatch({ type: 'android', android: !checkboxRequirements.android }) }}
                                            className="cadastroJogo__content__steps--inputTTS"  aria-tts="checkbox android"/>
                                        Android
                                    </label>
                                </div>
                                <div className="cadastroJogo__content__plataforms__checkboxs">
                                    <label htmlFor="ios">
                                        <input type="checkbox" id="ios" name="ios" checked={checkboxRequirements.ios}
                                            onChange={e => { dispatch({ type: 'ios', ios: !checkboxRequirements.ios }) }}
                                            className="cadastroJogo__content__steps--inputTTS"  aria-tts="checkbox ios"/>
                                        IOS
                                    </label>
                                </div>
                            </div>

                            {checkboxRequirements.windows ?
                                (<div className="cadastroJogo__content__requirements">
                                    <h2>Requisitos Windows</h2>
                                    <InputsRequirements typeOfSO="Windows" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.windows.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} dispatchCheckbox={dispatchError} />
                                    <InputsRequirements typeOfSO="Windows" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.windows.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} dispatchCheckbox={dispatchError} />
                                </div>
                                ) : ""}

                            {checkboxRequirements.macos ? (
                                <div className="cadastroJogo__content__requirements">
                                    <h2>Requisitos MacOs</h2>
                                    <InputsRequirements typeOfSO="MacOs" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.macos.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} dispatchCheckbox={dispatchError} />
                                    <InputsRequirements typeOfSO="MacOs" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.macos.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} dispatchCheckbox={dispatchError} />
                                </div>
                            ) : ""}

                            {checkboxRequirements.linux ? (
                                <div className="cadastroJogo__content__requirements">
                                    <h2>Requisitos Linux</h2>
                                    <InputsRequirements typeOfSO="Linux" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.linux.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={false} dispatchCheckbox={dispatchError} />
                                    <InputsRequirements typeOfSO="Linux" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.linux.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={false} dispatchCheckbox={dispatchError} />
                                </div>
                            ) : ""}

                            {checkboxRequirements.android ? (
                                <div className="cadastroJogo__content__requirements">
                                    <h2>Requisitos Android</h2>
                                    <InputsRequirements typeOfSO="Android" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.android.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={true} dispatchCheckbox={dispatchError} />
                                    <InputsRequirements typeOfSO="Android" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.android.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={true} dispatchCheckbox={dispatchError} />
                                </div>) : ""}

                            {checkboxRequirements.ios ? (
                                <div className="cadastroJogo__content__requirements">
                                    <h2>Requisitos IOS</h2>
                                    <InputsRequirements typeOfSO="Ios" minimoOuRecomendado="Mínimo" stateSoMinimoOuRecomendado={requisitos.ios.minimos} dispatchRequisitos={dispatchRequisitos} dispatchType="minimo" isPhone={true} dispatchCheckbox={dispatchError} />
                                    <InputsRequirements typeOfSO="Ios" minimoOuRecomendado="Recomendado" stateSoMinimoOuRecomendado={requisitos.ios.recomendados} dispatchRequisitos={dispatchRequisitos} dispatchType="recomendado" isPhone={true} dispatchCheckbox={dispatchError} />
                                </div>) : ""}

                            {errorMessage.requisitos ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Preencha as informações</p>) : ""}
                        </div>) : ""}

                    {/* Etapa 3 */}
                    {stepForm == 3 ? (<div className="cadastroJogo__content__step3">
                        <div className="cadastroJogo__content__uploads">
                            <h2>Uploads</h2>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Jogo</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    {checkboxRequirements.windows ? (
                                        <UploadJogo name="Windows" setState={setUploadJogoWindows} dispatchError={dispatchError} />
                                    ) : ""}

                                    {checkboxRequirements.macos ? (
                                        <UploadJogo name="MacOs" setState={setUploadJogoMacos} dispatchError={dispatchError} />
                                    ) : ""}

                                    {checkboxRequirements.linux ? (
                                        <UploadJogo name="Linux" setState={setUploadJogoLinux} dispatchError={dispatchError} />
                                    ) : ""}

                                    {checkboxRequirements.android ? (
                                        <UploadJogo name="Android" setState={setUploadJogoAndroid} dispatchError={dispatchError} />
                                    ) : ""}

                                    {checkboxRequirements.ios ? (
                                        <UploadJogo name="Ios" setState={setUploadJogoIos} dispatchError={dispatchError} />
                                    ) : ""}
                                </div>
                            </div>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Mídia</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    <div>
                                        <label htmlFor="fotos">Fotos</label>
                                        <div>
                                            <input type="file" accept=".png,.jpeg,.jpg" id="fotos" multiple className="cadastroJogo__content__uploadContent__fileUpload--changeText"
                                                onChange={e => { setUploadFotos(e.target.files); dispatchError({ type: 'upload', upload: false }) }} aria-tts="upload fotos"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="videos">Vídeos</label>
                                        <div>
                                            <input type="file" accept=".mp4,.mov,.mkv" id="videos" multiple className="cadastroJogo__content__uploadContent__fileUpload--changeText"
                                                onChange={e => { setUploadVideos(e.target.files); dispatchError({ type: 'upload', upload: false }) }} aria-tts="upload vídeos"></input>
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
                                            <input type="file" accept=".png,.jpeg,.jpg,.pdf" id="doc" className="cadastroJogo__content__uploadContent__fileUpload--changeText"
                                                onChange={e => { setUploadClassificacao(e.target.files); dispatchError({ type: 'upload', upload: false }) }} aria-tts="upload documento classificação">
                                            </input>
                                        </div>
                                    </div>
                                    <select name="classificacao" id="classificacao" value={selectValueClassificacao} onChange={e => { setUploadValueClassificacao(e.target.value); dispatchError({ type: 'upload', upload: false }) }} aria-tts={"classificação " + selectValueClassificacao}>
                                        <option value="Livre">Livre</option>
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
                                <input type="checkbox" 
                                id="termos" 
                                defaultChecked={aceitarTermosJogo} 
                                onChange={_ => { setAceitarTermosJogo((state) => !state); dispatchError({ type: 'upload', upload: false }) }}
                                aria-tts="checkbox termos e confições"   
                                ></input>
                                <label htmlFor="termos">Aceito os termos e condições</label>
                            </div>
                        </div>
                        {errorMessage.upload ? (<p className="cadastroJogo--errorMessage"><i class="fa-solid fa-xmark"></i> Faça upload de todos os arquivos e aceite os termos</p>) : ""}
                    </div>) : ""}

                </section>

                <section className="cadastroJogo__step">
                    {stepForm != 1 ? (<button className="cadastroJogo__step__button cadastroJogo__step__buttonBack" onClick={_ => setSteapForm(e => e - 1)}>Voltar</button>) : ""}
                    {stepForm == 3 ? goBackButtonTTS.current = true : ""}
                    {stepForm == 1 ? goBackButtonTTS.current = false : ""}


                    <button className="cadastroJogo__step__button cadastroJogo__step__buttonNext" style={stepForm == 1 ? { gridColumn: "2 / 3" } : {}}
                        onClick={_ => { !checkInputs(stepForm) ? setData(stepForm, setSteapForm) : "" ;initialized.current = true}}
                    >{stepForm != 3 ? "Proxímo" : "Cadastrar"}</button>
                </section>

                <div className="finish__modalBackground" style={stepForm > 3 ? { display: "flex" } : { display: "none" }} >
                    <div className="finish__modalConfirm">
                        <div className="finish__modalConfirm__container">
                            <div>
                                <p>
                                    Seu jogo foi cadastrado com sucesso! Agora ele pode ser visto na sua página de jogos!
                                </p>
                            </div>
                            <div><Link to="/meus-jogos" aria-tts="meus jogos" className="modal__meusJogosRedirect">OK</Link></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}