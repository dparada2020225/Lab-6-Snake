import Board       from './components/Board';
import Score       from './components/Score';
import StartScreen from './components/StartScreen';
import { useGameLoop } from './hooks/useGameLoop';
import './App.css';

function App() {
  const {
    snake, food, score, gameOver,
    started, level, setStarted, restart,
  } = useGameLoop();

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="game-container">
      <h1 className="game-title">🐍 SNAKE</h1>
      <Score score={score} level={level} />
      <Board snake={snake} food={food} gameOver={gameOver} />
      {gameOver && (
        <button className="restart-btn" onClick={restart}>
          REINICIAR
        </button>
      )}
      {!gameOver && (
        <p className="hint">WASD / ↑↓←→ para mover</p>
      )}
    </div>
  );
}

export default App;