'use strict';

import Tile from './tile.js';
import Operations from './operations.js';

class Board {
  constructor(gridSize, goalNumber) {
    this.gridSize = gridSize;
    this.goalNumber = goalNumber;
    this.board = this.constructBoard(gridSize, goalNumber);
    this.operator = '+';
    this.currentTiles = [];
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
    let neighborTile = this.getNeighbor(id, direction);
    let validNeighbor = this.neighborTiles(id).includes(neighborTile);
    //if merged
    if(validNeighbor) {
      this.mergeTiles(id, neighborTile, this.operator);
      return true;
    } else {
      //if didn't merge, check to see if need to refresh current swipes
      this.checkCurrentSwipes(id, id);
      return false;
    }
  }

  mergeTiles(startId, endId, op) {
    let endValue = this.doMath(this.board[startId].value, op, this.board[endId].value);
    //combine the swipecounts
    this.board[endId].swipeCount += this.board[startId].swipeCount + 1;
    //set merged tile to math result value
    this.board[endId].value = endValue;
    //merged tile resets
    this.newTile(startId);
    //check to see if in a new location on board
    this.checkCurrentSwipes(startId, endId);
  }

  checkCurrentSwipes(startId, endId) {
    if(!this.currentTiles.length) {
      //no swipe history, just add to current swipes array
      this.currentTiles.unshift(endId)
    } else if(startId !== this.getCurrentTile()) {
      //if current starting point is not the current tile
      this.refreshCurrentSwipes();
      this.currentTiles.unshift(endId)
    } else {
      //starting point is current active tile, add to currentTiles array
      this.currentTiles.unshift(endId)
    }
  }

  refreshCurrentSwipes() {
    this.currentTiles = [];
  }

  getCurrentTile() {
    return this.currentTiles[0];
  }

  //accesses operations from operations.js
  doMath(val1, op, val2) {
    return Math.abs(Math.floor(Operations[op](val2, val1)));
  }

  //resets tile after it is merged
  newTile(id) {
    this.board[id] = new Tile(id, this.goalNumber);
  }
}

export default Board;
