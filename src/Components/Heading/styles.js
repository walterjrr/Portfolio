import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.big};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1.attrs({ as: 'div' })`
  ${({ theme, light, size, uppercase }) => css`
    colors: ${light ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
