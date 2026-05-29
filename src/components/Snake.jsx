import { CELL_SIZE } from '../utils/gameUtils';

function SnakeSegment({ segment, index, total }) {
  const isHead = index === 0;
  const alpha  = 1 - (index / total) * 0.4;

  const style = {
    position: 'absolute',
    left:            segment.x * CELL_SIZE + 1,
    top:             segment.y * CELL_SIZE + 1,
    width:           CELL_SIZE - 2,
    height:          CELL_SIZE - 2,
    borderRadius:    isHead ? '6px' : '4px',
    backgroundColor: isHead ? '#4ade80' : `rgba(34, 197, 94, ${alpha})`,
    boxShadow:       isHead ? '0 0 10px #4ade80' : 'none',
    transition:      'left 0.08s, top 0.08s',
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