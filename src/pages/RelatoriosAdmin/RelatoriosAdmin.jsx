import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import {translate} from '../../translate/translate'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import "./style.css"
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import { useEffect } from 'react'
import Axios from "axios"
import Loading from '../../components/Loading/Loading'

const RelatoriosAdmin = () => {
  const [filterGraf, setFilterGraf] = useState('Geral')
  const diasDoMes = Array.from({length: 30}, (_, index) => index + 1);
  const data = [
    {Month: "Jan", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 29, Valor: 29.99},
    ]},
    {Month: "Fev", Vendas: [
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 15, Valor: 35.99},
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 25, Valor: 50.00},
    ]},
    {Month: "Mar", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 1, Valor: 29.99},
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 14, Valor: 29.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 7, Valor: 35.99},
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 21, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Raider Kid and the Ruby Chest", Dia: 30, Valor: 5.00},
    ]},
    {Month: "Abr", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 1, Valor: 29.99},
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 4, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 15, Valor: 35.99},
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 25, Valor: 50.00},
    ]},
    {Month: "Mai", Vendas: [
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 9, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Raider Kid and the Ruby Chest", Dia: 31, Valor: 5.00},
    ]},
    {Month: "Jun", Vendas: [
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 19, Valor: 50.00},
    ]},
    {Month: "Jul", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 1, Valor: 29.99},
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 4, Valor: 29.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 4, Valor: 35.99},
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 11, Valor: 35.99},
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 21, Valor: 35.99},
    ]},
    {Month: "Ago", Vendas: [
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 4, Valor: 35.99},
    ]},
    {Month: "Set", Vendas: [
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 7, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 8, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 18, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Raider Kid and the Ruby Chest", Dia: 30, Valor: 5.00},
    ]},
    {Month: "Out", Vendas: [
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 9, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 11, Valor: 35.99},
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 28, Valor: 50.00},
    ]},
    {Month: "Nov", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 5, Valor: 29.99},
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 12, Valor: 29.99},
      ]},
      {Month: "Dez", Vendas: [
        {Dev:"Second Player", Jogo: "Dandy Ace", Dia: 1, Valor: 29.99},
        {Dev:"Second Player", Jogo: "Kaze and the Wild Masks", Dia: 4, Valor: 35.99},
        {Dev:"AryDev", Jogo: "Kaze and the Wild Masks", Dia: 15, Valor: 35.99},
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 25, Valor: 50.00},
        {Dev:"Bomb Games", Jogo: "Asleep - Ato 1", Dia: 27, Valor: 50.00},
        {Dev:"AryDev", Jogo: "Raider Kid and the Ruby Chest", Dia: 27, Valor: 5.00},
    ]},
  ];

  const dadosCompletos = data.map(({Month, Vendas}) => {
    return {
        Month,
        Vendas: diasDoMes.map(dia => {
            const vendasDoDia = Vendas.filter(v => v.Dia === dia);
            if (vendasDoDia.length > 1) {
                const valorTotal = vendasDoDia.reduce((total, venda) => total + venda.Valor, 0);
                const totalJogos = vendasDoDia.reduce((total, jogo, index) => {
                  if (index === 0) {
                    return jogo.Jogo;
                  }
                  return total + ", " + jogo.Jogo;
                }, '');
                return { Jogo: totalJogos, Dia: dia, Valor: valorTotal };
            } else {
                return vendasDoDia.length ? vendasDoDia[0] : {Jogo: "", Dia: dia, Valor: 0};
            }
        })
    };
  });

  const vendasGeral = 
    data.map((vendas) => {
      return {
        Month: vendas.Month,
        Vendas: vendas.Vendas.reduce((accumulator, object) => {
          return accumulator + object.Valor;
        }, 0)
      }
  })
  const valorTotal = vendasGeral.reduce((total, venda) => total + venda.Vendas, 0)
  const jogosVendidos = data.reduce((total, venda) => total + venda.Vendas.length, 0)
  const jogos = [].concat(...data.map((venda) => venda.Vendas.map((v)=> v.Jogo)))
  const devs = [].concat(...data.map((venda) => venda.Vendas.map((v)=> v.Dev)))
  const clientes = 120

  const dados = [].concat(data.map(({Vendas}) => {return Vendas[0]}))
  const melhoresDevs = [...new Set(jogos)].map(jogo => {
    const jogoIgual = dados.filter(v => v.Jogo === jogo)
    const newJogo = jogoIgual[0];
    return {Dev:newJogo?.Dev, Jogo: newJogo?.Jogo, Valor: newJogo?.Valor * jogoIgual?.length, Vendidos:jogoIgual?.length} ;
  })
  const [check, setCheck] = useState([])
  const [users, setUsers] = useState([])
  const [dev, setDevs] = useState([])
  const [jogo, setJogos] = useState([])
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(<Loading/>)
  const token = window.localStorage.getItem("token")
  
  useEffect(() =>{
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/usuario/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setUsers(response.data.filter(user => user.idAvatar));
        setDevs(response.data.filter(user => !user.idAvatar));
        console.log("Usuarios", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos`)
    .then((response) => {
        setJogos(response.data);
        console.log("Jogos", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/adm/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setAdmins(response.data);
        console.log("Admins", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/check/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setCheck(response.data);
        console.log("Check", response.data);
    })
    setLoading(null)
  }, [])
  
  return (
    <div id='container-page' className='home'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <TextToSpeech />
        {loading}

        <div id="relatorios-admin">
            <h1>
              {translate("Relatórios de Vendas")} 
              <button className='imprimir-admin' onClick={() => print()} aria-label="imprimir">
                <i class="fa-regular fa-file-pdf"></i>{translate("Imprimir")}
              </button>
            </h1>
            <div className="container__relatorios-admin">
              <div className="relatorios-admin__grafico-Vendas">
                  <p>{translate("Gráfico comparativo de vendas")}</p>
                  <select name="Months" id="Months" aria-selected={filterGraf} onChange={(e) => setFilterGraf(e.target.value)}>
                    <option value={"Geral"}>Geral</option>
                    {vendasGeral?.map(mes => (
                      <option value={mes.Month}>{mes.Month}</option>
                    ))}
                  </select>    
                  <LineChart
                      width={600}
                      height={200}
                      data={filterGraf === "Geral" ? vendasGeral : dadosCompletos.filter(vendas => filterGraf === vendas.Month)[0].Vendas}
                      margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                      }}
                      >
                      <XAxis dataKey={filterGraf === "Geral" ? "Month" : "Dia"} />
                      <YAxis />
                      <Tooltip labelFormatter={(value, entry) => filterGraf === "Geral" ? `${value}` : `Dia ${value}`} 
                      formatter={(value, props) => value.toFixed(2)} />
                      {/* <Legend /> */}
                      <Line type="monotone" dataKey={filterGraf === "Geral" ? "Vendas" : "Valor"} stroke="var(--purple-y)" activeDot={{ r: 8 }} />
                  </LineChart>
              </div>
              <div className="relatorios-admin__geral">
                <p>{translate("Valor Total de vendas")} <b>R${jogo.reduce((ac, cv) => ac + cv.valorJogo, 0).toFixed(2)}</b></p>
                <p>{translate("Valor Total de lucros")}<b>R${(jogo.reduce((ac, cv) => ac + cv.valorJogo, 0) - (jogo.reduce((ac, cv) => ac + cv.valorJogo, 0)*0.9)).toFixed(2)}</b></p>
              </div>
              <div className="relatorios-admin__mais-vendidos">
                <p>{translate("Jogos mais caros")}</p>
                <div className="tabela__mais-vendidos">
                  <div className="header__mais-vendidos">
                    <p>{translate("Status")}</p>
                    <p>{translate("Preço")}</p>
                    <p>{translate("Nome do Jogo")}</p>
                  </div>
                  <div className="body__mais-vendidos">
                    {jogo.sort(function(a , b)
                    {return a.valorJogo > b.valorJogo ? -1 
                      : a.valorJogo < b.valorJogo ? 1 : 0}).map(jogo => (
                      <div className="mais-vendidos">
                        <p>&#129041;</p>
                        <p className="quant__mais-vendidos"><b>{jogo?.valorJogo?.toFixed(2)}</b></p>
                        <p>{jogo?.titulo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relatorios-admin__quantidade-jogos">
                <div className="quant-jogos">
                  <p>{translate("Quantidade de clientes cadastrados")}</p>
                  <div>{users?.length}</div>
                </div>
                <div className="quant-jogos">
                  <p>{translate("Quantidade de visitantes")}</p>
                  <div>{check?.length}</div>
                </div>
                <div className="quant-jogos">
                  <p>{translate("Quantidade de Devs cadastrados")}</p>
                  <div>{dev?.length}</div>
                </div>
                <div className="quant-jogos">
                  <p>{translate("Quantidade de jogos cadastrados")}</p>
                  <div>{jogo?.length}</div>
                </div>
              </div>
            <div className="relatorios-admin__melhores-devs">
                <p>{translate("Devs com Jogos mais vendidos")}</p>
                <div className="tabela__melhores-devs">
                  <div className="header__melhores-devs">
                    <p>{translate("Status")}</p>
                    <p>{translate("Quantidade de jogos vendidos")}</p>
                    <p>{translate("Nome do Jogo")}</p>
                    <p>{translate("Nome do Dev")}</p>
                    <p>{translate("Valor Total de vendas")}</p>
                  </div>
                  <div className="body__melhores-devs">
                    {jogo.sort(function(a , b)
                    {return a.valorJogo > b.valorJogo ? -1 
                      : a.valorJogo < b.valorJogo ? 1 : 0})
                    .map(jogo => (
                      <div className="melhores-devs">
                        <p>&#129041;</p>
                        <p className="quant__melhores-devs"><b>{"1"}</b></p>
                        <p>{jogo?.titulo}</p>
                        <p>{dev.filter(dev => dev?.id == jogo?.idDev)[0]?.nome}</p>
                        <p>R${jogo?.valorJogo.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RelatoriosAdmin