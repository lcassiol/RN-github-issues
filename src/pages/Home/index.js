import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeItem from './HomeItem';

import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Home extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    loadingList: true,
    loadingButton: false,
    error: '',
    refreshing: false,
  };

  static navigationOptions = {
    title: 'GitIssues',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    await this.loadRepositories();
  }

  loadRepositories = () => {
    this.setState({ loadingList: true, refreshing: true });
    this.fillRepositories();
  };

  fillRepositories = async () => {
    const repositories = JSON.parse(await AsyncStorage.getItem('@rngithubissues:repositories'));

    this.setState({ repositories: repositories || [], loadingList: false, refreshing: false });
  };

  renderListItem = ({ item }) => <HomeItem repository={item} parentFlatList={this} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;

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
    const { loadingList } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => navigate('SearchRepositories', {})}>
              <View style={styles.newRepository}>
                <Text style={styles.btnTitle}>Add new repository</Text>
                <Icon name="plus" size={20} style={styles.formIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
