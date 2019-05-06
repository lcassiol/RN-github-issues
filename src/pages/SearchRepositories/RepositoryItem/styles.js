import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,

    alignItems: 'center',
    flexDirection: 'row',
  },

  coluna: {
    flex: 1,
    flexDirection: 'column',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
    borderRadius: 25,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,

    flex: 1,
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',

    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  infoIcon: {
    color: colors.dark,
    marginLeft: metrics.baseMargin,
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
