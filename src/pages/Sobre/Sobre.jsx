import React, { useEffect, useState } from 'react';
import './style.css';
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';
import { AnimatePresence, motion } from 'framer-motion'

export default _ => {

    const [game, setGame] = useState(0);
    const [direction, setDirection] = useState('left');

    const photos = ['/imgs/animais/2.png', '/imgs/animais/1.png', '/imgs/animais/3.png']
    const slideVariants = {
        enter: {
          x: direction === 'left' ? -1000 : 1000,
          opacity:1,
          transition: { duration: 0.2 },
          zIndex: 1,
        },
        visible: {
          x: 0,
          opacity:1,
          transition: { duration: 1},
          zIndex: 1,
        },
        exit: {
          x: direction === 'left' ? 1000 : -1000,
          opacity:0,
          transition: { duration: 0.2 },
          zIndex: 0,
        },
      };
    
  
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="sobre__main">
                <header>
                <h1 className="sobre_Titulo">Sobre +Jogos</h1>
                    
            <div className="section__banner">
            <p onClick={()=>{setGame(game === 0 ? photos.length-1 : game-1); setDirection('right')}}>
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <AnimatePresence>
              <motion.img src={photos[game]} 
              alt="" 
              key={game}
              variants={slideVariants}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 25 },
                opacity: { duration: 1 }
              }}
              initial={"enter"}
              animate="visible"
              exit="exit"/>
            </AnimatePresence>
            <p onClick={()=>{setGame(game === photos.length-1 ? 0 : game+1); setDirection('left')}}>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </div>
                    
                </header>

                <section className="sobre__grid">
                
                <div>
                    <h1 className="sobre_Titulo">Quem somos</h1>
                    <p>
                    Na +Jogos, somos muito mais do que apenas uma empresa de vendas de jogos.  Somos apaixonados por games e dedicados a tornar o mundo dos jogos mais inclusivo,  acessível e motivador para todos.  Nossa missão é proporcionar a melhor experiência de compra de avatares e jogos,  ao mesmo tempo em que incentivamos e valorizamos os desenvolvedores de jogos.
                    </p>
                    <p>
                    Acreditamos firmemente que os jogos devem ser para todos, independentemente de suas habilidades físicas, cognitivas ou sensoriais. É por isso que trabalhamos incansavelmente para tornar nossos produtos e serviços acessíveis a todos os gamers. Oferecemos uma ampla gama de opções de customização de avatares, garantindo que cada jogador possa se expressar da forma que preferir. Além disso, colaboramos com desenvolvedores.    
                    </p>
                </div>
                
                <div className="sobre__blocks">
                    
                    <h1 className="sobre_Titulo">Serviços</h1>
                    <div className='encapsulando'>
                      <div className="sobre__border">
                          <h1 className="sobre_Titulo">Missão</h1> 
                          <p>Capacitar todos os jogadores, promover visibilidade aos desenvolvedores e criar uma comunidade inclusiva em jogos acessíveis e personalizados.</p> 
                      </div>
                      <div className="sobre__border">
                          <h1 className="sobre_Titulo">Visão</h1> 
                          <p>Tornar-se a líder global em acessibilidade e personalização de jogos, impulsionando a inclusão e reconhecimento dos desenvolvedores, com visão de um futuro inclusivo e inovador na indústria de jogos.</p> 
                      </div>
                      <div className="sobre__border">
                          <h1 className="sobre_Titulo">Valor</h1> 
                          <p>Promovemos inclusão, inovação, comunidade, colaboração, ética e paixão pelos jogos como pilares essenciais de nossa abordagem na indústria de jogos.</p> 
                      </div>
                    </div>
                </div>

                </section>

            </main>

            <Footer />
        </div>
    );

}