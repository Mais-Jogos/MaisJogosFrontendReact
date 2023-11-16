import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const CadastroJogo2 = () => {
    const [jogo, setJogo] = useState({
        titulo: null,
		descricao: null,
		genero: null,
		plataforma: null,
        requisitos: null,
		jogo: null,
        classificacao: null,
        midia: null 
    })
    const onChangeGame = (type, value) =>{
        setJogo({...jogo, [type]: value})
    }
    const [step, setStep] = useState(0);
    const steps = [
        <Step1 jogo={jogo} onChangeGame={onChangeGame}/>, 
        <Step2 jogo={jogo} onChangeGame={onChangeGame}/>, 
        <Step3 jogo={jogo} onChangeGame={onChangeGame}/>
    ]
  return (
    <div id='container-page'>
        <Menu/>
        <Acessibilidade/>
        <h1>Cadastro Jogo</h1>
        {steps[step]}
        {step !== 0 &&<button onClick={() => setStep(step - 1)}>Voltar</button>}
        {step !== 2 &&<button onClick={() => setStep(step + 1)}>Próximo</button>}
        <button onClick={() => console.log("Jogo", jogo)}>Mostrar</button>
    </div>
  )
}

export default CadastroJogo2