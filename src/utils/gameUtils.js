export const BOARD_SIZE = 20;
export const CELL_SIZE = 24;

export const DIRECTIONS = {
  UP:    { x: 0,  y: -1 },
  DOWN:  { x: 0,  y:  1 },
  LEFT:  { x: -1, y:  0 },
  RIGHT: { x: 1,  y:  0 },
};

export const OPPOSITES = {
  UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT',
};

export function getInitialSnake() {
  return [
    { x: 10, y: 10 },
    { x: 9,  y: 10 },
    { x: 8,  y: 10 },
  ];
}

export function getRandomFood(snake) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos;
}

export function checkWallCollision(head) {
  return (
    head.x < 0 || head.x >= BOARD_SIZE ||
    head.y < 0 || head.y >= BOARD_SIZE
  );
}

export function checkSelfCollision(head, body) {
  return body.some(s => s.x === head.x && s.y === head.y);
}