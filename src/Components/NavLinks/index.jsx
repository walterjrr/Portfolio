import P from 'prop-types';
import * as Styled from './style';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ Links = [] }) => {
  return (
    <Styled.Container>
      {Links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  Links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      Link: P.string.isRequired,
      newTab: P.bool,
    }),
  ).isRequired,
};
