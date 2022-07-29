import React from 'react'
import { Button, styled, Typography } from '@mui/material'

export interface GameControlsPanelProps {
  /** A callback to reset the board and start a new game */
  resetBoard: () => void
}

/**
 * A styled div for the controls panel
 */
const StyledGameControlsPanel = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20
})

/**
 * Control panel for the game
 */
const GameControlsPanel = ({ resetBoard }: GameControlsPanelProps) => {
  return (
    <StyledGameControlsPanel>
      <Button variant='contained' size='large' color='success' onClick={resetBoard}>
        <Typography variant='h4'>Reset</Typography>
      </Button>
    </StyledGameControlsPanel>
  )
}

export default React.memo(GameControlsPanel)