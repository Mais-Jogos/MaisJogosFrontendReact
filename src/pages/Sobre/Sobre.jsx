import React, { useEffect, useState } from 'react';
import './style.css';
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';


export default _ => {
    
  
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="sobre__main">
                <header>
                <h1 className="sobre_Titulo">Sobre +Jogos</h1>
                    
                <div className='sobre_photo'>
                  <img src="../../public\imgs\grupodev\01.png"/>
                  <img src="../../public\imgs\grupodev\02.png"/>
                  <img src="../../public\imgs\grupodev\03.png"/>
                  <img src="../../public\imgs\grupodev\04.png"/>
                  <img src="../../public\imgs\grupodev\05.png"/>
                  <img src="../../public\imgs\grupodev\06.png"/>
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

        </div>
    );

}