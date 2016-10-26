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
          <Text>{this.props.game.score}</Text>
        </View>
        <View>
          <Text>Swipes</Text>
          <Text>3</Text>
        </View>
        <View>
          <Text>Goal Number</Text>
          <Text>{this.props.game.goalNumber}</Text>
        </View>
      </View>
    );
  }
}

export default GameInfoContainer;
