/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react'
import Axios from 'axios'
import './style.css'

const Quiz = ({coins, setCoins}) => {
    const [allQuestions, setAllQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [answers, setAnswers] = useState([]);
    const [answered, setAnswered] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null)

    useEffect(()=>{
        Axios.get('/src/games/Quiz/questions.json')
        .then((response) =>{
            console.log(response.data);
            setAllQuestions(response.data);
        }).catch((error) => { console.log(error); }); 
    }, [])   
    console.log(allQuestions); 

    function mixQuestions(arr) {
        const shuffledArr = arr.slice();
        for (let i = shuffledArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
        }
        return shuffledArr;
    }
    function next() {
        const allAnswers = allQuestions[index+1]?.incorrect_answers;
        allAnswers.push(allQuestions[index+1]?.correct_answer);
        setAnswers(mixQuestions([...new Set(allAnswers)]));
        setIndex(index + 1);
        setAnswered(false)
        setUserAnswer(null)
    }
    function answerQuestion(answer){
        setAnswered(true)
        let correctAnswer = allQuestions[index]?.correct_answer;
        if (answer === correctAnswer) {
            setUserAnswer(['right','Você acertou!']);
            setCoins(coins + 1)
        }else{
            setUserAnswer(['wrong','Você errou!']);
        }
    }


  return (
    <div className='page__quiz'>
        <div className="title__quiz">
           <div className="Game__menu__qz">
                <h2>Quiz sobre Jogos</h2> 
                <p>{coins} <i className="fa-brands fa-bitcoin"></i></p>
           </div>
        </div> 
        <div className='questions' key={index}>
            {index !== 0 ? <h3>{allQuestions[index]?.question}</h3> : null}
            {answered && <p className={userAnswer[0]}>{userAnswer[1]}</p>}
            <div className="answers">
                {answers?.map((answer, index) => (
                    <button key={index} onClick={() => answerQuestion(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
            <button onClick={next}>{index === 0 ? 'Começar' : 'Próxima'}</button>
        </div>
    </div>
  )
}

export default Quiz