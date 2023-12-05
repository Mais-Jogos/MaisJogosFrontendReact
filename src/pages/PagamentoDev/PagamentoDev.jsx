import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";
import InputsPagamentoDevPixSalvo from "./InputsPagamentoDevPixSalvo";
import { Link } from "react-router-dom";
import GoBack from "../../components/GoBack/GoBack";
import { translate } from "../../translate/translate";
import { useRef } from "react";
import { useEffect } from "react";
import Axios from 'axios'
import Modal from '../../components/Modal/Modal';
import Loading from "../../components/Loading/Loading";

function reducerTypeOfPix(state, action) {
    switch (action.type) {
        case "cpf":
            return { cpf: { status: action.cpf, value: state.cpf.value }, telefone: { status: false, value: state.telefone.value }, email: { status: false, value: state.email.value }, aleatorio: { status: false, value: state.aleatorio.value } }
        case "cpf_text":
            return { cpf: { status: state.cpf.status, value: action.cpf }, telefone: { status: state.telefone.status, value: state.telefone.value }, email: { status: state.email.status, value: state.email.value }, aleatorio: { status: state.aleatorio.status, value: state.aleatorio.value } }
        case "telefone":
            return { cpf: { status: false, value: state.cpf.value }, telefone: { status: action.telefone, value: state.telefone.value }, email: { status: false, value: state.email.value }, aleatorio: { status: false, value: state.aleatorio.value } }
        case "telefone_text":
            return { cpf: { status: state.cpf.status, value: state.cpf.value }, telefone: { status: state.telefone.status, value: action.telefone }, email: { status: state.email.status, value: state.email.value }, aleatorio: { status: state.aleatorio.status, value: state.aleatorio.value } }
        case "email":
            return { cpf: { status: false, value: state.cpf.value }, telefone: { status: false, value: state.telefone.value }, email: { status: action.email, value: state.email.value }, aleatorio: { status: false, value: state.aleatorio.value } }
        case "email_text":
            return { cpf: { status: state.cpf.status, value: state.cpf.value }, telefone: { status: state.telefone.status, value: state.telefone.value }, email: { status: state.email.status, value: action.email }, aleatorio: { status: state.aleatorio.status, value: state.aleatorio.value } }
        case "aleatorio":
            return { cpf: { status: false, value: state.cpf.value }, telefone: { status: false, value: state.telefone.value }, email: { status: false, value: state.email.value }, aleatorio: { status: action.aleatorio, value: state.aleatorio.value } }
        case "aleatorio_text":
            return { cpf: { status: state.cpf.status, value: state.cpf.value }, telefone: { status: state.telefone.status, value: state.telefone.value }, email: { status: state.email.status, value: state.email.value }, aleatorio: { status: state.aleatorio.status, value: action.aleatorio } }
        default:
            return state;
    }
}


export default props => {

    const [typeOfPix, dispatch] = useReducer(reducerTypeOfPix, {
        cpf: { status: true, value: "" },
        telefone: { status: false, value: "" },
        email: { status: false, value: "" },
        aleatorio: { status: false, value: "" }
    });

    const [enviar, setEnviar] = useState(0);
    const [aviso, setAviso] = useState(false);
    const [nomePix, setNomePix] = useState("");
    const [selectTypePix, setselectTypePix] = useState(true);
    const [savedPix, setSavedPix] = useState(0);
    const [modal, setModal] = useState(null)
    const [listaPixSalvaAPI, setListaPixSalvaAPI] = useState([])
    const [loading, setLoading] = useState(<Loading/>)

    const initialized = useRef(false);
    const initializedP = useRef(false);
    const initializedCPF = useRef(false);
    let htmlRootValue = document.querySelector("#root").attributes[1].nodeValue === "false" ? false : true
    const [clickIcon, setClickIcon] = useState(htmlRootValue);

    let id = window.localStorage.getItem("id")
    let token = window.localStorage.getItem("token")


    function switchStateIcon() {
        if (clickIcon) {
            setClickIcon(false)
            $("#root").attr("aria-label", "false");
        } else {
            setClickIcon(true)
            $("#root").attr("aria-label", "true");
        }
    }

    function enviaAPI() {
        let cadastrarPixChave = '';
        let cadastrarPixValor = '';
        let cadastrarPixTipo = '';

        if (enviar == 1 && selectTypePix) {
            for (const [chave, valor] of Object.entries(typeOfPix)) {

                if (valor.status) {
                    cadastrarPixChave = valor.value
                    cadastrarPixValor = nomePix
                    cadastrarPixTipo = chave
                }
            }

            if (cadastrarPixChave == '' || cadastrarPixTipo == '' || cadastrarPixValor == 0 || cadastrarPixValor < 0) {
                setModal(<Modal message={"Preencha as informações!"} type={false} />)

                setTimeout(() => {
                    setModal(null)
                }, 3000)

                setEnviar(e => e - 1)
                return
            }

            const cadastrarPixFinal = {
                pix: cadastrarPixChave,
                tipoPix: cadastrarPixTipo,
                valorPag: cadastrarPixValor,
                idDev: id
            };

            console.log(cadastrarPixFinal);

            Axios.post(`https://backendmaisjogos-production.up.railway.app/api/pixDev/salvar`, { ...cadastrarPixFinal }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            .then((response) => {
                console.log(response);
                setAviso(true)
            })

            .catch((error) => {
                console.log(error)

                setModal(<Modal message={"Erro ao cadastrar!"} type={false} />)

                setTimeout(() => {
                    setModal(null)
                }, 3000)
            })
        }

        if(!selectTypePix){
            setAviso(true)
        }
    }

    useEffect(_ => {
        Axios.get(`https://backendmaisjogos-production.up.railway.app/api/pixDev/listaPixDev/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setListaPixSalvaAPI([...listaPixSalvaAPI,response.data])
                setLoading(null)
            })
            .catch((error) => {
                console.log(error)
                setLoading(null)
            })
    }, [])

    useEffect(_ => {
        if (!initializedP.current) {
            initializedP.current = true

            $(document).ready(function () {
                $('a').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('button').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('textarea').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('#nome').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.input__content__register--input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [])

    useEffect(_ => {
        if (initialized.current) {
            $(document).ready(function () {
                $('.pagamentoDev__pixContainer__selectTypeOfPix__button').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__container').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__container--select').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__buttonPixSalvo').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__buttonPixSalvo--select').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }

        if (enviar == 1 && !selectTypePix) {
            $(document).ready(function () {
                $('.input__content__register--input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('#nome').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [enviar])

    useEffect(_ => {
        if (initialized.current) {
            $(document).ready(function () {
                $('.input__content__register--input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__buttonPixSalvo').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__container').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.pagamentoDev__pixContainer__content__methods__container--select').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.typeOfPix__nameInput').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

            })
        }
    }, [selectTypePix])

    useEffect(_ => {
        if (initializedCPF.current) {
            $(document).ready(function () {
                $('.input__content__register--input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('.typeOfPix__nameInput').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [typeOfPix.cpf.status, typeOfPix.telefone.status, typeOfPix.email.status, typeOfPix.aleatorio.status])


    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            {modal}
            {loading}

            <div className="textToSpeech__container" onClick={_ => switchStateIcon()} accessKey="q">
                <img src={!clickIcon ? "/imgs/icons/textToSpeech_icon-open.svg" : "/imgs/icons/textToSpeech_icon-remove.svg"}></img>
                <div className="textToSpeech__hover"><p>Leitor de tela</p></div>
                <div></div>
            </div>

            <main className="pagamentoDev__main">
                <section className="pagamentoDev__title">
                    <GoBack />

                    <h1>{translate("Requerimento de pagamento")}</h1>
                </section>

                <section className="pagamentoDev__descripiton">
                    <p>{translate("Descrição de pagamento")}</p>
                </section>

                <section className="pagamentoDev__pixContainer">
                    <div className="pagamentoDev__pixContainer__header">
                        <div className="pagamentoDev__pixContainer__header__mainImage">
                            <img src="\imgs\icons\pix__icon.svg" alt="ícone de pix"></img>
                            <h2>{translate("Pix")}</h2>
                        </div>

                        {enviar == 0 ? (<div className="pagamentoDev__pixContainer__selectTypeOfPix">
                            <button className={selectTypePix ? "pagamentoDev__pixContainer__selectTypeOfPix__button pagamentoDev__pixContainer__selectTypeOfPix__button--select" : "pagamentoDev__pixContainer__selectTypeOfPix__button"} onClick={e => { setselectTypePix(true) }} aria-label="novo pix">Novo Pix</button>
                            <button className={!selectTypePix ? "pagamentoDev__pixContainer__selectTypeOfPix__button pagamentoDev__pixContainer__selectTypeOfPix__button--select" : "pagamentoDev__pixContainer__selectTypeOfPix__button"} onClick={e => { setselectTypePix(false) }} aria-label="pix salvo">Pix salvo</button>
                        </div>) : ""}
                    </div>

                    <div className="pagamentoDev__pixContainer__content">

                        {selectTypePix ? (<>
                            <h2>{enviar == 0 ? "Selecione o tipo do seu pix" : "Confirmar pix"}</h2>

                            {enviar == 0 ? (<div className="pagamentoDev__pixContainer__content__methods">
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.cpf.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'cpf', cpf: true }); }} aria-label="pix por cpf">CPF</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.telefone.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'telefone', telefone: true }) }} aria-label="pix por telefone">Telefone</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.email.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'email', email: true }) }} aria-label="pix por email">Email</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.aleatorio.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'aleatorio', aleatorio: true }) }} aria-label="pix por chave aleatória">Aleatório</button>
                                </div>
                            </div>) : ""}

                            <div className="pagamentoDev__pixContainer__content__register">
                                <div>
                                    {typeOfPix.cpf.status ? (
                                        <>
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" name="cpf" id="cpf" value={typeOfPix.cpf.value} onChange={e => { dispatch({ type: 'cpf_text', cpf: e.target.value }) }} aria-label="cpf" className="input__content__register--input" />
                                            <br></br>
                                            <div>
                                                <label htmlFor="nome">Valor pix</label>
                                                <input type="number" name="nome" id="nome" className="typeOfPix__nameInput" value={nomePix} onChange={e => { setNomePix(e.target.value) }} aria-label="Valor pix" />
                                            </div>
                                        </>
                                    ) : ""}

                                    {typeOfPix.telefone.status ? (
                                        <>
                                            <label htmlFor="telefone">Telefone</label>
                                            <input type="tel" name="telefone" id="telefone" value={typeOfPix.telefone.value} onChange={e => { dispatch({ type: 'telefone_text', telefone: e.target.value }) }} aria-label="telefone" className="input__content__register--input" />

                                            <div>
                                                <label htmlFor="nome">Valor pix</label>
                                                <input type="number" name="nome" id="nome" className="typeOfPix__nameInput" value={nomePix} onChange={e => { setNomePix(e.target.value) }} aria-label="Valor pix" />
                                            </div>
                                        </>
                                    ) : ""}

                                    {typeOfPix.email.status ? (
                                        <>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" value={typeOfPix.email.value} onChange={e => { dispatch({ type: 'email_text', email: e.target.value }) }} aria-label="email" className="input__content__register--input" />

                                            <div>
                                                <label htmlFor="nome">Valor pix</label>
                                                <input type="number" name="nome" id="nome" className="typeOfPix__nameInput" value={nomePix} onChange={e => { setNomePix(e.target.value) }} aria-label="Valor pix" />
                                            </div>
                                        </>
                                    ) : ""}

                                    {typeOfPix.aleatorio.status ? (
                                        <>
                                            <label htmlFor="aleatorio">Aleatório</label>
                                            <input type="text" name="aleatorio" id="aleatorio" value={typeOfPix.aleatorio.value} onChange={e => { dispatch({ type: 'aleatorio_text', aleatorio: e.target.value }) }} aria-label="aleatorio" className="input__content__register--input" />

                                            <div>
                                                <label htmlFor="nome">Valor pix</label>
                                                <input type="number" name="nome" id="nome" className="typeOfPix__nameInput" value={nomePix} onChange={e => { setNomePix(e.target.value) }} aria-label="Valor pix" />
                                            </div>
                                        </>
                                    ) : ""}

                                </div>


                            </div>

                        </>)

                            :

                            (<>
                                <h2>Selecione o pix</h2>

                                <div className={enviar == 1 ? "" : "pagamentoDev__pixContainer__content__methods"}>

                                    {
                                        listaPixSalvaAPI?.map((e, i) => (
                                            <>
                                                {enviar == 0 ? (<button className={savedPix == i ? "pagamentoDev__pixContainer__content__methods__buttonPixSalvo--select" : "pagamentoDev__pixContainer__content__methods__buttonPixSalvo"} onClick={_ => setSavedPix(i)} aria-label="pix salvo">{e.pix}</button>) : ""}

                                                {savedPix == i && enviar == 1 ? (<InputsPagamentoDevPixSalvo typeOfPix={e.tipoPix} value={e.pix} nomePix={e.valorPag} />) : ""}
                                            </>
                                        ))
                                    }

                                </div>
                            </>)}

                        <div className="pagamentoDev__pixContainer__content__methods__buttons">
                            {!selectTypePix || enviar != 0 ? initialized.current = true : ""}
                            {!typeOfPix.cpf.status ? initializedCPF.current = true : ""}
                            <button onClick={_ => { enviar == 0 ? "" : setEnviar(e => e - 1) }} aria-label="cancelar">{translate("Cancelar")}</button>
                            <button onClick={_ => { setEnviar(e => e + 1); enviaAPI() }} aria-label="enviar">{enviar == 0 ? "Confirmar" : "Enviar"}</button>
                        </div>
                    </div>
                </section>

                <section className="pagamentoDev__warningMessage">
                    <img src="\imgs\icons\warning__icon.svg" alt="ícone de aviso" />

                    <div>
                        <p>{translate("Informativo")}</p>
                        <p>{translate("InformativoTxt")}</p>
                    </div>
                </section>

                <div className="finish__modalBackground" style={enviar == 2 && aviso ? { display: "flex" } : { display: "none" }}>
                    <div className="finish__modalConfirm">
                        <div className="finish__modalConfirm__container">
                            <div>
                                <p>Seus dados foram enviados com sucesso, prazo de até 3 (três) dias úteis para o valor cair na sua conta. Após 15 dias do pagamento realizado você poderá requerir um novo pagamento</p>
                            </div>
                            <div><Link to="/perfil-dev" aria-label="perfil dev">OK</Link></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}