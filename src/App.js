import './app.css'
import React from 'react'
import NewGame from './components/new-game'
import NavBar from './components/nav-bar'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <NewGame />
    </div>
  )
}

export default App
