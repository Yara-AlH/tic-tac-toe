import Cells from "./Cells";
import "./GameGrid.css";

function GameGrid({ cells, onCellClick }) {
  return (
    <div className="gameGrid">
      <Cells
        onClick={() => onCellClick(0)}
        value={cells[0]}
        className="bottom right"
      />
      <Cells
        onClick={() => onCellClick(1)}
        value={cells[1]}
        className="bottom right"
      />
      <Cells
        onClick={() => onCellClick(2)}
        value={cells[2]}
        className="bottom "
      />
      <Cells
        onClick={() => onCellClick(3)}
        value={cells[3]}
        className="bottom right"
      />
      <Cells
        onClick={() => onCellClick(4)}
        value={cells[4]}
        className="bottom right"
      />
      <Cells
        onClick={() => onCellClick(5)}
        value={cells[5]}
        className="bottom "
      />
      <Cells
        onClick={() => onCellClick(6)}
        value={cells[6]}
        className="right"
      />
      <Cells
        onClick={() => onCellClick(7)}
        value={cells[7]}
        className="right"
      />
      <Cells onClick={() => onCellClick(8)} value={cells[8]} />
    </div>
  );
}

export default GameGrid;
