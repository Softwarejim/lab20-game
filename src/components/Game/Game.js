import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from '../Board/Board';
import '../../index.css';

const Game = () => {
  return (
    <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  )
}

export default Game

