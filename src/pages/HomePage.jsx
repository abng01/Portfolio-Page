import React from 'react'
import { Box, Typography } from '@mui/material'
import placeholderImg from '../assets/Placeholder_view_vector.svg.png'

export default function HomePage() {
  return (
    <Box sx={{display: "flex", flexWrap: "wrap", gap: 5}}>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <Typography variant="h5" sx={{marginBottom: 2}}>Hi there! I'm </Typography>
        <Typography variant="h1" sx={{fontWeight: "bold", color: "#84badcff"}}>Alicia Bang</Typography>
        <Typography variant="h3">Full-stack developer</Typography>
        <Typography sx={{marginTop: 3}}>I'm a passionate developer focused on creating modern, intuitive and impactful web applications.</Typography>
      </Box>
      <img src={placeholderImg} />
    </Box>
  )
}
