import React, { useEffect ,useState} from "react";
import Axios from "axios";

const PageDevs = () => {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/auth/desenvolvedor").then((response) => {
      setDevs(response.data);
    });
  }, []);
  return (
    <>
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
