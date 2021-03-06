'use strict';

import Operations from './operations.js';

const operators = Operations.operators;

export default class Score {
  constructor(goalNumber, goalSwipes, goalOperations) {
    this.score = 0;
    this.goalNumber = goalNumber || this.generateGoalNumber(goalNumber);
    this.goalSwipes = goalSwipes || this.generateGoalSwipes(goalSwipes);
    this.goalOperations = goalOperations || this.generateGoalOperations(this.goalSwipes);
    this.currentTiles = [];
    this.currentOperations = [];
    this.patternControlMode = false;
  }

  //is only triggered if merge was successful
  //updates & checks for score
  updateScoreTracking(StartTile, endTile, operation) {
    //if not switching to different part of board
    if(StartTile.id === this.getLastTileSwipedId()) {
      this.checkCurrentSwipe(operation, endTile);
    } else {
      //switched to different part of board, breaks current swipe, refresh all
      this.refreshCurrentSwipes(endTile);
      this.refreshCurrentOperators(operation);
    }
  }

  //checks if current operator is current goal operator
  //if not, triggers refresh of current play
  checkCurrentSwipe(operation, endTile) {
    if(operation === this.goalOperations[this.currentOperations.length]) {
      this.currentOperations.unshift(operation);
      this.currentTiles.unshift(endTile);
      this.checkIfScored(endTile, operation);
    } else {
      this.refreshCurrentOperators(operation);
      this.refreshCurrentSwipes(endTile);
    }
  }

  checkIfScored(endTile, operation) {
    if(this.scored(endTile.value)) {
      this.score += endTile.swipeCount;
      this.refreshMoves();
    } else if(this.maxSwipes()){
      this.refreshCurrentSwipes(endTile);
      this.refreshCurrentOperators(operation);
    }
  }

  //you check each time if operators are valid
  //you only need to check length matches goal swipes, and that tile is goal num
  scored(value) {
    return this.currentOperations.length === this.goalSwipes && this.goalNumber === value;
  }

  maxSwipes() {
    return this.currentOperations.length === this.goalSwipes;
  }

  refreshMoves() {
    this.refreshCurrentOperators();
    this.refreshCurrentSwipes();
  }

  refreshCurrentSwipes(id = null) {
    if(id === null) {
      this.currentTiles = [];
    }
    else {
      this.currentTiles = [id]
    }
  }

  refreshCurrentOperators(operation = null) {
    if(operation === null) {
      this.currentOperations = [];
    }
    else {
      this.currentOperations = [operation]
    }
  }

  getLastTileSwipedId() {
    if(this.currentTiles[0])
      return this.currentTiles[0].id;
    else {
      return false;
    }
  }

  //may not need, for outside components
  getCurrentSwipeCount() {
    return this.currentTiles.length;
  }

  //eventually will have difficulty algorithm
  generateGoalNumber() {
    return this.randomNum(6, 15);
  }

  generateGoalSwipes() {
    return this.randomNum(2, 3);
  }

  generateGoalOperations(goalSwipes) {
    let max = operators.length - 1;
    let randomOperators = [];
    for(let i = 0; i < goalSwipes; i++) {
      randomOperators.push(operators[this.randomNum(0, max)]);
    }
    return randomOperators;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() *(max-min+1)+min);
  }
}
