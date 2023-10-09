import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import ReviewComp from "../../components/ReviewComp/ReviewComp";

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />

            <main className="review__main">
            <ReviewComp name="Review de jogos" imgIcon="../../public\imgs\icons\review_icon.svg"/>
                
                <section className="avatares__grid">
                    
                <div className="review__border">
                    <div className="review__gameIMG">
                        <img src="../../public\imgs\jogos\meusjogos_01.png"/>
                    </div>
                    <div>
                        <p className="review__gameName">Celeste <span className="review_Avalicao">4,9/9 <i class="fa-solid fa-star"></i></span></p>
                        <p><u>Minha descrição</u></p>
                        <p><u>Data de postagem 29/04/23</u></p>
                        <p className="review__corpoDescricao">Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!</p>
                        <p className="review__Button"><button>Editar <img src="../../public\imgs\icons\edit_icon.png"/></button></p>
                    </div>
            </div>

            <div className="review__border">
                    <div className="review__gameIMG">
                        <img src="../../public\imgs\jogos\meusjogos_01.png"/>
                    </div>
                    <div>
                        <p className="review__gameName">Celeste <span className="review_Avalicao">4,9/9 <i class="fa-solid fa-star"></i></span></p>
                        <p><u>Minha descrição</u></p>
                        <p><u>Data de postagem 29/04/23</u></p>
                        <p className="review__corpoDescricao">Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!</p>
                        <p className="review__Button"><button>Editar <img src="../../public\imgs\icons\edit_icon.png"/></button></p>
                    </div>
            </div>

            <div className="review__border">
                    <div className="review__gameIMG">
                        <img src="../../public\imgs\jogos\meusjogos_01.png"/>
                    </div>
                    <div>
                        <p className="review__gameName">Celeste <span className="review_Avalicao">4,9/9 <i class="fa-solid fa-star"></i></span></p>
                        <p><u>Minha descrição</u></p>
                        <p><u>Data de postagem 29/04/23</u></p>
                        <p className="review__corpoDescricao">Não esperava nada do game e fui surpreendida muito positivamente. A Mecânica é revigorante e saber que algo assim foi feito por brasileiros me dá muito orgulho. O jogo final cumpre o que promete!</p>
                        <p className="review__Button"><button>Editar <img src="../../public\imgs\icons\edit_icon.png"/></button></p>
                    </div>
            </div>  

                </section>

            </main>

            <Footer />
        </div>
    );

}