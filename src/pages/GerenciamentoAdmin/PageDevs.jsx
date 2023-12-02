import React, { useEffect, useState} from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal"
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PageDevs = () => {
  const [devs, setDevs] = useState([]);
  const [modal, setModal] = useState(null)
  const [loading, setLoading] = useState(<Loading/>)
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    Axios.get("https://backendmaisjogos-production.up.railway.app/api/usuario/listarTodos", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setDevs(response.data.filter(user => !user.idAvatar));
      setLoading(null)
    });
  }, []);
  function modalDeletar(id, nome){
    setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarDev(id)} nãoClick={() => setModal(null)}/>)
  }
  function deletarDev(id){
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/usuario/deletarUser/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      setModal(<Modal type={true} message={"Dev deletado com sucesso!"}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
    }).catch((error) => {
      setModal(<Modal type={false} message={"Dev não foi deletado!"}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
      console.log(error)
    })
  }

  return (
    <>
    {modal}
    {loading}
      <div className="admin-devs">
        {devs?.map((dev, index) => {
          return (
            <div className="admin__jogo">
              <div className="admin__jogo-title">
                <h2>{dev?.nome}</h2>
                <div className="admin__jogo-btns">
                  <button
                    className="admin__jogo-view"
                    onClick={() =>
                      navigate(
                        `/dev/${dev?.nome.toLowercase().replace(/ /g, "-")}`
                      )
                    }
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="admin__jogo-view"
                    onClick={() => modalDeletar(dev?.id, dev?.nome)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <p>{dev?.login}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PageDevs;
