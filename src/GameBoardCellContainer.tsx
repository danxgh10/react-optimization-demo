import React, { CSSProperties } from 'react'
import { styled } from '@mui/material'
import Coordinate from './util/Coordinate'

export interface GameBoardCellContainerProps {
  coordinate: Coordinate
  noBorder?: boolean
  children?: React.ReactNode
}

const StyledGameBoardCellContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const GameBoardCellContainer = ({ coordinate, noBorder, children }: GameBoardCellContainerProps) => {
  console.debug('Rendering GameBoardCellContainer')

  const gridPositionStyle: CSSProperties = {
    gridColumn: coordinate.x,
    gridRow: coordinate.y,
    ...(!noBorder && { border: '1px dashed black' })
  }

  return (
    <StyledGameBoardCellContainer style={gridPositionStyle}>
      { children }
    </StyledGameBoardCellContainer>
  )
}

export default GameBoardCellContainer