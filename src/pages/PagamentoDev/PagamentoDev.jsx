import "./style.css"
import React from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'

export default props => {

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
                            <button className="pagamentoDev__pixContainer__selectTypeOfPix__button pagamentoDev__pixContainer__selectTypeOfPix__button--select">Novo Pix</button>
                            <button className="pagamentoDev__pixContainer__selectTypeOfPix__button">Pix salvo</button>
                        </div>
                    </div>
                    
                    <div className="pagamentoDev__pixContainer__content">
                        <h2>Selecione o tipo do seu pix</h2>

                        <div className="pagamentoDev__pixContainer__content__methods">
                            <div className="pagamentoDev__pixContainer__content__methods__container">
                                <button className="pagamentoDev__pixContainer__content__methods__container--select">CPF</button>
                            </div>
                            <div className="pagamentoDev__pixContainer__content__methods__container">
                                <button>Telefone</button>
                            </div>
                            <div className="pagamentoDev__pixContainer__content__methods__container">
                                <button>Email</button>
                            </div>
                            <div className="pagamentoDev__pixContainer__content__methods__container">
                                <button>Aleatório</button>
                            </div>
                        </div>

                        <div className="pagamentoDev__pixContainer__content__register">
                            <div>
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf" />
                            </div>

                            <div>
                                <label htmlFor="nome">Nome completo</label>
                                <input type="text" name="nome" id="nome" />
                            </div>
                        </div>

                        <div className="pagamentoDev__pixContainer__content__methods__buttons">
                            <button >Cancelar</button>
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
            </main>
            <Footer />
        </div>
    )
}