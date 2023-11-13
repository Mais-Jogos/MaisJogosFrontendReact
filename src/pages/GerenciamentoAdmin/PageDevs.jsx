import React, { useEffect, useState} from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal"

const PageDevs = () => {
  const [devs, setDevs] = useState([]);
  const [modal, setModal] = useState(null)
  useEffect(() => {
    Axios.get("http://localhost:8080/auth/desenvolvedor")
    .then((response) => {
      setDevs(response.data);
    });
  }, []);
  function modalDeletar(id, nome){
    setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarDev(id)} nãoClick={() => setModal(null)}/>)
  }
  function deletarDev(id){
    Axios.delete(`http://localhost:8080/auth/dev/${id}`)
    .then((response) => {
      console.log(response.data)
      setModal(<Modal type={true} message={"Dev deletado com sucesso!"}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
    {modal}
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
                        `/dev`
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
