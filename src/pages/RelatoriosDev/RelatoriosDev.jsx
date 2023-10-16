import React from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import translate from '../../translate/translate'
import Footer from '../../components/Footer/Footer'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const RelatoriosDev = () => {
   const data = [
        {month: 1, vendas: 500},
        {month: 2, vendas: 120},
        {month: 3, vendas: 20},
        {month: 4, vendas: 0},
        {month: 5, vendas: 50},
        {month: 6, vendas: 135},
        {month: 7, vendas: 320},
        {month: 8, vendas: 340},
        {month: 9, vendas: 290},
        {month: 10, vendas: 100},
        {month: 11, vendas: 280},
        {month: 12, vendas: 620},
    ]
    /*  const data = {
        labels: vendas.map(venda => venda.month),
        datasets: [
          {
            label: 'Vendas',
            data: vendas.map(venda => venda.vendas),
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }; */

  return (
    <div id='container-page' className='home'>
        <Menu/>
        <Vlibras/>
        <Acessibilidade/>
        <div id="relatorios-dev">
            <h1>Relatórios de vendas</h1>
            <div className="relatorios-dev__grafico-vendas">
                <p>Gráfico comparativo de vendas</p>
                    
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="vendas" stroke="var(--purple)" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RelatoriosDev