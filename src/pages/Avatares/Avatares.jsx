import React from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardAvatar from "../../components/CardAvatar/CardAvatar";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addAvatar } from "../../redux/actions";

const Avatares = ({userRedux, addAvatar}) => {
    const handleClickAdd = (avatar) =>{
        addAvatar(avatar);
    }   
    
    const avatares = [
        {
            nome: "Silveira",
            img:"/imgs/animais/1.png",
            color:"orange",
            coins:10,
            id:1,
        },
        {
            nome: "Julia",
            img:"/imgs/animais/3.png",
            color:"cyan",
            coins:5,
            id:2,
        },
        {
            nome: "Sr. Rocha",
            img:"/imgs/animais/2.png",
            color:"fuchsia",
            coins:20,
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
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate("Meus Avatares")}</h1>
                </div>

                <section className="avatares__grid">
                    
                    {
                        userRedux.avatares?.map((avatar) =>(
                            <CardAvatar avatar={avatar} handleClickAdd={handleClickAdd}/>
                        ))
                    }

                    <div className="avatares__letraPixel">
                        <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate('Loja de Skin')}</h1>
                    </div>

                    {
                        avatares?.map((avatar) =>(
                            <CardAvatar avatar={avatar} handleClickAdd={handleClickAdd}/>
                        ))
                    }

                </section>

            </main>

        </div>
    );

}
const mapDispatchToProps = (dispatch) => {
    return {
        addAvatar: (avatar) => dispatch(addAvatar(avatar))
    };
};
const mapStateToProps = (state) => ({
    userRedux: state.userRedux,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Avatares);
