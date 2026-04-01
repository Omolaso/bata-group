export const typography = {
  // font-family
  fontFamily: {
    light: "TTCommons-Light",
    regular: "TTCommons-Regular",
    medium: "TTCommons-Medium",
    bold: "TTCommons-Bold",
    extra_bold: "TTCommons-ExtraBold",
    black: "TTCommons-ExtraBold",
  } as const,

  // font sizes
  fontSize: {
    micro: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    "2xl": 26,
    "3xl": 30,
    "4xl": 34,
  } as const,
};

export const textStyles = {
  mini: {
    fontSize: typography.fontSize.micro,
    fontFamily: typography.fontFamily.medium,
  },

  small: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.medium,
  },

  regularMedium: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.medium,
  },

  body: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.regular,
  },

  bodyMedium: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.medium,
  },

  bodySemiBold: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.bold,
  },

  bodyBold: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.bold,
  },

  title: {
    fontSize: typography.fontSize["xxl"],
    fontFamily: typography.fontFamily.bold,
  },
};

export type CustomTextStyle = keyof typeof textStyles;
