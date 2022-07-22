import React, { useRef, useState } from 'react'
import { styled, Typography } from '@mui/material'
import GameBoardCell from './GameBoardCell';
import { BOARD_SIZE } from './util/GAME_CONFIG';
import generateShipCoordinates from './util/generateShipCoordinates';
import Coordinate, { equals } from './util/Coordinate';
import GameControlsPanel from './GameControlsPanel';
import createInitialBoardState from './util/createInitialBoardState';
import coordinateHasShip from './util/coordinateHasShip';

const GRID_TEMPLATE = `repeat(${BOARD_SIZE}, ${100 / BOARD_SIZE}%)`

const GameBoardContainer = styled('div')({
  display: 'inline-grid',
  gridTemplateColumns: GRID_TEMPLATE,
  gridTemplateRows: GRID_TEMPLATE,
  border: '2px solid black'
})

/**
 * The game board, containing controls and the actual game grid
 */
const GameBoard: React.FC = () => {
  console.debug('Rendering GameBoard')
  
  const initialShipCoordinates = useRef(generateShipCoordinates())
  const [remainingShipCoordinates, setRemainingShipCoordinates] = useState(initialShipCoordinates.current);
  const [boardState, setboardState] = useState<boolean[][]>(createInitialBoardState())
  
  /**
   * Handle mouseOver events for a given coordinate
   */
  const handleAction = (coordinate: Coordinate) => {
    // Update board state
    const cloneBoardState = [...boardState]
    cloneBoardState[coordinate.x-1][coordinate.y-1] = true
  
    // Update ship state
    if (coordinateHasShip(coordinate, remainingShipCoordinates)) {
      const hitIndex = remainingShipCoordinates.findIndex(shipCoord => equals(shipCoord, coordinate))

      const newRemainingShipCoordinates = [...remainingShipCoordinates]
      newRemainingShipCoordinates.splice(hitIndex, 1)
      setRemainingShipCoordinates(newRemainingShipCoordinates)
    };

    setboardState(cloneBoardState)
  }

  /**
   * Reset the board and generate new ship coordinates
   */
  const resetBoard = () => {
    setboardState(createInitialBoardState())

    const newShipCoordinates = generateShipCoordinates()
    initialShipCoordinates.current = newShipCoordinates
    setRemainingShipCoordinates(newShipCoordinates)

  }

  const gameBoardCells = []

  for (let x = 1; x <= BOARD_SIZE; x++) {
    for (let y = 1; y <= BOARD_SIZE; y++) {
      const coordinate: Coordinate = { x, y }
      gameBoardCells.push(
        <GameBoardCell
          coordinate={coordinate}
          disabled={boardState[x-1][y-1]}
          hasShip={coordinateHasShip(coordinate, initialShipCoordinates.current)}
          handleAction={handleAction}
          key={`${x},${y}`}
        />
      )
    }
  }

  return (
    <>
      <GameControlsPanel resetBoard={resetBoard} />
      <GameBoardContainer>
        {
          gameBoardCells
        }
      </GameBoardContainer>
      {
        !remainingShipCoordinates.length && (
          <Typography variant='h5'>You won!</Typography>
        )
      }
    </>
  )
}

export default GameBoard