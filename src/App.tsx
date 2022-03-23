
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Cell  from './components/Cell/Cell'

function App() {
  return (
    <div className="App">
      {Array.from(Array(10).keys()).map(n => <Cell></Cell>)}
    </div>
  )
}

export default App
