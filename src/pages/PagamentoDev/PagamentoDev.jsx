import "./style.css"
import React, { useReducer } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'
import { useState } from "react";


function reducerTypeOfPix(state, action) {
    switch (action.type) {
        case "cpf":
            return { cpf: action.cpf, telefone: false, email: false, aleatorio: false }
        case "telefone":
            return { cpf: false, telefone: action.telefone, email: false, aleatorio: false }
        case "email":
            return { cpf: false, telefone: false, email: action.email, aleatorio: false }
        case "aleatorio":
            return { cpf: false, telefone: false, email: false, aleatorio: action.aleatorio }
        default:
            return state;
    }
}


export default props => {

    const [typeOfPix, dispatch] = useReducer(reducerTypeOfPix, {
        cpf: true,
        telefone: false,
        email: false,
        aleatorio: false
    });

    const [storeCpf, setStoreCpf] = useState("");
    const [storeTelefone, setStoreTelefone] = useState("");
    const [storeEmail, setStoreEmail] = useState("");
    const [storeAleatorio, setStoreAleatorio] = useState("");
    const [storeNomeCompleto, setStoreNomeCompleto] = useState("");
    const [enviar, setEnviar] = useState(true);
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

                        { selectTypePix ? (<>
                            <h2>{enviar ? "Selecione o tipo do seu pix" : "Confirmar pix"}</h2>

                            {enviar ? (<div className="pagamentoDev__pixContainer__content__methods">
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.cpf ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'cpf', cpf: true }) }}>CPF</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.telefone ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'telefone', telefone: true }) }}>Telefone</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.email ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'email', email: true }) }}>Email</button>
                                </div>
                                <div className="pagamentoDev__pixContainer__content__methods__container">
                                    <button className={typeOfPix.aleatorio ? "pagamentoDev__pixContainer__content__methods__container--select" : ""} onClick={e => { dispatch({ type: 'aleatorio', aleatorio: true }) }}>Aleatório</button>
                                </div>
                            </div>) : ""}

                            <div className="pagamentoDev__pixContainer__content__register">
                                <div>
                                    {typeOfPix.cpf ? (
                                        <>
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" name="cpf" id="cpf" value={storeCpf} onChange={e => { setStoreCpf(e.target.value) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.telefone ? (
                                        <>
                                            <label htmlFor="telefone">Telefone</label>
                                            <input type="tel" name="telefone" id="telefone" value={storeTelefone} onChange={e => { setStoreTelefone(e.target.value) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.email ? (
                                        <>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" value={storeEmail} onChange={e => { setStoreEmail(e.target.value) }} />
                                        </>
                                    ) : ""}

                                    {typeOfPix.aleatorio ? (
                                        <>
                                            <label htmlFor="aleatorio">Aleatório</label>
                                            <input type="text" name="aleatorio" id="aleatorio" value={storeAleatorio} onChange={e => { setStoreAleatorio(e.target.value) }} />
                                        </>
                                    ) : ""}

                                </div>

                                <div>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input type="text" name="nome" id="nome" value={storeNomeCompleto} onChange={e => { setStoreNomeCompleto(e.target.value) }} />
                                </div>
                            </div>
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
                            <button>Cancelar</button>
                            <button>Confirmar</button>
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

                <div className="pagamentoDev__modalConfirm">
                        <div className="pagamentoDev__modalConfirm__container">
                            <div>
                                <p>Seus dados foram enviados com sucesso, prazo de até 3 (três) dias úteis para o valor cair na sua conta. Após 15 dias do pagamento realizado você poderá requerir um novo pagamento</p>
                            </div>
                            <div><button>OK</button></div>
                        </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}