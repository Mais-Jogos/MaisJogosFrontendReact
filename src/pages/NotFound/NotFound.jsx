import React from 'react'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './style.css'

const NotFound = () => {
    const page = window.location.pathname;
  return (
    <>    
        <main className="page404">
            <div className="text404">
                <h1>Oops!</h1>
                <h2><b>{page}</b> não foi encontrada...</h2>
                <Link to="/" className="botão">Ir para Home</Link>
            </div>
            <div className="fundoimg">
                <img src="./imgs/animais/1.png" alt="" />
            </div>
        </main>
        <Vlibras />
        <Acessibilidade/>   
        {/* <Footer/> */}
    </>
  )
}

export default NotFound