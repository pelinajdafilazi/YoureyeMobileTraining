import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const { width, height } = Dimensions.get('window');

// Koyu turuncu renk (arka plan şekilleri için)
const SHAPE_COLOR = 'rgba(230, 100, 0, 0.5)';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundOpen,
    overflow: 'hidden',
  },

  /** ARKA PLAN ŞEKİLLERİ **/
  backgroundShapes: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  // Sağ üst büyük oval
  shapeTopRight: {
    position: 'absolute',
    top: -80,
    right: -100,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: SHAPE_COLOR,
  },

  // Orta sağ oval
  shapeMidRight: {
    position: 'absolute',
    top: height * 0.35,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: SHAPE_COLOR,
  },

  // Sol alt büyük oval
  shapeBottomLeft: {
    position: 'absolute',
    bottom: -50,
    left: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: SHAPE_COLOR,
  },

  // Sağ alt oval
  shapeBottomRight: {
    position: 'absolute',
    bottom: 80,
    right: -40,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: SHAPE_COLOR,
  },

  /** WİFİ/SİNYAL İKONU **/
  wifiIconContainer: {
    position: 'absolute',
    bottom: 280,
    left: 30,
    zIndex: 1,
    transform: [{ rotate: '-45deg' }],
  },

  /** METİN BLOĞU **/
  content: {
    flex: 1,
    marginTop: 130,
    paddingHorizontal: 24,
    zIndex: 2,
    alignItems: 'center',
  },

  textGroup: {
    width: '85%',
  },

  title: {
    ...typography.h2,
    color: colors.textWhite,
    marginBottom: 0,
    textAlign: 'left',
  },

  title2: {
    ...typography.h3,
    color: colors.textWhite,
    marginBottom: 20,
    textAlign: 'left',
  },

  body: {
    ...typography.body,
    color: colors.textWhite,
    marginTop: 24,
    lineHeight: 24,
    opacity: 0.95,
    textAlign: 'left',
  },

  /** FOOTER **/
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    zIndex: 3,
  },

  /** DOTS **/
  dotsWrapper: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.4,
    backgroundColor: colors.textWhite,
  },

  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 1,
    backgroundColor: colors.textWhite,
  },

  /** NEXT BUTTON **/
  nextButton: {
    position: 'absolute',
    bottom: 25,
    right: 30,
    padding: 10,
    zIndex: 10,
  },

  nextArrow: {
    fontSize: 40,
    color: colors.textWhite,
    fontWeight: '600',
  },
});
