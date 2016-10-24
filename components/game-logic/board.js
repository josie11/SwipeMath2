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

  doMath(val1, op, val2) {
    let operators = {
      '+': function(num1, num2) { return num1 + num2; },
      '-': function(num1, num2) { return num1 - num2; },
      '/': function(num1, num2) { return num1 / num2; },
      '*': function(num1, num2) { return num1 * num2; }
    }
    return Math.abs(Math.floor(operators[op](val2, val1)));
  }

  newTile(id) {
    this.board[id] = newTile(id, this.goalNumber);
  }

  neighborTiles(id) {
    return [id - this.gridSize, id + this.gridSize, id - 1, id + 1].filter(function(value) {
      if(value >= 0) return value;
    });
  }

  ifNeighborTile(id) {
    return this.neighborTiles.includes(id);
  }

  mergeTiles(startId, endId, op) {
    let endValue = this.doMath(startId, op, endId);
    //combine the swipecounts
    this.board[endId].swipeCount += this.board[startId].swipeCount;
    //set merged tile to math result value
    this.board[endId].value = endValue;
    //merged tile resets
    this.newTile(startId);
  }
}

export default Board;
