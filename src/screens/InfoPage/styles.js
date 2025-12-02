import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundOpen,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  /** METİN BLOĞU **/
  content: {
    flex: 1,
    marginTop: 130,
    marginLeft: 20,
    zIndex: 1,
  },

  title: {
    ...typography.heading1,     // 24px, ExtraBold
    color: colors.textWhite,
    marginBottom: 0,
  },

  title2: {
    ...typography.heading2,     // yine ExtraBold
    color: colors.textWhite,
    marginBottom: 20,
  },

  body: {
    ...typography.body,        // 16px Regular
    color: colors.textWhite,
    marginTop: 24,
    maxWidth: '80%',
    lineHeight: 22,
  },

  /** DOTS **/
  dotsWrapper: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    zIndex: 1,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    opacity: 0.5,
    backgroundColor: colors.textWhite,
  },

  dotActive: {
    width: 7,
    height: 7,
    borderRadius: 3,
    opacity: 1,
    backgroundColor: colors.textWhite,
  },

  /** NEXT BUTTON **/
  nextButton: {
    position: 'absolute',
    bottom: 25,
    right: 24,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextIcon: {
    color: colors.textWhite,
  },
});
