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
                <header className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\capivara_icon.svg"/>Meus Avatares</h1>
                </header>

                <section className="avatares__grid">
                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>

                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>

                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>

                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>

                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>

                    <div className="avatares__border">
                        <div className="avatares__cardBG">
                            <div className="avatares__imgBG">
                                <img id="avatares__parrot" src="../../public\imgs\animais\1.png" />
                            </div>
                            <div className="avatares__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="avatares__cardFooter">
                                <p> Equipar </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );

}