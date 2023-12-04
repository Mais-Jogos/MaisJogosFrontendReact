import React from 'react'

const Platform = ({ jogo, onChangePlatform }) => {
    return (
        <div className='cadastroJogo__content__requirements'>
            <h2 className='cadastroJogo__content__h3'>Requisitos {jogo.plataforma}</h2>
            <div className='cadastroJogo__content__requirements__forms'>
                    <div className='cadastroJogo__content__requirements__selected'>
                        <div className="cadastroJogo__content__requirements__inputs">
                            <label htmlFor="MinProcessador" className='cadastroJogo__content__label'>Processador</label>
                            <input type="text" id='MinProcessador' defaultValue={jogo["processador"]} onChange={(e) => onChangePlatform("processador", e.target.value)} />
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs">
                            <label htmlFor="MinPlaca de video" className='cadastroJogo__content__label'>Placa de video</label>
                            <input type="text" id='MinPlaca de video' defaultValue={jogo["placaDeVideo"]} onChange={(e) => onChangePlatform("placaDeVideo", e.target.value)} />
                        </div>
                        <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                            <div>
                                <label htmlFor="MinMemoria">Memória</label>
                            </div>
                            <div>
                                <input type="number" name="memoria" id="MinMemoria" defaultValue={jogo["quantMemoria"]} onChange={(e) => onChangePlatform("quantMemoria", e.target.value)} />
                                <select name="memoria" id="Minmemoriatam" defaultValue={jogo["tipoMemoria"]} className='cadastroJogo__content__select' onChange={(e) => onChangePlatform("tipoMemoria", e.target.value)}>
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
                                <input type="number" name="armazenamento" id="MinArmazenamento" defaultValue={jogo["quantArmazenamento"]} onChange={(e) => onChangePlatform("quantArmazenamento", e.target.value)} />
                                <select name="armazenamento" id="MinArmazenamentotam" className='cadastroJogo__content__select' defaultValue={jogo["tipoArmazenamento"]} onChange={(e) => onChangePlatform("tipoArmazenamento", e.target.value)}>
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