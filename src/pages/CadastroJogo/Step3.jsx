import React from 'react'

const Step3 = ({jogo, onChangeGame, erro}) => {

  return (
    <section className='cadastroJogo__content'>
        <label htmlFor="jogo" className='cadastroJogo__content__label'>Jogo</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='jogo' defaultValue={jogo?.jogo} onChange={(e) => onChangeGame("jogo", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <h3 className='cadastroJogo__content__h3'>Midia</h3>
        <label htmlFor="fotos" className='cadastroJogo__content__label'>Fotos</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='fotos' multiple defaultValue={jogo?.fotos} onChange={(e) => onChangeGame("fotos", e.target.files)} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <label htmlFor="videos" className='cadastroJogo__content__label'>Videos</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='videos' defaultValue={jogo?.videos} onChange={(e) => onChangeGame("videos", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <label htmlFor="licenca" className='cadastroJogo__content__label'>Licença</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='licenca' defaultValue={jogo?.licenca} onChange={(e) => onChangeGame("licenca", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <label htmlFor="classificacao" className='cadastroJogo__content__label'>Classificação Indicativa</label>
        <select name="classificacao" id="classificacao" className='cadastroJogo__content__select' onChange={(e) => onChangeGame("classificacao", e.target.value)}>
            <option selected disabled value="Selecione">Selecione</option>
            <option value="Livre">Livre</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
        </select>
    </section>
  )
}

export default Step3