import "./style.css";
import React, { useEffect, useState } from 'react'

export default props => {
    const [clickIcon, setClickIcon] = useState(true);

    useEffect(_ => {
        if (!clickIcon) {
            console.log(!clickIcon);
            $('a').keyup(function (e) {
                console.log('keyup called');
                var code = e.keyCode || e.which;
                if (code == '9') {
                    console.log('Link para ' + $(':focus').text());
                }
            });
            $('button').keyup(function (e) {
                console.log('keyup called');
                var code = e.keyCode || e.which;
                if (code == '9') {
                    setTimeout(console.log("Botão de "+ $(':focus').text()), 1000);
                }
            });
            $('textarea').keyup(function (e) {
                console.log('keyup called');
                var code = e.keyCode || e.which;
                if (code == '9') {
                    console.log('Input ' + $(':focus').attr('aria-label'));
                }
            });
        }
    }, [clickIcon])

    return (
        <div className="textToSpeech__container" onClick={_ => setClickIcon(!clickIcon)}>
            <img src={clickIcon ? "../../../public/imgs/icons/textToSpeech_icon-open.svg" : "../../../public/imgs/icons/textToSpeech_icon-remove.svg"}></img>
            <div className="textToSpeech__hover"><p>Leitor de tela</p></div>
            <div></div>
        </div>
    )
}

