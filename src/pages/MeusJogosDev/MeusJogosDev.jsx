import "./style.css";
import React, { useEffect, useState } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { Link } from "react-router-dom";
import TodosJogos from "./TodosJogos.jsx";
import HeaderWithFilter from "../../components/HeaderWithFiilter/HeaderWithFilter";
import Vlibras from '../../components/Vlibras/Vlibras';
import GoBack from "../../components/GoBack/GoBack";
import { translate } from "../../translate/translate.js";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

export default _ => {
    // False = Jogos recém comprados
    // True = Todos os jogos
    const [menuOption, setMenuOption] = useState(false);
    const [sort, setSort] = useState("");

    function changeSort(data) {
        let finalData = data == "des" ? false : true;
        setSort(finalData);
    }

    
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />

            <main className="meusjogos__main">
                <GoBack/>
                <HeaderWithFilter name="Meus +jogos" imgIcon="/imgs/icons/psbuttons_icon.png" sortData={changeSort}/>
                <section className="meusjogos__menu">
                    <div className="meusjogos__menu__titles">
                        <div className={"meusjogos__menu__title meusjogos__menu__title--selected"}>
                            <p>{translate("Todos os jogos")}</p>
                        </div>
                        <div className="meusjogos__menu__bottomBackground"></div>
                    </div>
                </section>

                <section className="meusjogos__jogos">
                    <TodosJogos key={Math.random()} sortData={sort}/>
                </section>
            </main>
        </div>
    )
}