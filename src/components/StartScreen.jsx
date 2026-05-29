import { useState } from 'react';
import { BOARD_SIZES, DIFFICULTY_SPEEDS } from '../utils/gameUtils';

function StartScreen({ onStart }) {
  const [size, setSize] = useState('mediano');
  const [diff, setDiff] = useState('medio');

  const sizes  = Object.keys(BOARD_SIZES);
  const diffs  = Object.keys(DIFFICULTY_SPEEDS);

  return (
    <div className="start-screen">
      <div className="start-card">
        <div className="snake-logo"></div>
        <h1>SNAKE</h1>
        <p className="subtitle">Classic Edition</p>

        <div className="option-group">
          <p className="option-label">TABLERO</p>
          <div className="option-buttons">
            {sizes.map(s => (
              <button
                key={s}
                className={`option-btn ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="option-group">
          <p className="option-label">DIFICULTAD</p>
          <div className="option-buttons">
            {diffs.map(d => (
              <button
                key={d}
                className={`option-btn ${diff === d ? 'active' : ''} diff-${d}`}
                onClick={() => setDiff(d)}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="controls-info">
          <p>🎮 W-A-S-D o flechas para mover</p>
          <p>🍎 Come manzanas para sumar puntos</p>
        </div>

        <button className="start-btn" onClick={() => onStart(size, diff)}>
          JUGAR 
        </button>
      </div>
    </div>
  );
}

export default StartScreen;