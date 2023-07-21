import './App.css';
import { React, Component} from 'react';
import Box from './components/Box'

function App() {
  const board = ['X','X','X','X','X','X','X','X','X',]
  return (
    <div className="App">
     <Box value='x' onClick={null}/>
    </div>
  )
}


export default App;
