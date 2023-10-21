import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardAvatar from "../../components/CardAvatar/cardAvatar";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="avatares__main">
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\capivara_icon.svg"/>{translate("Meus Avatares")}</h1>
                </div>

                <section className="avatares__grid">
                    
                    
                    <CardAvatar color={"orange"} nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={translate('Equipar')}/>

                    <CardAvatar color={"cyan"} nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={translate('Equipar')}/>

                    <CardAvatar color={"fuchsia"} nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={translate('Equipar')}/>

                    <CardAvatar color={"orange"} nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={translate('Equipar')} />

                    <CardAvatar color={"cyan"} nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={translate('Equipar')}/>

                    <CardAvatar color={"fuchsia"} nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={translate('Equipar')}/>

                    <div className="avatares__letraPixel">
                        <h1 className="titulo"> <img id="avatares_capivaraICON" src="../../public\imgs\icons\capivara_icon.svg"/>{translate('Avatares de Evento')}</h1>
                    </div>

                    <CardAvatar color={"orange"} nome={'Silveira'} img={'../../public/imgs/animais/1.png'} rotulo={translate('Equipar')} />

                    <CardAvatar color={"cyan"} nome={'Julia'} img={'../../public/imgs/animais/3.png'} rotulo={translate('Equipar')} />

                    <CardAvatar color={"fuchsia"} nome={'Sr Rocha'} img={'../../public/imgs/animais/2.png'} rotulo={translate('Equipar')} />

                </section>

            </main>

            <Footer />
        </div>
    );

}