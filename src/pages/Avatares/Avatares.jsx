import React from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardAvatar from "../../components/CardAvatar/CardAvatar";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";
import { connect } from "react-redux";
import GoBack from "../../components/GoBack/GoBack";


const Avatares = ({userRedux}) => {
    
    const avatares = [
        {
            nome: "Silveira",
            img:"/imgs/animais/1.png",
            color:"orange",
            coins:10,
            id:1,
        },
        {
            nome: "Sr. Rocha",
            img:"/imgs/animais/2.png",
            color:"fuchsia",
            coins:20,
            id:2,
        },
        {
            nome: "Julia",
            img:"/imgs/animais/3.png",
            color:"cyan",
            coins:5,
            id:3,
        },
        {
            nome: "Veronica",
            img:"/imgs/animais/4.png",
            color:"blue",
            coins:50,
            id:4,
        },
        {
            nome: "Rochinha",
            img:"/imgs/animais/5.png",
            color:"red",
            coins:500,
            id:5,
        },
    ]
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="avatares__main">
                <GoBack/>
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate("Meus Avatares")}</h1>
                </div>

                <section className="avatares__grid">
                    
                    {
                        userRedux.avatares?.map((avatar) =>(
                            <CardAvatar avatar={avatar}/>
                        ))
                    }

                    <div className="avatares__letraPixel">
                        <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate('Loja de Skin')}</h1>
                    </div>

                    {
                        avatares?.map((avatar) =>(
                            <CardAvatar avatar={avatar}/>
                        ))
                    }

                </section>

            </main>

        </div>
    );

}
const mapStateToProps = (state) => ({
    userRedux: state.userRedux,
});
  
export default connect(mapStateToProps)(Avatares);
