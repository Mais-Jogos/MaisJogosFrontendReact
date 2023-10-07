/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import './App.css'
import Home from "./pages/Home/Home"
import Carrinho from "./pages/Carrinho/Carrinho"
import Joguinhos from "./pages/Joguinhos/Joguinhos";
import Jogo from "./pages/Jogo/Jogo";
import Entrar from "./pages/Entrar/Entrar";
import PerfilUser from "./pages/PerfilUser/PerfilUser"
import MeusJogosUser from "./pages/MeusJogosUser/MeusJogos"
import ListaDeDesejos from "./pages/ListadeDesejos/ListadeDesejos"
import LojaSkin from "./pages/LojaSkin/LojaSkin";
import Avatares from "./pages/Avatares/Avatares";
import Categorias from "./pages/Categorias/Categorias";
import NotFound from "./pages/NotFound/NotFound";
import Review from "./pages/Review/Review";

function App({theme}) {
  return (
    <div data-theme={theme} id="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/carrinho' element={<Carrinho/>}/>
          <Route exact path='/Joguinhos' element={<Joguinhos/>}/>
          <Route path='/jogos/:id' element={<Jogo/>}/>
          <Route path='/entrar' element={<Entrar/>}/>
          <Route path='/perfil-user' element={<PerfilUser/>}/>
          <Route path='/meus-jogos' element={<MeusJogosUser/>}/>
          <Route path='/lista-desejos' element={<ListaDeDesejos/>}/>
          <Route path='/loja-skin' element={<LojaSkin/>}/>
          <Route path='/avatares' element={<Avatares/>}/>
          <Route path='/categorias/:category' element={<Categorias/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/review' element={<Review/>}/>
        </Routes>
      </BrowserRouter>
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
