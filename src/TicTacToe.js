import { useState } from "react";
import GameGrid from "./GameGrid.js";

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  function handleCellClick(index) {
    if (cells[index] !== null) {
      return;
    }

    const newCells = [...cells];
    newCells[index] = playerTurn;
    setCells(newCells);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  }

  return (
    <div className="ticTacToe">
      <GameGrid cells={cells} onCellClick={handleCellClick} />
    </div>
  );
}

export default TicTacToe;
