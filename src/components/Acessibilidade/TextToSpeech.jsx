import "./style.css";
import React, { useEffect, useState, useRef } from 'react'

export default props => {
    const initialized = useRef(false)
    const [clickIcon, setClickIcon] = useState(false);

    function switchStateIcon() {
        if (clickIcon) {
            setClickIcon(false)
            $("#root").attr("aria-tts", "false");
        } else {
            setClickIcon(true)
            $("#root").attr("aria-tts", "true");
        }
    }

    useEffect(_ => {
        if (!initialized.current) {
            initialized.current = true

            $(document).ready(function () {
                $('a').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(console.log('Link para ' + $(':focus').text()), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('button').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(console.log("Botão de " + $(':focus').text()), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('textarea').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(console.log('Input ' + $(':focus').attr('aria-label')), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });

                $('input').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9' && document.querySelector("#root").attributes[1].nodeValue == "true") {
                        setTimeout(console.log('Input ' + $(':focus').attr('aria-label')), 1000);
                    }

                    e.preventDefault();
                    e.stopPropagation();
                });
            })
        }
    }, [])




    return (
        <div className="textToSpeech__container" onClick={_ => switchStateIcon()}>
            <img src={!clickIcon ? "/imgs/icons/textToSpeech_icon-open.svg" : "/imgs/icons/textToSpeech_icon-remove.svg"}></img>
            <div className="textToSpeech__hover"><p>Leitor de tela</p></div>
            <div></div>
        </div>
    )
}

