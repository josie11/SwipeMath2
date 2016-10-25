import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../styles/color-schemes.js'
import Dimensions from '../styles/dimensions.js'

const width = Dimensions.boardContainer.width;
const tileSize = width * .19;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: Colors.turquoise,
    width: tileSize,
    height: tileSize,
    margin: width * .0025,
    borderRadius: 10
  },
  tileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: tileSize * .5,

  }
})

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.tile}>
        <View style={styles.tileContainer}>
          <Text style={styles.text}>{this.props.tileData.value}</Text>
        </View>
      </View>
    );
  }
}

export default Tile;
