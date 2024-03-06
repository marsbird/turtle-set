import React from 'react';

const Tile = ({ number, pattern, color, shape }) => {
  return (
    <div>
      num: {number}, pat: {pattern}, col: {color}, sha: {shape}
    </div>
  );
};

export default Tile;
