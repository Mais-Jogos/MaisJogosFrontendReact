import React, { useEffect, useState} from 'react'
import PageJogos from './PageJogos'
import PagePagamentos from './PagePagamentos'
import PageUsers from './PageUsers'
import PageDevs from './PageDevs'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { useNavigate } from 'react-router-dom'
import { translate } from '../../translate/translate'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";

const GerenciamentoAdmin = () => {
    const [page, setPage] = useState("jogos")
    const navigate = useNavigate();

  return (
    <div id='container-page'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <TextToSpeech />

        <main className='gerenciamento-admin'>
            <aside>
                <ul>
                    <li onClick={() => setPage("jogos")}>{translate("Jogos")}</li>
                    <li onClick={() => setPage("devs")}>{translate("Devs")}</li>
                    <li onClick={() => setPage("users")}>{translate("Users")}</li>
                    <li onClick={() => setPage("pagamentos")}>{translate("Pagamentos")}</li>
                    <li onClick={() => navigate("/relatorios-admin")}>{translate("Relatórios")}</li>
                </ul>
            </aside>
            <section>
                <h1>{translate("Gerenciamento do Admin")}</h1>
                {
                    page === "jogos" ? <PageJogos/> :
                    page === "devs" ? <PageDevs/> :
                    page === "users" ? <PageUsers/> :
                    page === "pagamentos" ? <PagePagamentos/> : null
                }
            </section>
        </main>
    </div>
  )
}

export default GerenciamentoAdmin