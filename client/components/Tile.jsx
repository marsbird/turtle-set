import React from 'react';

const Tile = ({ number, pattern, color, shape }) => {
  return (
    <div className='tile'>
      {/* num: {number}, pat: {pattern}, col: {color}, sha: {shape} */}
      {number}
    </div>
  );
};

export default Tile;
