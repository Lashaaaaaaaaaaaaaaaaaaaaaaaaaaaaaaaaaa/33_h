import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GAMES } from '../graphql/queries/get-games'
import { IGame } from '../interfaces/game.interface'
import GamesList from '../components/GamesList'

const GamesPage:React.FC = () => {
  const {loading, error, data} = useQuery<{games: IGame[]}>(GET_GAMES)

  if(loading) return <h1>Loading . . .</h1>
  if(error) return <h3>Error: {error.message}</h3>

  return (
    <GamesList games={data?.games}/>
  )
}

export default GamesPage