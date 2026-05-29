import { CELL_SIZE } from '../utils/gameUtils';

function SnakeSegment({ segment, index, total }) {
  const isHead = index === 0;
  const progress = index / total;
  const alpha = 1 - progress * 0.55;

  const headColor   = '#3a7a4a';
  const bodyColor   = `rgba(45, 106, 63, ${alpha})`;

  const style = {
    position: 'absolute',
    left:            segment.x * CELL_SIZE + 1,
    top:             segment.y * CELL_SIZE + 1,
    width:           CELL_SIZE - 2,
    height:          CELL_SIZE - 2,
    borderRadius:    isHead ? '3px' : '2px',
    backgroundColor: isHead ? headColor : bodyColor,
    boxShadow:       isHead ? '0 0 6px rgba(58,122,74,0.6)' : 'none',
    transition:      'left 0.07s linear, top 0.07s linear',
  };

  return <div style={style} />;
}

function Snake({ segments }) {
  return (
    <>
      {segments.map((seg, i) => (
        <SnakeSegment
          key={i}
          segment={seg}
          index={i}
          total={segments.length}
        />
      ))}
    </>
  );
}

export default Snake;