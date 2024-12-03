import React from 'react'
import { IGame } from '../interfaces/game.interface'
import GameItem from './GameItem'

interface GamesListProps {
    games: IGame[] | undefined 
}

const GamesList:React.FC<GamesListProps> = ({games}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        {games?.map(({id, platform, title}) => (
            <GameItem key={id} title={title} platform={platform} id={id}/>
        ))}
    </div>
  )
}

export default GamesList