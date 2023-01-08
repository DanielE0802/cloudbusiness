import React, { useContext } from 'react'
import { ThemeContext, tokens } from '../../theme'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import { Box, IconButton, useTheme } from '@mui/material'
import { DarkModeOutlined } from '@mui/icons-material'

function Header() {

  const Theme = useTheme()
  const colors = tokens(Theme.palette.mode)
  const colorMode = useContext(ThemeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <IconButton onClick={colorMode.toggleColorMode} >
        {Theme.palette.mode === 'dark'?
          <LightModeOutlined  />:
          <DarkModeOutlined />
          
        }
      </IconButton>
    </Box>
  )
}

export default Header