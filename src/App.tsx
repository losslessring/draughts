
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Cell  from './components/Cell/Cell'

function App() {
  return (
    <div className="App">
      <div className="Grid">
        {Array.from(Array(64).keys()).map(n => <Cell></Cell>)}
      </div>
    </div>
  )
}

export default App
