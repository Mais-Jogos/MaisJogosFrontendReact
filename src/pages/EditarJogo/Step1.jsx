import React, { useEffect, useState } from 'react'

const Step1 = ({jogo, onChangeGame, erro}) => {
    const generos = ["Ação", "Arcade", "Aventura", "Casual", "Corrida", "Esportes", "Estratégia", "Luta", "Puzzle", "Rpg", "Shooter", "Terror"]
    useEffect(() =>{
        if(!jogo?.genero?.some(genero => generos.some(g => g == genero))){
            onChangeGame("genero", [])
        }
    }, [])
  return (
    <section className='cadastroJogo__content'>
        <label htmlFor="titulo" className={`cadastroJogo__content__label`}>Titulo</label>
        <input type="text" id='titulo' defaultValue={jogo?.titulo} onChange={(e) => onChangeGame("titulo", e.target.value)}
        className={`${erro && 'cadastroJogo__content__body--erroMessage'}`}/>
        <label htmlFor="descrição" className={`cadastroJogo__content__label`}>Descrição</label>
        <textarea name="descrição" id="descrição" cols="30" rows="10" defaultValue={jogo?.descricao} className={`${erro && 'cadastroJogo__content__body--erroMessage'}`} onChange={(e) => onChangeGame("descricao", e.target.value)}></textarea>
        <label htmlFor="gêneros" className='cadastroJogo__content__label'>Gêneros</label>
        <div className="cadastroJogo__content__Bodybuttons">
            {generos.map((genero) => (<>
                <button 
                    className={jogo?.genero?.some(g => g === genero) ? 'cadastroJogo__content__buttons cadastroJogo__content__buttons--select':'cadastroJogo__content__buttons'}
                    onClick={() => {
                        const newGeneros = !jogo?.genero?.some(g => g === genero) ? 
                        [...jogo?.genero, genero] : 
                        jogo?.genero?.filter(g => g !== genero)
                        const generoFiltrado = newGeneros.filter(genero => generos.includes(genero));
                        console.log(jogo?.genero);
                        onChangeGame("genero", generoFiltrado)
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