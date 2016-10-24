import React, { Component } from 'react';
import { View } from 'react-native';

import Tile from './tile.js';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.renderTiles()}
      </View>
    );
  }

  renderTiles() {
    return this.props.board.board.map(tile => this.renderTile(tile))
  }

  renderTile(tile) {
    return <Tile tileData={tile} key={tile.id} />
  }
}

export default Board;
