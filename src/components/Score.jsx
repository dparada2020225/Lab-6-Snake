function Score({ score, level }) {
  return (
    <div className="score-bar">
      <div className="score-item">
        <span className="score-label">SCORE</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-item">
        <span className="score-label">LEVEL</span>
        <span className="score-value">{level}</span>
      </div>
    </div>
  );
}

export default Score;