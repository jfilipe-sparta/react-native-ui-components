import React, { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Color } from '../../styles/colors';
import {
  ButtonFrame,
  ButtonText,
  Container,
  Loading,
  TextContainer,
} from './styles';

export type ButtonSize = 'regular' | 'small';

interface ButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'cta';
  size?: ButtonSize;
  destructive?: boolean;
  loading?: boolean;
  customPadding?: number;
  children?: React.ReactNode;
  content?: React.ReactNode;
}

function Button({
  type = 'primary',
  destructive,
  disabled,
  size = 'regular',
  children,
  content,
  loading,
  customPadding,
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();

  const backgroundColor = useMemo(() => {
    const destructiveColors = {
      primary: 'error',
      secondary: 'errorLight',
      cta: 'errorDark',
    };

    const disabledColors = {
      primary: 'grayLight',
      secondary: 'grayXLight',
      cta: 'grayXLight',
    };

    if (disabled || loading) {
      return disabledColors[type] as Color;
    }

    if (destructive) {
      return destructiveColors[type] as Color;
    }

    return type;
  }, [disabled, loading, destructive, type]);

  const textColor = useMemo(() => {
    const primaryColors = {
      primary: colors.white,
      secondary: colors.primaryDark,
      cta: colors.primaryDark,
    };

    const destructiveColors = {
      primary: colors.white,
      secondary: colors.errorDark,
      cta: colors.white,
    };

    const disabledColors = {
      primary: colors.white,
      secondary: colors.grayLight,
      cta: colors.gray,
    };

    if (disabled || loading) {
      return disabledColors[type];
    }

    if (destructive) {
      return destructiveColors[type];
    }

    return primaryColors[type];
  }, [
    colors.errorDark,
    colors.gray,
    colors.grayLight,
    colors.primaryDark,
    colors.white,
    destructive,
    disabled,
    loading,
    type,
  ]);

  return (
    <Container disabled={disabled || loading} {...rest}>
      <ButtonFrame
        size={size}
        fillColor={backgroundColor}
        customPadding={customPadding}
      >
        {loading && <Loading color={textColor} />}

        {content || (
          <TextContainer loading={loading}>
            <ButtonText
              size={size}
              style={{
                color: textColor,
              }}
            >
              {children}
            </ButtonText>
          </TextContainer>
        )}
      </ButtonFrame>
    </Container>
  );
}

export default Button;
