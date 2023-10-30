import { useState } from "react";
import './style.css'
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras';

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

    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
            <Acessibilidade />

            <main className="accessibility__main">
                <header className="accessibility_Header">
                    <div><img src="\imgs\bgimg\01.png"/></div>
                    <h1 className="acessibility_Titulo">Acessibilidade</h1>
                </header>

                <section className="accessibility__grid">
                
                <div>
                    <p>
                        Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.
                    </p>
                    <p>
                        Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em A-.
                    </p>
                    <p>
                        Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas “Ctrl” e “+” para aumentar todo o site e “Ctrl” e “-“ para diminuir. Para voltar ao padrão, pressione “Ctrl” e “0”.
                    </p>
                    <p>
                        Este site tem melhor acessibilidade quando acessado nas versões mais atualizadas do seu navegador web. Utilize sempre a versão mais recente de seu software.
                    </p>
                </div>

                <div className="acessibility_threeBlocks">
                    <div className="acessibility__recursos">
                        <h1 className="acessibility_Titulo">Contraste</h1>
                        <p>
                        Internet Explorer e Google Chrome:<br/>
                        “Alt” + “c” - Contraste <br/>
                        “Alt” + “z” - Sem Contraste <br/>
                        </p>

                        <p>
                        Firefox: <br/>
                        “Alt” + “Shift” + “c” - Contraste <br/>
                        “Alt” + “Shift” + “z” - Sem Contraste <br/>
                        </p>

                        <p>
                        Opera: <br/>
                        “Shift” + “Escape” + “c” - Contraste <br/>
                        “Shift” + “Escape” + “z” - Sem Contraste <br/>
                        </p>

                        <p>
                        Safari e OmniWeb: <br/>
                        “Ctrl” + “c” - Contraste <br/>
                        “Ctrl” + “z” - Sem Contraste <br/>
                        </p>

                    </div>
                    <div className="acessibility__recursos">
                        <h1 className="acessibility_Titulo">Aumentar e diminuir fonte</h1>
                        <p>
                        Internet Explorer e Google Chrome:<br/>
                        “Alt” + “b” - Aumentar <br/>
                        “Alt” + “s” - Diminuir <br/>
                        </p>

                        <p>
                        Firefox: <br/>
                        “Alt” + “Shift” + “b” - Aumentar <br/>
                        “Alt” + “Shift” + “s” - Diminuir <br/>
                        </p>

                        <p>
                        Opera: <br/>
                        “Shift” + “Escape” + “b” - Aumentar <br/>
                        “Shift” + “Escape” + “s” - Diminuir <br/>
                        </p>

                        <p>
                        Safari e OmniWeb: <br/>
                        “Ctrl” + “b” - Aumentar <br/>
                        “Ctrl” + “s” - Diminuir <br/>
                        </p>

                    </div>
                    <div className="acessibility__recursos">
                        
                        <p>
                        <h1 className="acessibility_Titulo">Teclas de atalho por navegadores</h1>
                        Internet Explorer e Google Chrome:<br/>
                        “Alt” + “número” - Navegar pelo cabeçalho <br/>
                        </p>

                        <p>
                        Firefox: <br/>
                        “Alt” + “Shift” + “número” <br/>
                        </p>

                        <p>
                        Opera: <br/>
                        “Shift” + “Escape” + “número” <br/>
                        </p>

                        <p>
                        Safari e OmniWeb: <br/>
                        “Ctrl” + “número” <br/>
                        </p>

                    </div>
                </div>
                
                <div>
                        <h1 className="acessibility_Titulo">Teclas de atalho por navegadores</h1>
                        <p>
                        Use a tecla Tab para navegar por elementos que recebem ação do usuário no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e Shift + Tab para retornar. Use as setas direcionais para acessar as informações textuais.
                        </p>
                </div>

                <div className="acessibility__tecAssistivas">
                    <h1 className="acessibility_Titulo">Técnologias assistivas</h1>
                       
                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleTalkBack}>
                        TalkBack para Android
                        </div>
                        
                        {mostrarTalkBack && (
                        <div className="acessibility__border">
                        <p>A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.</p>
                        </div>
                        )}
                    </div>

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleWinNarrator}>
                        Narrador para windows
                        </div>
                        
                        {mostrarWinNarrator && (
                        <div className="acessibility__border">
                        <p>A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.</p>
                        </div>
                        )}
                    </div>
                     

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleVoiceOver}>
                        VoiceOver para iphone VoiceOver para mac
                        </div>
                        
                        {mostrarVoiceOver && (
                        <div className="acessibility__border">
                        <p>A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.</p>
                        </div>
                        )}
                    </div>

                    <div className="infos1" >        
                        <div className="acessibility__border" onClick={toggleDosVox}>
                        DosVox
                        </div>
                        
                        {mostrarDosVox && (
                        <div className="acessibility__border">
                        <p>A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.</p>
                        </div>
                        )}
                    </div>   
                        
                        
                </div>

                <div className="center">
                    <div className="infos1" >
                        <h1 className="acessibility_Titulo">Intérpretes digitais</h1>
                        
                        <div className="acessibility__border" onClick={toggleVLibras}>
                        VLibras
                        </div>
                        
                        {mostrarVLibras && (
                        <div className="acessibility__border">
                        <p>A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.</p>
                        </div>
                        )}
                    </div> 
                </div>

                

                </section>

            </main>

        </div>
    );

}