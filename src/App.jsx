/* eslint-disable react-refresh/only-export-components */
import React, {useEffect, useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import './App.css'
import Home from "./pages/Home/Home"
import Carrinho from "./pages/Carrinho/Carrinho"
import Joguinhos from "./pages/Joguinhos/Joguinhos";
import Jogo from "./pages/Jogo/Jogo";
import Entrar from "./pages/Entrar/Entrar";
import PerfilUser from "./pages/PerfilUser/PerfilUser";
import PerFilDev from "./pages/PerfilDev/PerfilDev";
import MeusJogosUser from "./pages/MeusJogosUser/MeusJogos"
import ListaDeDesejos from "./pages/ListadeDesejos/ListadeDesejos"
import LojaSkin from "./pages/LojaSkin/LojaSkin";
import Avatares from "./pages/Avatares/Avatares";
import Categorias from "./pages/Categorias/Categorias";
import NotFound from "./pages/NotFound/NotFound";
import Review from "./pages/Review/Review";
import CadastroJogo from "./pages/CadastroJogo/CadastroJogo";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import RelatoriosDev from "./pages/RelatoriosDev/RelatoriosDev";
import RelatoriosAdmin from "./pages/RelatoriosAdmin/RelatoriosAdmin";
import FAQ from "./pages/FAQ/faq";
import Accessibility from "./pages/Accessibility/Accessibility";
import GerenciamentoAdmin from "./pages/GerenciamentoAdmin/GerenciamentoAdmin"; 
import PagamentoDev from "./pages/PagamentoDev/PagamentoDev";
import Sobre from "./pages/Sobre/Sobre"
import CadastroReview from "./pages/CadastroReview/CadastroReview";
import PubDev from "./pages/PubDev/PubDev";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import CadastroSkin from "./pages/CadastroSkin/CadastroSkin";
import { Helmet } from 'react-helmet';
import MeusJogosDev from "./pages/MeusJogosDev/MeusJogosDev";
import EditarJogo from "./pages/EditarJogo/EditarJogo";
import CadastroAdmin from "./pages/CadastroAdmin/CadastroAdmin";

function App({theme}) {
  const location = window.location.pathname;

  useEffect(() => {
    if (window.hj) {
      window.hj('stateChange', window.location.pathname + window.location.search);
    }
  }, [location]);

  return (
    <div data-theme={theme} id="app">
        <Helmet>
          <script>
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3730819,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>
        </Helmet>
        <Helmet>
          <script>
            {`
              window._mfq = window._mfq || [];
              (function() {
                var mf = document.createElement("script");
                mf.type = "text/javascript"; mf.defer = true;
                mf.src = "//cdn.mouseflow.com/projects/e633905f-9012-43fc-a3e7-a532937ebfd1.js";
                document.getElementsByTagName("head")[0].appendChild(mf);
              })();
            `}
          </script>
        </Helmet>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/carrinho' element={<Carrinho/>}/>
              <Route exact path='/Joguinhos' element={<Joguinhos/>}/>
              <Route path='/jogos/:name' element={<Jogo/>}/>
              <Route path='/entrar' element={<Entrar/>}/>
              <Route path='/perfil-user' element={<PerfilUser/>}/>
              <Route path='/perfil-dev' element={<PerFilDev/>}/>
              <Route path='/meus-jogos' element={<MeusJogosUser/>}/>
              <Route path='/lista-desejos' element={<ListaDeDesejos/>}/>
              <Route path='/loja-skin' element={<LojaSkin/>}/>
              <Route path='/avatares' element={<Avatares/>}/>
              <Route path='/categorias/:category' element={<Categorias/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/review' element={<Review/>}/>
              <Route path='/login-admin' element={<LoginAdmin/>}/>
              <Route path='/relatorios-dev' element={<RelatoriosDev/>}/>
              <Route path='/relatorios-admin' element={<RelatoriosAdmin/>}/>
              <Route path='/acessibilidade' element={<Accessibility/>}/>
              <Route path='/faq' element={<FAQ/>}/>
              <Route path='/pagamento-dev' element={<PagamentoDev/>}/>
              <Route path='/gerenciamento-admin' element={<GerenciamentoAdmin/>}/>
              <Route path='/cadastro-review/:name' element={<CadastroReview/>}/>
              <Route path='/sobre' element={<Sobre/>}/>
              <Route path='/dev/:nome' element={<PubDev/>}/>
              <Route path='/cadastro-skin' element={<CadastroSkin/>}/>
              <Route path="/cadastro-jogo" element={<CadastroJogo/>}/>
              <Route path="/cadastro-admin" element={<CadastroAdmin/>}/>
              <Route path="/editar-jogo/:idJogo" element={<EditarJogo/>}/>
              <Route path="/jogos-dev" element={<MeusJogosDev/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
        <AnimatePresence>
          <Alert />
        </AnimatePresence>
    </div>
  )
}
App.propTypes = {
  theme: PropTypes.string.isRequired,
};
const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(App);
