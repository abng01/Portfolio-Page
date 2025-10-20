import React from 'react'
import { Box, AppBar, Container, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import EmailIcon from '@mui/icons-material/Email'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useThemeToggle } from "../context/ThemeToggle"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const { darkMode, toggleTheme } = useThemeToggle()

  // Glass + Gloss effect, adjusted for light and dark themes
  const glassGlossEffect = {
    background: darkMode
      ? "linear-gradient(to bottom, rgba(167, 170, 177, 0.25) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(30,30,30,0.4) 100%)"
      : "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(220, 227, 233, 0.32) 20%, rgba(187, 198, 202, 0.36) 100%)",
    backdropFilter: "blur(12px) saturate(150%)",
    WebkitBackdropFilter: "blur(12px) saturate(150%)",
    border: darkMode
      ? "2px solid rgba(255, 255, 255, 0.18)"
      : "2px solid rgba(255, 255, 255, 0.25)",
    boxShadow: darkMode
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)",
  }

  // Icon hover effect
  const iconHover = {
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
      color: darkMode ? "#c9e2ecff" : "#bad7edff",
      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.6))",
    },
  }

  return (
    <Box>
      {/* Theme toggle bubble */}
      <AppBar
        position="fixed"
        sx={{
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 5.5,
          top: "25%",
          transform: "translateY(-50%)",
          ...glassGlossEffect,
        }}
      >
        <IconButton onClick={toggleTheme} sx={{ width: "100%", height: "100%" }}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </AppBar>

      {/* Main navigation bar */}
      <AppBar
        position="fixed"
        sx={{
          width: "75px",
          height: "40%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mr: 5,
          top: "50%",
          transform: "translateY(-50%)",
          ...glassGlossEffect,
        }}
      >
        <Container
          disableGutters
          sx={{
            height: "100%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton component={NavLink} sx={iconHover}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <IconButton component={NavLink} sx={iconHover}>
            <PersonIcon fontSize="large" />
          </IconButton>
          <IconButton component={NavLink} sx={iconHover}>
            <ArticleIcon fontSize="large" />
          </IconButton>
          <IconButton component={NavLink} sx={iconHover}>
            <EmailIcon fontSize="large" />
          </IconButton>
        </Container>
      </AppBar>
    </Box>
  )
}
