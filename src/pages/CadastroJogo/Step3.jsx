import React, { useState } from 'react'

const Step3 = ({jogo, onChangeGame}) => {
    const [midia, setMidia] = useState({
        fotos: null,
        videos: null
    })
  return (
    <div>
        <label htmlFor="jogo">Jogo</label>
        <input type="file" id='jogo' defaultValue={jogo?.jogo} onChange={(e) => onChangeGame("jogo", e.target.files)}/>
        <p>midia</p>
        <label htmlFor="jogo">Fotos</label>
        <input type="file" id='fotos' defaultValue={jogo?.midia?.fotos} onChange={(e) => {onChangeGame("midia", midia); setMidia({...midia, fotos: e.target.files})}}/>
        <label htmlFor="jogo">Videos</label>
        <input type="file" id='videos' defaultValue={jogo?.midia?.videos} onChange={(e) => {onChangeGame("midia", midia); setMidia({...midia, videos: e.target.files})}}/>
        <label htmlFor="classificacao">Classificação</label>
        <select name="classificacao" id="classificacao" onChange={(e) => onChangeGame("classificacao", e.target.value)}>
            <option value="Livre">Livre</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
        </select>
    </div>
  )
}

export default Step3