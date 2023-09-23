import "./style.css";
import React, { useState } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import RecemComprados from "./RecemComprados";
import TodosComprados from "./todosComprados";

export default _ => {

    // False = Jogos recém comprados
    // True = Todos os jogos
    const [menuOption, setMenuOption] = useState(false);
    
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
                        <div className={menuOption ? "meusjogos__menu__title" : "meusjogos__menu__title meusjogos__menu__title--selected"} onClick={ _ => setMenuOption(false)}>
                            <p>Jogos recém comprados</p>
                        </div>
                        <div className={!menuOption ? "meusjogos__menu__title" : "meusjogos__menu__title meusjogos__menu__title--selected"} onClick={ _ => setMenuOption(true)}>
                            <p>Todos os jogos</p>
                        </div>
                        <div className="meusjogos__menu__bottomBackground"></div>
                    </div>
                </section>

                <section className="meusjogos__jogos">
                    {menuOption ? <TodosComprados /> : <RecemComprados/>}
                </section>
            </main>
            <Footer />
        </div>
    )
}