import P from 'prop-types';
import * as Styled from './style';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ Link = [], LogoData = {} }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...LogoData} />
          <NavLinks Link={Link} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  LogoData: P.shape(LogoLink.propTypes).isRequired,
};
