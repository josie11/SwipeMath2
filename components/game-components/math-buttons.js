'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import MathButton from './math-button.js';

const operators = ['+', '-', '*', '÷'];

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden'
  },

  row: {
    flexDirection: 'row'
  },
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
    let buttons = operators.map((op) => this.renderButton(op));

    //return array of 2 rows with operator buttons
    return [this.renderRow(buttons.slice(0, 2), 0), this.renderRow(buttons.slice(2), 1)];
  }

  renderRow(arr, i) {
    return <View style={styles.row} key={i}>{arr}</View>;
  }

  renderButton(op) {
    return <MathButton operator={op} key={op} />;
  }
}

export default MathButtons;
