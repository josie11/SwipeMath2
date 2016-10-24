import React, { Component } from 'react';
import { View } from 'react-native';

//import components
import GameInfoContainer from './game-info-container.js';
import GameControlContainer from './game-control-container.js';
import BoardContainer from './board-container.js';
import SwipeInfoContainer from './swipe-info-container.js';

//import game logic
import Game from '../game-logic/game.js';

class GameContainer extends Component {
  render() {
    return (
      <View>
        <GameInfoContainer />
        <SwipeInfoContainer />
        <BoardContainer />
        <GameControlContainer />
      </View>
    );
  }
}

export default GameContainer;
