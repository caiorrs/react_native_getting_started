import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

import Greetings from './components/Greetings';
import Blink from './components/Blink';
import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimentionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';
import FlexDirectionBasics from './components/FlexDirectionBasics';
import JustifyContentBasics from './components/JustifyContentBasics';

export default class HelloWorldApp extends Component {
  render() {
    let pic = require('./assets/images/HelloWorld.png');
    return (
      <View style={{backgroundColor: '#777', flex: 1}}>
        <ScrollView>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello World</Text>
            <Image source={pic} style={{width: 100, height: 100}} />

            {/* estes componentes foram importados */}
            <Greetings name="Caio" />
            {/* <Blink text="I'm Blinking" /> */}
            <LotsOfStyles />
            <FixedDimensionsBasics />
            <View style={{width: 200, height: 100}}>
              <FlexDimensionsBasics />
            </View>
          </View>
          <FlexDirectionBasics />
          <JustifyContentBasics />
        </ScrollView>
      </View>
    );
  }
}
