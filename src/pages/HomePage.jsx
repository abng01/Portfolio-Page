import React from 'react'
import { Box, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Box>
      <Box>
        <Typography variant="h5">Hi there! I'm </Typography>
        <Typography variant="h1" sx={{fontWeight: "bold", color: "#84badcff"}}>Alicia Bang</Typography>
        <Typography variant="h3">Full-stack developer</Typography>
        <Typography variant="p">I'm a passionate developer focused on creating modern, intuitive and impactful web applications.</Typography>
      </Box>
    </Box>
  )
}
