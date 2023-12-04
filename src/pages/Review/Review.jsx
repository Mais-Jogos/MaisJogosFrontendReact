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
import Loading from "../../components/Loading/Loading";

export default _ => {
    const [games, setGames] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [menuOption, setMenuOption] = useState(false);
    const [loading, setLoading] = useState(<Loading/>)
    const [sort, setSort] = useState("");
    const id = window.localStorage.getItem("id")

    function changeSort(data) {
        let finalData = data == "des" ? false : true;
        setSort(finalData);
    }

    // Precisei desse estado pq é preciso esperar a chamada da api para o jquery conseguir indentificar os cards na tela
    const [leitor, setLeitor] = useState(false);
    
    const token = window.localStorage.getItem("token")
    useEffect(() => {

            Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos`).then((response) => {
                setGames(response.data);
                setLeitor(true);

            }).catch((error) => { console.log(error); });
            Axios.get(`https://backendmaisjogos-production.up.railway.app/api/review/listarTodos`,{
                headers:{
                  Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setReviews(response.data);
                console.log("Reviews",response.data);
                setLoading(null)
            })
            .catch((error) => {
                console.log(error);
                setLoading(null)
            });

              
    }, [])



    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
            <Acessibilidade />
            {leitor ? (<TextToSpeech />) : ""}
            {loading}


            <main className="review__main">
                <GoBack />
                <HeaderWithFilter name="Review de jogos" imgIcon="/imgs/icons/review_icon.svg" sortData={changeSort}/>

                <section className="review__Section">
                    {
                        reviews?.filter(review => review?.idUser == id)?.map((review) => (
                            <ReviewCompINF game={games.filter(jogo => jogo?.id == review?.idJogo)[0]} review={review}/>
                        ))
                    }
                </section>

            </main>

        </div>
    );

}