import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Tile from './tile.js';

//styling
import Colors from '../styles/color-schemes.js';
import Dimensions from '../styles/dimensions.js';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
})

class BoardRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        {this.renderRow()}
      </View>
    );
  }

  renderRow() {
    return this.props.tiles.map((tile)=> this.renderTile(tile));
  }

  renderTile(tile) {
    return <Tile handleSwipe={this.props.handleSwipe} tileData={tile} gridSize={this.props.gridSize} key={tile.id} />;
  }
}

export default BoardRow;
