function ResetBtn({ gameover, onClick }) {
  if (gameover) {
    return (
      <div className="resetBtn">
        <button onClick={onClick} className="btn btn-dark mt-3 fs-4">
          Reset
        </button>
      </div>
    );
  }
}

export default ResetBtn;
