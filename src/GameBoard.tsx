import React, { useRef, useState } from 'react'
import { styled } from '@mui/material'
import GameBoardCell from './GameBoardCell';
import { BOARD_SIZE } from './util/GAME_CONFIG';
import generateShipCoordinates from './util/generateShipCoordinates';
import Coordinate from './util/Coordinate';
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

const GameBoard: React.FC = () => {
  console.debug('Rendering GameBoard')
  
  const initialShipCoordinates = useRef(generateShipCoordinates())
  const [boardState, setboardState] = useState<boolean[][]>(createInitialBoardState())
  
  const handleClick = (coordinate: Coordinate) => {
    const cloneBoardState = [...boardState]
    cloneBoardState[coordinate.x-1][coordinate.y-1] = true
    setboardState(cloneBoardState)
  }

  const resetBoard = () => {
    setboardState(createInitialBoardState())
    initialShipCoordinates.current = generateShipCoordinates()
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
          handleClick={handleClick}
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
    </>
  )
}

export default GameBoard