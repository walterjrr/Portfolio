import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/style';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${(theme) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.ltemedium} {
      height: 100vh;

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacing.big}
        display: flex;
        justify-content: center;
      }
    }
  `};
`;

export const MenuContainer = styled.div`
  ${(theme) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.ltemedium} {
      display: block;
      text-align: center;
      /* padding: ${theme.spacing.big} 0; */
    }
  `};
`;

export const Button = styled.div`
  ${(theme) => css``};
`;
