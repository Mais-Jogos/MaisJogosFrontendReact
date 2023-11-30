import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRef } from "react";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal";

export default props => {
    const [games, setGames] = useState([]);
    const [modal, setModal] = useState(null);
    const [dev, setDev] = useState()
    const [leitor, setLeitor] = useState(false);
    const token = window.localStorage.getItem("token");
    const id = window.localStorage.getItem("id");

    useEffect(() =>{
        Axios.get("http://localhost:8080/api/jogo/listarTodos")
        .then((response) => {
            console.log(response.data);
            setGames(response.data.filter(game => game?.idDev.toString() === id));
            setLeitor(true);
        }).catch((error) => { console.log(error); });
        Axios.get(`http://localhost:8080/api/usuario/listarCliente/${id}`, {
            headers:{
              Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
            setDev(response.data);
        })
        .catch((error) => console.log(error));

    }, [])

    // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
    const initialized = useRef(false);

    useEffect(_ => {
        if (!initialized.current && leitor) {
            initialized.current = true

            $(document).ready(function () {
                $('.meusjogos__jogos__links').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-label'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [leitor])
    
    /* {props.sortData && games ? games.sort( (a,b) => a.slug[0] > b.slug[0] ? 1 : -1 ) : "" }
    {!props.sortData && games ? games.sort( (a,b) => b?.slug[0] > a.slug[0] ? 1 : -1 ) : "" } */

    function modalDeletar(id, nome){
        setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarDev(id)} nãoClick={() => setModal(null)}/>)
    }
    function deletarDev(id){
        Axios.delete(`http://localhost:8080/api/jogo/deletarJogo/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
          console.log(response.data)
          setModal(<Modal type={true} message={"Jogo deletado com sucesso!"}/>)
          setTimeout(() =>{
            setModal(null)
          }, 3000)
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
            {   
                games?.filter(game => game?.idDev === dev?.id).map((jogo) => (
                    <div className="meusjogos__jogos__card">
                        <div className="meusjogos__jogos__card__info">
                            <div className="meusjogos__jogos__card__info__title">
                                <p>{jogo?.titulo}</p>
                            </div>
                            <div className="meusjogos__jogos__card__info__image">
                                <img src={`data:image/png;base64, ${jogo?.bannerUm}`} alt="imagem do jogo" />
                            </div>
                        </div>

                        <div className="meusjogos__jogos__card__actions">
                            <div className="meusjogos__jogos__card__actions__dateInfo">
                                <p>Data do cadastro</p>
                                <p>19 de Out 2023</p>
                            </div>
                            <div className="meusjogos__jogos__card__actions__action">
                                <Link aria-label="editar" className="meusjogos__jogos__links"
                                to={`/editar-jogo/${jogo?.id}`}>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <p>Editar</p>
                                </Link>
                                <Link className="meusjogos__jogos__links" onClick={(e) => {e.preventDefault(); modalDeletar(jogo?.id, jogo?.titulo)}}>
                                    <i class="fa-regular fa-trash-can"></i>
                                    <p>Excluir</p>
                                </Link>
                            </div>
                        </div>
                    </div>))
            }
                    {modal}
        </>


    )
}