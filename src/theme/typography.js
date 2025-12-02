// src/theme/typography.js
// Typography system with font families and text variants

// Font families
const fonts = {
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  extraBold: 'Montserrat-ExtraBold',
};

// Font weights as references
const fontWeights = {
  regular: { fontFamily: fonts.regular },
  medium: { fontFamily: fonts.medium },
  extraBold: { fontFamily: fonts.extraBold },
};

// Text variants
const variants = {
  // Headings
  h1: {
    fontFamily: fonts.extraBold,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: fonts.extraBold,
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontFamily: fonts.medium,
    fontSize: 20,
    lineHeight: 28,
  },
  h4: {
    fontFamily: fonts.medium,
    fontSize: 18,
    lineHeight: 24,
  },

  // Body text
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },

  // Utility text
  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 12,
    lineHeight: 16,
  },

  // Button text
  button: {
    fontFamily: fonts.extraBold,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonSmall: {
    fontFamily: fonts.extraBold,
    fontSize: 14,
    lineHeight: 20,
  },
};

// Legacy support (backward compatibility)
const legacy = {
  heading1: variants.h2,
  heading2: { ...variants.h2, fontFamily: fonts.medium },
  small: variants.caption,
  buttonLabel: { fontFamily: fonts.extraBold, fontSize: 12 },
};

const typography = {
  fonts,
  ...fontWeights,
  ...variants,
  ...legacy,
};

export default typography;
