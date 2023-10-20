import "./style.css"
import React, { useReducer, useRef, useState } from "react";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import Vlibras from '../../components/Vlibras/Vlibras'
import { motion } from "framer-motion";
import CardLojaSkin from "../../components/CardLojaSkin/CardLojaskin";



function reducerUserData(state, action) {
    switch (action.type) {
        case "change_username":
            return { ...state, username: action.username }
        case "change_nascimento":
            return { ...state, dataNascimento: action.nascimento }
        case "change_email":
            return { ...state, email: action.email }
        case "change_senha":
            return { ...state, senha: action.senha }
        default:
            return state;
    }
}


export default props => {
    const [userData, dispatch] = useReducer(reducerUserData, {
        username: "",
        dataNascimento: "",
        email: "",
        senha: ""
    });

    const [editButton, setEditButton] = useState(false);
    

    /*   
    const [cardVariants, setCardVariants] = useState({
       hover: {
         scale: 1.07,
         rotateX: 0,
         rotateY: 0,
         rotateZ: 0,
         transition: { type: "spring", stiffness: 120, damping: 10 }
       }
     });
      const rotateToMouse = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const bounds = e.target.getBoundingClientRect();
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        };
        const distance = Math.sqrt(center.x**2 + center.y**2);
    
        setCardVariants({
          hover: {
            scale: 1.07,
            rotateX: center.y / 100,
            rotateY: center.x / 100,
            rotateZ: Math.log(distance)* 2,
            transition: { type: "spring", stiffness: 120, damping: 10 }
          }
        });
    
        setGlowStyles({
          backgroundImage: `
            radial-gradient(
              circle at
              ${center.x * 2 + bounds.width/2}px
              ${center.y * 2 + bounds.height/2}px,
              #ffffff55,
              #0000000f
            )`
        });
      } */
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
            transform:'scale3d(1.07, 1.07, 1.07)',
            transform:'scale(1.2)',
        });
      }

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <main className="perfilUser__main">

                <section className="perfilUser__titlePage">
                    <h1>Meu perfil</h1>
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
                          onMouseLeave={() => {setGlowStyles({backgroundImage: 'none'}); setRotation({ x: 0, y: 0 })}}
                          >
                    <div className="lojaskin__border" style={glowStyles}>
                        <div className="lojaskin__cardBG" >
                            <div className="lojaskin__imgBG">
                                <img id="lojaskin__parrot" src={'public/imgs/animais/3.png'} />
                            </div>
                            <div className="lojaskin__cardFooter">
                                <img className="lojaskin__imgEdit" src="public/imgs/icons/Kapicoin_icon.png" />
                                <p> 3000 </p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                    {/* <motion.div
                        whileHover="hover"
                        className="perfilUser__userData__avatar"
                        style={{
                            ...glowStyles,
                            x: rotation.y,
                            y: rotation.x,
                            rotateX: rotation.x,
                            rotateY: rotation.y,
                          }}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={() => {setGlowStyles({backgroundImage: 'none'}); setRotation({ x: 0, y: 0 })}}
                          >
                            
                        <div className="perfilUser__userData__avatar__image">
                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__avatar__image__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__avatar__capCoins">
                            <img src="../../../public/imgs/icons/Kapicoin_icon.png" alt="icons da moeda da loja" />
                            <span>30.000</span>
                        </div>
                    </motion.div> */}

                    <div className="perfilUser__userData__inputs">
                        <div className="perfilUser__userData__input">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={userData.username} onChange={e => dispatch({ type: 'change_username', username: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="nascimento">Nascimento</label>
                            <input type="date" id="nascimento" value={userData.dataNascimento} onChange={e => dispatch({ type: 'change_nascimento', nascimento: e.target.value })}></input>
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={userData.email} onChange={e => dispatch({ type: 'change_email', email: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" value={userData.senha} onChange={e => dispatch({ type: 'change_senha', senha: e.target.value })}></input>

                            {editButton ? <img src="../../../public/imgs/icons/edit_icon.png" alt="icons da moeda da loja" className="perfilUser__userData__input__editImg" /> : false}
                        </div>

                        <div className="perfilUser__userData__input">
                            <input type="button" id="editar" value={editButton ? "Salvar" : "Editar"} onClick={_ => {
                                editButton ? setEditButton(false) : setEditButton(true)
                            }}>
                            </input>
                        </div>
                    </div>
                </section>

                <section className="perfilUser__actions">
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/mais_icon.png" alt="icone de Mais que redireciona para a página descrita" />
                        <p>Meus jogos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/heart_icon.png" alt="icone de Coração que redireciona para a página descrita" />
                        <p>Lista de desejos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/review_icon.svg" alt="icone de Livro que redireciona para a página descrita" />
                        <p>Review de jogos</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/capivara_icon.svg" alt="icone da Capivara que redireciona para a página descrita" />
                        <p>Avatares comprados</p>
                    </Link>
                    <Link className="perfilUser__action" to="/">
                        <img src="../../../public/imgs/icons/eventos_icon.svg" alt="icone de Eventos que redireciona para a página descrita" />
                        <p>Eventos</p>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}
