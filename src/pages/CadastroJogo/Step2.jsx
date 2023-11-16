import React, { useState } from 'react'
import Platform from './Platform';

const Step2 = ({jogo, onChangeGame}) => {
    const platforms = ["Windows", "MacOs", "Linux", "Android", "IOS"]
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState({})
    function deletePropriedade(platform){
        var obj = {...plataformasSelecionadas};
        delete obj[platform];
        setPlataformasSelecionadas(obj);
        console.log(obj)
        onChangeGame("requisitos", obj)
    }
    function onChangePlatform(platform, espec, type, value){
        const obj = {
            ...plataformasSelecionadas, [platform]:{
                ...plataformasSelecionadas[platform],
                [espec]:{
                    ...plataformasSelecionadas[platform][espec],
                    [type]: value,
                }
        }}
        setPlataformasSelecionadas(obj)
        onChangeGame("requisitos", obj)
        console.log(jogo)
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
                        setPlataformasSelecionadas(
                            !Object.keys(plataformasSelecionadas).some(p => p === platform) ? 
                            {
                                ...plataformasSelecionadas, 
                                [platform]: {
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
                            } : 
                            () => deletePropriedade(platform)
                        );
                    }}/>
                    {platform}  
                </label>
            </div>))}
        </div>

        {Object?.keys(plataformasSelecionadas)?.map((platform) => (
            <Platform platform={platform} onChangePlatform={onChangePlatform} plataformasSelecionadas={plataformasSelecionadas}/>
        ))}
    </section>
  )
}

export default Step2