import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
  box1: {
    flex: 0.2,
    backgroundColor: '#FF00FF',
  },
  box2: {
    flex: 0.3,
    backgroundColor: '#00FFF0',
  },
  box3: {
    flex: 0.5,
    backgroundColor: '#F0F0F0',
  },
});

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}
