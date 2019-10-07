import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 2,
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
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

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View>
        {/* PROBLEMAS NA VIEW1 */}
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
