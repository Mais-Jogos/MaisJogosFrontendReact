// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'

const Jokenpo = () => {
    const [playerValue, setPlayerValue] = useState(0)
    const [computerValue, setComputerValue] = useState(0)
    const [result, setResult] = useState('')
    const actions = [0, 1, 2]
    function selectAction(action){
        setPlayerValue(action)
        const randomIndex = Math.floor(Math.random() * actions.length);
        setComputerValue(randomIndex);
        winner(action, randomIndex)
    }
    function winner(player, computer){
        if(player === computer){
            setResult('Deu empate!');
        }else if(player === 0 && computer === 2 || player === 1 && computer === 0 || player === 2 && computer === 1){
            setResult('Você ganhou!');
        }else{
            setResult('Você perdeu!');
        }
    }
    return (
        <div className="border__jk">
            <div className="Game__jk">
                <div className="Game__board__jk">
                    <div className="computer">
                        <i className="fa-solid fa-robot"></i>
                    </div>
                    <div className="result">
                        {playerValue === 0 ? <i className="fa-solid fa-hand-back-fist"></i> :
                        playerValue === 1 ? <i className="fa-solid fa-hand"></i> :
                        playerValue === 2 ? <i className="fa-solid fa-hand-scissors"></i> : null}
                        {computerValue === 0 ? <i className="fa-solid fa-hand-back-fist"></i> :
                        computerValue === 1 ? <i className="fa-solid fa-hand"></i> :
                        computerValue === 2 ? <i className="fa-solid fa-hand-scissors"></i> : null}
                    </div>
                    <div className="Game__actions">
                        <i className="fa-solid fa-hand-back-fist" onClick={() => selectAction(0)}></i>
                        <i className="fa-solid fa-hand" onClick={() => selectAction(1)}></i>
                        <i className="fa-solid fa-hand-scissors" onClick={() => selectAction(2)}></i>
                    </div>
                </div>
                <div className="Game__menu__jk">
                    <p>0 <i className="fa-brands fa-bitcoin"></i></p>
                    <p>{result}</p>
                    <button>
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jokenpo