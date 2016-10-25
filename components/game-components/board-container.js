'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Board from './board.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

class BoardContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board board={this.props.board} />
      </View>
    );
  }
}

export default BoardContainer;
