import React from 'react'

const Platform = ({ jogo, onChangePlatform }) => {
    return (
        <div className='cadastroJogo__content__requirements'>
            <h2 className='cadastroJogo__content__h3'>Requisitos {jogo.plataforma}</h2>
            <div className='cadastroJogo__content__requirements__forms'>
                    <div className='cadastroJogo__content__requirements__selected'>
                        <p className='cadastroJogo__content__h3'>{espec}</p>
                        <div className="cadastroJogo__content__requirements__inputs">
                            <label htmlFor="MinSO" className='cadastroJogo__content__label'>SO</label>
                            <input type="text" id='MinSO' defaultValue={jogo["SO"]} onChange={(e) => onChangePlatform("SO", e.target.value)} />
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs">
                            <label htmlFor="MinProcessador" className='cadastroJogo__content__label'>Processador</label>
                            <input type="text" id='MinProcessador' defaultValue={jogo["Processador"]} onChange={(e) => onChangePlatform("Processador", e.target.value)} />
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs">
                            <label htmlFor="MinPlaca de video" className='cadastroJogo__content__label'>Placa de video</label>
                            <input type="text" id='MinPlaca de video' defaultValue={jogo["PlacaVideo"]} onChange={(e) => onChangePlatform("PlacaVideo", e.target.value)} />
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                            <div>
                                <label htmlFor="MinMemoria">Memória</label>
                            </div>
                            <div>
                                <input type="number" name="memoria" id="MinMemoria" defaultValue={jogo["Memoria"]} onChange={(e) => onChangePlatform("Memoria", e.target.value)} />
                                <select name="memoria" id="Minmemoriatam" defaultValue={jogo["MemoriaTam"]} className='cadastroJogo__content__select' onChange={(e) => onChangePlatform("MemoriaTam", e.target.value)}>
                                    <option value="MB">MB</option>
                                    <option value="GB">GB</option>
                                </select>
                            </div>
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                            <div>
                                <label htmlFor="MinArmazenamento">Armazenamento</label>
                            </div>
                            <div>
                                <input type="number" name="armazenamento" id="MinArmazenamento" defaultValue={jogo["Armazenamento"]} onChange={(e) => onChangePlatform("Armazenamento", e.target.value)} />
                                <select name="armazenamento" id="MinArmazenamentotam" className='cadastroJogo__content__select' defaultValue={jogo["ArmazenamentoTam"]} onChange={(e) => onChangePlatform("ArmazenamentoTam", e.target.value)}>
                                    <option value="MB">MB</option>
                                    <option value="GB">GB</option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Platform