import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ff0000',
    borderWidth: 2,
    margin: 10,
    fontWeight: 'bold',
    padding: 5,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'normal',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titulo}>ESTE É UM TITULO</Text>
        <Text style={[styles.titulo, styles.subtitulo]}>
          ESTE É UM SUBTITULO
        </Text>
      </View>
    );
  }
}
