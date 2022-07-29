import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Alert, Backdrop, IconButton, Snackbar, styled } from '@mui/material'

export interface WinDialogProps {
  /** Whether or not the dialog is open */
  open: boolean,
  /** Callback fopr when the dialog is closed */
  handleClose: () => void
}

/** A styled div used to contain and position the win snackbar */
const StyledContainer = styled('div')({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
})

/**
 * A dialog telling the user that they have won the game
 */
const WinDialog = ({ open, handleClose }: WinDialogProps) => {

  /** Action component for the snackbar */
  const SnackbarAction = (
    <IconButton onClick={handleClose} style={{ marginTop: '-5px' }}>
      <CloseRoundedIcon />
    </IconButton>
  )

  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 100 }} onClick={handleClose}/>
      <StyledContainer>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} style={{ position: 'fixed', justifySelf: 'center' }}>
          <Alert variant='filled' severity='success' elevation={0} action={SnackbarAction}>
            <b>You win!</b>
          </Alert>
        </Snackbar>
      </StyledContainer>
    </>
  )
}

export default WinDialog