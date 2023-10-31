import { useState } from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';
import {translate} from "../../translate/translate";

export default _ => {

    const [mostrarDosVox, setMostrarDosVox] = useState(false);
    const [mostrarVLibras, setMostrarVLibras] = useState(false);
    const [mostrarVoiceOver, setMostrarVoiceOver] = useState(false);
    const [mostrarWinNarrator, setMostrarWinNarrator] = useState(false);
    const [mostrarTalkBack, setMostrarTalkBack] = useState(false);
    
    const toggleTalkBack = () => {
        setMostrarTalkBack(!mostrarTalkBack);
      };

    const toggleWinNarrator = () => {
        setMostrarWinNarrator(!mostrarWinNarrator);
      };

    const toggleVoiceOver = () => {
        setMostrarVoiceOver(!mostrarVoiceOver);
      };

    const toggleDosVox = () => {
        setMostrarDosVox(!mostrarDosVox);
      };
    
    const toggleVLibras = () => {
        setMostrarVLibras(!mostrarVLibras);
      };
    let parser = new DOMParser();

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="accessibility__main">
                <header className="accessibility_Header">
                    <div><img src="\imgs\bgimg\01.png"/></div>
                    <h1 className="acessibility_Titulo">{translate("Acessibilidade")}</h1>
                </header>

                <section className="accessibility__grid">
                
                <div>
                    <p>
                        {translate("AcessTxt1")}
                    </p>
                    <p>
                        {translate("AcessTxt2")}
                    </p>
                    <p>
                        {translate("AcessTxt3")}
                    </p>
                    <p>
                        {translate("AcessTxt4")}
                    </p>
                </div>

                <div className="acessibility_threeBlocks">
                    <div className="acessibility__recursos">
                        <h1 className="acessibility_Titulo">{translate("Contraste")}</h1>
                        <p dangerouslySetInnerHTML={{__html: translate("ContrasteIE-GC")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("ContrasteFirefox")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("ContrasteOpera")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("ContrasteSafariOmni")}}>
                        </p>

                    </div>
                    <div className="acessibility__recursos">
                        <h1 className="acessibility_Titulo">{translate("Aumentar e diminuir fonte")}</h1>
                        <p dangerouslySetInnerHTML={{__html: translate("FonteIE-GC")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("FonteFirefox")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("FonteOpera")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("FonteSafariOmni")}}>
                        </p>

                    </div>
                    <div className="acessibility__recursos">
                        
                        <h1 className="acessibility_Titulo">{translate("Teclas de atalho por navegadores")}</h1>
                        <p dangerouslySetInnerHTML={{__html: translate("AtalhoIE-GC")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("AtalhoFirefox")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("AtalhoOpera")}}>
                        </p>

                        <p dangerouslySetInnerHTML={{__html: translate("AtalhoSafariOmni")}}>
                        </p>

                    </div>
                </div>
                
                <div>
                        <h1 className="acessibility_Titulo">{translate("Teclas de atalho por navegadores")}</h1>
                        <p>
                        {translate("Teclas de atalho txt")}
                        </p>
                </div>

                <div className="acessibility__tecAssistivas">
                    <h1 className="acessibility_Titulo">{translate("Técnologias assistivas")}</h1>
                       
                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleTalkBack}>
                        {translate("TalkBack para Android")}
                        </div>
                        
                        <div className="acessibility__border" style={{display:mostrarTalkBack ? "none" : "block" }}>
                        <p>{translate("TalkBack")}</p>
                        </div>
                    </div>

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleWinNarrator}>
                        {translate("Narrador para windows")}
                        </div>
                        
                        <div className="acessibility__border" style={{display:mostrarWinNarrator ? "none" : "block" }}>
                        <p>{translate("WinNarrator")}</p>
                        </div>
                    </div>
                     

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleVoiceOver}>
                        {translate("VoiceOver para iphone e mac")}
                        </div>
                        
                        <div className="acessibility__border" style={{display:mostrarVoiceOver ? "none" : "block" }}>
                        <p>{translate("VoiceOver")}</p>
                        </div>
                    </div>

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleDosVox}>
                        {translate("DosVox")}
                        </div>
                        
                        <div className="acessibility__border" style={{display:mostrarDosVox ? "none" : "block" }}>
                        <p>{translate("DosVoxTxt")}</p>
                        </div>
                    </div>   
                        
                        
                </div>

                <div className="acessibility__tecAssistivas">
                    <div className="infos1" >
                        <div>
                        <h1 className="acessibility_Titulo">{translate("Intérpretes digitais")}</h1>
                        </div>

                        <div className="acessibility__border" onClick={toggleVLibras}>
                        {translate("VLibras")}
                        </div>
                        
                        <div className="acessibility__border" style={{display:mostrarVLibras ? "none" : "block" }}>
                        <p>{translate("VlibrasTxt")}</p>
                        </div>
                    </div> 
                </div>

                

                </section>

            </main>

        </div>
    );

}