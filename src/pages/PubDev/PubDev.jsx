import React , {useState, useEffect} from "react";
import './style.css'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';

export default _ => {

    const [games, setGames] = useState([]);
    const [numberGames, setNumberGames] = useState(3);

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

            <main className="accessibility__main">
                <header>
                    <h1 className="pubProfile_Titulo">Perfil Público Dev</h1>
                </header>

                <section className="accessibility__grid">
                <div>
                    <div>
                    <div></div>
                    <div><h1 className="pubProfile_Titulo">Nome dev</h1></div>
                    <div><h1 className="pubProfile_Titulo">Posição no ranking</h1></div>
                    </div>

                    <div>
                    <h1 className="pubProfile_Titulo">Sobre dev</h1>
                    <div>Para ter sucesso como desenvolvedor de jogos é preciso ter muita dedicação e paixão pelo que faz. É importante estar sempre atualizado sobre as novidades do mercado e buscar inspiração em outras áreas além dos jogos. Afinal, a criatividade é um dos principais ingredientes para o sucesso nessa área.</div>
                    </div>

                </div>
                <div>
                    <div>
                    <h1 className="pubProfile_Titulo">Jogos desenvolvidos</h1>
                    <div><img src=""/></div>
                    </div>

                    <div>
                    <h1 className="pubProfile_Titulo">Artes</h1>
                    <div><img src=""/></div>
                    </div>
                </div>

                <div className="section__pubDev">
              {games?.slice(0,numberGames).map((game, index)=>(
                <Card game={game}/>
              ))}
            </div>

                </section>

            </main>

            <Footer className="footer__main" />
        </div>
    );

}