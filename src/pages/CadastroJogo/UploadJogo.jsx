import { useEffect } from "react";
import "./style.css";
import React from "react";
import { useRef } from "react";


export default props => {

    // Precisei trazer da lógica do leitor para a tela, pq o Jquery não consegue ler os inputs que não foram carregados ainda :(
    const initialized = useRef(false);

    useEffect(_ => {
        if (!initialized.current) {
            initialized.current = true

            $(props.name + " upload").keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                    responsiveVoice.cancel();
                    setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-label'), "Portuguese Female"),1000);
                }

                e.preventDefault();
                e.stopPropagation();
            });
        }
    }, [])


    return (
        <div>
            <label htmlFor={props.name + "upload"} className="labelUploadJogo">{props.name}</label>
            <div>
                <input type="file" accept=".zip" id={props.name + "upload"} className="cadastroJogo__content__uploadContent__fileUpload--changeText"
                    onChange={e => { props.setState(e.target.files); props.dispatchError({ type: 'upload', upload: false }) }} aria-label={props.name + " upload"}></input>
            </div>
        </div>
    )
}

