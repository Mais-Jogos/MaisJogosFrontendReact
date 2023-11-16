import React from 'react'

const Platform = ({platform, onChangePlatform, plataformasSelecionadas}) => {
    const especificacoes = ["Minimo", "Recomendado"]
  return (
    <div>
        <p>Requisitos {platform}</p>
        <div>
            {especificacoes.map((espec) => (
            <div>
                <p>{espec}</p>
                <label htmlFor="MinSO">SO</label>
                <input type="text" id='MinSO' onChange={(e) => onChangePlatform(platform, espec, "SO", e.target.value)}/>
                <label htmlFor="MinProcessador">Processador</label>
                <input type="text" id='MinProcessador' onChange={(e) => onChangePlatform(platform, espec, "Processador", e.target.value)}/>
                <label htmlFor="MinPlaca de video">Placa de video</label>
                <input type="text" id='MinPlaca de video' onChange={(e) => onChangePlatform(platform, espec, "PlacaVideo", e.target.value)}/>
                <label htmlFor="MinMemoria">Memória</label>
                <div>
                    <input type="number" name="memoria" id="MinMemoria" onChange={(e) => onChangePlatform(platform, espec, "Memoria", e.target.value)}/>
                    <select name="memoria" id="Minmemoriatam" onChange={(e) => onChangePlatform(platform, espec, "MemoriaTam", e.target.value)}>
                        <option value="MB">MB</option>
                        <option value="GB">GB</option>
                    </select>
                </div>
                <label htmlFor="MinArmazenamento">Armazenamento</label>
                <div>
                    <input type="number" name="armazenamento" id="MinArmazenamento" onChange={(e) => onChangePlatform(platform, espec, "Armazenamento", e.target.value)}/>
                    <select name="armazenamento" id="MinArmazenamentotam" onChange={(e) => onChangePlatform(platform, espec, "ArmazenamentoTam", e.target.value)}>
                        <option value="MB">MB</option>
                        <option value="GB">GB</option>
                    </select>
                </div>
            </div>
            )) 
            }
        </div>
    </div>
  )
}

export default Platform