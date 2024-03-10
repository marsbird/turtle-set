import React from 'react';
import turtle from '../img/turtle.png';
import turtleFill from '../img/turtle-fill.png';
import turtleEmpty from '../img/turtle-empty.png';
import starfish from '../img/starfish.png';
import starfishFill from '../img/starfish-fill.png';
import starfishEmpty from '../img/starfish-empty.png';
import fish from '../img/fish.png';
import fishFill from '../img/fish-fill.png';
import fishEmpty from '../img/fish-empty.png';

const Instructions = () => {
  return (
    <div id='instructions-container'>
      <p>
        Find sets of 3 cards from those on the game board. Each card has four
        features: shape, number, color, and pattern. A set will be a group where
        each feature is either all the same OR all different across the three
        cards. For example, these are sets...
      </p>
      <div className='instructions-example-container'>
        <div className='instructions-set-container'>
          <div className='tile instructions'>
            <img src={turtle} alt='' className={`icon-color-1`} />
          </div>
          <div className='tile instructions'>
            <img src={starfish} alt='' className={`icon-color-1`} />
          </div>
          <div className='tile instructions'>
            <img src={fish} alt='' className={`icon-color-1`} />
          </div>
        </div>
        <div className='instructions-set-container'>
          <div className='tile instructions'>
            <img src={fishEmpty} alt='' className={`icon-color-0`} />
            <img src={fishEmpty} alt='' className={`icon-color-0`} />
          </div>
          <div className='tile instructions'>
            <img src={turtleFill} alt='' className={`icon-color-1`} />
          </div>
          <div className='tile instructions'>
            <img src={starfish} alt='' className={`icon-color-2`} />
            <img src={starfish} alt='' className={`icon-color-2`} />
            <img src={starfish} alt='' className={`icon-color-2`} />
          </div>
        </div>
      </div>
      <p>...but these aren't 👀</p>
      <div className='instructions-example-container'>
        <div className='instructions-set-container'>
          <div className='tile instructions'>
            <img src={turtleFill} alt='' className={`icon-color-0`} />
            <img src={turtleFill} alt='' className={`icon-color-0`} />
          </div>
          <div className='tile instructions'>
            <img src={starfishEmpty} alt='' className={`icon-color-0`} />
            <img src={starfishEmpty} alt='' className={`icon-color-0`} />
          </div>
          <div className='tile instructions'>
            <img src={fishFill} alt='' className={`icon-color-0`} />
            <img src={fishFill} alt='' className={`icon-color-0`} />
          </div>
        </div>
        <div className='instructions-set-container'>
          <div className='tile instructions'>
            <img src={turtle} alt='' className={`icon-color-2`} />
          </div>
          <div className='tile instructions'>
            <img src={starfish} alt='' className={`icon-color-0`} />
          </div>
          <div className='tile instructions'>
            <img src={turtle} alt='' className={`icon-color-1`} />
          </div>
        </div>
      </div>
      <p>GOOD LUCK!!!</p>
    </div>
  );
};

export default Instructions;
