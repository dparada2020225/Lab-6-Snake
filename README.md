# 🐍 Snake Game

Implementación del juego clásico Snake hecha con **React + Vite**.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Cómo jugar

- Usa **WASD** o las **flechas del teclado** para mover la serpiente.
- Come las manzanas 🍎 para crecer y sumar puntos.
- Cada **50 puntos** sube el nivel y la velocidad aumenta.
- El juego termina si chocas con la pared o contigo mismo.

## Estructura

```
src/
├── components/
│   ├── Board.jsx        # Tablero del juego
│   ├── Snake.jsx        # Serpiente
│   ├── Food.jsx         # Comida
│   ├── Score.jsx        # Puntaje y nivel
│   └── StartScreen.jsx  # Pantalla de inicio
├── hooks/
│   └── useGameLoop.js   # Lógica principal del juego
├── utils/
│   └── gameUtils.js     # Constantes y funciones puras
└── App.jsx
```