const colors = {
  // Primary
  primary: '#0B4687',
  primaryDark: '#002F59',
  primaryLight: '#E7ECF3',

  // Secondary
  secondary: '#E7F0F1',

  // Gray Scale
  grayXDark: '#00162E',
  grayDark: '#334457',
  gray: '#667381',
  grayLight: '#99A2AB',
  grayXLight: '#EDEEF0',

  // Background
  white: '#FFFFFF',
  background: '#F9F9F9',

  // CTA
  ctaDark: '#EA662B',
  cta: '#FFA33E',
  ctaLight: '#FFDCB5',

  // Acessory
  greenPool: '#48E8CD',
  pool: '#9FF5E7',
  navy: '#001CBF',
  premium: '#0079BC',
  blue: '#2140FC',
  purple: '#6B2AD3',
  purpleLight: '#C071FF',
  salmon: '#F96060',
  orangeDark: '#A8442E',
  black: '#000000',

  // Success
  successDark: '#006100',
  success: '#00A100',
  successLight: '#CCECCC',

  // Error
  errorDark: '#7A1D20',
  error: '#CB3135',
  errorLight: '#F5D6D7',

  // Warning
  warningDark: '#665800',
  warning: '#FFDD00',
  warningLight: '#FFF8CC',

  // Gradients
  gradients: {
    primary: {
      start: '#0B4687',
      end: '#0079BC',
    },
    cta: {
      start: '#FE8625',
      end: '#FFA33E',
    },
    lovers: {
      start: '#CB3135',
      end: '#EA662B',
    },
    silver: {
      start: '#C3DBEA',
      end: '#E7F0F1',
    },
    gold: {
      start: '#DCA71F',
      end: '#EFCD75',
    },
    diamond: {
      start: '#007690',
      end: '#00B4BF',
    },
  },
};

export type Color = keyof Omit<typeof colors, 'gradients'>;
export type GradientColor = keyof typeof colors.gradients;

export const colorsKeys: Color[] = Object.keys(colors).filter(
  color => color !== 'gradients',
) as Color[];

export default colors;
