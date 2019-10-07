import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },

  box1: {
    backgroundColor: '#FFF000',
    width: 50,
    height: 50,
  },

  box2: {
    backgroundColor: '#0FFF00',
    width: 50,
    height: 50,
  },

  box3: {
    backgroundColor: '#0F0FFF',
    width: 50,
    height: 50,
  },
});

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.view1}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={styles.view2}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
      </View>
    );
  }
}
