import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
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

    <Icon name="plus" style={styles.icon} size={30} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
