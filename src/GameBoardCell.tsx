import React from 'react'
import { Button, styled } from '@mui/material'
import GameBoardCellContainer from './GameBoardCellContainer'
import { CELL_SIZE } from './util/GAME_CONFIG'
import Coordinate from './util/Coordinate'

export interface GameBoardCellProps {
  coordinate: Coordinate
  hasShip: boolean
  disabled: boolean
  handleAction: (coordinate: Coordinate) => void
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

/**
 * A single cell on the game board, representing either an unknown, ship or water coordinate.
 */
const GameBoardCell = ({ coordinate, hasShip, disabled, handleAction }: GameBoardCellProps) => {
  console.debug('Rendering GameBoardCell')

  const handleMouseOver = () => {
    handleAction(coordinate)
  }

  let cellColour: CellColours = 'secondary'

  if (disabled) {
    // Cell has been activated, so if there's a ship there use success colour.
    cellColour = hasShip ? 'success' : 'error'
  }

  return (
    <GameBoardCellContainer coordinate={coordinate}>
      { /** Using a MUI Button to intentially add a small amount of bloat to each cell */ }
      <StyledButton variant='contained' disabled={disabled} color={cellColour} onMouseOver={handleMouseOver}></StyledButton>
    </GameBoardCellContainer>
  )
}

export default GameBoardCell