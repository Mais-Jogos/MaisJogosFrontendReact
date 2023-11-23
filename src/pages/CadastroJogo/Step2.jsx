import React, { useState } from 'react'
import Platform from './Platform';

const Step2 = ({jogo, onChangeGame, erro}) => {
    const platforms = ["Windows", "MacOs", "Linux", "Android", "IOS"]
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState(jogo?.requisitos)
    function deletePropriedade(platform) {
        const obj = plataformasSelecionadas.filter((plat) => plat.Plataforma !== platform)
        setPlataformasSelecionadas(obj);
        onChangeGame("requisitos", obj);
    }
    function onChangePlatform(type, value){
        onChangeGame(type, value)
        console.log(jogo)
    }
  return (
    <section className='cadastroJogo__content'>
        <div className="cadastroJogo__content__plataforms">
            <h2>Plataforma</h2>
            {platforms.map((platform) => (
            <div className='cadastroJogo__content__plataforms__checkboxs'>
                <label htmlFor={platform} className='cadastroJogo__content__label'>          
                    <input type="checkbox" name="platform" id={platform} className={`cadastroJogo__content__steps--inputTTS ${erro && 'cadastroJogo__content__body--erroMessage'}`}
                    defaultChecked={jogo?.plataformas.some(plat => plat === platform)}
                    onClick={() => {
                        const newPlatform = !plataformasSelecionadas?.some(p => p.Plataforma === platform) ? 
                        [
                            ...plataformasSelecionadas, 
                            {
                                Plataforma: platform,
                                Minimo:{
                                    SO: null,
                                    Processador: null,
                                    PlacaVideo: null,
                                    Memoria: null,
                                    MemoriaTam: "MB",
                                    Armazenamento: null,
                                    ArmazenamentoTam: "MB",
                                },
                                Recomendado:{
                                    SO: null,
                                    Processador: null,
                                    PlacaVideo: null,
                                    Memoria: null,
                                    MemoriaTam: "MB",
                                    Armazenamento: null,
                                    ArmazenamentoTam: "MB",
                                }
                            }
                         ] : 
                        () => deletePropriedade(platform)
                        setPlataformasSelecionadas(newPlatform);
                        onChangeGame("plataforma", newPlatform?.Plataforma)
                    }}/>
                    {platform}  
                </label>
            </div>))}
        </div>

        {plataformasSelecionadas?.map((platform) => (
            <Platform jogo={jogo} onChangePlatform={onChangePlatform}/>
        ))}
    </section>
  )
}

export default Step2