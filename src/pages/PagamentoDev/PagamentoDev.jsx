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
                    <img src="#"></img>

                    <h1>Requerimento de pagamento</h1>
                </section>

                <section className="pagamentoDev__descripiton">
                    <p>Para que o pagamento seja feito da forma correta preencha suas informações nos campos a baixo com atenção, assim que solicitado, o pagamento cairá na sua conta em até 3 (três) dias úteis</p>
                </section>

                <section className="pagamentoDev__pixContainer">
                    <div className="pagamentoDev__pixContainer__header">
                        <div className="pagamentoDev__pixContainer__header__mainImage">
                            <img src="#"></img>
                            <h2>Pix</h2>
                        </div>
                        <div>
                            <button>Novo Pix</button>
                            <button>Pix salvo</button>
                        </div>
                    </div>
                    <div className="pagamentoDev__pixContainer__content">
                        <h2>Selecione o tipo do seu pix</h2>

                        <div>
                            <div>
                                <button>CPF</button>
                            </div>
                            <div>
                                <button>Telefone</button>
                            </div>
                            <div>
                                <button>Email</button>
                            </div>
                            <div>
                                <button>Aleatório</button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}