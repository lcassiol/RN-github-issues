import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class SearchRepositories extends Component {
  state = {
    repositoryInput: '',
    loadingList: false,
    repositories: [],
  };

  static navigationOptions = {
    title: 'Search Repositories',
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  searchRepositories = async () => {
    const { repositoryInput, repositories } = this.state;
    const { data } = await api.get(`users/${repositoryInput}/repos`);

    console.tron.log(data);
    this.setState({ repositories: data, loading: false });

    return !repositories.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
        style={styles.listContainer}
      />
    );
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
              placeholder="Repository name"
              style={styles.formInput}
              placeholderTextColor={styles.placeholderColor.color}
              value={repositoryInput}
              onChangeText={text => this.setState({ repositoryInput: text })}
            />
            <TouchableOpacity onPress={this.searchRepositories}>
              <Icon name="search" size={20} style={styles.formIcon} />
            </TouchableOpacity>
          </View>
          {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
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
