import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './style.css'

const PageJogos = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const apiKey = 'bb8e5d1e0b2e44d9ac172e791e20ff23'
    Axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      }).catch((error) => { console.log(error); });
  }, [])
  return (
    <>
      {games?.map((game) => {
        return (
          <div className="admin__jogo">
            <div className="admin__jogo-title">
              <h2>{game?.name}</h2>
              <div className="admin__jogo-btns">
                <button className="admin__jogo-edit">
                  <i class="fa-solid fa-pen"></i>
                  Editar
                </button>
                <button className="admin__jogo-view">
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
            <h3>R${game?.rating}</h3>
            <div className="admin__jogo-genres">
              {game?.genres.map((genres) =>
                <p key={genres?.id}>{genres?.name}</p>
              )}
            </div>
          </div>)
      })}
    </>
  )
}

export default PageJogos