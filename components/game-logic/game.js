'use strict';

import Board from './board.js'

class Game {
  constructor(size, goalNumber) {
    this.goalNumber = goalNumber;
    this.board = new Board(size, goalNumber);
    this.score = 0;
  }

  refreshBoard(size, goalNumber) {
    this.board = new Board(size, goalNumber);
  }
}

export default Game;
