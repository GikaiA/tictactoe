import React, { useState } from "react";
import "./Tictactoe.css";


function Tictactoe() {
  //useState to track the board, initialized to an array of 9 nulls.
  const [board, setBoard] = useState(Array(9).fill(null));

  //useState to track whose turn it is, ternary operator for x or o.
  const [isNext, setIsNext] = useState(true);

  //functions for checking the win
  const calculateWinner = (squares) => {
    // all potential winning combinations
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //for loop for checking each combination; increases by 1
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (index) => {
    // if statement for the cell. if its filled, then do nothing
    // OR check if the game has already been won
    if (board[index] || calculateWinner(board)){
      return;
    }

    //creates new board using a spread operator
    const newBoard = [...board];
    // puts x or o in the cell based on whose turn it is 
    newBoard[index] = isNext ? "X" : "O";

    //updates board
    setBoard(newBoard);

    //switches turn for each player
    setIsNext(!isNext);
  }

  //function to reset the game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
  }

  const winner = calculateWinner(board);

  return (
    <div className="tictactoe">
      <h1>TicTacToe</h1>
      {/* Show winner or current turn */}
      <div className="status">
        {winner ? `Winner: ${winner}!`: `Player ${isNext ? "X" : "O"}'s turn`}
      </div>
      {/* Render the board */}
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell"
          //click handler for each cell
          onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default Tictactoe;