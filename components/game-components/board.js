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
      key={id}
      handleSwipe={this.handleSwipe.bind(this)}
    />;
  }

  handleSwipe(id, direction) {
    debugger;
    this.props.board.startMerge(id, direction);
    this.updateBoard();
  }

  updateBoard() {
    this.setState({'board': this.props.board.board});
  }
}

export default Board;
