import React, { useEffect, useState } from "react";
import Axios from "axios";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { translate } from "../../translate/translate";

const PageUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(<Loading />);
  const [search, setSearch] = useState("");

  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(
      "https://backendmaisjogos-production.up.railway.app/api/usuario/listarTodos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        setUsers(response.data.filter((user) => user.idAvatar));
        console.log(response.data);
        setLoading(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(null);
      });
  }, []);
  function modalDeletar(id, nome) {
    setModal(
      <ModalConfirm
        type={false}
        message={`Deseja deletar "${nome}"?`}
        simClick={() => deletarUser(id)}
        nãoClick={() => setModal(null)}
      />
    );
  }
  function deletarUser(id) {
    Axios.delete(
      `https://backendmaisjogos-production.up.railway.app/api/usuario/deletarUser/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        setModal(
          <Modal type={true} message={"Usuário deletado com sucesso!"} />
        );
        setTimeout(() => {
          setModal(null);
        }, 3000);
      })
      .catch((error) => {
        setModal(<Modal type={false} message={"Usuário não foi deletado!"} />);
        setTimeout(() => {
          setModal(null);
        }, 3000);
        console.log(error);
      });
  }
  return (
    <>
      {modal}
      {loading}
      <div className="jogos-admin__buscar">
        <p>{translate("Buscar")}:</p>
        <div className="jogos-admin__input-search">
          <input
            type="text"
            placeholder={translate("Buscar jogo")}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search !== "" && (
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => setSearch("")}
            ></i>
          )}
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="admin-users">
        {users
          ?.filter(
            (user) =>
              search === "" ||
              user?.nome.toLowerCase().includes(search.toLowerCase()) ||
              user?.sobrenome.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((user, index) => {
            return (
              <div className="admin__jogo">
                <div className="admin__jogo-title">
                  <h2>
                    {user?.nome} {user?.sobrenome}
                  </h2>
                  <div className="admin__jogo-btns">
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
  );
};

export default PageUsers;
