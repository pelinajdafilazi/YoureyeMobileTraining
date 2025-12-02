// src/screens/OpeningPage/styles.js
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundOpen,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  topSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSection: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
