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
    this.state={activeTileId: null}
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
      getActiveTileId={this.props.board.getCurrentTile.bind(this.props.board)}
    />;
  }

  handleSwipe(id, direction) {
    let merged = this.props.board.startMerge(id, direction);
    if(merged) {
      this.updateBoard();
      this.setState({activeTileId : this.props.board.getCurrentTile()});
      //scoring logic check
    } else {
      this.setState({activeTileId : id});
    }
  }

  updateBoard() {
    this.setState({'board': this.props.board.board});
  }
}

export default Board;
