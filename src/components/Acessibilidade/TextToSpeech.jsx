import "./style.css";
import React, { useEffect, useState, useRef } from 'react'

export default props => {
    const initialized = useRef(false);
    let htmlRootValue = document.querySelector("#root").attributes[1].nodeValue === "false" ? false : true
    const [clickIcon, setClickIcon] = useState(htmlRootValue);
    
    function switchStateIcon() {
        if (clickIcon) {
            setClickIcon(false)
            $("#root").attr("aria-tts", "false");
            responsiveVoice.speak("Leitor de tela desativado", "Portuguese Female")
        } else {
            setClickIcon(true)
            $("#root").attr("aria-tts", "true");
            responsiveVoice.speak("Leitor de tela ativado", "Portuguese Female")
        }
    }

    useEffect(_ => {

        if (!initialized.current) {
            initialized.current = true

            $(document).ready(function () {
                $('a').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Link para ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('button').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(responsiveVoice.speak("Botão de " + $(':focus').text(), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('textarea').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        responsiveVoice.cancel();
                        setTimeout(responsiveVoice.speak('Input ' + $(':focus').attr('aria-tts'), "Portuguese Female"),1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

            })
        }
    }, [])




    return (
        // Pode ligar o leitor de tecla clicando alt + q ou clicando em cima;
        
        <div className="textToSpeech__container" onClick={_ => switchStateIcon()} accessKey="q">
            <img src={!clickIcon ? "/imgs/icons/textToSpeech_icon-open.svg" : "/imgs/icons/textToSpeech_icon-remove.svg"} alt="icone do leitor de tela"></img>
            <div className="textToSpeech__hover"><p>Leitor de tela</p></div>
            <div></div>
        </div>
    )
}

