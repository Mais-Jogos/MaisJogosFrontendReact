import React, { useEffect ,useState} from "react";
import Axios from "axios";

const PageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/auth/cliente")
    .then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
    <div className="admin-users">
        {users?.map((dev, index) => {
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
                </div>
              </div>
              <p>{dev?.login}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default PageUsers