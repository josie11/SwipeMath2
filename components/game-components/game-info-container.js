import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {

  }
});

class GameInfoContainer extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Score</Text>
          <Text>{this.props.game.getScore()}</Text>
        </View>
        <View>
          <Text>Swipes</Text>
          <Text>{this.props.game.getGoalSwipes()}</Text>
        </View>
        <View>
          <Text>Goal Number</Text>
          <Text>{this.props.game.getGoalNumber()}</Text>
        </View>
      </View>
    );
  }
}

export default GameInfoContainer;
