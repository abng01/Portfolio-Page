import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
    </Routes>
  )
}
