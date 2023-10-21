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
                    <h1 className="pubProfile_Titulo">Perfil Público Dev</h1>
                </header>

                <section className="accessibility__grid">
                <div>
                    <div>
                    <div><img src=""/></div>
                    <div><h1 className="pubProfile_Titulo">Nome dev</h1></div>
                    <div><h1 className="pubProfile_Titulo">Posição no ranking</h1></div>
                    </div>

                    <div>
                    <h1 className="pubProfile_Titulo">Sobre dev</h1>
                    <div>xxxx</div>
                    </div>

                </div>
                <div>
                    <div>
                    <h1 className="pubProfile_Titulo">Jogos desenvolvidos</h1>
                    <div><img src=""/></div>
                    </div>

                    <div>
                    <h1 className="pubProfile_Titulo">Artes</h1>
                    <div><img src=""/></div>
                    </div>
                </div>

                </section>

            </main>

            <Footer className="footer__main" />
        </div>
    );

}