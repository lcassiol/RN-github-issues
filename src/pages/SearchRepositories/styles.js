import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },

  error: {
    color: colors.danger,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: metrics.basePadding,
    textAlign: 'center',
  },

  form: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: metrics.basePadding,
  },

  formTouch: {
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2,
    marginLeft: 2,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },

  formIcon: {
    color: colors.dark,
  },

  formInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    flex: 1,
    fontSize: 14,
    padding: metrics.basePadding / 2,
  },

  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  listContainer: {
    padding: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  placeholderColor: {
    color: colors.regular,
  },
});

export default styles;
