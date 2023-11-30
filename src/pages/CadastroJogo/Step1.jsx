import React from 'react'
import { useState } from 'react'
import { translate } from '../../translate/translate'

const Step1 = ({jogo, onChangeGame, erro}) => {
    const generos = ["Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror"]
    const [generosSelecionados, setGenerosSelecionados] = useState(jogo?.genero)
  return (
    <section className='cadastroJogo__content'>
        <label htmlFor="titulo" className={`cadastroJogo__content__label`}>Titulo</label>
        <input type="text" id='titulo' defaultValue={jogo?.titulo} onChange={(e) => onChangeGame("titulo", e.target.value)}
        className={`${erro && 'cadastroJogo__content__body--erroMessage'}`}/>
        <label htmlFor="descrição" className={`cadastroJogo__content__label`}>Descrição</label>
        <textarea name="descrição" id="descrição" cols="30" rows="10" defaultValue={jogo?.descricao} className={`${erro && 'cadastroJogo__content__body--erroMessage'}`} onChange={(e) => onChangeGame("descricao", e.target.value)}></textarea>
        <label htmlFor="gêneros" className='cadastroJogo__content__label'>Gêneros</label>
        <div className="cadastroJogo__content__Bodybuttons">
            {generos?.map((genero) => (<>
                <button 
                    className={generosSelecionados?.some(g => g === genero) ? 'cadastroJogo__content__buttons cadastroJogo__content__buttons--select':'cadastroJogo__content__buttons'}
                    onClick={() => {
                        const newGeneros = !generosSelecionados?.some(g => g === genero) ? 
                        [...generosSelecionados, genero] : 
                        generosSelecionados?.filter(g => g !== genero)
                        setGenerosSelecionados(newGeneros);
                        onChangeGame("genero", newGeneros)
                    }}
                >
                    {genero}
                </button>
            </>))}
        </div>
    </section>
  )
}

export default Step1