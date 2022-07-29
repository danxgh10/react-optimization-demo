import React, { CSSProperties } from 'react'
import { styled } from '@mui/material'
import { CELL_SIZE, EXPENSIVE_COMPONENT_LOAD_TIME } from './settings'

/** A styled div representing a single cell  */
const StyledGameBoardCell = styled('div')({
  margin: 0,
  border: '1px dashed black',
  padding: 0,
  width: CELL_SIZE,
  height: CELL_SIZE
})

export interface ExpensiveComponentProps {
  style: CSSProperties
  onMouseOver: () => void
}

/**
 * Never use this in a real project. This is purposely taking up CPU cycles
 * to mimic an expensive component, there are better ways to do this.
 */
const blockFor = (milliseconds: number) => {
  const endTime = Date.now() + milliseconds

  while (Date.now() < endTime) {}
}

const ExpensiveComponent = ({ style, onMouseOver }: ExpensiveComponentProps) => {
  // Intentionally add some overhead to this component for demonstration purposes
  blockFor(EXPENSIVE_COMPONENT_LOAD_TIME)

  return (
    <StyledGameBoardCell style={style} onMouseOver={onMouseOver} />
  )
}

export default React.memo(ExpensiveComponent)