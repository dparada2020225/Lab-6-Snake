import Board       from './components/Board';
import Score       from './components/Score';
import StartScreen from './components/StartScreen';
import { useGameLoop } from './hooks/useGameLoop';
import './App.css';

function App() {
  const {
    snake, food, score, gameOver,
    started, boardSize,
    boardSizeName, difficulty,
    startGame, restart,
  } = useGameLoop();

  if (!started) {
    return <StartScreen onStart={startGame} />;
  }

  return (
    <div className="game-container">
      <h1 className="game-title"> SNAKE</h1>
      <Score score={score} boardSize={boardSizeName} difficulty={difficulty} />
      <Board snake={snake} food={food} gameOver={gameOver} boardSize={boardSize} />
      {gameOver && (
        <div className="game-over-actions">
          <button className="restart-btn" onClick={restart}>REINICIAR</button>
          <button className="menu-btn" onClick={() => window.location.reload()}>MENÚ</button>
        </div>
      )}
      {!gameOver && (
        <p className="hint">WASD / ↑↓←→ para mover</p>
      )}
    </div>
  );
}

export default App;