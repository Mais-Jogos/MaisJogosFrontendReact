import { useRef } from "react";
import "./style.css";
import React from "react";
import { useEffect } from "react";


export default props => {
    const typeOfSO = props.typeOfSO
    const typeOfSoLower = props.typeOfSO.toLowerCase()
    const labelId = typeOfSO + props.minimoOuRecomendado
    const typeMinomoOuRecomendado = props.dispatchType
    const typeMinomoOuRecomendadoWithS = props.dispatchType + "s"
    const requisitos = props.stateSoMinimoOuRecomendado
    const isPhone = props.isPhone


    // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
    const initialized = useRef(false);

    useEffect(_ => {
        if (!initialized.current) {
            initialized.current = true

            $("#so" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
            $("#processador" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
            $("#placeDeVideo" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
            $("#memoria" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
            $("#memoriaQTD" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }
                e.preventDefault();
                e.stopPropagation();
            });
            $("#armazenamento" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
            $("#armazenamentoQTD" + labelId).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"), 1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });

        }
    }, [])

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
                        aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " Sistema operacional"}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'SO', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "so", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}>

                    </input>
                </div>
                <div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"processador" + labelId}>Processador</label>
                    <input
                        type="text"
                        id={"processador" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.processador}
                        aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " processador"}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'Processador', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "processador", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}
                    >

                    </input>
                </div>
                {!isPhone ? (<div className="cadastroJogo__content__requirements__inputs">
                    <label htmlFor={"placeDeVideo" + labelId}>Placa de vídeo</label>
                    <input
                        type="text"
                        id={"placeDeVideo" + labelId} className="cadastroJogo__content__requirements__inputs--inputStyle"
                        value={requisitos.placaDeVideo}
                        aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " placa de vídeo"}
                        onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'Placa', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "placaDeVideo", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}
                    ></input>
                </div>) : ""}
                <div className="cadastroJogo__content__requirements__inputs--select">
                    <div><label htmlFor={"memoria" + labelId}>Memória</label></div>
                    <div>
                        <input type="number" id={"memoria" + labelId}
                            min={1}
                            value={requisitos.memoria[0]}
                            aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " quantidade de memória"}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'MemoriaQtd', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "memoria", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}
                        >
                        </input>
                        <select name="memoriaQTD" id={"memoriaQTD" + labelId} aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " " + requisitos.memoria[1]}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'MemoriaFormato', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "memoria", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }} value={requisitos.memoria[1]}>
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
                            aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " quantidade de armazenamento"}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'ArmazenamentoQtd', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "armazenamento", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}
                        >

                        </input>
                        <select name="armazenamentoQTD" id={"armazenamentoQTD" + labelId} aria-tts={typeOfSO + " " + props.minimoOuRecomendado + " " + requisitos.memoria[1]}
                            onChange={e => { props.dispatchRequisitos({ type: typeMinomoOuRecomendado + typeOfSO + 'ArmazenamentoFormato', target: e.target.value, so: typeOfSoLower, minOrRecSo: typeMinomoOuRecomendadoWithS, atributeSO: "armazenamento", buildTextCase: [typeOfSO, typeMinomoOuRecomendado] }); props.dispatchCheckbox({ type: 'requisitos', requisitos: false }) }}
                            value={requisitos.armazenamento[1]}>
                            <option value="mb">MB</option>
                            <option value="gb">GB</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

