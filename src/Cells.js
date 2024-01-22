import "./Cells.css";

function Cells({ className, value, onClick }) {
  return (
    <div onClick={onClick} className={`cell ${className}`}>
      {value}
    </div>
  );
}

export default Cells;
