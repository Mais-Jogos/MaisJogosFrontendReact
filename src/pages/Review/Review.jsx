import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import ReviewComp from "../../components/ReviewComp/ReviewComp";
import ReviewCompINF from "../../components/ReviewComp/ReviewCompINF";
import Vlibras from '../../components/Vlibras/Vlibras';

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="review__main">
            <ReviewComp name="Review de jogos"/>
                
                <section className="review__Section">
                    
                <ReviewCompINF minhaIMG="../../public\imgs\jogos\meusjogos_01.png" nome="Celeste" descricao="Minha descrição" data="Data de postagem 29/04/23" corpo="Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!"/>

                <ReviewCompINF minhaIMG="../../public\imgs\jogos\meusjogos_02.png" nome="Lenda do Heroi" descricao="Minha descrição" data="Data de postagem 29/04/23" corpo="Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!" />

                <ReviewCompINF minhaIMG="../../public\imgs\jogos\meusjogos_03.png" nome="Guns n' Runs" descricao="Minha descrição" data="Data de postagem 29/04/23" corpo="Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!" />

                </section>

            </main>

            <Footer />
        </div>
    );

}