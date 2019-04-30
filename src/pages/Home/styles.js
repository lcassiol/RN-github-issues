import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  form: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: metrics.basePadding / 2,
  },

  formIcon: {
    marginLeft: metrics.baseMargin,
    color: colors.darker,
  },

  btnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },

  newRepository: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.basePadding,
    height: 40,
    backgroundColor: colors.primary,
  },
});

export default styles;
