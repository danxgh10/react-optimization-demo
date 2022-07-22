import Coordinate, { equals } from './Coordinate'

/**
 * Check whether or not a given coordinate has part of a ship inside it
 */
const coordinateHasShip = (coordinate: Coordinate, shipCoordinates: Array<Coordinate>) => {
  return shipCoordinates.some(shipCoordinate => equals(shipCoordinate, coordinate))
}

export default coordinateHasShip