import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import {translate} from '../../translate/translate'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import TextToSpeech from "../../components/Acessibilidade/TextToSpeech";
import "./style.css"
import Axios from "axios"


const RelatoriosDev = () => {
  const [filterGraf, setFilterGraf] = useState('Geral')
  const diasDoMes = Array.from({length: 30}, (_, index) => index + 1);
  const data = [
    {Month: "Jan", Vendas: [
        {Jogo: "Minecraft", Dia: 29, Valor: 20.00},
    ]},
    {Month: "Fev", Vendas: [
        {Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
    ]},
    {Month: "Mar", Vendas: [
        {Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Jogo: "Minecraft", Dia: 14, Valor: 20.00},
        {Jogo: "FIFA 22", Dia: 7, Valor: 50.00},
        {Jogo: "Among Us", Dia: 21, Valor: 12.50},
        {Jogo: "The Witcher 3", Dia: 30, Valor: 30.00},
    ]},
    {Month: "Abr", Vendas: [
        {Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Jogo: "Among Us", Dia: 4, Valor: 12.50},
        {Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
    ]},
    {Month: "Mai", Vendas: [
        {Jogo: "FIFA 22", Dia: 9, Valor: 50.00},
        {Jogo: "The Witcher 3", Dia: 31, Valor: 30.00},
    ]},
    {Month: "Jun", Vendas: [
        {Jogo: "Cyberpunk 2077", Dia: 19, Valor: 40.00},
    ]},
    {Month: "Jul", Vendas: [
        {Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Jogo: "Minecraft", Dia: 4, Valor: 20.00},
        {Jogo: "FIFA 22", Dia: 4, Valor: 50.00},
        {Jogo: "Among Us", Dia: 11, Valor: 12.50},
        {Jogo: "Among Us", Dia: 21, Valor: 12.50},
    ]},
    {Month: "Ago", Vendas: [
        {Jogo: "Among Us", Dia: 4, Valor: 12.50},
    ]},
    {Month: "Set", Vendas: [
        {Jogo: "FIFA 22", Dia: 7, Valor: 50.00},
        {Jogo: "FIFA 22", Dia: 8, Valor: 50.00},
        {Jogo: "FIFA 22", Dia: 18, Valor: 50.00},
        {Jogo: "The Witcher 3", Dia: 30, Valor: 30.00},
    ]},
    {Month: "Out", Vendas: [
        {Jogo: "Among Us", Dia: 9, Valor: 12.50},
        {Jogo: "FIFA 22", Dia: 11, Valor: 50.00},
        {Jogo: "Cyberpunk 2077", Dia: 28, Valor: 40.00},
    ]},
    {Month: "Nov", Vendas: [
        {Jogo: "Minecraft", Dia: 5, Valor: 20.00},
        {Jogo: "Minecraft", Dia: 12, Valor: 20.00},
      ]},
      {Month: "Dez", Vendas: [
        {Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Jogo: "Among Us", Dia: 4, Valor: 12.50},
        {Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
        {Jogo: "Cyberpunk 2077", Dia: 27, Valor: 40.00},
        {Jogo: "The Witcher 3", Dia: 27, Valor: 30.00},
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
  const jogos = data.map((venda) => venda.Vendas.map((v)=> v.Jogo))
  const mapJogos = [].concat(...jogos)
  const assinantesGeral = 10

  const token = window.localStorage.getItem("token")
  const id = window.localStorage.getItem("id")
  const [dev, setDev] = useState({})
  const [pagamentos, setPagamentos] = useState([])
  const [jogo, setJogos] = useState([])
  const [reviews, setReviews] = useState([])
  const [favoritos, setFavoritos] = useState([])

  useEffect(() =>{
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/usuario/listarCliente/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setDev(response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/favorito/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setFavoritos(response.data);
        console.log("Favoritos", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/review/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setReviews(response.data);
        console.log("Reviews", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/pixDev/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setPagamentos(response.data);
        console.log("Pix", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/jogo/listarTodos`)
    .then((response) => {
        setJogos(response.data.filter(jogo => jogo?.idDev == id));
        console.log("Jogos", response.data);
    })
    Axios.get(`https://backendmaisjogos-production.up.railway.app/api/favorito/listarTodos`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        setFavoritos(response.data);
        console.log("Favoritos", response.data);
    })
  }, [])

  return (
    <div id='container-page' className='home'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <TextToSpeech />
        
        <div id="relatorios-dev">
            <h1>
              {translate("Relatórios de Vendas")}
              <button className='imprimir-dev' onClick={() => print()} aria-label="imprimir">
                <i class="fa-regular fa-file-pdf"></i>{translate("Imprimir")}
              </button>
            </h1>
            <div className="container__relatorios-dev">
              <div className="relatorios-dev__grafico-Vendas">
                  <p>{translate("Alcance mensal de vendas")}</p>
                  <select name="Months" id="Months" aria-selected={filterGraf} onChange={(e) => setFilterGraf(e.target.value)} aria-label="meses">
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
                      formatter={(value, name, props) => filterGraf === "Geral" ? `R$ ${value.toFixed(2)}` : [`R$ ${value.toFixed(2)}`, `${props?.payload?.Jogo}`]} />
                      {/* <Legend /> */}
                      <Line type="monotone" dataKey={filterGraf === "Geral" ? "Vendas" : "Valor"} stroke="var(--purple-y)" activeDot={{ r: 8 }} />
                  </LineChart>
              </div>
              <div className="relatorios-dev__geral">
                <p>{translate("Quantidade de jogos cadastrados")}<b>{jogo?.length}</b></p>
                <p>{translate("Quantidade de jogos comprados")} <b>2</b></p>
              </div>
              <div className="relatorios-dev__quantidade-jogos">
                <div className="quant-jogos">
                  <p>{translate("Quantidade de Reviews")}</p>
                  <div>{reviews?.filter(review => jogo?.some(j => review?.idJogo == j?.id)).length}</div>
                </div>
                <div className="quant-jogos">
                  <p>{translate("Quantidade de Favoritos")}</p>
                  <div>{favoritos?.filter(fav => jogo?.some(j => fav?.idJogo == j?.id)).length}</div>
                </div>
                <div className="relatorios-dev__vendas">
                  <p>{translate("SubTotal Vendas")} <b>R${jogo.reduce((ac, cv) => ac + cv.valorJogo, 0).toFixed(2)}</b></p>
                  <span>{translate("Desconto de")} -R${(jogo.reduce((ac, cv) => ac + cv.valorJogo, 0) - (jogo.reduce((ac, cv) => ac + cv.valorJogo, 0)*0.9)).toFixed(2)}</span>
                  <hr />
                  <p>{translate("Valor Total de lucros")}<b>R${(jogo.reduce((ac, cv) => ac + cv.valorJogo, 0) - (jogo.reduce((ac, cv) => ac + cv.valorJogo, 0)*0.1)).toFixed(2)}</b></p>
                </div>
              </div>
              <div className="relatorios-dev__mais-vendidos">
                <p>{translate("Jogos cadastrados")}</p>
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
            </div>
        </div>
    </div>
  )
}

export default RelatoriosDev