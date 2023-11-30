import React, { useEffect, useState} from 'react'
import Menu from '../../components/Menu/Menu'
import Axios from 'axios'
import './style.css'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Vlibras from '../../components/Vlibras/Vlibras'
import { translate } from '../../translate/translate'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";


const Visitas = () => {
    const [check, setCheck] = useState([]);
    useEffect(() =>{
        Axios.get('http://localhost:8080/api/check/listarTodos')
        .then((response) => {
          console.log("Check", response.data);
          setCheck(response.data)
        }).catch((error) => console.log(error))  
    }, [check])

  return (
    <div id='container-page' className='home'>
    <Menu />
    <Vlibras />
    <Acessibilidade />
    <main className='main-visitantes'>
        <section>
            <h1>Visitantes +Jogos</h1>
            <div className="visitors">
            <p className="num-home">{check?.length}</p>
          </div>
        </section>
        <aside>
            <img src="/imgs/fliperama.gif" alt="fliperama" className='fliperama'/>
        </aside>
    </main>
    </div>
  )
}

export default Visitas