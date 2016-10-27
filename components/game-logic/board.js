'use strict';

import Tile from './tile.js'

class Board {
  constructor(gridSize, goalNumber) {
    this.gridSize = gridSize;
    this.goalNumber = goalNumber;
    this.board = this.constructBoard(gridSize, goalNumber);
    this.operator = '+';
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

  refreshBoard() {
    this.board = this.constructBoard(this.gridSize, this.goalNumber);
  }

  changeOperator(op) {
    this.operator = op;
  }

  //REWRITE THIS TO HAVE SMARTER LOGIC!!!!!!! THIS IS BAD
  neighborTiles(id) {
      return [id - this.gridSize, id + this.gridSize, id - 1, id + 1].filter((value) => {
        //tile is not off the board
        let upDownEdgeCase = value >= 0 && value < this.board.length;
        //swipe of rightmost tile does not bleed into first tile of next row
        let rightEdgeCase = ((id + 1) % this.gridSize === 0 && value % this.gridSize === 0);
        //swipe leftmost tile does not bleed into last tile of previous row
        let leftEdgeCase = (id % this.gridSize === 0 && (value + 1) % this.gridSize === 0);
        if(upDownEdgeCase && !rightEdgeCase && !leftEdgeCase) return true;
    });
  }

  startMerge(id, direction) {
    debugger;
    let neighborTile = this.getNeighbor(id, direction);
    let validNeighbor = this.neighborTiles(id).includes(neighborTile);
    if(validNeighbor) this.mergeTiles(id, neighborTile, this.operator);
  }

  mergeTiles(startId, endId, op) {
    let endValue = this.doMath(this.board[startId].value, op, this.board[endId].value);
    //combine the swipecounts
    this.board[endId].swipeCount += this.board[startId].swipeCount + 1;
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
