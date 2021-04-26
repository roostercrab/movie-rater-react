import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    fetch('127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ',
      },
    })
  }, [])

  return (
    <div className='App'>
      <h1>Movie Rater</h1>
      <div className='layout'>
        <div>Movie List</div>
        <div>Description</div>
      </div>
    </div>
  )
}

export default App
