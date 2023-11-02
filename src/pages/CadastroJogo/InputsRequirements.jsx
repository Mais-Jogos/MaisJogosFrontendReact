import "./style.css";
import React from "react";


export default props => {
    const typeOfSO = props.typeOfSO 
    const typeOfSoLower = props.typeOfSO.toLowerCase()
    const labelId = typeOfSO + props.minimoOuRecomendado
    const typeMinomoOuRecomendado = props.dispatchType
    const typeMinomoOuRecomendadoWithS = props.dispatchType + "s"
    const requisitos = props.stateSoMinimoOuRecomendado
    const isPhone = props.isPhone

    return (
        <>
            <div className="cadastroJogo__content__requirements__selected">
                <h3>{props.minimoOuRecomendado}</h3>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"so" + labelId}>SO</label>
                    <input type="text"
                        id={"so" + labelId}
                        className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.so}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'SO', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "so", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }}>

                    </input>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"processador" + labelId}>Processador</label>
                    <input
                        type="text"
                        id={"processador" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.processador}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'Processador', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "processador", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }}
                    >

                    </input>
                </div>
                {!isPhone ? (<div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"placeDeVideo" + labelId}>Placa de vídeo</label>
                    <input
                        type="text"
                        id={"placeDeVideo" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.placaDeVideo}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'Placa', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "placaDeVideo", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }}
                    ></input>
                </div>) : ""}
                <div className="cadastroJogo__content__requirements__inputs--select">
                    <div><label htmlFor={"memoria" + labelId}>Memória</label></div>
                    <div>
                        <input type="number" id={"memoria" + labelId}
                            min={1}
                            value={requisitos.memoria[0]}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'MemoriaQtd', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "memoria", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }}
                        >
                        </input>
                        <select name="memoriaQTD" id="memoriaQTD"
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'MemoriaFormato', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "memoria", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }) ; props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }} value={requisitos.memoria[1]}>
                            <option value="mb">MB</option>
                            <option value="gb">GB</option>
                        </select>
                    </div>
                </div>
                <div className="cadastroJogo__content__requirements__inputs--select">
                    <div><label htmlFor={"armazenamento" + labelId}>Armazenamento</label></div>
                    <div>
                        <input
                            type="number"
                            id={"armazenamento" + labelId}
                            value={requisitos.armazenamento[0]}
                            min={1}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'ArmazenamentoQtd', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "armazenamento", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }}
                        >

                        </input>
                        <select name="armazenamentoQTD" id="armazenamentoQTD" onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado+typeOfSO+'ArmazenamentoFormato', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS , atributeSO: "armazenamento", buildTextCase: [typeOfSO, typeMinomoOuRecomendado]  }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false })  }} value={requisitos.armazenamento[1]}>
                            <option value="mb">MB</option>
                            <option value="gb">GB</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

