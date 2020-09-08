import React, { useState } from 'react'
import Decrement from './components/decrement.jsx'
import Increment from './components/increment.jsx'

function App() {
  return (
    <div className="App">
      <p>Hello Vite + React!</p>
      <p>
        <Decrement/>
        <Increment/>
      </p>
    </div>
  )
}

export default App
