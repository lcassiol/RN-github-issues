import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class SearchRepositories extends Component {
  state = {};

  static navigationOptions = {
    title: 'Search Repositories',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Search Repositories page</Text>
      </View>
    );
  }
}
