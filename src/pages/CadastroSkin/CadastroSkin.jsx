import React from 'react'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import GoBack from "../../components/GoBack/GoBack";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import "./style.css"

const CadastroSkin = () => {
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
                <input type="text" id='nome-skin'/>
                <label htmlFor="img-skin">Upload da Skin:</label>
                <input type="image" id='img-skin'/>
                <label htmlFor="valor-skin">Valor da Skin:</label>
                <div >
                  <input type="number" name="" id="" />
                </div>
            </div>
        </main>
    </div>
  )
}

export default CadastroSkin