import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { ButtonSize } from '.';
import Frame from '../Frame';

interface ButtonProps {
  size: ButtonSize;
  customPadding?: number;
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.6),
})``;

export const ButtonFrame = styled(Frame)<ButtonProps>`
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 8px;
    `}

  ${({ customPadding }) =>
    !!customPadding &&
    css`
      padding: ${customPadding}px;
    `}
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
})`
  align-self: center;
  position: absolute;
`;

export const TextContainer = styled.View<{ loading?: boolean }>`
  align-items: center;
  flex-direction: row;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;

export const ButtonText = styled.Text<ButtonProps>`
  ${({ theme, size }) =>
    size === 'regular'
      ? theme.typography.button
      : theme.typography.buttonSmall};
`;
