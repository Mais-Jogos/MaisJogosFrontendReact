import "./style.css";
import React, { useState } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { Link } from "react-router-dom";
import RecemComprados from "./RecemComprados";
import TodosComprados from "./TodosComprados";
import HeaderWithFilter from "../../components/HeaderWithFiilter/HeaderWithFilter";
import Vlibras from '../../components/Vlibras/Vlibras';

export default _ => {
    // False = Jogos recém comprados
    // True = Todos os jogos
    const [menuOption, setMenuOption] = useState(false);
    
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <main className="meusjogos__main">
                <HeaderWithFilter name="Meus +jogos" imgIcon="/imgs/icons/psbuttons_icon.png"/>

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
        </div>
    )
}