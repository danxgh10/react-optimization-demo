export default interface Coordinate {
  x: number
  y: number
}

export const equals = (coord1: Coordinate, coord2: Coordinate) => {
  return coord1.x == coord2.x && coord1.y === coord2.y
}