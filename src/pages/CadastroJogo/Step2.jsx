import React, { useState } from 'react'
import Platform from './Platform';

const Step2 = ({jogo, onChangeGame}) => {
    const platforms = ["Windows", "MacOs", "Linux", "Android", "IOS"]
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState({})
    function deletePropriedade(platform){
        let obj = {...plataformasSelecionadas};
        delete obj[platform];
        setPlataformasSelecionadas(obj);
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
    }
  return (
    <div>
        {platforms.map((platform) => (<>
        <label htmlFor={platform}>{platform}</label>
        <input type="checkbox" name="platform" id={platform} 
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
                            MemoriaTam: null,
                            Armazenamento: null,
                            ArmazenamentoTam: null,
                        },
                        Recomendado:{
                            SO: null,
                            Processador: null,
                            PlacaVideo: null,
                            Memoria: null,
                            MemoriaTam: null,
                            Armazenamento: null,
                            ArmazenamentoTam: null,
                        }
                    }
                } : 
                () => deletePropriedade(platform)
            );
            onChangeGame("requisitos", plataformasSelecionadas)
        }}/>
        </>))}

        {Object.keys(plataformasSelecionadas).map((platform) => (
            <Platform platform={platform} onChangePlatform={onChangePlatform} plataformasSelecionadas={plataformasSelecionadas}/>
        ))}
    </div>
  )
}

export default Step2