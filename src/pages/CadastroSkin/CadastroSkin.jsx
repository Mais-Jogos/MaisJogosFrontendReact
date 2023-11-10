import React from 'react'

const CadastroSkin = () => {
  return (
    <div id='container-page'>
        <Menu />
        <Vlibras/>
        <Acessibilidade />
        <TextToSpeech />
        <main className="cadastro__skin">
            <div className="avatares__admin-cad" onClick={() => navigate("/cadastro-skin")}>
                <p>Cadastrar mais Skins</p>
                <i class="fa-solid fa-plus"></i>
            </div>
        </main>
    </div>
  )
}

export default CadastroSkin