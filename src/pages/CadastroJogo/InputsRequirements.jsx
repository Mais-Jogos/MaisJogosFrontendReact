import "./style.css";
import React from "react";


export default props => {
    const h2Title = props.h2Title 
    const labelId = h2Title + props.minOrRec
    const type = props.dispatchType
    const requisitos = props.typeMinOrRec

    return (
        <>
            <div className="cadastroJogo__content__requirements__selected">
                <h3>{props.minOrRec}</h3>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"so" + labelId}>SO</label>
                    <input type="text"
                        id={"so" + labelId}
                        className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.so}
                        onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'SO', target: e.target.value }) }}>

                    </input>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"processador" + labelId}>Processador</label>
                    <input
                        type="text"
                        id={"processador" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.processador}
                        onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'Processador', target: e.target.value }) }}
                    >

                    </input>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"placeDeVideo" + labelId}>Placa de vídeo</label>
                    <input
                        type="text"
                        id={"placeDeVideo" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.placaDeVideo}
                        onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'Placa', target: e.target.value }) }}
                    ></input>
                </div>
                <div className="cadastroJogo__content__requirements__inputs--select">
                    <div><label htmlFor={"memoria" + labelId}>Memória</label></div>
                    <div>
                        <input type="number" id={"memoria" + labelId}
                            min={1}
                            value={requisitos.memoria[0]}
                            onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'MemoriaQtd', target: e.target.value }) }}
                        >
                        </input>
                        <select name="memoriaQTD" id="memoriaQTD"
                            onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'MemoriaFormato', target: e.target.value }) }} value={requisitos.memoria[1]}>
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
                            onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'ArmazenamentoQtd', target: e.target.value }) }}
                        >

                        </input>
                        <select name="armazenamentoQTD" id="armazenamentoQTD" onChange={e => { props.dispatchRequisitos({ type: type+h2Title+'ArmazenamentoFormato', target: e.target.value }) }} value={requisitos.armazenamento[1]}>
                            <option value="mb">MB</option>
                            <option value="gb">GB</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

