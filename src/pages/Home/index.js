import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';

import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Home extends Component {
  state = {};

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  newRepository() {
    console.tron.log('navigate to repositories');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={this.newRepository}>
              <View style={styles.newRepository}>
                <Text style={styles.btnTitle}>Add new repository</Text>
                <Icon name="plus" size={20} style={styles.formIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
