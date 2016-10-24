import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import GameContainer from './components/game-components/game-container.js';

const Main = React.createClass({
  render() {
    return <View>
           <GameContainer />
           </View>;
  },
});

var styles = StyleSheet.create({

});

module.exports = Main;
