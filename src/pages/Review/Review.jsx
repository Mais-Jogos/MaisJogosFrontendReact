import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />

            <main className="avatares__main">
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\review_icon.svg"/>Review de Jogos</h1>
                </div>

                <section className="avatares__grid">
                    
                <div className="review__border">
                    <div className="review__gameIMG">
                        <img src="../../public\imgs\jogos\meusjogos_01.png"/>
                        </div>
                    <div>
                        <h1>Celeste</h1>
                        <p>Minha descrição</p>
                        <p>Data de postagem</p>
                        <p>Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!</p>
                    </div>
                </div>

                </section>

            </main>

            <Footer />
        </div>
    );

}