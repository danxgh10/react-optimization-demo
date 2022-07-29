import React, { useCallback } from 'react'
import Coordinate, { equals } from './util/Coordinate'
import useCellStyle from './util/useCellStyle'
import { GameStateAction } from './util/useGameState'
import ExpensiveComponent from './ExpensiveComponent'

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

/**
 * A single cell on the game board, representing either an unknown, ship or water coordinate.
 */
const GameBoardCell = ({ coordinate, hasShip, activated, dispatchGameState }: GameBoardCellProps) => {
  console.debug('Rendering GameBoardCell')

  const style = useCellStyle(coordinate, hasShip, activated);

  const onMouseOver = useCallback(() => {
    !activated && dispatchGameState(coordinate)
  }, [])

  return (
    <ExpensiveComponent style={style} onMouseOver={onMouseOver} />
  )
}

const propsAreEqual = (oldProps: GameBoardCellProps, newProps: GameBoardCellProps) => {
  return oldProps.activated === newProps.activated &&
    oldProps.hasShip === newProps.hasShip &&
    equals(oldProps.coordinate, newProps.coordinate)
}

export default React.memo(GameBoardCell, propsAreEqual)