import React from 'react';
// import OffClick from 'react-offclick';
import './App.css';

class App extends React.Component {
  state = {
    // set an array squares of 9 indexes set to null
    squares: Array(9).fill(""),
    // set first player move to 'X'
    nextPlayer: 'X',
    winner: ''
  }

  userMove = (index) => {
    // set variables to state of nextPlayer and the array of squares
    let nextPlayer = this.state.nextPlayer
    let square = this.state.squares

    //set the index of a square to 'X'
    square[index] = nextPlayer;
    //set nextPlayer to 'O' if nextPlayer is 'X' otherwise set it to 'X'
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    console.log(`nextPlayer ${nextPlayer}`);
    // set nextPlayer and square to state
    this.setState({
      nextPlayer: nextPlayer,
      squares: square
    })
    // find winner
    //
      if (this.state.squares[0] === 'X' && this.state.squares[1] === 'X' && this.state.squares[2] === 'X') {
        console.log('X wins');
        this.setState({
          winner: 'The winner is: X'
        })
    }
    console.log(this.state.squares);
  }

  playAgain = () => {
    window.location.reload(false)
  }

  render = () => {
  return (
    <div className="App">
    <div><h1>{this.state.winner}</h1></div>
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
    <button className="playAgain-btn" onClick={this.playAgain}>Play Again</button>
    </div>
  );
}
}

export default App;
