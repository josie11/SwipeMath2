'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';

import MathButtons from './math-buttons.js';

class GameControlContainer extends Component {
  render() {
    return (
      <View>
        <MathButtons />
      </View>
    );
  }
}

export default GameControlContainer;
