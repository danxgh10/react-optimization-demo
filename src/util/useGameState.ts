import React, { useMemo, useReducer } from 'react'
import Coordinate, { equals } from './Coordinate'
import coordinateHasShip from './coordinateHasShip'
import createInitialGameState, { createTriggeredCellsState } from './createInitialGameState'

export const DISPATCH_RESET = 'reset'
export const DISPATCH_REVEAL_ALL = 'reveal_all'

type Reset = typeof DISPATCH_RESET
type RevealAll = typeof DISPATCH_REVEAL_ALL
export type GameStateAction = Coordinate | Reset | RevealAll

const reduceGameState = (gameState: GameState, action: GameStateAction): GameState => {
  switch(action) {
    case DISPATCH_RESET:
      return createInitialGameState()
    case DISPATCH_REVEAL_ALL:
      return {
        revealedCells: createTriggeredCellsState(true),
        remainingShipCells: gameState.remainingShipCells,
        allShipCells: gameState.allShipCells,
      }
    default:
      const nextRevealedCells = [...gameState.revealedCells]
      const nextRemainingShipCells = [...gameState.remainingShipCells]

      nextRevealedCells[action.x-1][action.y-1] = true

      if (coordinateHasShip(action, gameState.remainingShipCells)) {
        const hitIndex = gameState.remainingShipCells.findIndex(shipCoord => equals(shipCoord, action))
        nextRemainingShipCells.splice(hitIndex, 1)
      };

      return {
        revealedCells: nextRevealedCells,
        remainingShipCells: nextRemainingShipCells,
        allShipCells: gameState.allShipCells,
      }
  }
}

export interface UseGameStateResponse {
  gameState: GameState
  dispatchGameState: React.Dispatch<GameStateAction>
}


export interface GameState {
  revealedCells: boolean[][]
  remainingShipCells: Coordinate[]
  allShipCells: Coordinate[]
}

const useGameState = (): UseGameStateResponse => {
  const initialGameState = useMemo(() => createInitialGameState(), [])
  const [gameState, dispatch] = useReducer(reduceGameState, initialGameState)

  return {
    gameState,
    dispatchGameState: dispatch
  }
}

export default useGameState