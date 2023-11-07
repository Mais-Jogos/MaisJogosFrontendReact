import React, { useEffect, useState } from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import ReviewComp from "../../components/ReviewComp/ReviewComp";
import ReviewCompINF from "../../components/ReviewComp/ReviewCompINF";
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios'
import GoBack from "../../components/GoBack/GoBack";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import HeaderWithFilter from "../../components/HeaderWithFiilter/HeaderWithFilter";

export default _ => {
    const [games, setGames] = useState([]);
    const [menuOption, setMenuOption] = useState(false);
    const [sort, setSort] = useState("");

    function changeSort(data) {
        let finalData = data == "des" ? false : true;
        setSort(finalData);
    }

    // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
    const [leitor, setLeitor] = useState(false);
    
    useEffect(() => {
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
            .then((response) => {
                setGames(response.data.results);
                setLeitor(true);

            }).catch((error) => { console.log(error); });
    }, [])



    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            {leitor ? (<TextToSpeech />) : ""}



            <main className="review__main">
                <GoBack />
                <HeaderWithFilter name="Review de jogos" imgIcon="/imgs/icons/review_icon.svg" sortData={changeSort}/>

                <section className="review__Section">
                    {
                        games?.slice(0, 3).map((jogo) => (
                            <ReviewCompINF minhaIMG={jogo?.background_image} nome={jogo?.name} descricao="Minha descrição" data="Data de postagem 29/04/23" corpo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deserunt maiores voluptatum placeat veritatis maxime, optio vero corporis sit est consequuntur temporibus ipsum perferendis accusamus delectus illo quasi dignissimos. Odio." />
                        ))
                    }
                </section>

            </main>

        </div>
    );

}