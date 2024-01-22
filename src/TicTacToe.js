import { useState, useEffect } from "react";
import GameGrid from "./GameGrid.js";
import ResetBtn from "./ResetBtn.js";
import GameOver from "./GameOver.js";
import "./TicTacToe.css";
import ConfettiExplosion from "react-confetti-explosion";
import click from "./sounds/click.mp3";
import winner from "./sounds/winner.mp3";

function TicTacToe() {
  const PLAYER_X = "X";
  const PLAYER_O = "O";

  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [winnerMessage, setWinnerMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const winningCombos = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [6, 4, 2], strikeClass: "strike-diagonal-2" },
  ];

  function checkWinner(cells, setStrikeClass) {
    for (const { combo, strikeClass } of winningCombos) {
      const cellValue1 = cells[combo[0]];
      const cellValue2 = cells[combo[1]];
      const cellValue3 = cells[combo[2]];

      if (
        cellValue1 !== null &&
        cellValue1 === cellValue2 &&
        cellValue1 === cellValue3
      ) {
        setStrikeClass(strikeClass);
        setWinnerMessage(`Player ${cellValue1} wins!`);
        setGameOver(true);
        setIsExploding(true);

        new Audio(winner).play();
      }
    }

    const allCellsAreFilledIn = cells.every((cell) => cell !== null);
    if (allCellsAreFilledIn) {
      setWinnerMessage("It's a draw!");
      setGameOver(true);
    }
  }

  function handleCellClick(index) {
    if (gameOver === true) {
      return;
    }

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

    new Audio(click).play();
  }

  function handleResetClick() {
    setCells(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setWinnerMessage("");
    setGameOver(false);
    setIsExploding(false);
  }

  useEffect(() => {
    checkWinner(cells, setStrikeClass);
  }, [cells]);

  return (
    <div className="ticTacToe">
      <h1>Tic Tac Toe </h1>
      {isExploding && <ConfettiExplosion />}
      <GameGrid
        cells={cells}
        onCellClick={handleCellClick}
        strikeClass={strikeClass}
      />

      <GameOver gameover={gameOver} displayMessage={winnerMessage} />
      <ResetBtn gameover={gameOver} onClick={handleResetClick} />
    </div>
  );
}

export default TicTacToe;
