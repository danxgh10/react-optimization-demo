import React, { useEffect } from 'react'
import GameBoard from './GameBoard'
import GameControlsPanel from './GameControlsPanel'
import useGameState, { DISPATCH_RESET, DISPATCH_REVEAL_ALL } from './util/useGameState'
import WinDialog from './components/WinDialog'

/**
 * Main container for the game
 */
const GameContainer = () => {
  const { gameState, dispatchGameState } = useGameState()
  const gameWon = !gameState.remainingShipCells.length

  /**
   * Reveal all of the board cells when the game has finished
   */
  useEffect(() => {
    if (gameWon) {
      dispatchGameState(DISPATCH_REVEAL_ALL)
    }
  }, [gameWon])
  
  /**
   * Reset the board and generate new ship coordinates
   */
   const resetBoard = () => {
    dispatchGameState(DISPATCH_RESET)
  }

  /**
   * Handle the win dialog being closed
   */
  const handleWinDialogClose = () => {
    dispatchGameState(DISPATCH_RESET)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {
        gameWon && <WinDialog open={gameWon} handleClose={handleWinDialogClose} />
      }
      <GameControlsPanel resetBoard={resetBoard} />
      <GameBoard
        dispatchGameState={dispatchGameState}
        shipCoordinates={gameState.allShipCells}
        boardState={gameState.revealedCells}
      />
    </div>
  )
}

export default GameContainer