import React from 'react';

import { View, Text } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';

// import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const Home = () => (
  <View>
    <Header title="GitIssues" />
    <Text>Welcome Testando</Text>
  </View>
);

export default Home;
