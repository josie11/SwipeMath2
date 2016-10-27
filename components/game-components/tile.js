import React, { Component } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';
import SimpleGesture from 'react-native-simple-gesture';

import Colors from '../styles/color-schemes.js'
import Dimensions from '../styles/dimensions.js'

const width = Dimensions.boardContainer.width;

const tileStyle = function(maxSize, active = false) {
  let margin = maxSize * .025;
  let maxLessMargin = maxSize - (margin * 4);
  let color = active ? Colors.tangoPink : Colors.turquoise;
  return {
    backgroundColor: color,
    width: maxLessMargin,
    height: maxLessMargin,
    margin: margin,
    borderRadius: maxLessMargin / 10,
  }
}

//margins?
const textStyle = function(maxSize, active = false) {
  return {
    fontSize: maxSize * .5
  }
}

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gs) => true,

      //start tile clicked
      onPanResponderGrant: (evt, gestureState) => {
        // console.log('started gesture', this.props.tileData, 'TILEEEEE');
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.{x,y}0 will be set to zero now
      },

      onPanResponderRelease: (e, gs) => {
        let sgs = new SimpleGesture(e,gs);
        let id = this.props.tileData.id;
        if(sgs.isSwipeUp()) this.props.handleSwipe(id, 'up');
        if(sgs.isSwipeDown()) this.props.handleSwipe(id, 'down');
        if(sgs.isSwipeLeft()) this.props.handleSwipe(id, 'left');
        if(sgs.isSwipeRight()) this.props.handleSwipe(id, 'right');
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },

    });
  }

  render() {
    let maxTileSize = width / this.props.gridSize;
    return (
          <View style={tileStyle(maxTileSize, this.props.activeTile)} { ...this._panResponder.panHandlers }>
            <View style={styles.tileContainer}>
              <Text style={textStyle(maxTileSize)}>{this.props.tileData.value}</Text>
            </View>
          </View>
    );
  }
}

export default Tile;
