import './App.css';
import { React, Component} from 'react';
import Box from './components/Box'
import Board from './components/Board'

function App() {
  const board = ['X','X','X','X','X','X','X','X','X',]
  return (
    <div className="App">
     <Board board={board} onClick={null} />
    </div>
  )
}


export default App;
