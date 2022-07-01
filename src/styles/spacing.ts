import { Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 32;
const DEFAULT_SPACING = 16;
const SCREEN_WIDTH = WINDOW_WIDTH - SCREEN_PADDING;
const HALF_SCREEN_WIDTH = (WINDOW_WIDTH - SCREEN_PADDING - DEFAULT_SPACING) / 2;

const spacing = {
  windowWidth: WINDOW_WIDTH,
  screenPadding: SCREEN_PADDING,
  screenWidth: SCREEN_WIDTH,
  halfScreenWidth: HALF_SCREEN_WIDTH,
  defaultSpacing: DEFAULT_SPACING,
};

export default spacing;
