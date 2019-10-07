import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box1: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0000',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#00FF00',
  },
  box3: {
    width: 150,
    height: 150,
    backgroundColor: '#0000FF',
  },
});

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}
