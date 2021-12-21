import {useState, useEffect} from "react";
import Board from "./Board"

const defaultSuquares = Array(9).fill(null);

const Game = () => {
  const [squares, setSquares] = useState(defaultSuquares);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  const calculateWinner = (squares) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  return (
    <div className="game">
      <h1 className="banner">Lets play Tic-Tac-Toe</h1>
      <Board
        winner={winner}
        round={round}
        setRound={setRound}
        squares={squares}
        setSquares={setSquares}
      />
      <p className="banner">
        {winner
          ? "Player " + winner + " Won"
          : round % 2 === 0
          ? "Player X's Round"
          : "Player O's round"}
      </p>
    </div>
  );
};

export default Game;
