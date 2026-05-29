import { CELL_SIZE } from '../utils/gameUtils';
import Snake from './Snake';
import Food  from './Food';

function Board({ snake, food, gameOver, boardSize }) {
  const size = boardSize * CELL_SIZE;

  return (
    <div className="board-wrapper">
      <div className="board" style={{ width: size, height: size, position: 'relative' }}>
        {Array.from({ length: boardSize * boardSize }).map((_, i) => (
          <div
            key={i}
            style={{
              position:     'absolute',
              left:         (i % boardSize) * CELL_SIZE,
              top:          Math.floor(i / boardSize) * CELL_SIZE,
              width:        CELL_SIZE,
              height:       CELL_SIZE,
              borderRight:  '1px solid rgba(255,255,255,0.03)',
              borderBottom: '1px solid rgba(255,255,255,0.03)',
            }}
          />
        ))}

        {food  && <Food  position={food} />}
        {snake && <Snake segments={snake} />}

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