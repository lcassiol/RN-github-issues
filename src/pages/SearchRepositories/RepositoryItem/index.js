import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class RepositoryItem extends Component {
  state = {
    showAdd: false,
  };

  static propTypes = {
    repository: PropTypes.shape({
      full_name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      watchers_count: PropTypes.number,
    }).isRequired,
  };

  async componentDidMount() {
    const { repository } = this.props;
    const hasRepository = await this.hasRepositorie(repository);
    this.setState({ showAdd: !hasRepository });
  }

  addRepositorie = async repository => {
    const { full_name, id, name, owner } = repository;

    if (await this.hasRepositorie(repository)) return;

    let repositories = JSON.parse(await AsyncStorage.getItem('@rngithubissues:repositories'));

    if (repositories == null) repositories = [];

    repositories.push({ id, full_name, name, owner });
    await AsyncStorage.setItem('@rngithubissues:repositories', JSON.stringify(repositories));

    this.setState({ showAdd: false });
  };

  hasRepositorie = async repository => {
    const repositories = await AsyncStorage.getItem('@rngithubissues:repositories');

    if (repositories === null) return false;

    const repositorio = JSON.parse(repositories).filter(e => e.full_name === repository.full_name);

    return repositorio.length > 0;
  };

  render() {
    const { repository } = this.props;
    const { showAdd } = this.state;

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.addRepositorie(repository)}>
        <View style={styles.coluna}>
          <Text style={styles.title}>{repository.name}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Icon name="star" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.stargazers_count}</Text>
            </View>
            <View style={styles.info}>
              <Icon name="code-fork" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.forks_count}</Text>
            </View>
            <View style={styles.info}>
              <Icon name="eye" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.watchers_count}</Text>
            </View>
          </View>
        </View>

        {showAdd ? (
          <Icon name="plus" style={styles.icon} size={30} />
        ) : (
          <Icon name="check" style={styles.icon} size={30} />
        )}
      </TouchableOpacity>
    );
  }
}
