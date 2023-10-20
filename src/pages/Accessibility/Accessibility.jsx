import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="accessibility__main">
                <header>
                    <img src=""/>
                    <h1 className="acessibility_Titulo">Acessibilidade</h1>
                </header>

                <section className="accessibility__grid">
                
                

                </section>

            </main>

            <Footer />
        </div>
    );

}