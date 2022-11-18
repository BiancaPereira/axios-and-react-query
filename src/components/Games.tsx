import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import GamesService from '../services/games.service'

export default function Games() {
  const { data: dataGames, isLoading: isLoadingGames } = useQuery(
    'games',
    () => GamesService.getGames()
  )

  const games = isLoadingGames ? [] : dataGames?.data

  return (
      <main>
        <h1>MOBA Games Free To Play 🎮</h1>
        
        {isLoadingGames && <p>Loading games...</p>}
        
        <ul>
          {games?.length > 0 && games?.map((game, index) => (
            <li key={index}>
              <img src={game.thumbnail}></img>
              <h3>{game.title}</h3>
              <p>{game.short_description}</p>
            </li>
          ))}
        </ul>
      </main>
  )
}
