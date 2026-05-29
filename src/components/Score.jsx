function Score({ score, boardSize, difficulty }) {
  return (
    <div className="score-bar">
      <div className="score-item">
        <span className="score-label">SCORE</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-item">
        <span className="score-label">TABLERO</span>
        <span className="score-value score-small">{boardSize.toUpperCase()}</span>
      </div>
      <div className="score-item">
        <span className="score-label">DIFICULTAD</span>
        <span className={`score-value score-small diff-text-${difficulty}`}>
          {difficulty.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default Score;