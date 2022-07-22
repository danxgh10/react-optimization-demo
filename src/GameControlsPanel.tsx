import React from 'react'
import { Button, styled, Typography } from '@mui/material'

export interface GameControlsPanelProps {
  resetBoard: () => void
}

const StyledGameControlsPanel = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20
})

/**
 * Controls panel
 */
const GameControlsPanel = ({ resetBoard }: GameControlsPanelProps) => {
  return (
    <StyledGameControlsPanel>
      <Button variant='contained' size='large' color='secondary' onClick={resetBoard}><Typography variant='h4'>Reset</Typography></Button>
    </StyledGameControlsPanel>
  )
}

export default GameControlsPanel