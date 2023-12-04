import React, { useEffect ,useState} from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal"
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { translate } from "../../translate/translate";

const PageAvatares = () => {
  const [avatares, setAvatares] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(<Loading/>)
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    Axios.get("https://backendmaisjogos-production.up.railway.app/api/avatar/listarTodos", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setAvatares(response.data);
      console.log(response.data);
      setLoading(null)
    });
  }, []);
  function modalDeletar(id, nome){
    setModal(<ModalConfirm type={false} message={`Deseja deletar "${nome}"?`} simClick={() => deletarAvatar(id)} nãoClick={() => setModal(null)}/>)
  }
  function deletarAvatar(id){
    Axios.delete(`https://backendmaisjogos-production.up.railway.app/api/avatar/deletarAvatar/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      setModal(<Modal type={true} message={"Avatar deletado com sucesso!"}/>)
      setTimeout(() =>{
        setModal(null)
      }, 3000)
    }).catch((error) => {
      setModal(<Modal type={false} message={"Avatar não foi deletado!"}/>)
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
    <div className="avatares__admin-cad" onClick={() => navigate("/cadastro-skin")}>
      <p>{translate("Cadastrar mais Skins")}</p>
      <i class="fa-solid fa-plus"></i>
    </div>
    <div className="admin-avatares">
        {avatares?.map((avatar, index) => {
          return (
            <div className="admin__avatar">
                <img src={`data:image/png;base64, ${avatar?.arquivo}`} alt={`imagem avatar ${avatar?.nome}`} className="admin__avatar-img" />
                <div className="admin__avatar-texts">
                    <div className="admin__avatar-title">
                        <h2>{avatar?.nome}</h2>
                        <div className="admin__avatar-btns">
                        <button
                            className="admin__avatar-view"
                            onClick={() => modalDeletar(avatar?.id, avatar?.nome)}
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        </div>
                    </div>
                    <h3><img src="/imgs/icons/Kapicoin_icon.png"/>{avatar?.valor}</h3>
                </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default PageAvatares