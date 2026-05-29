export const CELL_SIZE = 24;

export const BOARD_SIZES = {
  pequeño: 15,
  mediano: 20,
  grande:  25,
};

export const DIFFICULTY_SPEEDS = {
  fácil:  220,
  medio:  140,
  difícil: 75,
};

export const DIRECTIONS = {
  UP:    { x: 0,  y: -1 },
  DOWN:  { x: 0,  y:  1 },
  LEFT:  { x: -1, y:  0 },
  RIGHT: { x: 1,  y:  0 },
};

export const OPPOSITES = {
  UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT',
};

export function getInitialSnake(boardSize) {
  const mid = Math.floor(boardSize / 2);
  return [
    { x: mid,     y: mid },
    { x: mid - 1, y: mid },
    { x: mid - 2, y: mid },
  ];
}

export function getRandomFood(snake, boardSize) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos; 
}

export function checkWallCollision(head, boardSize) {
  return (
    head.x < 0 || head.x >= boardSize ||
    head.y < 0 || head.y >= boardSize
  );
}

export function checkSelfCollision(head, body) {
  // Solo checa desde índice 1 en adelante (no la cabeza misma)
  return body.slice(1).some(s => s.x === head.x && s.y === head.y);
}