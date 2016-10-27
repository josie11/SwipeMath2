'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import MathButtons from './math-buttons.js';

class GameControlContainer extends Component {
  render() {
    return (
      <View>
        <MathButtons board={this.props.board}/>
        <View>
          <TouchableHighlight onPress={this.props.newGame}>
            <Text>New Game</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={this.props.refreshBoard}>
            <Text>Refresh Board</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }


}

export default GameControlContainer;
