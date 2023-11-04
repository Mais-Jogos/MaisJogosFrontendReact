import { useState } from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';
import {translate} from "../../translate/translate";
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

export default _ => { 

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />
            <TextToSpeech />

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
                        <div className="acessibility__border">
                            
                            <div className="acessibility__borderTopo">
                            <a href="https://support.google.com/accessibility/android/answer/6283677?hl=pt-br">
                            <img src="\imgs\logo-acessibilidade\1talkback.png"/>
                            {translate("TalkBack para Android")}
                            </a>
                            </div>
                           
                        
                            <div>
                            <p>{translate("TalkBack")}</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="infos1" >        
                    <div className="acessibility__border">
                        <div className="acessibility__borderTopo">
                            <a href="https://support.microsoft.com/pt-br/windows/guia-completo-do-narrador-e4397a0d-ef4f-b386-d8ae-c172f109bdb1">
                            <img src="\imgs\logo-acessibilidade\2narradorWin.png"/>
                            {translate("Narrador para windows")}
                            </a>
                            </div>
                            
                        <div>
                        <p>{translate("WinNarrator")}</p>
                        </div>
                    </div>
                    </div>
                     

                    <div className="infos1" > 
                    <div className="acessibility__border">       
                        <div className="acessibility__borderTopo">
                            <a href="https://support.apple.com/pt-br/guide/iphone/iph3e2e415f/15.0/ios/15.0">
                            <img src="\imgs\logo-acessibilidade\3voiceover.png"/>
                            {translate("VoiceOver para iphone e mac")}
                            </a>
                        </div>
                        
                        <div>
                        <p>{translate("VoiceOver")}</p>
                        </div>
                        </div>
                    </div>

                    <div className="infos1" > 
                        <div className="acessibility__border">       
                        <div className="acessibility__borderTopo">
                        <a href="http://intervox.nce.ufrj.br/dosvox/dosvox_ubuntu/">
                        <img src="\imgs\logo-acessibilidade\4dosvox.png"/>
                        {translate("DosVox")}
                        </a>
                        </div>
                        
                        <div>
                        <p>{translate("DosVoxTxt")}</p>
                        </div>
                        </div>
                    </div>   
                        
                        
                </div>

                <div className="acessibility__tecAssistivas">
                    <div className="infos1" >
                        <div>
                        <h1 className="acessibility_Titulo">{translate("Intérpretes digitais")}</h1>
                        </div>

                        <div className="acessibility__border">
                        <div className="acessibility__borderTopo">
                        <a href="https://www.gov.br/governodigital/pt-br/vlibras/">
                        <img src="\imgs\logo-acessibilidade\5vlibras.png"/>
                        {translate("VLibras")}
                        </a>
                        </div>
                        
                        <div>
                        <p>{translate("VlibrasTxt")}</p>
                        </div>
                        </div>
                    </div> 
                </div>

                

                </section>

            </main>

        </div>
    );

}