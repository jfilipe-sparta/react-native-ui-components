import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from 'styled-components/native';

import { Color } from '../../styles/colors';
import { FrameContainerProps } from '.';

export const FrameContainer = styled.View<FrameContainerProps>`
  align-items: center;
  background: ${({ theme, fillColor }) =>
    fillColor ? theme.colors[fillColor] : theme.colors.primary};
  border-color: ${({ theme, borderColor, fillColor }) =>
    borderColor || fillColor
      ? theme.colors[(borderColor || fillColor) as Color]
      : 'transparent'};
  border-radius: ${({ theme }) => theme.radius.medium}px;
  border-width: 1px;
  justify-content: center;
  padding: 10px;

  ${({ outline }) =>
    !!outline &&
    css`
      background: transparent;
    `};

  ${({ theme, rounded }) =>
    !!rounded &&
    css`
      border-radius: ${theme.radius.rounded}px;
    `};

  ${({ dashed }) =>
    !!dashed &&
    css`
      border-style: dashed;
    `};
`;

export const LinearGradientFrameContainer = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})<FrameContainerProps>`
  align-items: center;
  background: ${({ theme, fillColor }) =>
    fillColor ? theme.colors[fillColor] : theme.colors.primary};
  border-color: ${({ theme, borderColor }) =>
    borderColor ? theme.colors[borderColor] : 'transparent'};
  border-radius: ${({ theme }) => theme.radius.medium}px;
  border-width: 1px;
  justify-content: center;
  padding: 10px;

  ${({ outline }) =>
    !!outline &&
    css`
      background: transparent;
    `};

  ${({ theme, rounded }) =>
    !!rounded &&
    css`
      border-radius: ${theme.radius.rounded}px;
    `};

  ${({ dashed }) =>
    !!dashed &&
    css`
      border-style: dashed;
    `};
`;
