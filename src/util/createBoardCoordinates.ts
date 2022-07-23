import { BOARD_SIZE } from '../settings'
import Coordinate from './Coordinate'

/**
 * Create and return a list of all of the coordinates that make up the board
 */
const createBoardCoordinates = (): Coordinate[] => {
  const coordinates = []
  
  for (let x = 1; x <= BOARD_SIZE; x++) {
    for (let y = 1; y <= BOARD_SIZE; y++) {
      coordinates.push({ x, y })
    }
  }

  return coordinates
}

export default createBoardCoordinates