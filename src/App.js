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

    //  0 | 1 | 2
    //-------------
    //  3 | 4 | 5
    //-------------
    //  6 | 7 | 8

    // hortizontal, vertical, and diagonal winnng options of the sqaures
    let winningOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    // loop through the array of possible winners
    for(let i = 0; i < winningOptions.length; i++) {
      //set rows to the index's values
      let rows = winningOptions[i]
      // looping through three values since the winningOptions arrays are each made up of 3 indexes -> rows[0], rows[1], rows[2]
      let index1 = rows[0]
      let index2 = rows[1]
      let index3 = rows[2]
      // checking if all three values are the same
      if (square[index1] && square[index1] === square[index2] && square[index1] === square[index3]){
        // set the winner to one of the values from the winning combintations
        this.setState({
          winner: square[index1]
        })
      }
    }
    console.log(this.state.squares);
  }

  // reload the page when restart button is clicked
  playAgain = () => {
    window.location.reload(false)
  }

  // set each div to a onClick set the userMove with an index number from 0-8
  //set the text for each div to the corresponding index number of the squares array starting at 0 - this will show either 'X' or 'O'
  render = () => {
  return (
    <div className="App">
    <div><h1>The Winner is: {this.state.winner}</h1></div>
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
      <button className="playAgain-btn" onClick={this.playAgain}>Restart Game</button>
    </div>
    );
  }
}

export default App;
