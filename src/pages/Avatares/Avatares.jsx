import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardAvatar from "../../components/CardAvatar/cardAvatar";
import Vlibras from "../../components/Vlibras/Vlibras"

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />
            <Vlibras/>

            <main className="avatares__main">
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\capivara_icon.svg"/>Meus Avatares</h1>
                </div>

                <section className="avatares__grid">
                    
                    
                    <CardAvatar nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={'Equipar'}/>

                    <CardAvatar nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={'Equipar'}/>

                    <CardAvatar nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={'Equipar'}/>

                    <CardAvatar nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={'Equipar'} />

                    <CardAvatar nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={'Equipar'}/>

                    <CardAvatar nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={'Equipar'}/>

                    <div className="avatares__letraPixel">
                        <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\capivara_icon.svg"/>Avatares de Evento</h1>
                    </div>

                    <CardAvatar nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={'Equipar'} />

                    <CardAvatar nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={'Equipar'} />

                    <CardAvatar nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={'Equipar'} />

                </section>

            </main>

            <Footer />
        </div>
    );

}