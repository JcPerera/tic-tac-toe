import React from "react";
import Square from "./Square";


const Board = (props) => {

  const handleSquareClick = (index) => {
    if(props.winner)
      return
    if (props.squares[index] == null) {
      let newSquares = [...props.squares];
      newSquares[index] = props.round % 2 === 0 ? "X" : "O";
      let newRound = props.round + 1;
      props.setSquares(newSquares);
      props.setRound(newRound);
    } else {
      alert("Invalid Move");
    }
  };

  return (
    <div className="board">
      {props.squares.map((square, index) => (
        <Square
          square={square}
          key={index}
          onClick={() => {
            handleSquareClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default Board;
