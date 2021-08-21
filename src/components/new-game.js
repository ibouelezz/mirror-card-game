import './new-game.css'
import React from 'react'
import { Input } from 'semantic-ui-react'

const NewGame = () => {
  let counter = 3
  return (
    <div className="new-game-container">
      <Input icon="user" iconPosition="left" placeholder="Player 1" />
      <Input icon="user" iconPosition="left" placeholder="Player 2" />
      <Input icon="user" iconPosition="left" placeholder="Player 3" />
    </div>
  )
}

export default NewGame
