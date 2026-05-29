import { useState, useEffect, useCallback, useRef } from 'react';
import {
  DIRECTIONS, OPPOSITES,
  getInitialSnake, getRandomFood,
  checkWallCollision, checkSelfCollision,
  BOARD_SIZES, DIFFICULTY_SPEEDS,
} from '../utils/gameUtils';

export function useGameLoop() {
  const [boardSizeName, setBoardSizeName] = useState('mediano');
  const [difficulty, setDifficulty]       = useState('medio');
  const [snake, setSnake]                 = useState([]);
  const [food, setFood]                   = useState(null);
  const [direction, setDir]               = useState('RIGHT');
  const [score, setScore]                 = useState(0);
  const [gameOver, setGameOver]           = useState(false);
  const [started, setStarted]             = useState(false);

  const dirRef      = useRef('RIGHT');
  const nextDirRef  = useRef('RIGHT'); // dirección pendiente, se aplica en el tick
  const boardSize   = BOARD_SIZES[boardSizeName];
  const speed       = DIFFICULTY_SPEEDS[difficulty];

  const handleKey = useCallback((e) => {
    const map = {
      ArrowUp: 'UP', ArrowDown: 'DOWN',
      ArrowLeft: 'LEFT', ArrowRight: 'RIGHT',
      w: 'UP', s: 'DOWN', a: 'LEFT', d: 'RIGHT',
    };
    const next = map[e.key];
    if (!next) return;
    // No permitir reversa
    if (next === OPPOSITES[dirRef.current]) return;
    nextDirRef.current = next;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
    dirRef.current = nextDirRef.current;
    setDir(nextDirRef.current);

    setSnake(prev => {
      const dir  = DIRECTIONS[dirRef.current];
      const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

      if (
        checkWallCollision(head, boardSize) ||
        checkSelfCollision(head, prev)
      ) {
        setGameOver(true);
        return prev;
      }

      const ateFood = food && head.x === food.x && head.y === food.y;

      if (ateFood) {
        setFood(getRandomFood([head, ...prev], boardSize));
        setScore(s => s + 1);
        return [head, ...prev];
      }

      return [head, ...prev.slice(0, -1)];
    });
}, speed);

    return () => clearInterval(interval);
  }, [started, gameOver, food, speed, boardSize]);

  const startGame = useCallback((sizeName, diff) => {
    const size  = BOARD_SIZES[sizeName];
    const init  = getInitialSnake(size);
    dirRef.current     = 'RIGHT';
    nextDirRef.current = 'RIGHT';
    setSnake(init);
    setFood(getRandomFood(init, size));
    setDir('RIGHT');
    setScore(0);
    setGameOver(false);
    setBoardSizeName(sizeName);
    setDifficulty(diff);
    setStarted(true);
  }, []);

  const restart = useCallback(() => {
    startGame(boardSizeName, difficulty);
  }, [boardSizeName, difficulty, startGame]);

  return {
    snake, food, score, gameOver,
    started, direction, boardSize,
    boardSizeName, difficulty,
    startGame, restart,
  };
}