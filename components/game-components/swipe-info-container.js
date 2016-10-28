import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SwipeInfoContainer extends Component {
  render() {
    return (
      <View>
        <Text>Operator Combo: {this.props.swipeCombo}</Text>
      </View>
    );
  }
}

export default SwipeInfoContainer;
