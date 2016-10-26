'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MathButtons from './math-buttons.js';

class GameControlContainer extends Component {
  render() {
    return (
      <View>
        <MathButtons />
        <Text>New Game</Text>
        <Text>Refresh Board</Text>
      </View>
    );
  }
}

export default GameControlContainer;
