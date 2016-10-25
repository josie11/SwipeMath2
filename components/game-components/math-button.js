'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
  }
})

class MathButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.operator}</Text>
      </View>
    );
  }
}

export default MathButton;
