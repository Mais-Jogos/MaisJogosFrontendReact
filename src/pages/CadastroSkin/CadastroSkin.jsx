import React from 'react'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import GoBack from "../../components/GoBack/GoBack";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

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
        </main>
    </div>
  )
}

export default CadastroSkin