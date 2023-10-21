import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import translate from '../../translate/translate'
import Footer from '../../components/Footer/Footer'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import "./style.css"

const RelatoriosAdmin = () => {
  const [filterGraf, setFilterGraf] = useState('Geral')
  const diasDoMes = Array.from({length: 30}, (_, index) => index + 1);
  const data = [
    {Month: "Jan", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 29, Valor: 20.00},
    ]},
    {Month: "Fev", Vendas: [
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
    ]},
    {Month: "Mar", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Dev:"Player123", Jogo: "Minecraft", Dia: 14, Valor: 20.00},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 7, Valor: 50.00},
        {Dev:"Player123", Jogo: "Among Us", Dia: 21, Valor: 12.50},
        {Dev:"RainGames", Jogo: "The Witcher 3", Dia: 30, Valor: 30.00},
    ]},
    {Month: "Abr", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Dev:"Player123", Jogo: "Among Us", Dia: 4, Valor: 12.50},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
    ]},
    {Month: "Mai", Vendas: [
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 9, Valor: 50.00},
        {Dev:"RainGames", Jogo: "The Witcher 3", Dia: 31, Valor: 30.00},
    ]},
    {Month: "Jun", Vendas: [
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 19, Valor: 40.00},
    ]},
    {Month: "Jul", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Dev:"Player123", Jogo: "Minecraft", Dia: 4, Valor: 20.00},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 4, Valor: 50.00},
        {Dev:"Player123", Jogo: "Among Us", Dia: 11, Valor: 12.50},
        {Dev:"Player123", Jogo: "Among Us", Dia: 21, Valor: 12.50},
    ]},
    {Month: "Ago", Vendas: [
        {Dev:"Player123", Jogo: "Among Us", Dia: 4, Valor: 12.50},
    ]},
    {Month: "Set", Vendas: [
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 7, Valor: 50.00},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 8, Valor: 50.00},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 18, Valor: 50.00},
        {Dev:"RainGames", Jogo: "The Witcher 3", Dia: 30, Valor: 30.00},
    ]},
    {Month: "Out", Vendas: [
        {Dev:"Player123", Jogo: "Among Us", Dia: 9, Valor: 12.50},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 11, Valor: 50.00},
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 28, Valor: 40.00},
    ]},
    {Month: "Nov", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 5, Valor: 20.00},
        {Dev:"Player123", Jogo: "Minecraft", Dia: 12, Valor: 20.00},
      ]},
      {Month: "Dez", Vendas: [
        {Dev:"Player123", Jogo: "Minecraft", Dia: 1, Valor: 20.00},
        {Dev:"Player123", Jogo: "Among Us", Dia: 4, Valor: 12.50},
        {Dev:"DevMaster", Jogo: "FIFA 22", Dia: 15, Valor: 50.00},
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 25, Valor: 40.00},
        {Dev:"SuperManDev", Jogo: "Cyberpunk 2077", Dia: 27, Valor: 40.00},
        {Dev:"RainGames", Jogo: "The Witcher 3", Dia: 27, Valor: 30.00},
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
  
  return (
    <div id='container-page' className='home'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <div id="relatorios-admin">
            <h1>Relatórios de Vendas</h1>
            <div className="container__relatorios-admin">
              <div className="relatorios-admin__grafico-Vendas">
                  <p>Gráfico comparativo de vendas</p>
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
                      <Line type="monotone" dataKey={filterGraf === "Geral" ? "Vendas" : "Valor"} stroke="var(--purple)" activeDot={{ r: 8 }} />
                  </LineChart>
              </div>
              <div className="relatorios-admin__geral">
                <p>Valor Total de vendas <b>R${valorTotal.toFixed(2)}</b></p>
                <p>Valor Total de lucros<b>R${(valorTotal - (valorTotal*0.9)).toFixed(2)}</b></p>
              </div>
              <div className="relatorios-admin__mais-vendidos">
                <p>Jogos mais vendidos</p>
                <div className="tabela__mais-vendidos">
                  <div className="header__mais-vendidos">
                    <p>Status</p>
                    <p>Quantidade de jogos vendidos</p>
                    <p>Nome do Jogo</p>
                  </div>
                  <div className="body__mais-vendidos">
                    {[...new Set(jogos)].sort(function(a , b)
                    {return jogos.filter(mapJogo => mapJogo === a).length > jogos.filter(mapJogo => mapJogo === b).length ? -1 
                      : jogos.filter(mapJogo => mapJogo === a).length < jogos.filter(mapJogo => mapJogo === b).length ? 1 : 0})
                    .map(jogo => (
                      <div className="mais-vendidos">
                        <p>&#129041;</p>
                        <p className="quant__mais-vendidos"><b>{jogos.filter(mapJogo => mapJogo === jogo).length}</b></p>
                        <p>{jogo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relatorios-admin__quantidade-jogos">
                <div className="quant-jogos">
                  <p>Quantidade de clientes cadastrados</p>
                  <div>{clientes}</div>
                </div>
                <div className="quant-jogos">
                  <p>Quantidade de jogos vendidos</p>
                  <div>{jogosVendidos}</div>
                </div>
                <div className="quant-jogos">
                  <p>Quantidade de Devs cadastrados</p>
                  <div>{[...new Set(devs)].length}</div>
                </div>
                <div className="quant-jogos">
                  <p>Quantidade de jogos cadastrados</p>
                  <div>{[...new Set(jogos)].length}</div>
                </div>
              </div>
            <div className="relatorios-admin__melhores-devs">
                <p>Jogos mais vendidos</p>
                <div className="tabela__melhores-devs">
                  <div className="header__melhores-devs">
                    <p>Status</p>
                    <p>Quantidade de jogos vendidos</p>
                    <p>Nome do Jogo</p>
                    <p>Nome do Dev</p>
                    <p>Valor total de vendas</p>
                  </div>
                  <div className="body__melhores-devs">
                    {melhoresDevs.sort(function(a , b)
                    {return a.Valor > b.Valor ? -1 
                      : a.Valor < b.Valor ? 1 : 0})
                    .filter(jogo => jogo.Jogo !== undefined)
                    .map(jogo => (
                      <div className="melhores-devs">
                        <p>&#129041;</p>
                        <p className="quant__melhores-devs"><b>{jogo.Vendidos}</b></p>
                        <p>{jogo.Jogo}</p>
                        <p>{jogo.Dev}</p>
                        <p>R${jogo.Valor.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RelatoriosAdmin