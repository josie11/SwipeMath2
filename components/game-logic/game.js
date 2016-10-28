'use strict';

import Board from './board.js'
import Score from './scoring-logic.js'

class Game {
  constructor(size = 5, goalNumber, goalSwipes, goalOperations) {
    this.score = new Score(goalNumber, goalSwipes, goalOperations);
    this.board = new Board(size, this.score.goalNumber);
  }

  refreshBoard(size = 5) {
    this.board = new Board(size, this.score.goalNumber);
  }

  updateScore(value) {
    this.score.updateScore(value);
  }

  getScore() {
    return this.score.score;
  }

  getGoalNumber() {
    return this.score.goalNumber;
  }

  getGoalSwipes() {
    return this.score.goalSwipes;
  }

  getGoalOperations() {
    return this.score.goalOperations;
  }
}

export default Game;
