import React from 'react'
import { CssBaseline } from '@mui/material'
import '@fontsource/basic'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import GameContainer from './GameContainer'

const themeOptions: ThemeOptions = {
  palette: {
    action: {
      disabledBackground: '',
      disabled: '#FFFFFF',
    },
    background: {
      default: '#FCFCFC',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#bbbbbb',
    },
    secondary: {
      main: '#bbbbbb',
    },
    error: {
      main: '#2671eb',
    },
    success: {
      main: '#d64045',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Basic', 'sans-serif'].join(','),
  },
}

const theme = createTheme(themeOptions)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameContainer />
    </ThemeProvider>
  )
}

export default App
