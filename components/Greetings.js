import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Greetings extends Component {
  render() {
    let today = '06/10/19';
    return (
      <View style={{alignItems: 'center'}}>
        <Text>
          Hello {this.props.name} {today}
        </Text>
      </View>
    );
  }
}
