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
import api from "../../api/api";

export default _ => {
    const [games, setGames] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [menuOption, setMenuOption] = useState(false);
    const [sort, setSort] = useState("");

    function changeSort(data) {
        let finalData = data == "des" ? false : true;
        setSort(finalData);
    }

    // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
    const [leitor, setLeitor] = useState(false);
    
    const token = window.localStorage.getItem("token")
    useEffect(() => {
        const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'

        Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
            .then((response) => {
                setGames(response.data.results);
                setLeitor(true);

            }).catch((error) => { console.log(error); });
            Axios.get(`http://localhost:8080/api/review/listarTodos`,{
                headers:{
                  Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setReviews(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

              
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
                        reviews?.map((review) => (
                            <ReviewCompINF minhaIMG={games.filter(jogo => jogo?.id === review?.idJogo)[0]?.background_image} nome={games.filter(jogo => jogo?.id === review?.idJogo)[0]?.name} descricao={review?.tituloReview} data={`Data de postagem ${review?.dataReview}`} corpo={review?.descricaoReview} nota={review?.notaReview}/>
                        ))
                    }
                </section>

            </main>

        </div>
    );

}