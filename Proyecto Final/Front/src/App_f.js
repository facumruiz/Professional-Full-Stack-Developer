import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Home2 from './Home2'
function App() {
  let productos=[
    {
      id:1,
      "name":"moto x"
    },
    {
      id:1,
      "name":"moto g"
    }
  ]
  return (
    <div className="App">
      <Home data={productos} >
        <div>Hola Mundo 2</div>
      </Home>

      <Home2 />
    </div>
  );
}

export default App;
