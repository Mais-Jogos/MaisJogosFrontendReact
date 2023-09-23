import "./style.css";
import React from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CardMeusJogos from "./CardMeusJogos";

export default _ => {
    
    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />
            <main className="meusjogos__main">
                <section className="meusjogos__title">
                    <div className="meusjogos__title__name">
                        <img src="../../../public/imgs/icons/psButtons_icon.png" alt="icone de controle de botões" className="meusjogos__title--center"/>
                        <h1 className="meusjogos__title--center">Meus +jogos</h1>
                    </div>
                    <div className="meusjogos__title__filter">
                        <img src="../../../public/imgs/icons/filter_icon.png" alt="icone de filtro"  className="meusjogos__title--center"/>
                        <p className="meusjogos__title--center">Relevância</p>
                    </div>
                </section>

                <section className="meusjogos__menu">
                    <div className="meusjogos__menu__titles">
                        <div className="meusjogos__menu__title meusjogos__menu__title--selected">
                            <p>Jogos recém comprados</p>
                        </div>
                        <div className="meusjogos__menu__title">
                            <p>Todos os jogos</p>
                        </div>
                        <div className="meusjogos__menu__bottomBackground"></div>
                    </div>
                </section>

                <section className="meusjogos__jogos">
                    <CardMeusJogos title="Celeste" diaCompra="19 de Out 2023" scrImage="../../../public/imgs/jogos/meusjogos_01.png" />
                </section>
            </main>
            <Footer />
        </div>
    )
}