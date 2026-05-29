import { CELL_SIZE } from '../utils/gameUtils';

function Food({ position }) {
  const style = {
    position: 'absolute',
    left:   position.x * CELL_SIZE,
    top:    position.y * CELL_SIZE,
    width:  CELL_SIZE,
    height: CELL_SIZE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: CELL_SIZE * 0.75,
    animation: 'pulse 0.8s ease-in-out infinite alternate',
  };

  return <div style={style}>🍎</div>;
}

export default Food;