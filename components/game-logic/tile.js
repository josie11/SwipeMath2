//tile generates random # based on a max #
//tile has a swipecount
'use strict';

class Tile {
  constructor(id, goalNumber) {
    this.id = id;
    this.value = this.randNum(goalNumber);
    this.swipeCount = 0;
  }

  randNum(goalNumber) {
    return Math.floor(Math.random() * (goalNumber - 1)) + 1;
  }
}

export default Tile;
