import { useState, useEffect, useCallback, useRef } from 'react';
import {
  DIRECTIONS, OPPOSITES,
  getInitialSnake, getRandomFood,
  checkWallCollision, checkSelfCollision,
} from '../utils/gameUtils';

export function useGameLoop() {
  const [snake, setSnake]       = useState(getInitialSnake());
  const [food, setFood]         = useState({ x: 15, y: 10 });
  const [direction, setDir]     = useState('RIGHT');
  const [score, setScore]       = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted]   = useState(false);
  const [level, setLevel]       = useState(1);

  const dirRef = useRef(direction);

  const speed = Math.max(80, 200 - (level - 1) * 30);

  // Actualiza dirRef cuando cambia direction
  useEffect(() => { dirRef.current = direction; }, [direction]);

  const handleKey = useCallback((e) => {
    const map = {
      ArrowUp: 'UP', ArrowDown: 'DOWN',
      ArrowLeft: 'LEFT', ArrowRight: 'RIGHT',
      w: 'UP', s: 'DOWN', a: 'LEFT', d: 'RIGHT',
    };
    const next = map[e.key];
    if (!next) return;
    if (next === OPPOSITES[dirRef.current]) return;
    setDir(next);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake(prev => {
        const dir  = DIRECTIONS[dirRef.current];
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

        if (checkWallCollision(head) || checkSelfCollision(head, prev)) {
          setGameOver(true);
          return prev;
        }

        const ateFood = head.x === food.x && head.y === food.y;
        const newSnake = ateFood ? [head, ...prev] : [head, ...prev.slice(0, -1)];

        if (ateFood) {
          setFood(getRandomFood(newSnake));
          setScore(s => {
            const ns = s + 10;
            if (ns % 50 === 0) setLevel(l => l + 1);
            return ns;
          });
        }

        return newSnake;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [started, gameOver, food, speed]);

  const restart = useCallback(() => {
    const init = getInitialSnake();
    setSnake(init);
    setFood(getRandomFood(init));
    setDir('RIGHT');
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setStarted(true);
  }, []);

  return { snake, food, score, gameOver, started, level, setStarted, restart };
}