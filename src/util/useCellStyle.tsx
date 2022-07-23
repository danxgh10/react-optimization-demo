import { CSSProperties } from 'react'
import Coordinate from './Coordinate'
import { CLOUD_COLOR, SHIP_COLOR, WATER_COLOR } from '../settings'

const useCellStyle = (coordinate: Coordinate, hasShip: boolean, disabled: boolean): CSSProperties => {
  let backgroundColor = CLOUD_COLOR
  if (disabled) {
    backgroundColor = hasShip ? SHIP_COLOR : WATER_COLOR
  }

  return {
    gridColumn: coordinate.x,
    gridRow: coordinate.y,
    backgroundColor,
  }
}

export default useCellStyle