import React, { Component } from 'react';
import { View } from 'react-native';

//import components
import GameInfoContainer from './game-info-container.js';
import GameControlContainer from './game-control-container.js';
import BoardContainer from './board-container.js';
import SwipeInfoContainer from './swipe-info-container.js';

//import game logic
import Game from '../game-logic/game.js';

const game = new Game(5, 10);

class GameContainer extends Component {
  render() {
    return (
      <View>
        <GameInfoContainer />
        <SwipeInfoContainer />
        <BoardContainer board={game.board} />
        <GameControlContainer />
      </View>
    );
  }
}

export default GameContainer;
