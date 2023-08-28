// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import './style.css'

function getInitialState(){
    const state = {}
    for(let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            state[`${r}-${c}`] = null;
        }
    }
    return state
}
function getKey(index){
    const row = Math.floor(index / 3);
    const col = index % 3;
    return `${row}-${col}`;
}
function getValue(value){
    if(value === 1){
        return 'X';
    }else if(value === -1){
        return 'O';
    }
}
function getWinner(values){
    for(let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            const sumRow = values[`${r}-${c}`] + values[`${r}-${c+1}`] + values[`${r}-${c+2}`]
            if(sumRow === 3 || sumRow === -3){
                return sumRow;
            }
            const sumCol = values[`${r}-${c}`] + values[`${r+1}-${c}`] + values[`${r+2}-${c}`]
            if(sumCol === 3 || sumCol === -3){
                return sumCol;
            }
            const sumDiagonal = values[`${r}-${c}`] + values[`${r+1}-${c+1}`] + values[`${r+2}-${c+2}`]
            if(sumDiagonal === 3 || sumDiagonal === -3){
                return sumDiagonal;
            }
            const sumReverseDiagonal = values[`${r}-${c}`] + values[`${r+1}-${c-1}`] + values[`${r+2}-${c-2}`]
            if(sumReverseDiagonal === 3 || sumReverseDiagonal === -3){
                return sumReverseDiagonal;
            }
        }
    }
    return null;
}
const JogodaVelha = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(null);

        function otherPlayer() {
            if (winner || player !== -1) {
                return;
            }
        
            const noValues = Object.entries(values)
                .filter((value) => value[1] === null)
                .map((value) => value[0]);
            
            if (noValues.length === 0) {
                return; // Não há posições vazias para jogar
            }
        
            const randomIndex = Math.floor(Math.random() * noValues.length);
            const selectedKey = noValues[randomIndex];
        
            const newValues = {
                ...values,
                [selectedKey]: player,
            };
        
            setValues(newValues);
            setPlayer(player * -1);
        
            const newWinner = getWinner(newValues);
            if (newWinner) {
                setWinner(newWinner < 0 ? 1 : -1);
            }
        }
        
    function handleClick(key){
        if(winner || values[key]){
            return;
        }
        const newValues = {
            ...values,
            [key]:player,
        }
        setValues(newValues)
        setPlayer(player * -1)
        const newWinner = getWinner(newValues)
        if(newWinner){
            setWinner(newWinner < 0 ? 1 : -1);
        }
    }
    function resetGame(){
        setValues(getInitialState)
        setWinner(null)
        setPlayer(1)
    }
    useEffect(() => {
        if (player === -1 && !winner) {
            otherPlayer();
        }
    }, [player, winner, values]);
    const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;
    return (
        <div className="border__jv">
            <div className="Game__jv">
                <div className="Game__board__jv">
                    {[1,2,3,4,5,6,7,8,9].map((_, index) => {
                        const key = getKey(index);
                        return(
                            <button key={index} type='button' onClick={() => handleClick(key)}>
                                {getValue(values[key])}
                            </button>
                        )
                    })}
                </div>
                <div className="Game__menu__jv">
                    <p>0 <i className="fa-brands fa-bitcoin"></i></p>
                    {(winner || itsATie) && <>
                        {winner ? 
                            <p>{winner > 0? 'Você perdeu!' : 'Você ganhou!'}</p> : 
                            <p>Deu empate!</p>
                        }</>
                    }
                    <button onClick={resetGame}>
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JogodaVelha