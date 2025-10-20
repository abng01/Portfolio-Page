import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeToggleProvider } from './context/ThemeToggle'
import { CssBaseline } from '@mui/material'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <ThemeToggleProvider>
        <CssBaseline />
        <Navbar />
        <AppRoutes />
      </ThemeToggleProvider>
    </>
  )
}

export default App
