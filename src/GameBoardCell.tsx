import React from 'react'
import { Button, styled } from '@mui/material'
import GameBoardCellContainer from './GameBoardCellContainer'
import { CELL_SIZE } from './util/GAME_CONFIG'
import Coordinate from './util/Coordinate'

export interface GameBoardCellProps {
  coordinate: Coordinate
  hasShip: boolean
  disabled: boolean
  handleClick: (coordinate: Coordinate) => void
}

type CellColours = 'secondary' | 'success' | 'error'

const StyledButton = styled(Button)({
  margin: 0,
  padding: 0,
  borderRadius: 0,
  maxWidth: CELL_SIZE,
  minWidth: CELL_SIZE,
  maxHeight: CELL_SIZE,
  minHeight: CELL_SIZE
})

const GameBoardCell = ({ coordinate, hasShip, disabled, handleClick }: GameBoardCellProps) => {
  console.debug('Rendering GameBoardCell')

  const handleClickWrapper = () => {
    handleClick(coordinate)
  }

  let cellColour: CellColours = 'secondary'

  if (disabled) {
    // Cell has been clicked, so if tere's a ship there use success colour.
    cellColour = hasShip ? 'success' : 'error'
  }

  return (
    <GameBoardCellContainer coordinate={coordinate}>
      <StyledButton variant='contained' disabled={disabled} color={cellColour} onClick={handleClickWrapper}></StyledButton>
    </GameBoardCellContainer>
  )
}

export default GameBoardCell