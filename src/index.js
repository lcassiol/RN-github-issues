import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
