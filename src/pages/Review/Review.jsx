import React, { useEffect, useState } from "react";
import './style.css'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import ReviewComp from "../../components/ReviewComp/ReviewComp";
import ReviewCompINF from "../../components/ReviewComp/ReviewCompINF";
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios'

export default _ => {
    const [games, setGames] = useState([]); 
    useEffect(()=>{
      const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
      Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) =>{
        setGames(response.data.results);
      }).catch((error) => { console.log(error); }); 
    }, [])
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="review__main">
            <ReviewComp name="Review de jogos"/>
                
                <section className="review__Section">
                {
                    games?.slice(0,3).map((jogo) =>(
                    <ReviewCompINF minhaIMG={jogo?.background_image} nome={jogo?.name} descricao="Minha descrição" data="Data de postagem 29/04/23" corpo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deserunt maiores voluptatum placeat veritatis maxime, optio vero corporis sit est consequuntur temporibus ipsum perferendis accusamus delectus illo quasi dignissimos. Odio."/>
                    ))
                }
                </section>

            </main>

            <Footer />
        </div>
    );

}