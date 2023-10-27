import React from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import CardLojaSkin from "../../components/CardLojaSkin/CardLojaskin";
import Vlibras from '../../components/Vlibras/Vlibras';

export default _ => {

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="lojaskin__main">
                <header>
                    <h1 className="titulo">Loja de Skin</h1>
                </header>

                <section className="lojaskin__grid">
                
                <CardLojaSkin nome={'Silveira'} preco={'500'} img={'/imgs/animais/1.png'}/>

                <CardLojaSkin nome={'Sr Rocha'} preco={'500'} img={'/imgs/animais/2.png'}/>

                <CardLojaSkin nome={'Julia'} preco={'500'} img={'/imgs/animais/3.png'}/>

                <CardLojaSkin nome={'Julia'} preco={'500'} img={'/imgs/animais/3.png'}/>

                <CardLojaSkin nome={'Silveira'} preco={'500'} img={'/imgs/animais/1.png'}/>

                <CardLojaSkin nome={'Sr Rocha'} preco={'500'} img={'/imgs/animais/2.png'}/>

                <CardLojaSkin nome={'Julia'} preco={'500'} img={'/imgs/animais/3.png'}/>

                <CardLojaSkin nome={'Sr Rocha'} preco={'500'} img={'/imgs/animais/2.png'}/>

                <CardLojaSkin nome={'Silveira'} preco={'500'} img={'/imgs/animais/1.png'}/>

                </section>

            </main>

            <Footer />
        </div>
    );

}