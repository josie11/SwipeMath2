import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Tile from './tile.js'

//styling
import Colors from '../styles/color-schemes.js'
import Dimensions from '../styles/dimensions.js'

const styles = StyleSheet.create({
  row: {
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
    return <Tile tileData={tile} key={tile.id} />;
  }
}

export default BoardRow;
