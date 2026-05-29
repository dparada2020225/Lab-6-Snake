function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card">
        <div className="snake-logo">🐍</div>
        <h1>SNAKE</h1>
        <p className="subtitle">Classic Edition</p>
        <div className="controls-info">
          <p>🎮 WASD o flechas para mover</p>
          <p>🍎 Come manzanas para crecer</p>
          <p>⚡ La velocidad sube cada 50 pts</p>
        </div>
        <button className="start-btn" onClick={onStart}>
          JUGAR
        </button>
      </div>
    </div>
  );
}

export default StartScreen;