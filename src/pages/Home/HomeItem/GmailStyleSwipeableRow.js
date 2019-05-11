import React, { Component } from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { metrics } from '~/styles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class GmailStyleSwipeableRow extends Component {
  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.rightAction}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  removeItem = async (parentFlatList, repositoryId) => {
    let repositories = await AsyncStorage.getItem('@rngithubissues:repositories');

    repositories = JSON.parse(repositories).filter(e => e.id != repositoryId);

    await AsyncStorage.setItem('@rngithubissues:repositories', JSON.stringify(repositories));

    await this.props.parentFlatList.fillRepositories();
  };

  render() {
    const { children, repositoryId, parentFlatList } = this.props;

    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}
        onSwipeableRightOpen={() => {
          this.removeItem(parentFlatList, repositoryId);
        }}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: 'flex-end',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'center',
    marginBottom: metrics.baseMargin,
  },
});
