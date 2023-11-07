import "./style.css"
import React, { useReducer, useRef, useState } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { Link } from 'react-router-dom';
import Vlibras from '../../components/Vlibras/Vlibras'
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import GoBack from "../../components/GoBack/GoBack";
import { translate } from "../../translate/translate";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";


export function reducerUserData(state, action) {
    switch (action.type) {
        case "change_username":
            return { ...state, username: action.username }
        case "change_nascimento":
            return { ...state, dataNascimento: action.nascimento }
        case "change_email":
            return { ...state, email: action.email }
        case "change_senha":
            return { ...state, senha: action.senha }
        case "change_colorCard":
            return { ...state, colorCard: action.colorCard }
        default:
            return state;
    }
}


const PerfilUser = (props) => {
    const {userRedux, coins} = props;
    const newDispatch = useDispatch();
    const [userData, dispatch] = useReducer(reducerUserData, {
        username: "",
        dataNascimento: "",
        email: "",
        senha: "",
        colorCard: userRedux.colorCard
    });

    const [editButton, setEditButton] = useState(false);

    const [glowStyles, setGlowStyles] = useState({
        backgroundImage: 'none'
    });
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        const rotateX = deltaY / centerY * 30;
        const rotateY = deltaX / centerX * -30;

        setRotation({ x: rotateX, y: rotateY });
        setGlowStyles({
            backgroundImage: `
              radial-gradient(
                circle at
                ${mouseX / 2 + deltaX}px
                ${mouseY / 2 + deltaY}px,
                #ffffff55,
                #0000000f
              )`
            ,
            transform: 'scale3d(1.07, 1.07, 1.07)',
        });
    }

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            <TextToSpeech />

            <main className="perfilUser__main">
                <section className="perfilUser__titlePage">
                    <h1>{translate("Meu perfil")}</h1>
                </section>

                <section className="perfilUser__userData">
                    <motion.div
                        whileHover="hover"
                        className="perfilUser__userData__avatar"
                        style={{
                            x: rotation.y,
                            y: rotation.x,
                            rotateX: rotation.x,
                            rotateY: rotation.y,
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { setGlowStyles({ backgroundImage: 'none' }); setRotation({ x: 0, y: 0 }) }}
                    >
                        <div className="perfilUser-card__border" style={glowStyles}>
                            <div className="perfilUser-card__cardBG" >
                                <div className="perfilUser-card__imgBG" style={{ backgroundColor: userData.colorCard }}>
                                    <img id="perfilUser-card__parrot" src={userRedux.avatar.img} />
                                </div>
                                <div className="perfilUser-card__cardFooter">
                                    <img className="perfilUser-card__imgEdit" src="/imgs/icons/Kapicoin_icon.png" />
                                    <p> {coins.coins} </p>
                                    <input
                                        type="color"
                                        id="colorCard"
                                        value={userData.colorCard}
                                        onChange={e => {
                                            dispatch({ type: 'change_colorCard', colorCard: e.target.value });
                                            newDispatch({ type: 'CHANGE_COLORCARD', colorCard: e.target.value });
                                        }} aria-tts="cor avatar"/>
                                    {editButton ? <img src="/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__avatar__image__editImg" /> : false}                                
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="perfilUser__userData__inputs">
                        <div className="perfilUser__userData__input">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" 
                            value={userData.username} 
                            onChange={e => dispatch({ type: 'change_username', username: e.target.value })} 
                            aria-tts="username"
                            ></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="nascimento">{translate("Nascimento")}</label>
                            <input type="date" id="nascimento" 
                            value={userData.dataNascimento} readOnly aria-tts="data de nascimento"
                            >
                            </input>
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="email">{translate("Email")}</label>
                            <input type="email" id="email" 
                            value={userData.email} 
                            onChange={e => dispatch({ type: 'change_email', email: e.target.value })}
                            aria-tts="email"
                            ></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="senha">{translate("Senha")}</label>
                            <input type="password" id="senha" 
                            value={userData.senha} 
                            onChange={e => dispatch({ type: 'change_senha', senha: e.target.value })}
                            aria-tts="senha"
                            ></input>

                            {editButton ? <img src="/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <input type="button" id="editar" value={editButton ? "Salvar" : "Editar"} onClick={_ => {
                                editButton ? setEditButton(false) : setEditButton(true)
                            }}
                            aria-tts="editar"
                            >
                            </input>
                        </div>
                    </div>
                </section>

                <section className="perfilUser__actions">
                    <Link className="perfilUser__action" to="/meus-jogos" aria-tts="meus jogos">
                        <img src="/imgs/icons/mais_icon.png" alt="icone de Mais que redireciona para a página descrita" />
                        <p>{translate("Meus jogos")}</p>
                    </Link>
                    <Link className="perfilUser__action" to="/lista-desejos" aria-tts="lista de desejos">
                        <img src="/imgs/icons/heart_icon.png" alt="icone de Coração que redireciona para a página descrita" />
                        <p>{translate("Lista de desejos")}</p>
                    </Link>
                    <Link className="perfilUser__action" to="/review" aria-tts="review">
                        <img src="/imgs/icons/review_iconw.svg" alt="icone de Livro que redireciona para a página descrita" />
                        <p>{translate("Review de jogos")}</p>
                    </Link>
                    <Link className="perfilUser__action" to="/avatares" aria-tts="avatares">
                        <img src="/imgs/icons/capivara_icon.svg" alt="icone da Capivara que redireciona para a página descrita" />
                        <p>{translate("Avatares")}</p>
                    </Link>
                </section>
            </main>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userRedux: state.userRedux,
        coins: state.coins,
    };
  };
  
export default connect(mapStateToProps)(PerfilUser);
