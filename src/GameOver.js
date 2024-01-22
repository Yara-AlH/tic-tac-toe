import "./GameOver.css";

function GameOver({ gameover, displayMessage }) {
  if (gameover) {
    return (
      <div className="gameOver">
        <div className="game-over">{displayMessage}</div>
      </div>
    );
  }
}

export default GameOver;
