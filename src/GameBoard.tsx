import { styled } from '@mui/material'
import React from 'react'
import GameBoardCell from './GameBoardCell'
import { BOARD_SIZE } from './settings'
import Coordinate from './util/Coordinate'
import coordinateHasShip from './util/coordinateHasShip'
import createBoardCoordinates from './util/createBoardCoordinates'
import { GameStateAction } from './util/useGameState'

export interface GameBoardProps {
  /** The activated/revealed state of each cell */
  boardState: boolean[][]
  /** The coordinates of the ship that the player is trying to find */
  shipCoordinates: Coordinate[]
  /** A dispatch function to update the shared state.
   * Note that this does NOT change between re renders,
   * so it doesn't need to be in a useCallback call */
  dispatchGameState: React.Dispatch<GameStateAction>
}

/** The CSS gridTemplate to use for the game grid */
const GRID_TEMPLATE = `repeat(${BOARD_SIZE}, ${100 / BOARD_SIZE}%)`

/** A styled div for the game grid */
const GameBoardGrid = styled('div')({
  display: 'inline-grid',
  gridTemplateColumns: GRID_TEMPLATE,
  gridTemplateRows: GRID_TEMPLATE,
  border: '2px solid black'
})

/**
 * The game board, a grid containing cells
 */
const GameBoard = ({ boardState, shipCoordinates, dispatchGameState }: GameBoardProps) => {
  console.debug('Rendering GameBoard')

  const gameBoardCoordinates = createBoardCoordinates()

  return (
    <GameBoardGrid>
      {
        gameBoardCoordinates.map(coordinate => (
          <GameBoardCell
            coordinate={coordinate}
            activated={boardState[coordinate.x-1][coordinate.y-1]}
            hasShip={coordinateHasShip(coordinate, shipCoordinates)}
            dispatchGameState={dispatchGameState}
            key={`${coordinate.x},${coordinate.y}`}
          />
        ))
      }
    </GameBoardGrid>
  )
}

export default GameBoard