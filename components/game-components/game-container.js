'use strict';

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

//import components
import GameInfoContainer from './game-info-container.js';
import GameControlContainer from './game-control-container.js';
import BoardContainer from './board-container.js';
import SwipeInfoContainer from './swipe-info-container.js';

//import game logic
import Game from '../game-logic/game.js';

const game = new Game(5, 10);

class GameContainer extends Component {

  constructor() {
    super();
    this.state = {game};
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <GameInfoContainer game={this.state.game}/>
        <SwipeInfoContainer />
        <BoardContainer board={this.state.game.board} />
        <GameControlContainer board={this.state.game.board} newGame={this.newGame.bind(this)} refreshBoard={this.refreshBoard.bind(this)} />
      </View>
    );
  }

  newGame() {
    this.setState({game: new Game(5, 10)});
  }

  refreshBoard() {
    this.state.game.refreshBoard(5, 10);
    this.setState({game: this.state.game});
  }
}

export default GameContainer;
