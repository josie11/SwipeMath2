'use strict';

import Board from './board.js'
import Score from './scoring-logic.js'

class Game {
  constructor(size = 5, goalNumber = 10, goalSwipes = 2, goalOperations = ['+', '+']) {
    this.board = new Board(size, goalNumber);
    this.score = new Score(goalNumber, goalSwipes, goalOperations);
  }

  refreshBoard(size = 5, goalNumber = 10) {
    this.board = new Board(size, goalNumber);
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
