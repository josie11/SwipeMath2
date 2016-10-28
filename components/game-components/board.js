'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BoardRow from './board-row.js';

const styles = StyleSheet.create({
  container: {
  }
})

class Board extends Component {

  constructor(props) {
    super(props);
    this.state={activeTileId: null, score: this.props.score.score}
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderRows()}
      </View>
    );
  }

  //returns array of board-rows
  renderRows() {
    let boardRows = [];
    let rows = this.props.board.gridSize;
    for(let i = 0; i < this.props.board.board.length; i += rows) {
      let tiles = this.props.board.board.slice(i, i + rows);
      boardRows.push(this.renderRow(tiles, i / rows));
    }
    return boardRows;
  }

  renderRow(tiles, id) {
    return <BoardRow
      tiles={tiles}
      gridSize={this.props.board.gridSize}
      key={id}
      handleSwipe={this.handleSwipe.bind(this)}
      getActiveTileId={this.props.score.getLastTileSwipedId.bind(this.props.score)}
    />;
  }

  //needs rewriting, this is a mess
  handleSwipe(id, direction) {
    let merged = this.props.board.startMerge(id, direction);
    if(merged) {
      let endId = this.props.board.getEndId(id, direction);
      let startTile = this.props.board.board[id], endTile = this.props.board.board[endId];
      this.props.score.updateScoreTracking(startTile, endTile, this.props.board.operator)
      this.setState({activeTileId : this.props.score.getLastTileSwipedId()});
      //you have scored, update score, refresh tile
      if(this.state.score !== this.props.score.score) {
        this.props.board.newTile(endTile.id);
        this.setState({score: this.props.score.score});
        this.props.updateGame();
      }
    } else {
      this.setState({activeTileId : id});
    }
  }
}

export default Board;
