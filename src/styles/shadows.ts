import { Platform } from 'react-native';
import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

interface ShadowProps {
  s1: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  s2: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  s3: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const shadows: ShadowProps = {
  s1: Platform.select({
    ios: css`
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    `,
    android: css`
      elevation: 2;
    `,
  }) as FlattenInterpolation<ThemeProps<DefaultTheme>>,
  s2: Platform.select({
    ios: css`
      box-shadow: 0px 2px 8px rgba(55, 84, 102, 0.15);
    `,
    android: css`
      elevation: 4;
    `,
  }) as FlattenInterpolation<ThemeProps<DefaultTheme>>,
  s3: Platform.select({
    ios: css`
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    `,
    android: css`
      elevation: 6;
    `,
  }) as FlattenInterpolation<ThemeProps<DefaultTheme>>,
};

export default shadows;
