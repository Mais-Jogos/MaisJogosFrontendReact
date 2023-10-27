import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";
import InputsPagamentoDev from "./InputsPagamentoDev";
import { Link } from "react-router-dom";

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


function setSendDataButtonsBack(state, setState) {
    if (state == 0) {
        setState(0)
    } else {
        setState(e => e - 1)
    }
}

function setSendDataButtonsGo(state, setState) {
    console.log(state);
    setState(e => e + 1)
}

export default props => {

    const [typeOfPix, dispatch] = useReducer(reducerTypeOfPix, {
        cpf: { status: true, value: "" },
        telefone: { status: false, value: "" },
        email: { status: false, value: "" },
        aleatorio: { status: false, value: "" }
    });

    const [enviar, setEnviar] = useState(0);
    const [nomePix, setNomePix] = useState("");
    const [selectTypePix, setselectTypePix] = useState(true);


    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            <main className="pagamentoDev__main">
                <section className="pagamentoDev__title">
                    <img src="../../public\imgs\icons\goBack__icon.svg" alt="ícone de voltar para a página anterior"></img>

                    <h1>Requerimento de pagamento</h1>
                </section>

                <section className="pagamentoDev__descripiton">
                    <p>Para que o pagamento seja feito da forma correta preencha suas informações nos campos a baixo com atenção, assim que solicitado, o pagamento cairá na sua conta em até 3 (três) dias úteis</p>
                </section>

                <section className="pagamentoDev__pixContainer">
                    <div className="pagamentoDev__pixContainer__header">
                        <div className="pagamentoDev__pixContainer__header__mainImage">
                            <img src="../../public\imgs\icons\pix__icon.svg" alt="ícone de pix"></img>
                            <h2>Pix</h2>
                        </div>

                        <div className="pagamentoDev__pixContainer__selectTypeOfPix">
                            <button className={selectTypePix ? "pagamentoDev__pixContainer__selectTypeOfPix__button pagamentoDev__pixContainer__selectTypeOfPix__button--select" : "pagamentoDev__pixContainer__selectTypeOfPix__button"} onClick={e => { setselectTypePix(true) }}>Novo Pix</button>
                            <button className={!selectTypePix ? "pagamentoDev__pixContainer__selectTypeOfPix__button pagamentoDev__pixContainer__selectTypeOfPix__button--select" : "pagamentoDev__pixContainer__selectTypeOfPix__button"} onClick={e => { setselectTypePix(false) }}>Pix salvo</button>
                        </div>
                    </div>

                    <div className="pagamentoDev__pixContainer__content">

                        {selectTypePix ? (<>
                            <h2>{enviar == 0 ? "Selecione o tipo do seu pix" : "Confirmar pix"}</h2>

                            {enviar == 0 ? (<div className="pagamentoDev__pixContainer__content__methods">
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.cpf.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'cpf', cpf: true }); }}>CPF</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.telefone.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'telefone', telefone: true }) }}>Telefone</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.email.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'email', email: true }) }}>Email</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.aleatorio.status ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'aleatorio', aleatorio: true }) }}>Aleatório</button>
                                </div>
                            </div>) : ""}

                            {/* <div className="pagamentoDev__pixContainer__content__register">
                                <div>
                                    {typeOfPix.cpf.status ? (
                                        <>
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" name="cpf" id="cpf" value={typeOfPix.cpf.value} onChange={e => {dispatch({ type: 'cpf_text', cpf: e.target.value }) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.telefone.status ? (
                                        <>
                                            <label htmlFor="telefone">Telefone</label>
                                            <input type="tel" name="telefone" id="telefone" value={typeOfPix.telefone.value} onChange={e => { dispatch({ type: 'telefone_text', telefone: e.target.value }) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.email.status ? (
                                        <>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" value={typeOfPix.email.value} onChange={e => { dispatch({ type: 'email_text', email: e.target.value }) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.aleatorio.status ? (
                                        <>
                                            <label htmlFor="aleatorio">Aleatório</label>
                                            <input type="text" name="aleatorio" id="aleatorio" value={typeOfPix.aleatorio.value} onChange={e => { dispatch({ type: 'aleatorio_text', aleatorio: e.target.value }) }} />
                                        </>
                                    ) : ""}

                                </div>

                                <div>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input type="text" name="nome" id="nome" value={nomePix} onChange={e => { setNomePix(e.target.value) }} />
                                </div>
                            </div> */}

                            <InputsPagamentoDev typeOfPix={typeOfPix} nomePix={nomePix} setNomePix={setNomePix} dispatch={dispatch} />

                        </>)

                            :

                            (<>
                                <h2>Selecione o pix</h2>

                                <div className="pagamentoDev__pixContainer__content__methods">
                                    <button className="pagamentoDev__pixContainer__content__methods__buttonPixSalvo">Ana Maria</button>
                                    <button className="pagamentoDev__pixContainer__content__methods__buttonPixSalvo">Jorge Raimundo</button>
                                    <button className="pagamentoDev__pixContainer__content__methods__buttonPixSalvo">Wesley Araujo</button>
                                </div>
                            </>)}

                        <div className="pagamentoDev__pixContainer__content__methods__buttons">
                            <button onClick={_ => {enviar == 0 ? "" : setEnviar(e => e - 1 )}}>Cancelar</button>
                            <button onClick={_ => setEnviar(e => e + 1)}>{ enviar == 0 ? "Confirmar" : "Enviar"}</button>
                        </div>
                    </div>
                </section>

                <section className="pagamentoDev__warningMessage">
                    <img src="../../public\imgs\icons\warning__icon.svg" alt="ícone de aviso" />

                    <div>
                        <p>Informativo</p>
                        <p>No caso de não conseguirmos efetuar o pagamento, você receberá um e-mail informativo</p>
                    </div>
                </section>

                <div className="pagamentoDev__modalBackground"  style={enviar == 2 ? { display: "flex"} : {display: "none"}}>
                    <div className="pagamentoDev__modalConfirm">
                        <div className="pagamentoDev__modalConfirm__container">
                            <div>
                                <p>Seus dados foram enviados com sucesso, prazo de até 3 (três) dias úteis para o valor cair na sua conta. Após 15 dias do pagamento realizado você poderá requerir um novo pagamento</p>
                            </div>
                            <div><Link to="/perfil-dev">OK</Link></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}