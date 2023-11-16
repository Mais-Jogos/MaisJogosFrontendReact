import React from 'react'
import { useState } from 'react'

const Step1 = ({jogo, onChangeGame}) => {
    const generos = ["Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror"]
    const [generosSelecionados, setGenerosSelecionados] = useState([])
  return (
    <section className='cadastroJogo__content'>
        <label htmlFor="titulo" className='cadastroJogo__content__label'>Titulo</label>
        <input type="text" id='titulo' defaultValue={jogo?.titulo} onChange={(e) => onChangeGame("titulo", e.target.value)}/>
        <label htmlFor="descrição" className='cadastroJogo__content__label'>Descrição</label>
        <textarea name="descrição" id="descrição" cols="30" rows="10" defaultValue={jogo?.descricao} onChange={(e) => onChangeGame("descricao", e.target.value)}></textarea>
        <label htmlFor="gêneros" className='cadastroJogo__content__label'>Gêneros</label>
        <div className="cadastroJogo__content__Bodybuttons">
            {generos.map((genero) => (<>
                <button 
                    className={generosSelecionados.some(g => g === genero) ? 'cadastroJogo__content__buttons cadastroJogo__content__buttons--select':'cadastroJogo__content__buttons'}
                    onClick={() => {
                        setGenerosSelecionados(
                            !generosSelecionados.some(g => g === genero) ? 
                            [...generosSelecionados, genero] : 
                            generosSelecionados.filter(g => g !== genero)
                        );
                        onChangeGame("genero", generosSelecionados)
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