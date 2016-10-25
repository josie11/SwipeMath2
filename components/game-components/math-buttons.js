'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import MathButton from './math-button.js';

const operators = ['+', '-', '*', '÷'];

const styles = StyleSheet.create({
  container: {
  }
});

class MathButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderRows()}
      </View>
    );
  }

  //returns array of 2 rows of 2 operator buttons
  renderRows() {
    //array of 4 operator buttons
    let buttons = operators.map((op, i) => this.renderButton(op, i));
    return [this.renderRow(buttons.slice(0, 2), 0), this.renderRow(buttons.slice(2), 1)];
  }

  renderRow(arr, i) {
    return <View key={i}>{arr}</View>;
  }

  renderButton(op, i) {
    return <MathButton operator={op} key={i} />;
  }
}

export default MathButtons;
