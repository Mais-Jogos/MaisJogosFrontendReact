import React, { useState } from 'react'
import Platform from './Platform';

const Step2 = ({jogo, onChangeGame, erro}) => {
    const SOCel = ["Android", "IOS"]
    const SOPc = ["Windows", "MacOs", "Linux"]
    const SO = ["Windows", "MacOs", "Linux", "Android", "IOS"]
    const platforms = ["Computador", "Celular"]
    const [mapSO, setMapSO] = useState(SO)
    
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
                    <input type="radio" name="platform" id={platform} className={`cadastroJogo__content__steps--inputTTS ${erro && 'cadastroJogo__content__body--erroMessage'}`}
                    defaultChecked={jogo?.plataforma === platform}
                    onClick={() => {
                        onChangeGame("plataforma", platform)
                        if(platform === "Celular"){
                            setMapSO(SOCel)
                        }else{
                            setMapSO(SOPc)
                        }
                    }}/>
                    {platform}  
                </label>
            </div>))}
            <h2>Sistema Operacional</h2>
            {mapSO.map((platform) => (
            <div className='cadastroJogo__content__plataforms__checkboxs'>
                <label htmlFor={platform} className='cadastroJogo__content__label'>          
                    <input type="radio" name="SO" id={platform} className={`cadastroJogo__content__steps--inputTTS ${erro && 'cadastroJogo__content__body--erroMessage'}`}
                    defaultChecked={jogo?.["SO"] === platform}
                    onClick={() => {
                        onChangeGame("SO", platform)
                    }}/>
                    {platform}  
                </label>
            </div>))}
        </div>

        <Platform jogo={jogo} onChangePlatform={onChangePlatform}/>
    </section>
  )
}

export default Step2