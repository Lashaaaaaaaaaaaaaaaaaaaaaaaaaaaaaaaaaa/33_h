import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GamesPage from '../pages/GamesPage'
import GamePage from '../pages/GamePage'
import Home from '../pages/Home'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/games' element={<GamesPage />}></Route>
        <Route path='/:id' element={<GamePage />}></Route>
    </Routes>
  )
}

export default AppRouter