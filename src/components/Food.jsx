import { CELL_SIZE } from '../utils/gameUtils';

function Food({ position }) {
  const style = {
    position: 'absolute',
    left:   position.x * CELL_SIZE + 3,
    top:    position.y * CELL_SIZE + 3,
    width:  CELL_SIZE - 6,
    height: CELL_SIZE - 6,
    borderRadius: '2px',
    backgroundColor: '#b03020',
    boxShadow: '0 0 8px rgba(176,48,32,0.5)',
    animation: 'pulse 1s ease-in-out infinite alternate',
  };

  return <div style={style} />;
}

export default Food;