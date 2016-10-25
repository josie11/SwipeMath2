import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../styles/color-schemes.js'
import Dimensions from '../styles/dimensions.js'

const styles = StyleSheet.create({
  tile: {
    backgroundColor: Colors.turquoise,
    width: Dimensions.boardContainer.width * .19,
    height: Dimensions.boardContainer.width * .19,
    margin: Dimensions.boardContainer * .01,
    borderRadius: 15
  },
  tileText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.tile}>
        <View style={styles.tileText}>
          <Text>{this.props.tileData.value}</Text>
        </View>
      </View>
    );
  }
}

export default Tile;
