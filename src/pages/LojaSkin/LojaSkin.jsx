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

            <main className="lojaskin__main">
                <header>
                    <h1>Loja de Skin</h1>
                </header>

                <section className="lojaskin__grid">
                    <div className="lojaskin__border">
                        <div className="lojaskin__cardBG">
                            <div className="lojaskin__imgBG">
                                <img src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="lojaskin__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="lojaskin__cardFooter">
                                <img className="lojaskin__imgEdit" src="../../public\imgs\icons\Kapicoin_icon.png" />
                                <p> 500 </p>
                                <img src="../../public\imgs\icons\cart__icon.svg" />
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );

}