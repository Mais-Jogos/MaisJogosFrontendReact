import React, { useEffect, useState} from 'react'
import PageJogos from './PageJogos'
import PagePagamentos from './PagePagamentos'
import PageUsers from './PageUsers'
import PageDevs from './PageDevs'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import { useNavigate } from 'react-router-dom'

const GerenciamentoAdmin = () => {
    const [page, setPage] = useState("jogos")
    const navigate = useNavigate();

  return (
    <div id='container-page'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <main className='gerenciamento-admin'>
            <aside>
                <ul>
                    <li onClick={() => setPage("jogos")}>Jogos</li>
                    <li onClick={() => setPage("devs")}>Devs</li>
                    <li onClick={() => setPage("users")}>Users</li>
                    <li onClick={() => setPage("pagamentos")}>Pagamentos</li>
                    <li onClick={() => navigate("/relatorios-admin")}>Relatórios</li>
                </ul>
            </aside>
            <section>
                <h1>Gerenciamento do Admin</h1>
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