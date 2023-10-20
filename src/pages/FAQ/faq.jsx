import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";

export default function FAQ() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
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
          <a href="#">Sobre Jogos</a>
        </div>
        <div className="borda">
          <a href="#">Sobre Desenvolvedor</a>
        </div>
        <div className="borda">
          <a href="#">Sobre a plataforma</a>
        </div>
      </div>
      <div className="center">
      <div className="infos">
        <div className="seta" onClick={toggleTexto}>
          ➡️ Abrir
        </div>
        {mostrarTexto && (
          <div className="texto-expansivel">
            <p>Texto que aparecerá quando você clicar no botão de abrir.</p>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}




