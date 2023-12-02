import React, { useEffect ,useState} from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal"

const PageUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    Axios.get("https://backendmaisjogos-production.up.railway.app/auth/cliente")
    .then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  function modalDeletar(id, nome){
    setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarUser(id)} nãoClick={() => setModal(null)}/>)
  }
  function deletarUser(id){
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/auth/cliente/${id}`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => console.log(error))
    setModal(<Modal type={true} message={"Usuário deletado com sucesso!"}/>)
    setTimeout(() =>{
      setModal(null)
    }, 3000)
  }
  return (
    <>
    {modal}
    <div className="admin-users">
        {users?.map((user, index) => {
          return (
            <div className="admin__jogo">
              <div className="admin__jogo-title">
                <h2>{user?.nome}</h2>
                <div className="admin__jogo-btns">
                  <button
                    className="admin__jogo-view"
                    onClick={() =>
                      navigate(
                        `/user`
                      )
                    }
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="admin__jogo-view"
                    onClick={() => modalDeletar(user?.id, user?.nome)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <p>{user?.login}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default PageUsers