import React from 'react'
import { Box, AppBar, Container, IconButton, Icon } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import EmailIcon from '@mui/icons-material/Email'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useThemeToggle } from "../context/ThemeToggle"

export default function Navbar() {
  const { darkMode, toggleTheme } = useThemeToggle()

  return (
    <Box>
      <AppBar position='fixed' sx={{width: "65px", height: "5%", borderRadius: "100%", display: "flex", flexDirection: "column", justifyContent: "center", mr: 5.5, top: "25%", transform: "translateY(-50%)"}}>
        {/* Theme toggle button */}
        <IconButton onClick={toggleTheme} sx={{width: "100%", height: "100%"}}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </AppBar>

      <AppBar position='fixed' sx={{width: "75px", height: "40%", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", mr: 5, top: "50%", transform: "translateY(-50%)"}}>
        <Container disableGutters sx={{height: "100%", width: "80%", display: "flex", flexDirection: "column", gap: 5, justifyContent: "center"}}>
          <IconButton sx={{ width: "100%" }}>
            <HomeIcon fontSize='large' />
          </IconButton>
          <IconButton>
            <PersonIcon fontSize='large' />
          </IconButton>
          <IconButton>
            <ArticleIcon fontSize='large' />
          </IconButton>
          <IconButton>
            <EmailIcon fontSize='large' />
          </IconButton>
        </Container>
      </AppBar>
    </Box>
  )
}
