'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Dimensions from '../styles/dimensions.js';
import Colors from '../styles/color-schemes.js';

const styles = StyleSheet.create({
  button: {
    width: Dimensions.mathButton.width,
    height: Dimensions.mathButton.width,
    backgroundColor: Colors.articLime,
  }
})

class MathButton extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Text>{this.props.operator}</Text>
      </View>
    );
  }
}

export default MathButton;
