import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class SearchRepositories extends Component {
  state = {
    repositoryInput: '',
    loadingList: false,
    repositories: [],
    error: false,
  };

  static navigationOptions = {
    title: 'Search Repositories',
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  searchRepositories = async () => {
    this.setState({ repositories: [], loadingList: true, error: false });

    try {
      const { repositoryInput } = this.state;
      const { data } = await api.get(`users/${repositoryInput}/repos`);
      this.setState({ repositories: data, loadingList: false });
    } catch (err) {
      this.setState({ loadingList: false, error: true });
    }
  };

  render() {
    const { repositoryInput, loadingList, error, repositories } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Put the username"
              style={styles.formInput}
              placeholderTextColor={styles.placeholderColor.color}
              value={repositoryInput}
              onChangeText={text => this.setState({ repositoryInput: text })}
            />
            <TouchableOpacity onPress={this.searchRepositories} style={styles.formTouch}>
              <Icon name="search" size={26} style={styles.formIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : error ? (
          <Text style={styles.error}>Nenhum usuário encontrado</Text>
        ) : (
          <FlatList
            data={repositories}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            style={styles.listContainer}
          />
        )}
      </View>
    );
  }
}
