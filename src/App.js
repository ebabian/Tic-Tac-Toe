import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <div id="modal">
      <div id="modal-text">
        <button className="modal-buttons" id="close">Close</button>
      </div>
    </div>
    <div className="container">
      <div className="square" id="1">1</div>
      <div className="square" id="2">2</div>
      <div className="square" id="3">3</div>
      <div className="square" id="4">4</div>
      <div className="square" id="5">5</div>
      <div className="square" id="6">6</div>
      <div className="square" id="7">7</div>
      <div className="square" id="8">8</div>
      <div className="square" id="9">9</div>
    </div>
    </div>
  );
}

export default App;
