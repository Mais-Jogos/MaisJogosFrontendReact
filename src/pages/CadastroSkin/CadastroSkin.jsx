import React, {useState} from 'react'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import GoBack from "../../components/GoBack/GoBack";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { Link } from 'react-router-dom';
import "./style.css"
import Axios from 'axios';

const CadastroSkin = () => {
  const token = window.localStorage.getItem("token")
  const [avatar, setAvatar] = useState({
    nome:"",
    arquivo:null,
    valor: 0,
  })
  function criarAvatar(){
    const newAvatar = {
      nome: avatar?.nome,
      valor: parseFloat(avatar?.valor)
    }
    Axios.post("http://localhost:8080/api/avatar/salvar", newAvatar ,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      const formData = new FormData()
      formData.append("file", avatar?.arquivo)

      Axios.patch(`http://localhost:8080/api/avatar/atualizaFile/${response.data?.id}`, formData ,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => console.log(error))

    })
    .catch((error) => console.log(error))
  }

  return (
    <div id='container-page'>
        <Menu />
        <Vlibras/>
        <Acessibilidade />
        <TextToSpeech />
        <main className="cadastro__skin">
            <GoBack/>
            <div className="cadastro__skin-title" onClick={() => navigate("/cadastro-skin")}>
                <h1>Cadastrar mais Skins</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div className="cadastro__skin-form">
                <label htmlFor="nome-skin">Nome da Skin</label>
                <input type="text" id='nome-skin' onChange={(e) => setAvatar({...avatar, nome:e.target.value})}/>
                <label htmlFor="img-skin">Upload da Skin:</label>
                <input type="file" id='img-skin' onChange={(e) => setAvatar({...avatar, arquivo:e.target.value})}/>
                <label htmlFor="valor-skin">Valor da Skin:</label>
                <div className='cadastro__skin-valor-skin'>
                  <img src={'/imgs/icons/Kapicoin_icon.png'} />
                  <input type="number" name="" id="valor-skin" min="0.00" max="10000.00" step="0.01" onChange={(e) => setAvatar({...avatar, valor:e.target.value})}/>
                </div>
                <div className="cadastro__skin-btns">
                  <Link to={"/avatares"}>Voltar</Link>
                  <button onClick={criarAvatar}>Concluir</button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default CadastroSkin