import React, { useState } from 'react'
import Platform from './Platform';

const Step2 = ({jogo, onChangeGame}) => {
    const platforms = ["Windows", "MacOs", "Linux", "Android", "IOS"]
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState(jogo?.requisitos)
    function deletePropriedade(platform) {
        const obj = plataformasSelecionadas.filter((plat) => plat.Plataforma !== platform)
        setPlataformasSelecionadas(obj);
        onChangeGame("requisitos", obj);
    }
    function onChangePlatform(platform, espec, type, value){
        console.log("Platform", platform);
        console.log("espec", espec);
        console.log("type", type);
        console.log("value", value);
        const obj = plataformasSelecionadas.map((plat) => {
            if(plat.Plataforma === platform){
                return {
                    ...plat,
                    [espec]:{
                        ...plat[espec],
                        [type]: value
                    }
                }
            }
            return plat
        })
        setPlataformasSelecionadas(obj)
        onChangeGame("requisitos", obj)
        console.log(obj)
    }
  return (
    <section className='cadastroJogo__content'>
        <div className="cadastroJogo__content__plataforms">
            <h2>Plataforma</h2>
            {platforms.map((platform) => (
            <div className='cadastroJogo__content__plataforms__checkboxs'>
                <label htmlFor={platform} className='cadastroJogo__content__label'>          
                    <input type="checkbox" name="platform" id={platform} className='cadastroJogo__content__steps--inputTTS'
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
                        onChangeGame("plataformas", newPlatform?.map((plat) => plat.Plataforma))
                    }}/>
                    {platform}  
                </label>
            </div>))}
        </div>

        {plataformasSelecionadas?.map((platform) => (
            <Platform platform={platform} onChangePlatform={onChangePlatform}/>
        ))}
    </section>
  )
}

export default Step2