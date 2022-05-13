import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Koulen&family=Ubuntu:ital,wght@0,700;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 1.6rem
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.title};
  }
`;
