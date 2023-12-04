import React, { useEffect, useState } from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardAvatar from "../../components/CardAvatar/CardAvatar";
import Vlibras from "../../components/Vlibras/Vlibras";
import { translate } from "../../translate/translate";
import { connect } from "react-redux";
import GoBack from "../../components/GoBack/GoBack";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Loading from "../../components/Loading/Loading";

const Avatares = ({userRedux}) => {
    const navigate = useNavigate()
    const token = window.localStorage.getItem("token")
    const [skins, setSkins] = useState([])
    const [loading, setLoading] = useState(<Loading/>)
    const cores = ["orange", "fuchsia", "cyan", "blue", "red"]
    useEffect(() =>{
        Axios.get("https://backendmaisjogos-production.up.railway.app/api/avatar/listarTodos", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response) =>{
            console.log(response.data);
            setSkins(response.data)
            setLoading(null)
        })
        .catch((error) =>{
            console.log(error);
            setLoading(null)
        })
    }, [])
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />
            {loading}

            <main className="avatares__main">
                <GoBack/>
                <div className="avatares__letraPixel">
                    <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate("Meus Avatares")}</h1>
                </div>

                <section className="avatares__grid">
                    
                    {
                        userRedux.avatares?.map((avatar, index) =>(
                            <CardAvatar avatar={avatar} key={avatar?.id} cor={cores[index]}/>
                        ))
                    }

                    <div className="avatares__letraPixel">
                        <h1 className="titulo"> <img id="avatares_capivaraICON" src="\imgs\icons\capivara_icon.svg"/>{translate('Loja de Skin')}</h1>
                    </div>

                    {
                        skins?.map((avatar, index) =>(
                            <CardAvatar avatar={avatar} key={avatar?.id} cor={cores[index]}/>
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
