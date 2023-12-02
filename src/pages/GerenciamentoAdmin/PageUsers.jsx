import React, { useEffect ,useState} from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal"
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PageUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(<Loading/>)
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    Axios.get("https://backendmaisjogos-production.up.railway.app/api/usuario/listarTodos", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setUsers(response.data.filter(user => user.idAvatar));
      console.log(response.data);
      setLoading(null)
    });
  }, []);
  function modalDeletar(id, nome){
    setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarUser(id)} nãoClick={() => setModal(null)}/>)
  }
  function deletarUser(id){
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/usuario/deletarUser/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      setModal(<Modal type={true} message={"Usuário deletado com sucesso!"}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
    }).catch((error) => {
      setModal(<Modal type={false} message={"Usuário não foi deletado!"}/>)
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