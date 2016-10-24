import React, { Component } from 'react';
import { View } from 'react-native';

import Board from './board.js'

class BoardContainer extends Component {
  render() {
    return (
      <View>
        <Board board={this.props.board} />
      </View>
    );
  }
}

export default BoardContainer;
