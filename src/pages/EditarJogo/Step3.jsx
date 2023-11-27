import React from 'react'

const Step3 = ({jogo, onChangeGame}) => {
  const imgs = [
    "bannerUm",
    "bannerDois",
    "bannerTres",
    "bannerQuatro",
    "bannerCinco",
  ];
  return (
    <section className='cadastroJogo__content'>
        <label htmlFor="jogo" className='cadastroJogo__content__label'>Jogo</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='jogo' onChange={(e) => onChangeGame("jogo", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <h3 className='cadastroJogo__content__h3'>Midia</h3>
        <label htmlFor="fotos" className='cadastroJogo__content__label'>Fotos</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload content_imgs-edit'>
          {imgs?.map(img => (<div className='content_img-edit'>
            <img src={`data:image/png;base64, ${jogo?.[img]}`} alt={"img"} />
            <input type="file" id={img} onChange={(e) => onChangeGame(img, e.target.files)} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
          </div>))}
        </div>
        <label htmlFor="videos" className='cadastroJogo__content__label'>Videos</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='videos' onChange={(e) => onChangeGame("videos", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
        </div>
        <label htmlFor="licenca" className='cadastroJogo__content__label'>Licença</label>
        <div className='cadastroJogo__content__uploadContent__fileUpload'>
          <input type="file" id='licenca' onChange={(e) => onChangeGame("licenca", e.target.files[0])} className={`cadastroJogo__content__uploadContent__fileUpload--changeText`}/>
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