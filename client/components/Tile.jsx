import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUserSelection,
  removeUserSelection,
  refresh,
  incrementScore,
  clearSelection,
} from '../slices/tileSlice.js';
import turtle from '../img/turtle.png';
import turtleFill from '../img/turtle-fill.png';
import turtleEmpty from '../img/turtle-empty.png';
import starfish from '../img/starfish.png';
import starfishFill from '../img/starfish-fill.png';
import starfishEmpty from '../img/starfish-empty.png';
import fish from '../img/fish.png';
import fishFill from '../img/fish-fill.png';
import fishEmpty from '../img/fish-empty.png';

const Tile = ({ _id, number, pattern, color, shape }) => {
  const dispatch = useDispatch();
  const userSelection = useSelector((state) => state.tiles.userSelection);
  const match = useSelector((state) => state.tiles.match);

  let classes = 'tile';
  if (userSelection.includes(_id)) {
    classes += ' selected';
  }

  let icon;
  switch (shape) {
    case 0:
      switch (pattern) {
        case 0:
          icon = turtle;
          break;
        case 1:
          icon = turtleFill;
          break;
        case 2:
          icon = turtleEmpty;
          break;
      }
      break;
    case 1:
      switch (pattern) {
        case 0:
          icon = starfish;
          break;
        case 1:
          icon = starfishFill;
          break;
        case 2:
          icon = starfishEmpty;
          break;
      }
      break;
    case 2:
      switch (pattern) {
        case 0:
          icon = fish;
          break;
        case 1:
          icon = fishFill;
          break;
        case 2:
          icon = fishEmpty;
          break;
      }
      break;
  }

  const icons = [];
  for (let i = 0; i <= number; i++) {
    icons.push(icon);
  }

  if (match) {
    dispatch(incrementScore());
    dispatch(refresh(userSelection));
  } else if (userSelection.length >= 3) {
    dispatch(clearSelection());
  }

  return (
    <div
      className={classes}
      onClick={(e) => {
        userSelection.includes(_id)
          ? dispatch(removeUserSelection(_id))
          : dispatch(addUserSelection(_id));
      }}
    >
      {icons.map((icon, i) => {
        return (
          <img key={i} src={icon} alt='' className={`icon-color-${color}`} />
        );
      })}
    </div>
  );
};

export default Tile;
