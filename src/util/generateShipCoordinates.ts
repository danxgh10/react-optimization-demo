import { BOARD_SIZE, SHIP_SIZE } from './GAME_CONFIG'
import Coordinate from './Coordinate'

/**
 * Get a random int between 0 and max
 */
const getRandom = (max: number) => Math.floor(Math.random() * (max + 1))

/**
 * Generates an array of coordinates representing the location of a ship.
 */
const generateShipCoordinates = (): Array<Coordinate> => {
  if (SHIP_SIZE > BOARD_SIZE) {
    throw new Error('Invalid config: BOARD_SIZE must be greater than SHIP_SIZE')
  }

  const horizontal = !!getRandom(1)

  const xBound = (horizontal ? BOARD_SIZE - SHIP_SIZE : BOARD_SIZE) - 1
  const yBound = (horizontal ? BOARD_SIZE : BOARD_SIZE - SHIP_SIZE) - 1

  const shipStart: Coordinate = {
    x: getRandom(xBound),
    y: getRandom(yBound)
  }

  const shipCoordinates: Array<Coordinate> = []

  for (let i = 0; i < SHIP_SIZE; i++) {
    const newX = (horizontal ? shipStart.x + i : shipStart.x) + 1
    const newY = (horizontal ? shipStart.y : shipStart.y + i) + 1
    shipCoordinates.push({ x: newX, y: newY })
  }

  return shipCoordinates
}

export default generateShipCoordinates