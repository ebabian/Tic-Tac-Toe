import React from 'react';
// import OffClick from 'react-offclick';
import './App.css';

class App extends React.Component {
  state = {
    // nextUser (next player) is set to true to toggle
    nextUser: true,
    // set an array squares of 9 indexes set to null
    squares: Array(9).fill(null)
  }

  userMove = (index) => {
      //store indexes of square array in squares variable
      let squares = this.state.squares.slice();
      // set the indexes of the array to 'X' if nextUser is true or 'O' if false
      squares[index] = this.state.nextUser ? 'X' : 'O'
      // set state so sqaures is set the the variable squares and nextUser !nextUser
      this.setState({
        squares: squares,
        nextUser: !this.state.nextUser
      })
  }


  render = () => {
  return (
    <div className="App">
    <div className="container">
      <div onClick={() => this.userMove(0)} className="square" id="0">{this.state.squares[0]}</div>
      <div onClick={() => this.userMove(1)} className="square" id="1">{this.state.squares[1]}</div>
      <div onClick={() => this.userMove(2)} className="square" id="2">{this.state.squares[2]}</div>
      <div onClick={() => this.userMove(3)} className="square" id="3">{this.state.squares[3]}</div>
      <div onClick={() => this.userMove(4)} className="square" id="4">{this.state.squares[4]}</div>
      <div onClick={() => this.userMove(5)} className="square" id="5">{this.state.squares[5]}</div>
      <div onClick={() => this.userMove(6)} className="square" id="6">{this.state.squares[6]}</div>
      <div onClick={() => this.userMove(7)} className="square" id="7">{this.state.squares[7]}</div>
      <div onClick={() => this.userMove(8)} className="square" id="8">{this.state.squares[8]}</div>
    </div>
    </div>
  );
}
}

export default App;
