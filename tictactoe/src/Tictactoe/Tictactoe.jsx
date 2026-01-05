import React, {useState} from "react";
import "./Tictactoe.css";

function Tictactoe() {
    
    const [board, setBoard] = useState(0);

    //useState to track whose turn it is, ternary operator for x or o.
    const [isNext, setIsNext] = useState(true)
  return (
    <div className="tictactoe">
        <h1>TicTacToe</h1>
    </div>
  );
}

export default Tictactoe;
