import React from 'react';
import './style.css'; 
import HelloWorld from '../HelloWorld/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="Guido" / >
      </header>
    </div>
  );
}

export default App;
