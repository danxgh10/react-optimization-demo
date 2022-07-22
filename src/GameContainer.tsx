import React from 'react'
import { styled, Typography } from '@mui/material'
import GameBoard from './GameBoard'

const CenterStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

/**
 * Main container for the game
 */
const GameContainer: React.FC = () => {
  return (
    <>
      <CenterStyled>
        <Typography variant='h2' marginBottom={2}>BattleStick</Typography>
        <GameBoard />
      </CenterStyled>
    </>
  )
}

export default GameContainer