import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";

import styled from 'styled-components';
import silveira from '../../../public/imgs/animais/1.png';
import cartIcon from './cart__icon.svg';

export const Silveira = styled.img`
  width: 100px;
  height: auto;
`;

export const Cart = styled.img`
`;

export const Circle = styled.button`
    background-color: rgb(51, 46, 46);
    display: flex;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    img {
        width: 15px;
        height: 15px;
    }

    &:focus {
        outline: none;
        border-color: black;
      }

    &:hover {
        border: 1px solid rgb(45, 42, 30);
    }
`

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
                                <Silveira src={silveira} />
                            </div>
                            <div className="lojaskin__letraPixel">
                                
                                <p>Silveira</p>
                            
                            </div>
                            <div className="lojaskin__cardFooter">
                                <img className="lojaskin__imgEdit" src="../../public\imgs\icons\Kapicoin_icon.png" />
                                <p> 500 </p>
                                <Circle>
                                    <Cart src={cartIcon} />
                                </Circle>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );

}