import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';
import { Color, GradientColor } from '../../styles/colors';
import { FrameContainer, LinearGradientFrameContainer } from './styles';

export interface FrameContainerProps
  extends Pick<LinearGradientProps, 'testID'> {
  outline?: boolean;
  rounded?: boolean;
  dashed?: boolean;
  fillColor?: Color;
  borderColor?: Color;
}

export interface FrameProps extends FrameContainerProps {
  children?: React.ReactNode;
  gradient?: GradientColor;
  style?: StyleProp<ViewStyle>;
}

function Frame({ children, gradient, ...rest }: FrameProps) {
  const { colors } = useTheme();

  if (gradient) {
    return (
      <LinearGradientFrameContainer
        {...rest}
        colors={[
          colors.gradients[gradient].start,
          colors.gradients[gradient].end,
        ]}
      >
        {children}
      </LinearGradientFrameContainer>
    );
  }

  return <FrameContainer {...rest}>{children}</FrameContainer>;
}

export default Frame;
