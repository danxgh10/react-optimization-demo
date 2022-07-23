import React from 'react'
import { styled } from '@mui/material'
import { CELL_SIZE } from './settings'
import Coordinate from './util/Coordinate'
import useCellStyle from './util/useCellStyle'
import { GameStateAction } from './util/useGameState'

export interface GameBoardCellProps {
  /** The coordinate of this cell */
  coordinate: Coordinate
  /** Whether or not this cell has a ship on it */
  hasShip: boolean
  /** Whether or not this cell has been revealed */
  activated: boolean
  /** A dispatch function to update the shared state.
   * Note that this does NOT change between re renders,
   * so it doesn't need to be in a useCallback call */
  dispatchGameState: React.Dispatch<GameStateAction>
}

/** A styled div representing a single cell  */
const StyledGameBoardCell = styled('div')({
  margin: 0,
  border: '1px dashed black',
  padding: 0,
  width: CELL_SIZE,
  height: CELL_SIZE
})

/**
 * A single cell on the game board, representing either an unknown, ship or water coordinate.
 */
const GameBoardCell = ({ coordinate, hasShip, activated, dispatchGameState }: GameBoardCellProps) => {
  console.debug('Rendering GameBoardCell')

  const style = useCellStyle(coordinate, hasShip, activated);

  const onMouseOver = () => {
    !activated && dispatchGameState(coordinate)
  }

  return (
    <StyledGameBoardCell style={style} onMouseOver={onMouseOver} />
  )
}

export default GameBoardCell