import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.tileData.value}</Text>
      </View>
    );
  }
}

export default Tile;
