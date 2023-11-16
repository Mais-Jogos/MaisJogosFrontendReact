import React from 'react'

const Platform = ({platform, onChangePlatform, plataformasSelecionadas}) => {
    const especificacoes = ["Minimo", "Recomendado"]
  return (
    <div className='cadastroJogo__content__requirements'>
        <h2 className='cadastroJogo__content__h3'>Requisitos {platform}</h2>
        <div className='cadastroJogo__content__requirements__forms'>
            {especificacoes.map((espec) => (
            <div className='cadastroJogo__content__requirements__selected'>
                <p className='cadastroJogo__content__h3'>{espec}</p>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor="MinSO" className='cadastroJogo__content__label'>SO</label>
                    <input type="text" id='MinSO' onChange={(e) => onChangePlatform(platform, espec, "SO", e.target.value)}/>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor="MinProcessador" className='cadastroJogo__content__label'>Processador</label>
                    <input type="text" id='MinProcessador' onChange={(e) => onChangePlatform(platform, espec, "Processador", e.target.value)}/>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor="MinPlaca de video" className='cadastroJogo__content__label'>Placa de video</label>
                    <input type="text" id='MinPlaca de video' onChange={(e) => onChangePlatform(platform, espec, "PlacaVideo", e.target.value)}/>
                </div>
                <div className="cadastroJogo__content__requirements__inputs--select cadastroJogo__content__requirements-select">
                    <div>
                        <label htmlFor="MinMemoria">Memória</label>
                    </div>
                    <div>
                        <input type="number" name="memoria" id="MinMemoria" onChange={(e) => onChangePlatform(platform, espec, "Memoria", e.target.value)}/>
                        <select name="memoria" id="Minmemoriatam" className='cadastroJogo__content__select' onChange={(e) => onChangePlatform(platform, espec, "MemoriaTam", e.target.value)}>
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
                        <input type="number" name="armazenamento" id="MinArmazenamento" onChange={(e) => onChangePlatform(platform, espec, "Armazenamento", e.target.value)}/>
                        <select name="armazenamento" id="MinArmazenamentotam" className='cadastroJogo__content__select' onChange={(e) => onChangePlatform(platform, espec, "ArmazenamentoTam", e.target.value)}>
                            <option value="MB">MB</option>
                            <option value="GB">GB</option>
                        </select>
                    </div>
                </div>
            </div>
            )) 
            }
        </div>
    </div>
  )
}

export default Platform