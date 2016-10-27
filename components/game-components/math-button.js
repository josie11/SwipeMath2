'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Dimensions from '../styles/dimensions.js';
import Colors from '../styles/color-schemes.js';

const styles = function(active) {
  let color = active ? Colors.orangeYellow : Colors.articLime;
  return {
    width: Dimensions.mathButton.width,
    height: Dimensions.mathButton.width,
    backgroundColor: color
  }
}

class MathButton extends Component {
  render() {
    let style = styles(this.props.active);
    return (
      <TouchableHighlight onPress={this.onPressButton.bind(this)}>
        <View style={style}>
          <Text>{this.props.operator}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  onPressButton() {
    this.props.changeOperator(this.props.operator);
  }
}

export default MathButton;
