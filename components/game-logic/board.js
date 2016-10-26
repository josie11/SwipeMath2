'use strict';

import Tile from './tile.js'

class Board {
  constructor(gridSize, goalNumber) {
    this.gridSize = gridSize;
    this.goalNumber = goalNumber;
    this.board = this.constructBoard(gridSize, goalNumber);
  }

  constructBoard(gridSize, goalNumber) {
    let board = [];
    for(let i = 0; i < gridSize * gridSize; i++) board.push(new Tile(i, goalNumber));
    return board;
  }

  getNeighbor(id, direction) {
    let neighborAdjustors = { 'up': id - this.gridSize, 'down': id + this.gridSize, 'left': id - 1, 'right': id + 1 };
    return neighborAdjustors[direction];
  }

  //MAY NOT NEED ANYMORE
  neighborTile(id) {
    return [id - this.gridSize, id + this.gridSize, id - 1, id + 1].filter(function(value) {
      if(value >= 0) return value;
    });
  }

  startMerge(id, direction) {
    let neighbor = this.getNeighbor(id, direction);
    if( neighbor >= 0) this.mergeTiles(id, neighbor, '+');
  }

  mergeTiles(startId, endId, op) {
    let endValue = this.doMath(this.board[startId].value, op, this.board[endId].value);
    //combine the swipecounts
    this.board[endId].swipeCount += this.board[startId].swipeCount;
    //set merged tile to math result value
    this.board[endId].value = endValue;
    //merged tile resets
    this.newTile(startId);
  }

  doMath(val1, op, val2) {
    let operators = {
      '+': function(num1, num2) { return num1 + num2; },
      '-': function(num1, num2) { return num1 - num2; },
      '÷': function(num1, num2) { return num1 / num2; },
      '*': function(num1, num2) { return num1 * num2; }
    }
    return Math.abs(Math.floor(operators[op](val2, val1)));
  }

  //resets tile after it is merged
  newTile(id) {
    this.board[id] = new Tile(id, this.goalNumber);
  }
}

export default Board;
