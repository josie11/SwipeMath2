'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import MathButton from './math-button.js';
import Operations from '../game-logic/operations.js';

const operators = Operations.operators;
const styles = StyleSheet.create({
  container: {
  },

  row: {
    flexDirection: 'row'
  },
});

class MathButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {operator : this.props.board.operator};
  }

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
    return <MathButton operator={op} key={op} active={this.props.board.operator === op} changeOperator={this.changeOperater.bind(this)} />;
  }

  changeOperater(op) {
    this.props.board.changeOperator(op);
    this.setState({operator: op});
  }
}

export default MathButtons;
