import { BOARD_SIZE, CELL_SIZE } from '../utils/gameUtils';
import Snake from './Snake';
import Food  from './Food';

function Board({ snake, food, gameOver }) {
  const size = BOARD_SIZE * CELL_SIZE;

  return (
    <div className="board-wrapper">
      <div
        className="board"
        style={{ width: size, height: size, position: 'relative' }}
      >
        {/* Grid lines */}
        {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => (
          <div
            key={i}
            style={{
              position:   'absolute',
              left:       (i % BOARD_SIZE) * CELL_SIZE,
              top:        Math.floor(i / BOARD_SIZE) * CELL_SIZE,
              width:      CELL_SIZE,
              height:     CELL_SIZE,
              borderRight:  '1px solid rgba(255,255,255,0.03)',
              borderBottom: '1px solid rgba(255,255,255,0.03)',
            }}
          />
        ))}

        <Food  position={food}    />
        <Snake segments={snake}   />

        {gameOver && (
          <div className="game-over-overlay">
            <p>GAME OVER</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Board;