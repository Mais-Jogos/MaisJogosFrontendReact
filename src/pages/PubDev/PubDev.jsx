import React , {useState, useEffect} from "react";
import './style.css'
import Card from '../../components/Card/Card'
import Axios from 'axios'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';
import { translate } from "../../translate/translate";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

export default _ => {

    const [games, setGames] = useState([]);
    const [numberGames, setNumberGames] = useState(0);
    const [windowGames, setWindowGames] = useState(3);

    useEffect(()=>{
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then((response) =>{
          setGames(response.data.results);
        }).catch((error) => { console.log(error); }); 
      }, [])

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1050) {
            setWindowGames(1);
          } else {
            setWindowGames(3);
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />


            <main className="accessibility__main">
                <header>
                    <h1 className="pubProfile_Titulo">{translate("Perfil Público Dev")}</h1>
                </header>

                <section className="accessibility__grid">
                <div>
                    <div className="pubProfile_topo">
                      <div className="pubProfile_descricao1">
                        <img src="../../public\imgs\animais\1.png"/>
                      </div>
                      
                      <div className="pubProfile_descricao2">
                        
                        <div>
                          <h1 className="pubProfile_Titulo2">Nome dev</h1>
                        </div>
                        
                        <div className="pubProfile__block1">
                          <div className="pubProfile__rankingCoin"> <img src="../../public\imgs\bgimg\ranking.png"/> </div> 
                          <div> <h1 className="pubProfile_Titulo2"> Posição no ranking </h1> </div>
                        </div>
                        
                      </div>
                    </div>

                    <div>
                    <h1 className="pubProfile_Titulo">{translate("Sobre dev")}</h1>
                    <div className="pubProfile_bg">Para ter sucesso como desenvolvedor de jogos é preciso ter muita dedicação e paixão pelo que faz. É importante estar sempre atualizado sobre as novidades do mercado e buscar inspiração em outras áreas além dos jogos. Afinal, a criatividade é um dos principais ingredientes para o sucesso nessa área.</div>
                    </div>

                </div>
                <div>
                    <div>
                    <h1 className="pubProfile_Titulo">{translate("Jogos desenvolvidos")}</h1>
                    <div><img src=""/></div>
                    </div>

                    <div className="section__pubDev">
                      <p onClick={()=>{setNumberGames(numberGames === 0 ? games.length-1 : numberGames-1); setDirection('right')}}>
                        <i className="fa-solid fa-chevron-left"></i>
                      </p>
                      {games?.slice(numberGames,numberGames+3).map((game, index)=>(
                      <Card game={game}/>
                      ))}
                      <p onClick={()=>{setNumberGames(numberGames === games.length-1 ? 0 : numberGames+1); setDirection('left')}}>
                        <i className="fa-solid fa-chevron-right"></i>
                      </p>
                    </div>

                </div>

                <div className="section__pubDev">
                  <p onClick={()=>{setNumberGames(numberGames === 0 ? games.length-1 : numberGames-1)}}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </p>
                    {games?.slice(numberGames,numberGames+windowGames).map((game)=>(
                      <Card game={game} key={game?.id}/>
                    ))}
                  <p onClick={()=>{setNumberGames(numberGames === games.length-1 ? 0 : numberGames+1)}}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </p>
                </div>

                </section>

            </main>

        </div>
    );

}