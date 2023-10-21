import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";

export default function FAQ() {
  const [mostrarTextoJogos, setMostrarTextoJogos] = useState(false);
  const [mostrarTextoDev, setMostrarTextoDev] = useState(false);
  const [mostrarTextoPlat, setMostrarTextoPlat] = useState(false);

  const toggleTextoJogos = () => {
    setMostrarTextoJogos(!mostrarTextoJogos);
  };

  const toggleTextoDev = () => {
    setMostrarTextoDev(!mostrarTextoDev);
  };

  const toggleTextoPlat = () => {
    setMostrarTextoPlat(!mostrarTextoPlat);
  };
  
 

  return (
    <div id="container-page">
      <Menu />
      <Vlibras />
      <Acessibilidade />
      <div className="container-tittle">
        <img src="../../../public/imgs/icons/iconefaq.svg" alt="FAQIMAGEM" id="img-faq" />
        <h1>FAQ +JOGOS</h1>
      </div>
      <div className="caixa">
        <div className="borda">
          <a href="#" onClick={toggleTextoJogos}>
            Sobre jogos
          </a>
        </div>
        <div className="borda">
          <a href="#" onClick={toggleTextoDev}>
            Sobre Desenvolvedor
          </a>
        </div>
        <div className="borda">
          <a href="#" onClick={toggleTextoPlat}>
            Sobre a plataforma
          </a>
        </div>
      </div>
      <section id="section-jogos" className="section-jogos">
        {/* Conteúdo da seção de Jogos */}
        <div className="center">
          <div className="infos">
            <div className="seta" onClick={toggleTextoJogos}>
              Jogos
            </div>
            {mostrarTextoJogos && (
              <div className="center">
                <div className="texto-expansivel">
                  <a>Como baixar os jogos?</a>
                  <p>
                    Texto que aparecerá quando você clicar no botão de abrir. Após a compra do jogo, você será redirecionado para a área de “Meus jogos”, em seguida aparecerá o jogo com a descrição e o ícone de download, ao clicá-lo o jogo será instalado em seu dispositivo.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="section-dev" className="section-dev">
        {/* Conteúdo da seção de Desenvolvedor */}
        <div className="center">
          <div className="infos">
            <div className="seta" onClick={toggleTextoDev}>
              Desenvovledor
            </div>
            {mostrarTextoDev && (
              <div className="center">
                <div className="texto-expansivel">
                  <a>Como ver os jogos desenvolvidos do dev?</a>
                  <p>
                    Após abrir um jogo de sua escolha, irá aparecer um quadro escrito “Mais sobre o jogo”, nesta parte ficará informações sobre o jogo inclusive o nome do desenvolvedor! Apenas clique encima do nome e você será redirecionado automaticamente para o perfil do desenvolvedor e verá os demais jogos desenvovlidos por ele.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="section-plat" className="section-plat">
        {/* Conteúdo da seção de Plataforma */}
        <div className="center">
          <div className="infos">
            <div className="seta" onClick={toggleTextoPlat}>
              Plataforma 
            </div>
            {mostrarTextoPlat && (
              <div className="center">
                <div className="texto-expansivel">
                  <a>Sou desenvolvedor de jogos, como posso usar a plataforma?</a>
                  <p>
                   É importante ressaltar que isso é um breve resumo de como se utiliza, mas se precisar de ajuda, entre em contato diretamente com a centrald e ajuda. 
                  </p>
                </div>

                <div className="texto-expansivel">
                  <a>Sou comprador de jogos, como posso usar a plataforma?</a>
                  <p>
                   É importante ressaltar que isso é um breve resumo de como se utiliza, mas se precisar de ajuda, entre em contato diretamente com a centrald e ajuda. 
                  </p>
                </div>

                <div className="texto-expansivel">
                  <a>Posso navegar na paltaforma mesmo não tendo um registro?</a>
                  <p>
                   É importante ressaltar que isso é um breve resumo de como se utiliza, mas se precisar de ajuda, entre em contato diretamente com a centrald e ajuda. 
                  </p>
                </div>
              </div>
              
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}




