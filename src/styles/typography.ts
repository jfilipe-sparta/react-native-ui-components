import type { FlattenInterpolation } from 'styled-components';
import { css, DefaultTheme, ThemeProps } from 'styled-components/native';

type TypographyValue = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface TypographyProps {
  display: TypographyValue;
  title1: TypographyValue;
  title2: TypographyValue;
  title3: TypographyValue;
  title4: TypographyValue;
  body: TypographyValue;
  bodyB: TypographyValue;
  body2: TypographyValue;
  body2B: TypographyValue;
  badge: TypographyValue;
  inputLabel: TypographyValue;
  inputValue: TypographyValue;
  inputCaption: TypographyValue;
  button: TypographyValue;
  buttonSmall: TypographyValue;
  price: TypographyValue;
  oldPrice: TypographyValue;
}

const typography: TypographyProps = {
  display: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 20px;
    line-height: 26px;
  `,
  title1: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 18px;
    line-height: 22px;
  `,
  title2: css`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 16px;
    line-height: 24px;
  `,
  title3: css`
    color: ${({ theme }) => theme.colors.grayXDark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 14px;
    line-height: 21px;
  `,
  title4: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 14px;
    line-height: 21px;
  `,
  body: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
    line-height: 24px;
  `,
  bodyB: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 16px;
    line-height: 24px;
  `,
  body2: css`
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    line-height: 14px;
  `,
  body2B: css`
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 12px;
    line-height: 14px;
  `,
  badge: css`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 12px;
    line-height: 15px;
  `,
  inputLabel: css`
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    line-height: 21px;
  `,
  inputValue: css`
    color: ${({ theme }) => theme.colors.grayXDark};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
  `,
  inputCaption: css`
    color: ${({ theme }) => theme.colors.grayXDark};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    line-height: 18px;
  `,
  button: css`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 16px;
    line-height: 24px;
  `,
  buttonSmall: css`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 14px;
    line-height: 21px;
  `,
  price: css`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 18px;
    line-height: 22px;
  `,
  oldPrice: css`
    color: ${({ theme }) => theme.colors.grayLight};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: line-through;
  `,
};

export default typography;
